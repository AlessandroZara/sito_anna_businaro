const bookingForm = document.getElementById('booking-form');
const prescriptionForm = document.getElementById('prescription-form');
const bookingFeedback = document.getElementById('booking-feedback');
const prescriptionFeedback = document.getElementById('prescription-feedback');
const bookingSummary = document.getElementById('booking-summary');
const calendarGrid = document.getElementById('calendar-grid');
const slotsGrid = document.getElementById('slots-grid');
const stepIndicators = [...document.querySelectorAll('[data-step-indicator]')];
const steps = [...document.querySelectorAll('.booking-step')];
const nextButtons = [...document.querySelectorAll('[data-next-step]')];
const prevButtons = [...document.querySelectorAll('[data-prev-step]')];

const state = {
  step: 1,
  date: null,
  time: null,
  days: []
};

const weekdays = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
const slotConfig = {
  1: { start: '09:00', end: '18:00' },
  2: { start: '09:00', end: '18:00' },
  3: { start: '12:00', end: '16:00' },
  4: { start: '09:00', end: '18:00' },
  5: { start: '09:00', end: '18:00' }
};

function pad(n) {
  return String(n).padStart(2, '0');
}

function toDateInput(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function formatDate(date) {
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;
}

function addMinutes(time, minutes) {
  const [h, m] = time.split(':').map(Number);
  const d = new Date();
  d.setHours(h, m + minutes, 0, 0);
  return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function parseTime(time) {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

function generateDates() {
  const dates = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 1; i <= 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const day = date.getDay();
    if (day >= 1 && day <= 5) dates.push(date);
  }

  state.days = dates;
}

function renderCalendar() {
  calendarGrid.innerHTML = '';

  state.days.forEach((date) => {
    const day = date.getDay();
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'calendar-day';
    btn.dataset.date = toDateInput(date);
    btn.innerHTML = `<strong>${weekdays[day]}</strong><br><span>${formatDate(date)}</span>`;

    if (state.date === btn.dataset.date) btn.classList.add('is-selected');

    btn.addEventListener('click', () => {
      state.date = btn.dataset.date;
      state.time = null;
      renderCalendar();
      renderSlots();
      updateSummary();
    });

    calendarGrid.appendChild(btn);
  });
}

function getSlotsForDate(dateValue) {
  if (!dateValue) return [];
  const date = new Date(dateValue + 'T00:00:00');
  const day = date.getDay();
  const cfg = slotConfig[day];
  if (!cfg) return [];

  const slots = [];
  let current = cfg.start;
  const end = parseTime(cfg.end);

  while (parseTime(current) <= end) {
    slots.push(current);
    current = addMinutes(current, 30);
    if (parseTime(current) > end) break;
  }

  return slots;
}

function renderSlots() {
  slotsGrid.innerHTML = '';
  const slots = getSlotsForDate(state.date);

  if (!slots.length) {
    slotsGrid.innerHTML = '<p class="step-note full-width">Seleziona un giorno per vedere gli orari disponibili.</p>';
    return;
  }

  slots.forEach((slot) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'slot-btn';
    btn.dataset.time = slot;
    btn.textContent = slot;

    if (state.time === slot) btn.classList.add('is-selected');

    btn.addEventListener('click', () => {
      state.time = slot;
      renderSlots();
      updateSummary();
    });

    slotsGrid.appendChild(btn);
  });
}

function updateStepView() {
  steps.forEach((step) => {
    step.classList.toggle('is-active', Number(step.dataset.step) === state.step);
  });

  stepIndicators.forEach((el) => {
    el.classList.toggle('is-active', Number(el.dataset.stepIndicator) === state.step);
  });
}

function updateSummary() {
  if (!bookingForm) return;

  const formData = new FormData(bookingForm);
  const name = `${formData.get('name') || ''} ${formData.get('surname') || ''}`.trim();
  const fiscalCode = formData.get('fiscalCode') || '-';
  const reason = formData.get('reason') || '-';
  const dateLabel = state.date ? formatDate(new Date(state.date + 'T00:00:00')) : '-';
  const timeLabel = state.time || '-';

  bookingSummary.innerHTML = `
    <div class="summary-row"><strong>Paziente</strong><span>${name || '-'}</span></div>
    <div class="summary-row"><strong>Codice fiscale</strong><span>${fiscalCode}</span></div>
    <div class="summary-row"><strong>Motivo</strong><span>${reason}</span></div>
    <div class="summary-row"><strong>Data</strong><span>${dateLabel}</span></div>
    <div class="summary-row"><strong>Orario</strong><span>${timeLabel}</span></div>
  `;
}

nextButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (state.step === 1) {
      if (!bookingForm.reportValidity()) return;
      state.step = 2;
    } else if (state.step === 2) {
      if (!state.date) {
        bookingFeedback.textContent = 'Seleziona un giorno disponibile per continuare.';
        return;
      }
      bookingFeedback.textContent = '';
      state.step = 3;
    } else if (state.step === 3) {
      if (!state.time) {
        bookingFeedback.textContent = 'Seleziona un orario disponibile per continuare.';
        return;
      }
      bookingFeedback.textContent = '';
      state.step = 4;
      updateSummary();
    }

    updateStepView();
  });
});

prevButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    state.step = Math.max(1, state.step - 1);
    bookingFeedback.textContent = '';
    updateStepView();
  });
});

bookingForm?.addEventListener('input', updateSummary);

bookingForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(bookingForm);
  const payload = {
    type: 'visita',
    name: formData.get('name'),
    surname: formData.get('surname'),
    fiscalCode: formData.get('fiscalCode'),
    reason: formData.get('reason'),
    date: state.date,
    time: state.time,
    createdAt: new Date().toISOString()
  };

  localStorage.setItem('mg_booking_request', JSON.stringify(payload));
  bookingFeedback.textContent = 'Richiesta visita salvata nella demo. Nel sito reale verrà inviata tramite il sistema di prenotazione.';
  bookingForm.reset();
  state.step = 1;
  state.date = null;
  state.time = null;
  updateStepView();
  renderCalendar();
  renderSlots();
  updateSummary();
});

prescriptionForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(prescriptionForm);
  const payload = {
    type: 'farmaco',
    name: formData.get('pname'),
    surname: formData.get('psurname'),
    fiscalCode: formData.get('pfiscalCode'),
    contact: formData.get('contact'),
    medicine: formData.get('medicine'),
    prescriptionType: formData.get('prescriptionType') || 'Ripetibile',
    notes: formData.get('notes'),
    createdAt: new Date().toISOString()
  };

  localStorage.setItem('mg_prescription_request', JSON.stringify(payload));
  prescriptionFeedback.textContent = 'Richiesta farmaco salvata nella demo. Nel sito reale potrà diventare un modulo dedicato oppure un contatto alternativo.';
  prescriptionForm.reset();
});

generateDates();
renderCalendar();
renderSlots();
updateSummary();
updateStepView();