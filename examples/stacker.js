const WIDTH = 7
const HEIGHT = 10

let playerBlock = {
    curHeight: 2,
    x: 0,
    dx: 1,
    size: 3,
    framesTillMove: 7.5,
}

let frameCount = 0

function update() {
    print('.......', 0, HEIGHT - playerBlock.curHeight)
    frameCount += 1
    if (frameCount >= playerBlock.framesTillMove) {
        frameCount = 0
        if (playerBlock.x + playerBlock.size >= WIDTH)
            playerBlock.dx = -1
        else if (playerBlock.x <= 0)
            playerBlock.dx = 1
        playerBlock.x += playerBlock.dx
    }
    print("".padEnd(playerBlock.size, "#"), playerBlock.x, HEIGHT - playerBlock.curHeight)
    print("###", 2, HEIGHT - 1)
}

window.onpointerdown = () => {
    pressed()
}
window.onkeydown = () => {
    pressed()
}

function pressed() {
    if (playerBlock.size == 0) {
        window.refresh()
    }

    let newSize = 0
    for (let x = 0; x < WIDTH; x++) {
        if (get(x, HEIGHT - playerBlock.curHeight) == "#") {
            if (get(x, HEIGHT - playerBlock.curHeight + 1) != "#") {
                print(".", x, HEIGHT - playerBlock.curHeight)
                console.log("overlapper")
            } else {
                newSize += 1
            }
        }
    }
    playerBlock.size = newSize
    playerBlock.curHeight += 1
    playerBlock.framesTillMove -= .5 
}

setSize(WIDTH, HEIGHT)
setFPS(60)
fillScreen(".")