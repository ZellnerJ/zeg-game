const area = document.querySelector(".area");
const ctx = area.getContext("2d");

const wylaczPotwory = localStorage.getItem("wylaczPotwory") === "true";
const wylaczPulapki = localStorage.getItem("wylaczPulapki") === "true";
const wylaczHP = localStorage.getItem("wylaczHP") === "true";
const wylaczStamine = localStorage.getItem("wylaczStamine") === "true";

const bloczek = new Image();
bloczek.src = "bloczek.jpg";

const potwor = new Image();
potwor.src="potwor.png";

const pulapka = new Image();
pulapka.src = "pulapka.png";

const zagadka = new Image();
zagadka.src = "zagadka.png";

const serce = new Image();
serce.src = "serce.png";

const piorun = new Image();
piorun.src = "stamina.png";


const size = 38;

const plotno = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

 const zagrozenia = [
  {
    row: 1,
    col: 1,
    startCol: 1,
    endCol: 5,
    typ: "prawo-lewo",
    dir: 1,
    speed: 0.025
  },
  {
    row:3,col: 1,
    startCol: 1,
    endCol: 5,
    typ: "prawo-lewo",
    dir: 1,
    speed: 0.029
  },
  {
    row:4,col:3,dir:1,typ:"gora-dol",speed:0.029,startRow:4,endRow:11
  },
  {row:3,col:9,dir:1,typ:"prawo-lewo",speed:0.029,startCol:9,endCol:13},
  {row:7,col:7,dir:1,typ:"gora-dol",speed:0.029,startRow:7,endRow:13},
  {row:3,col:15,dir:1,typ:"prawo-lewo",speed:0.03,startCol:15,endCol:21},
 {row:1,col:25,dir:1,typ:"gora-dol",speed:0.03,startRow:1,endRow:7},
 {row:1,col:33,dir:1,typ:"gora-dol",speed:0.06,startRow:1,endRow:25},
 {row:13,col:1,dir:1,typ:"prawo-lewo",speed:0.03,startCol:1,endCol:5},
 {row:13,col:13,dir:1,typ:"prawo-lewo",speed:0.07,startCol:13, endCol:21},
 {row:23,col:7,dir:1,typ:"prawo-lewo",speed:0.03,startCol:7, endCol:15},
 {row:17,col:19,dir:1,typ:"prawo-lewo",speed:0.03,startCol:19,endCol:23},
 {row:19,col:25,dir:1,typ:"gora-dol",speed:0.03,startRow:19,endRow:25},
 {row:30,col:19,dir:1,typ:"prawo-lewo",speed:0.03,startCol:19, endCol:23},
 {row:33,col:1,dir:1,typ:"prawo-lewo",speed:0.05,startCol:1,endCol:13},
 {row:33,col:7,dir:1,typ:"gora-dol",speed:0.05,startRow:27,endRow:33},
 {row:17,col:5,dir:1,typ:"gora-dol",speed:0.05,startRow:17,endRow:23},
 {row:29,col:30,dir:1,typ:"prawo-lewo",speed:0.05,startCol:27,endCol:31},
 {row:34,col:33,dir:1,typ:"gora-dol",speed:0.05,startRow:27,endRow:33},
 {row:11,col:15,typ:"pulapka"},
 {row:19,col:1,typ:"pulapka"},
 {row:25,col:1,typ:"pulapka"},
 {row:25,col:25,typ:"pulapka"},
 {row:15,col:31,typ:"pulapka"},
 {row:30,col:15,typ:"pulapka"},
 {row:19,col:10,typ:"pulapka"},
 {row:1,col:18,typ:"pulapka"},
 {row:33,col:31,typ:"pulapka"}
];
const zagadki = [
  {row:32,col:1,pytanie: "Jaki jest wynik: !!true?", odp: "true"},
  { row: 1, col: 32, pytanie: "Jak nazywamy funkcję, która wywołuje samą siebie?", odp: "rekurencyjna" },
  { row: 33, col: 23, pytanie: "Jak nazywamy zmienną dostępną w całym programie? (globalna/lokalna)", odp: "globalna"  }

]

const bonusy = [
 { row: 5, col: 3, typ: "hp" },
  { row: 9, col: 7, typ: "stamina" },
  { row: 33, col: 5, typ: "hp" },
  { row: 33, col: 15, typ: "stamina" },
  { row: 1, col: 21, typ: "hp" },
  { row: 9, col: 13, typ: "stamina" },
  { row: 17, col: 15, typ: "hp" },
  { row: 21, col: 29, typ: "stamina" },
  { row: 9, col: 29, typ: "hp" },
  { row: 15, col: 22, typ: "stamina" },
  { row: 33, col: 25, typ: "hp" },
  { row: 23, col: 18, typ: "stamina" },
  
];


function rysuj() {
  ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
  ctx.lineWidth = 1;

  for (let row = 0; row < plotno.length; row++) {
    for (let col = 0; col < plotno[row].length; col++) {
      if (plotno[row][col] == 1) {
        ctx.drawImage(bloczek, col * size, row * size, size, size);
      } else {
        ctx.fillStyle = "black";
        ctx.fillRect(col * size, row * size, size, size);
      }
      ctx.strokeRect(col * size, row * size, size, size);
    }
  }

  const monsterSize = 90;

  zagrozenia.forEach(m => {
    if (m.typ === "pulapka") {
      if (!wylaczPulapki) {
        ctx.drawImage(pulapka, m.col * size, m.row * size, size, size);
      }
    } else {
      if (!wylaczPotwory) {
        let offset = (size - monsterSize) / 2;

        ctx.drawImage(
          potwor,
          m.col * size + offset,
          m.row * size + offset,
          monsterSize,
          monsterSize
        );
      }
    }
  });
}


function gameLoop() {
  updateMonsters(); 
  ctx.clearRect(0, 0, area.width, area.height);
  rysuj(); 
  requestAnimationFrame(gameLoop); 
}

// Uruchomienie gdy obrazki będą gotowe
let loadedImages = 0;
function checkImagesLoaded() {
  loadedImages++;
  if (loadedImages === 4) {
    gameLoop();
  }
}

bloczek.onload = checkImagesLoaded;
potwor.onload = checkImagesLoaded;