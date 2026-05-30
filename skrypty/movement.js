console.log("movement działa");
console.log(plotno);
console.log(size);



const keys = {};

const gracz = {

    // pozycja
    x: 0,
    y: 0,

    // rozmiar gracza
    width: size * 0.5,
    height: size * 0.5,

    // prędkość
    speed: 1.2,
    sprintSpeed: 2.0,

    // stamina
    stamina: 100,
    maxStamina: 100,

    staminaDrain: 0.65,
    staminaRegen: 0.15,

    //opóźnienie ładowania wytrzymałości
    staminaDelay: 3000,
    lastSprintTime: 0,

    // zdrowie
hp: 100,
maxHp: 100,

damageCooldown: 500,
lastDamageTime: 0
};

//Start gracza

function ustawStart() {

    for (let row = 0; row < plotno.length; row++) {

        // szuka wejścia po lewej
        if (plotno[row][0] === 0) {

            // spawn wewnątrz mapy
            gracz.x = size * 0.2;

            // środek kratki
            gracz.y =
                row * size +
                (size / 2) -
                (gracz.height / 2);

            return;
        }
    }
}

// INPUT

document.addEventListener("keydown", (e) => {

    keys[e.key.toLowerCase()] = true;
});

document.addEventListener("keyup", (e) => {

    keys[e.key.toLowerCase()] = false;
});

//kolizje
function kolizja(x, y) {

    const left = Math.floor(x / size);
    const right = Math.floor((x + gracz.width) / size);

    const top = Math.floor(y / size);
    const bottom = Math.floor((y + gracz.height) / size);

    return (
        plotno[top]?.[left] === 1 ||
        plotno[top]?.[right] === 1 ||
        plotno[bottom]?.[left] === 1 ||
        plotno[bottom]?.[right] === 1
    );
}

//ruch

function ruch() {

    let moveX = 0;
    let moveY = 0;

    let currentSpeed = gracz.speed;

    const now = Date.now();

    const moving =
        keys["w"] ||
        keys["a"] ||
        keys["s"] ||
        keys["d"] ||
        keys["arrowup"] ||
        keys["arrowdown"] ||
        keys["arrowleft"] ||
        keys["arrowright"];

    const sprint =
        keys["shift"] &&
        gracz.stamina > 0 &&
        moving;

    // sprint
    if (sprint) {

        currentSpeed = gracz.sprintSpeed;

        gracz.stamina -= gracz.staminaDrain;

        if (gracz.stamina < 0) {
            gracz.stamina = 0;
        }

        // zapamiętaj moment sprintu
        gracz.lastSprintTime = now;
    }

    // regen delay (3 sekundy po sprintcie)
    const canRegen = (now - gracz.lastSprintTime) > gracz.staminaDelay;

    if (!sprint && canRegen) {

        gracz.stamina += gracz.staminaRegen;

        if (gracz.stamina > gracz.maxStamina) {
            gracz.stamina = gracz.maxStamina;
        }
    }

    // góra
    if (keys["w"] || keys["arrowup"]) moveY -= currentSpeed;

    // dół
    if (keys["s"] || keys["arrowdown"]) moveY += currentSpeed;

    // lewo
    if (keys["a"] || keys["arrowleft"]) moveX -= currentSpeed;

    // prawo
    if (keys["d"] || keys["arrowright"]) moveX += currentSpeed;

    // kolizja X
    if (!kolizja(gracz.x + moveX, gracz.y)) {
        gracz.x += moveX;
    }

    // kolizja Y
    if (!kolizja(gracz.x, gracz.y + moveY)) {
        gracz.y += moveY;
    }

    // mapa X
    if (gracz.x < 0) gracz.x = 0;

    const maxX = plotno[0].length * size - gracz.width;
    if (gracz.x > maxX) gracz.x = maxX;

    // mapa Y
    if (gracz.y < 0) gracz.y = 0;

    const maxY = plotno.length * size - gracz.height;
    if (gracz.y > maxY) gracz.y = maxY;
}

//rysowanie gracza

function rysujGracza() {

    ctx.fillStyle = "red";

    ctx.fillRect(
        gracz.x,
        gracz.y,
        gracz.width,
        gracz.height
    );
}

//pasek wytrzymałości
function rysujStamine() {

    const width = 220;
    const height = 20;

    const x = 8;
    const y = 3;

    // tło
    ctx.fillStyle = "#333";

    ctx.fillRect(
        x,
        y,
        width,
        height
    );

    // wytrzymałośc
    ctx.fillStyle = "darkBlue";

    ctx.fillRect(
        x,
        y,
        (gracz.stamina / gracz.maxStamina) * width,
        height
    );

    // ramka
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;

    ctx.strokeRect(
        x,
        y,
        width,
        height
    );
}

function rysujHP() {

    const width = 220;
    const height = 20;

    const x = area.width - width - 10;
    const y = 10;

    // tło
    ctx.fillStyle = "#333";
    ctx.fillRect(x, y, width, height);

    // życie
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(
        x,
        y,
        (gracz.hp / gracz.maxHp) * width,
        height
    );

    // ramka
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, width, height);
}



//Szukanie wyjścia

function sprawdzWyjscie() {

    const col = Math.floor(gracz.x / size);
    const row = Math.floor(gracz.y / size);

    if (
        col >= plotno[0].length - 1 &&
        plotno[row][col] === 0
    ) {

        console.log("Wykryto koniec poziomu");
    }
}

function sprawdzKolizjePotworow() {

    const now = Date.now();

    potwory.forEach(m => {

        const monsterSize = size * 2;

        const mx =
            m.col * size -
            monsterSize / 2 +
            size / 2;

        const my =
            m.row * size -
            monsterSize / 2 +
            size / 2;

        const hit =
            gracz.x < mx + monsterSize &&
            gracz.x + gracz.width > mx &&
            gracz.y < my + monsterSize &&
            gracz.y + gracz.height > my;

        if (
            hit &&
            now - gracz.lastDamageTime > gracz.damageCooldown
        ) {

            gracz.hp -= 10;

            if (gracz.hp < 0) {
                gracz.hp = 0;
            }

            gracz.lastDamageTime = now;

            console.log("Otrzymano obrażenia");

            if (gracz.hp <= 0) {
                alert("Game Over!");
                location.reload();
            }
        }
    });
}

function gameLoop() {

    ctx.clearRect(
        0,
        0,
        area.width,
        area.height
    );

    updateMonsters();

    rysuj();

    ruch();

    sprawdzKolizjePotworow();

    rysujGracza();

    rysujStamine();
    rysujHP();

    sprawdzWyjscie();

    requestAnimationFrame(gameLoop);
}

bloczek.onload = function () {

    ustawStart();

    gameLoop();
};