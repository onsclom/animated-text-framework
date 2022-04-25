const WIDTH = 25
const HEIGHT = 7

const helloWorldString = `
+---------------+
|  hello world  |
+---------------+
`.trim()

setSize(WIDTH, HEIGHT)
setFPS(4)

function update() {
    fillScreen(".")

    for (let i = 0; i < 20; i++) {
        let randX = Math.floor(Math.random() * WIDTH)
        let randY = Math.floor(Math.random() * WIDTH)
        print("#", randX, randY)
    }

    print(helloWorldString, 4, 2)
}
