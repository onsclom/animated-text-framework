const WIDTH = 25;
const HEIGHT = 8;
const JUMP_FORCE = 1;
const GRAVITY = 0.2;
const MIN_BARREL_INTERVAL = 10;
const MAX_BARREL_INTERVAL = 40;
const playerGrounded = [` O `, `/|\\`, `/ \\`].join("\n");
const playerJumping = [`\\O/ `, ` | `, `/ \\`].join("\n");
const barrel = ["#", "#"].join("\n");

let player = {
    x: 2,
    y: HEIGHT - 4,
    dy: 0,
    startY: HEIGHT - 4,
};
let score = 0;
let barrels = [];
let frame = 0;

function getNextBarrelTime() {
    return (
        MIN_BARREL_INTERVAL +
        Math.random() * (MAX_BARREL_INTERVAL - MIN_BARREL_INTERVAL)
    );
}
let nextBarrel = getNextBarrelTime();

function update() {
    for (let y = 0; y < HEIGHT; y++) {
        for (let x = 0; x < WIDTH; x++) {
            if ((x + y) % 2) print(".", x, y);
            else print(" ", x, y);
        }
    }
    player.y += player.dy;
    player.y = Math.min(player.startY, player.y);
    player.dy += GRAVITY;
    if (player.y >= player.startY) {
        player.dy = 0;
        player.y = player.startY;
    }
    nextBarrel -= 1;
    if (nextBarrel <= 0) {
        barrels.push(WIDTH);
        nextBarrel = getNextBarrelTime();
    }
    print(
        player.y == player.startY ? playerGrounded : playerJumping,
        Math.round(player.x),
        Math.round(player.y)
    );
    for (let i = barrels.length - 1; i >= 0; i--) {
        barrels[i] -= 1;
        if (barrels[i] < -2) barrels.splice(i, 1);
        else {
            print(barrel, barrels[i], HEIGHT - 3);
            if (barrels[i] == player.x + 1) {
                if (player.y == player.startY) score = 0;
                else score += 1;
            }
        }
    }

    print("".padEnd(WIDTH, "="), 0, HEIGHT - 1);
    print(`score: ${score}`, 10, 1);
}

window.onpointerdown = press;
window.onkeydown = press;
function press() {
    if (player.y == player.startY) {
        player.dy = -JUMP_FORCE;
    }
}

setSize(WIDTH, HEIGHT);
setFPS(30);
