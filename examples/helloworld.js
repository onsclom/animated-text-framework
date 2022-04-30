const WIDTH = 20
const HEIGHT = 7

const helloWorldString = [
    `+-----------+`,
    `|hello world|`,
    `+-----------+`
].join('\n')
let boxX = 1
let boxY = 1
let boxDX = 1
let boxDY = 1
let boxWidth = 13
let boxHeight = 3

setSize(WIDTH, HEIGHT) 
setFPS(4)

function update() {
    fillScreen(".")
    if (boxX+boxWidth >= WIDTH || boxX <= 0)
        boxDX *= -1
    if (boxY+boxHeight >= HEIGHT || boxY <= 0)
        boxDY *= -1
    boxX += boxDX
    boxY += boxDY
    print(helloWorldString, boxX, boxY)
}