# Dott.ssa Anna Businaro — Sito web istituzionale

Sito web realizzato per la **Dott.ssa Anna Businaro**, medico di medicina generale e medico estetico.  
Il progetto presenta in modo chiaro le due aree di attività, i servizi, i contatti, le sedi e il percorso di prenotazione.

---

## Obiettivo del progetto

L’obiettivo del sito è fornire una presenza online professionale, elegante e semplice da consultare, con:

- una homepage introduttiva;
- una sezione dedicata alla medicina generale;
- una sezione dedicata alla medicina estetica;
- una pagina contatti con sedi e form;
- un menu chiaro e una navigazione immediata;
- un footer completo con link utili e riferimenti istituzionali.

Il design è stato pensato per essere sobrio, moderno e facilmente leggibile su desktop e mobile.

---

## Struttura del sito

### Pagine principali
- `index.html` — homepage
- `chi-sono.html` — presentazione della dottoressa
- `medicina-generale.html` — area medicina generale
- `medicina-estetica.html` — area medicina estetica
- `contatti.html` — contatti, sedi e form
- `prenotazioni.html` — pagina prenotazioni
- `privacy-policy.html` — privacy policy
- `cookie-policy.html` — cookie policy

### Struttura globale
Ogni pagina segue una struttura HTML semantica con:

- `header`
- `nav`
- `main`
- `section`
- `footer`

---

## Navigazione

Il menu principale contiene:

- Home
- Chi Sono
- Medicina generale
- Medicina estetica
- Contatti
- Toggle tema chiaro/scuro

Il footer contiene:

- breve presentazione dello studio;
- link alle sezioni principali;
- collegamenti social;
- link a privacy policy e cookie policy.

---

## Contenuti implementati

### Homepage
La homepage presenta:
- hero introduttiva con titolo principale;
- breve descrizione del lavoro;
- collegamenti rapidi verso medicina generale e medicina estetica;
- sezioni di supporto con informazioni sui percorsi.

### Medicina estetica
La pagina dedicata alla medicina estetica include:
- presentazione del percorso;
- tono professionale e rassicurante;
- immagine hero più ampia e ben bilanciata;
- eventuale integrazione del widget di prenotazione MioDottore.

### Contatti
La pagina contatti include:
- sede di **medicina generale**: Largo Traiano 16, 35036 Montegrotto Terme;
- sede di **medicina estetica**: Via Battaglia 71/C, Albignasego;
- due mappe Google Maps incorporate;
- form di contatto generale con select per il tipo di richiesta:
  - Informazioni
  - Richiesta ricetta
  - Marketing
  - Altro

---

## Layout e stile

Il layout è stato progettato con una logica pulita e ordinata:

- hero introduttive con testo grande e leggibile;
- sezioni a griglia per i contenuti;
- card con bordi arrotondati;
- spaziature ampie e coerenti;
- comportamento responsive su tablet e mobile.

L’impostazione grafica punta a trasmettere:
- professionalità,
- chiarezza,
- fiducia,
- eleganza visiva.

---

## Tipografia

Sono stati utilizzati questi font Google Fonts:

- **Inter** — per il testo, la UI e i contenuti leggibili;
- **Sora** — per titoli e elementi di maggiore impatto visivo.

La combinazione è stata scelta per unire:
- leggibilità moderna;
- personalità visiva;
- coerenza con un sito medico professionale.

---

## Palette colori

La palette è sobria e istituzionale, basata su tonalità fredde e neutre.

### Colori principali
- `--color-bg` → sfondo principale chiaro
- `--color-surface` → card e superfici bianche
- `--color-text` → testo principale blu/grigio scuro
- `--color-text-muted` → testo secondario
- `--color-primary` → colore di accento per CTA, link e elementi attivi

### Uso del colore
- il background resta molto pulito;
- il testo principale è scuro per garantire contrasto;
- l’accento primario viene usato per pulsanti, stati attivi e dettagli informativi;
- i moduli e le card usano superfici chiare con bordi delicati.

---

## Spaziature e design tokens

Il progetto usa una scala di spaziature definita tramite CSS custom properties in `:root`, per mantenere coerenza visiva tra sezioni, card e componenti.

Esempio di variabili usate:

- `--space-1`
- `--space-2`
- `--space-3`
- `--space-4`
- `--space-5`
- `--space-6`
- `--space-8`
- `--space-10`

Questa impostazione aiuta a:
- mantenere ritmo visivo coerente;
- semplificare le modifiche future;
- evitare valori sparsi e incoerenti nel CSS.

---

## Componenti principali

### Header
- brand con logo e nome;
- menu principale;
- bottone hamburger su mobile;
- toggle tema chiaro/scuro.

### Hero
- titolo grande;
- testo introduttivo;
- CTA principali;
- immagine di impatto.

### Card e sezioni
- card per servizi e contenuti secondari;
- blocchi informativi con stile coerente;
- layout responsive a una o due colonne.

### Form
- campi con label reali;
- select per il tipo di richiesta;
- textarea per il messaggio;
- checkbox privacy;
- stato feedback tramite JavaScript.

### Mappe
- integrazione Google Maps via iframe;
- ogni mappa ha un titolo accessibile;
- link diretto per aprire la posizione in Google Maps.

---

## Accessibilità

Il progetto è stato impostato con attenzione all’accessibilità:

- uso di HTML semantico;
- `label` associati correttamente ai campi del form;
- `aria-label` dove utile;
- `aria-current` nel menu sulla pagina attiva;
- `title` sugli iframe delle mappe;
- `skip link` per saltare direttamente al contenuto.

---

## File principali

### CSS
- `global.css` — stile globale, menu, footer, variabili, layout base
- `home.css` — stile homepage
- `contatti.css` — stile pagina contatti

### JavaScript
- `global.js` — interazioni globali, menu mobile, tema
- `contatti.js` — validazione base del form contatti

---

## Note tecniche

- Il sito è pensato per essere responsive.
- Le sezioni sono modulari e facili da riutilizzare.
- Il widget di prenotazione MioDottore può essere testato meglio su dominio online rispetto al locale.
- La pagina contatti usa Google Maps embed standard.
- Il form è predisposto lato front-end; per inviare davvero le richieste serve un backend o un sistema di gestione form.

---

## Stato del progetto

Il sito è in sviluppo iterativo, con focus su:
- qualità visuale;
- struttura ordinata;
- chiarezza dei contenuti;
- compatibilità mobile;
- professionalità dell’immagine complessiva.

---

## Autore

Progetto realizzato per la **Dott.ssa Anna Businaro**.# sito_anna_businaro
