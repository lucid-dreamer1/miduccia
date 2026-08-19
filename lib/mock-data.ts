import { MenuItem, Table, Reservation } from "./types";

export const mockMenuItems: MenuItem[] = [
  // Antipasti
  {
    id: "1",
    name: "Frittura di Paranza",
    description:
      "Misto di piccoli pesci del golfo, fritti in pastella leggera e croccante. Serviti con limone di Sorrento.",
    price: 12.0,
    category: "antipasti",
    available: true,
  },
  {
    id: "2",
    name: "Mozzarella di Bufala DOP",
    description:
      "Mozzarella freschissima di bufala campana, servita con pomodorini del Vesuvio e basilico.",
    price: 10.0,
    category: "antipasti",
    available: true,
  },
  {
    id: "3",
    name: "Bruschetta Campana",
    description:
      "Pane casereccio abbrustolito con pomodorini datterini, aglio, origano e olio extravergine.",
    price: 7.0,
    category: "antipasti",
    available: true,
  },
  {
    id: "4",
    name: "Polpo alla Luciana",
    description:
      "Polpo verace cotto lentamente con olive di Gaeta, capperi e pomodorini.",
    price: 14.0,
    category: "antipasti",
    available: true,
  },

  // Primi
  {
    id: "5",
    name: "Scialatielli ai Frutti di Mare",
    description:
      "Pasta fresca fatta in casa con cozze, vongole, gamberi e calamari in salsa di pomodorino fresco.",
    price: 16.0,
    category: "primi",
    available: true,
  },
  {
    id: "6",
    name: "Pasta e Fagioli",
    description:
      "La ricetta della nonna: pasta mista con fagioli borlotti, cotiche e un filo d'olio a crudo.",
    price: 10.0,
    category: "primi",
    available: true,
  },
  {
    id: "7",
    name: "Paccheri alla Genovese",
    description:
      "Paccheri di Gragnano con il ragù di cipolle cotto per ore, fino a diventare una crema dolce e avvolgente.",
    price: 14.0,
    category: "primi",
    available: true,
  },
  {
    id: "8",
    name: "Risotto al Limone di Amalfi",
    description:
      "Risotto mantecato con crema di limoni costieri, gambero rosso e zest di limone.",
    price: 15.0,
    category: "primi",
    available: true,
  },

  // Secondi
  {
    id: "9",
    name: "Braciola Napoletana",
    description:
      "Involtino di carne con uvetta, pinoli e prezzemolo, cotto nel sugo della domenica.",
    price: 16.0,
    category: "secondi",
    available: true,
  },
  {
    id: "10",
    name: "Baccalà alla Casertana",
    description:
      "Baccalà in umido con olive nere di Caiazzo, capperi, pomodorini e patate.",
    price: 15.0,
    category: "secondi",
    available: true,
  },
  {
    id: "11",
    name: "Coniglio all'Ischitana",
    description:
      "Coniglio cotto in casseruola con pomodorini, aglio, peperoncino e le erbe dell'isola.",
    price: 17.0,
    category: "secondi",
    available: true,
  },
  {
    id: "12",
    name: "Spigola al Forno",
    description:
      "Spigola fresca al forno con patate, olive taggiasche e pomodorini confit.",
    price: 19.0,
    category: "secondi",
    available: true,
  },

  // Dolci
  {
    id: "13",
    name: "Pastiera Napoletana",
    description:
      "Il dolce della tradizione: grano cotto, ricotta, canditi e acqua di fiori d'arancio.",
    price: 7.0,
    category: "dolci",
    available: true,
  },
  {
    id: "14",
    name: "Babà al Rum",
    description:
      "Soffice babà artigianale, imbevuto nel rum ambrato e servito con panna montata.",
    price: 6.0,
    category: "dolci",
    available: true,
  },
  {
    id: "15",
    name: "Delizia al Limone",
    description:
      "Soffice pan di spagna farcito con crema al limone di Sorrento e glassa al limoncello.",
    price: 8.0,
    category: "dolci",
    available: true,
  },
  {
    id: "16",
    name: "Torta Caprese",
    description:
      "Torta al cioccolato fondente e mandorle, senza farina. Ricetta originale di Capri.",
    price: 7.0,
    category: "dolci",
    available: true,
  },
];

// Clean slate: 0 mock tables and 0 mock reservations
export const mockTables: Table[] = [];
export const mockReservationsData: Reservation[] = [];
