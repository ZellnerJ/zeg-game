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

