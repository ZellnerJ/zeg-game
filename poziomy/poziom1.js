<<<<<<< HEAD
const area = document.querySelector(".area") // szuka area i pobiera plótno
const ctx = area.getContext("2d");

const bloczek = new Image();
bloczek.src="bloczek.jpg";
const size = 45;
const plotno =[
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1], 
  [0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1], 
  [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1], 
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], 
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1], 
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1], 
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1], 
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], 
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1], 
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1], 
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1], 
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], // wyjscie
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
function rysuj(){
    for(let row = 0; row<plotno.length;row++){
        for(let col = 0; col<plotno[row].length; col++){
            if(plotno[row][col] == 1){
                ctx.drawImage(bloczek,col*size,row*size,size,size);
            }
            else{
                ctx.fillStyle ="black";
                ctx.fillRect(col*size,row*size,size,size);
            }
            ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1;
      ctx.strokeRect(col*size, row*size, size, size);
        }
    }
}
bloczek.onload = function(){
    rysuj();
}

=======
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

const potwory = [
  { row: 3, col: 5, typ: "staly" },
  { row: 7, col: 9, typ: "staly" },
  { row: 12, col: 3, typ: "staly" },
  { 
    row: 7, 
    col: 5, 
    typ: "ruchomy", 
    startCol: 2, // 5 - 3 bloki = 2
    endCol: 5, 
    dir: -1, 
    speed: 0.05 
  }
];

// RUCH POTWORÓW
function updateMonsters() {
  potwory.forEach(m => {
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
// RYSOWANIE MAPY + POTWORÓW
function rysuj() {
  ctx.clearRect(0, 0, area.width, area.height);

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

  // Rysowanie potworów
  const monsterSize = size * 2;
  potwory.forEach(m => {
    ctx.drawImage(
      potwor,
      m.col * size - monsterSize / 2 + (size / 2),
      m.row * size - monsterSize / 2 + (size / 2),
      monsterSize,
      monsterSize
    );
  });
}

// PĘTLA GRY
function loop() {
    console.log("dziala")
    updateMonsters();
  rysuj();
  requestAnimationFrame(loop);
}

// START
let loaded = 0;
function start() {
  loaded++;
  if (loaded === 2) {
    loop();
  }
}

bloczek.onload = start;
potwor.onload = start;
>>>>>>> 5ea6657 (dodanie przeciwnikow na mape)
