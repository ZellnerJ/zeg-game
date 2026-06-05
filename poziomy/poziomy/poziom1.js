const area = document.querySelector(".area");
const ctx = area.getContext("2d");

const wylaczPotwory = localStorage.getItem("wylaczPotwory") === "true";
const wylaczPulapki = localStorage.getItem("wylaczPulapki") === "true";
const wylaczHP = localStorage.getItem("wylaczHP") === "true";
const wylaczStamine = localStorage.getItem("wylaczStamine") === "true";


const size = 45;

area.width = 675;
area.height = 675;

// OBRAZKI
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


// MAPA
const plotno = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const zagrozenia = [
  { row: 3, col: 5, typ: "pulapka"  },
  { row: 7, col: 9, typ: "pulapka" },
  { row: 12, col: 3, typ: "pulapka" },
  {
    row: 7,
    col: 5,
    typ: "ruchomy",
    startCol: 2, 
    endCol: 5,
    dir: -1,
    speed: 0.025
  }
];

const zagadki = [
  {row:13,col:1, pytanie: "Co zwraca wyrażenie: 5 % 2?",odp: "1"},
  {row:13,col:9,pytanie:"20+20+20+7=",odp:"67"},
  {row:3,col:1,pytanie:"Jak nazywa sie typ liczbowy calkowity", odp:"int"}
]

const bonusy = [
  { row: 5, col: 3, typ: "hp" },
  { row: 9, col: 7, typ: "stamina" },
  { row: 8, col: 1, typ: "hp" },
  { row: 13, col: 8, typ: "stamina" },
  { row: 1, col: 12, typ: "hp" },
  { row: 1, col: 5, typ: "stamina" }
];

// RUCH POTWORÓW
function updateMonsters() {
  zagrozenia.forEach(m => {
    if (m.typ === "ruchomy") {
      m.col += m.dir * m.speed;

      if (m.col >= m.endCol) {
        m.col = m.endCol;
        m.dir = -1; // lewo
      } else if (m.col <= m.startCol) {
        m.col = m.startCol;
        m.dir = 1; // prawo
      }
    }
   
  });
}

function rysuj() {
 // ctx.clearRect(0, 0, area.width, area.height);

  // Rysowanie mapy
  for (let row = 0; row < plotno.length; row++) {
    for (let col = 0; col < plotno[row].length; col++) {

      ctx.fillStyle = "black";
      ctx.fillRect(col * size, row * size + 40, size, size);

      if (plotno[row][col] === 1) {
        ctx.drawImage(bloczek, col * size, row * size, size, size);
      }

      ctx.strokeStyle = "rgba(255,255,255,0.2)";
      ctx.strokeRect(col * size, row * size + 40, size, size);
    }
  }

  // Zagadki
  zagadki.forEach(z => {
    ctx.drawImage(zagadka, z.col * size, z.row * size, size, size);
  });

  // Potwory i pułapki
  zagrozenia.forEach(z => {

    if (z.typ === "ruchomy" && !wylaczPotwory) {
      const monsterSize = size * 2;

      ctx.drawImage(
        potwor,
        z.col * size - monsterSize / 2 + (size / 2),
        z.row * size - monsterSize / 2 + (size / 2),
        monsterSize,
        monsterSize
      );
    }

    else if (z.typ === "pulapka" && !wylaczPulapki) {
      ctx.drawImage(
        pulapka,
        z.col * size,
        z.row * size,
        size,
        size
      );
    }

  });

  // Bonusy
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

function loop() {
  console.log("dziala");

  updateMonsters();

  rysuj();

  requestAnimationFrame(loop);
}

// START
let loaded = 0;

function start() {
  loaded++;

  if (loaded === 4) {
    loop();
  }
}

bloczek.onload = start;
potwor.onload = start;
pulapka.onload = start;
zagadka.onload = start;