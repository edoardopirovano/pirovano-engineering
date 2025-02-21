import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  it: {
    translation: {
      nav: {
        home: "HOME",
        activities: "ATTIVITÀ",
        about: "CHI SIAMO",
        contact: "CONTATTI",
      },
      hero: {
        title: "INGEGNERIA MECCANICA E DESIGN",
        subtitle:
          "Società di servizi di Ingegneria Meccanica e Industrial Design.",
      },
      activities: {
        title: "I NOSTRI SERVIZI",
        subtitle: "Progettazione e sviluppo, sotto ogni aspetto.",
        mechanical: {
          title: "PROGETTAZIONE MECCANICA",
          description:
            "Progettazione meccanica di macchine e componenti industriali.",
          detailedDescription:
            "Pirovano Engineering Srl offre servizi di progettazione meccanica per diversi settori produttivi tra i quali l'Automotive, la Telecomunicazione e l'Alimentare. La progettazione meccanica viene sviluppata su specifica del Cliente. Il progetto può essere elaborato per l'ottenimento di singoli parti o per sistemi complessi.",
          skills: [
            "Progettazione di macchine automatiche, automatismi e carpenteria",
            "Studi di fattibilità",
            "Sviluppo disegni di parti meccaniche su studi del cliente",
            "Esecuzione di distinte basi, istruzioni di montaggio, manualistica e parti di ricambio",
            "Verifiche dimensionali, calcoli strutturali e termici ad elementi finiti",
            "Impiantistica e layout",
            "Ingegnerizzazione prodotto",
            "Progetti completi di riduzione di costi di produzione",
          ],
        },
        design: {
          title: "INDUSTRIAL DESIGN",
          description: "Design industriale e sviluppo prodotto.",
          detailedDescription:
            "La Pirovano Engineering Srl offre servizi di design per diversi settori produttivi tra i quali l'automotive e la telecomunicazione. Le soluzioni offerte sono attente a fornire il giusto equilibrio tra estetica e funzionalità con un occhio di riguardo ai costi.",
          skills: [
            "Analisi e studio del prodotto",
            "Proposte estetiche (Concept)",
            "Studi di fattibilità",
            "Presentazione dei concept mediante rendering",
            "Realizzazione mockup mediante partners",
            "Studio e proposte di materiali, finiture e metodi realizzativi",
            "Pre-ingegnerizzazione dei concept",
            "Supporto al cliente durante la fase di sviluppo prodotto",
            "Re-design di prodotti o macchinari già esistenti",
            "Rendering fotorealistici",
            "Studio e proposte di Packaging",
            "Grafica e loghi",
          ],
        },
        consulting: {
          title: "CONSULENZA",
          description: "Consulenza tecnica e project management.",
          detailedDescription:
            'La capacità di "connettersi" alle aziende è d\'importanza fondamentale per la Pirovano Engineering Srl, per questo fornisce un servizio di consulenza personalizzato anche presso gli uffici dei suoi clienti.',
          skills: [
            "Cessione di personale tecnico per periodi di durata flessibile",
            "Cessione di personale per projet management",
            "Cessione di personale per attività di design e sviluppo prodotto",
          ],
        },
      },
      about: {
        title: "CHI SIAMO",
        description:
          "Pirovano Engineering è una società di progettazione meccanica presente sul mercato da più di 35 anni.",
        text1:
          "Lo studio è da sempre attento a rispondere alle più esigenti richieste dei clienti.",
        text2:
          "Pirovano Engineering guarda infatti con interesse alle tecnologie e ai metodi di progettazione più innovativi.",
        text3:
          "Nel tempo, la società ha ampliato la sua offerta di servizi affiancando alla progettazione meccanica altre due divisioni: quella di project management e quella di design del prodotto.",
        text4:
          "In tal modo, Pirovano Engineering è in grado di fornire un supporto sempre più completo ai suoi clienti.",
      },
      contact: {
        title: "CONTATTI",
        address: "Edificiosedici - Viale Sarca 336/F, 20126 Milano",
        phone: "+39 02 8688 2004",
        email: "p.beretta@piroeng.it",
      },
      contactUs: {
        email: "Email",
        message: "Message",
        submit: "Send",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "HOME",
        activities: "ACTIVITIES",
        about: "ABOUT US",
        contact: "CONTACT",
      },
      hero: {
        title: "MECHANICAL ENGINEERING AND DESIGN",
        subtitle:
          "Mechanical Engineering and Industrial Design services company.",
      },
      activities: {
        title: "OUR SERVICES",
        subtitle: "Design and development, under every aspect.",
        mechanical: {
          title: "MECHANICAL DESIGN",
          description:
            "Mechanical design of industrial machines and components.",
          detailedDescription:
            "Pirovano Engineering offers mechanical design services for various production fields including the Automotive, Telecommunication and food industries. Mechanical design is developed according to the customer's specifications. Projects can be developed ranging from single parts to complex systems.",
          skills: [
            "Mechanical design for machinery, automation and carpentry",
            "Base Engineering",
            "Mechanical detail engineering for production drawings",
            "Bills of materials, assembly instructions, manuals and spare parts",
            "Dimensional checks, FEM and thermal analysis",
            "Plant engineering and layout",
            "Product engineering",
            "Cost reduction for existing machinery or products",
          ],
        },
        design: {
          title: "INDUSTRIAL DESIGN",
          description: "Industrial design and product development.",
          detailedDescription:
            "Pirovano Engineering Srl offers design services for various production fields including automotive and telecommunications. The solutions are carefully tailored to provide the right balance between aesthetics, functionality and production cost.",
          skills: [
            "Product analysis and studies",
            "Aesthetic Proposals (Concept)",
            "Feasibility studies",
            "Product concept presentation by rendering",
            "Mockups creation",
            "Study and proposals about materials, finishes and construction methods",
            "Concept pre-engineering",
            "Customer support during product development",
            "Re-design of existing products or machinery",
            "Photorealistic renderings",
            "Primary and secondary packaging studies",
            "Graphics and logo design",
          ],
        },
        consulting: {
          title: "CONSULTING",
          description: "Technical consulting and project management.",
          detailedDescription:
            "Integration with the customer's technical organization is of fundamental importance for Pirovano Engineering, which is why we also provide a personalized consulting service at the customer's headquarters or production plant.",
          skills: [
            "Variable duration technical staff rental",
            "Staff rental for project management",
            "Staff rental for design and product development activities",
          ],
        },
      },
      about: {
        title: "ABOUT US",
        description:
          "Pirovano Engineering is a mechanical design company that has been in the market for over 35 years.",
        text1:
          "The studio has always been attentive to responding to the most demanding customer requests.",
        text2:
          "Pirovano Engineering looks with interest at the most innovative technologies and design methods.",
        text3:
          "Over time, the company has expanded its service offering by adding two divisions alongside mechanical design: project management and product design.",
        text4:
          "In this way, Pirovano Engineering is able to provide increasingly complete support to its customers.",
      },
      contact: {
        title: "CONTACT",
        address: "Edificiosedici - Viale Sarca 336/F, 20126 Milan",
        phone: "+39 02 8688 2004",
        email: "p.beretta@piroeng.it",
      },
      contactUs: {
        email: "Email",
        message: "Messaggio",
        submit: "Invia",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "it",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
