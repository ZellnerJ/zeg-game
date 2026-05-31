const area = document.querySelector(".area");
const ctx = area.getContext("2d");

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
  { row: 3, col: 5, typ: "pulapka" },
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
      ctx.fillRect(col * size, row * size, size, size);

      if (plotno[row][col] === 1) {
        ctx.drawImage(bloczek, col * size, row * size, size, size);
      }

      ctx.strokeStyle = "rgba(255,255,255,0.2)";
      ctx.strokeRect(col * size, row * size, size, size);
    }
  }

 zagrozenia.forEach(z => {
    if (z.typ === "ruchomy") {
     //ruchomy potwór
      const monsterSize = size * 2;
      ctx.drawImage(
        potwor,
        z.col * size - monsterSize / 2 + (size / 2),
        z.row * size - monsterSize / 2 + (size / 2),
        monsterSize,
        monsterSize
      );
    } else if (z.typ === "pulapka") {
      // Rysowanie statycznej pułapki
      ctx.drawImage(pulapka, z.col * size, z.row * size, size, size);
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

  if (loaded === 3) {
    loop();
  }
}

bloczek.onload = start;
potwor.onload = start;
pulapka.onload = start;