const area = document.querySelector(".area");
const ctx = area.getContext("2d");

const bloczek = new Image();
bloczek.src = "bloczek.jpg";

const potwor = new Image();
potwor.src = "potwor.png";
const size = 40;

const plotno = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
const potwory=[
{row:1,
  col:5,
  startCol:1,
  endCol:3,
  typ:"prawo-lewo",
  dir: 1,
  speed: 0.025
},
{
  row:1,
  col:7,
  startCol:5,
  endCol:17,
  dir:1,
  speed:0.03,
  typ:"prawo-lewo"
},
{row:1,col:19,typ:"staly"},
{row:9,col:19,typ:"prawo-lewo",
  startCol:17,
  dir:1,
  endCol:23,
  speed:0.02
},
{
  row:7,
  col:20,
  dir:1,
  startCol:19,
  endCol:21,
  speed:0.02,
  typ:"prawo-lewo"
},
{row:20,col:19,dir:1,typ:"gora-dol",startRow:15,endRow:23,speed:0.02},
{row:12,col:4,dir:1,typ:"gora-dol",startRow:15,endRow:17,speed:0.017},
{row:7,col:17,dir:1,typ:"gora-dol",startRow:7,endRow:13,speed:0.02},
{row:15,col:10,dir:1,typ:"prawo-lewo",startCol:9,endCol:21,speed:0.04},
{row:1,col:13,dir:1,typ:"gora-dol",startRow:1,endRow:7,speed:0.02},
{
  row:9,col:1,dir:1,typ:"prawo-lewo",startCol:1,endCol:9,speed:0.023
},
{row:23,col:17,dir:1,typ:"prawo-lewo",startCol:15,endCol:21,speed:0.023},
{row:21,col:15,dir:1,typ:"prawo-lewo",startCol:5,endCol:15,speed:0.023}
];



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


  
function gameLoop() {
  updateMonsters();
  ctx.clearRect(0, 0, area.width, area.height); 
  rysuj(); 
  requestAnimationFrame(gameLoop);
}


let loaded = 0;
const checkReady = () => {
  loaded++;
  if (loaded === 2) gameLoop();
};

bloczek.onload = checkReady;
potwor.onload = checkReady;