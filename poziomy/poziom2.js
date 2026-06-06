const area = document.querySelector(".area");
const ctx = area.getContext("2d");

const wylaczHP = localStorage.getItem("wylaczHP") === "true";
const wylaczStamine = localStorage.getItem("wylaczStamine") === "true";

const bloczek = new Image();
bloczek.src = "bloczek.jpg";

const potwor = new Image();
potwor.src = "potwor.png";

const pulapka = new Image();
pulapka.src = "pulapka.png";

const zagadka = new Image();
zagadka.src = "zagadka.png";

const serce = new Image();
serce.src = "serce.png";

const piorun = new Image();
piorun.src = "stamina.png";


const size = 40; 

area.width = 20 * size; 
area.height = 20 * size;

const plotno = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0],
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const zagrozenia = [
  { row: 3, col: 5, typ: "pulapka" },
  { row: 6, col: 9, typ: "pulapka" },
  { row: 12, col: 3, typ: "pulapka" },
  {
    row: 7,         // aktualna pozycja
    col: 3,
    typ: "gora-dol",
    startRow: 4,    
    endRow: 7,      // pozycja startowa
    dir: -1,        // -1 oznacza ruch w górę 
    speed: 0.025
  },
  {
    row: 18,
    col: 18,
    typ: "gora-dol",
    startRow: 15,
    endRow:18,
    dir: -1,
    speed: 0.025
  },
  {row:16, col:10,typ:"pulapka"},
   {row:12, col:12,typ:"pulapka"},
   {
    row:8,col:12,typ:"prawo-lewo",
    startCol:9,
    endCol:12,
    dir: -1,
    speed: 0.025
   },
   {row:1,col:18,typ:"pulapka"}
];
const zagadki = [
  {row:13,col:1, pytanie: "Jak nazywa się pojedynczy znak tekstu w języku C++",odp: "char"},
  {row:18,col:9,pytanie:"Wynik działania 10 / 3 w języku programowania (przy liczbach całkowitych) to:",odp:"3"},
  {row:3,col:15,pytanie:"Jaki operator logiczny zwraca prawdę tylko wtedy, gdy oba argumenty są prawdziwe?", odp:"&&"}
]

const bonusy = [
  { row: 3, col: 1, typ: "hp" },
  { row: 9, col: 7, typ: "stamina" },
  { row: 8, col: 1, typ: "hp" },
  { row: 18, col: 7, typ: "stamina" },
  { row: 1, col: 13, typ: "hp" },
  { row: 1, col: 5, typ: "stamina" },
  { row: 18, col: 1, typ: "hp" },
  { row: 13, col: 9, typ: "stamina" },
  { row: 8, col: 16, typ: "stamina" }
];


function updateMonsters() {
  zagrozenia.forEach(m => {
    if (m.typ === "gora-dol") {
      m.row += m.dir * m.speed;

    
      if (m.row >= m.endRow) {
        m.row = m.endRow;
        m.dir = -1; 
      } else if (m.row <= m.startRow) {
        m.row = m.startRow;
        m.dir = 1;  
      }
    }
  else if (m.typ == "prawo-lewo") {
      m.col += m.dir * m.speed;

      if (m.col >= m.endCol) {
        m.col = m.endCol;
        m.dir = -1; // w lewo
      } else if (m.col <= m.startCol) {
        m.col = m.startCol;
        m.dir = 1;  // w prawo
      }
    }
  });
}

function rysuj() {

  ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
  ctx.lineWidth = 1;

  // MAPA
  for (let row = 0; row < plotno.length; row++) {
    for (let col = 0; col < plotno[row].length; col++) {
      ctx.fillStyle = "black";
      ctx.fillRect(col * size, row * size, size, size);

      if (plotno[row][col] == 1) {
        ctx.drawImage(bloczek, col * size, row * size, size, size);
      }

      ctx.strokeRect(col * size, row * size, size, size);
    }
  }

  // ZAGADKI (zawsze widoczne)
  zagadki.forEach(z => {
    ctx.drawImage(zagadka, z.col * size, z.row * size, size, size);
  });

  // ZAGROŻENIA
  zagrozenia.forEach(m => {

    // PUŁAPKI
    if (m.typ === "pulapka") {
      ctx.drawImage(
        pulapka,
        m.col * size,
        m.row * size,
        size,
        size
      );
    }

    // POTWORY (ruchome)
    else if (m.typ !== "pulapka") {
      const monsterSize = size * 1.55;

      ctx.drawImage(
        potwor,
        m.col * size - monsterSize / 2 + size / 2,
        m.row * size - monsterSize / 2 + size / 2,
        monsterSize,
        monsterSize
      );
    }
  });

  // BONUSY
  bonusy.forEach(b => {

    if (b.typ === "hp" && !wylaczHP) {
      ctx.drawImage(
        serce,
        b.col * size,
        b.row * size,
        size,
        size
      );
    }

    if (b.typ === "stamina" && !wylaczStamine) {
      ctx.drawImage(
        piorun,
        b.col * size,
        b.row * size,
        size,
        size
      );
    }

  });
}

bloczek.onload = function() {
  rysuj();
};