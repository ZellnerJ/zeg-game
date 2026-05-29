const area = document.querySelector(".area");
const ctx = area.getContext("2d");

const bloczek = new Image();
bloczek.src = "bloczek.jpg";

const potwor = new Image();
potwor.src="potwor.png";

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

 const potwory = [
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
 {row:34,col:33,dir:1,typ:"gora-dol",speed:0.05,startRow:27,endRow:33}
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
potwory.forEach(m => {
   
    let offset = (size - monsterSize) / 2;
    
    ctx.drawImage(
      potwor, 
      m.col * size + offset, 
      m.row * size + offset, 
      monsterSize, 
      monsterSize
    );
  });
}
function updateMonsters() {
  potwory.forEach(m => {
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


function gameLoop() {
  updateMonsters(); 
  ctx.clearRect(0, 0, area.width, area.height);
  rysuj(); 
  requestAnimationFrame(gameLoop); 
}

// Uruchomienie, gdy obrazki będą gotowe
let loadedImages = 0;
function checkImagesLoaded() {
  loadedImages++;
  if (loadedImages === 2) {
    gameLoop();
  }
}

bloczek.onload = checkImagesLoaded;
potwor.onload = checkImagesLoaded;