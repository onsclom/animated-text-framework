class Framework {
    constructor() {
        this.chars = []
        this.width = 0
        this.height = 0
        this.FPS = 0
        this.nextFrameTimeout
    }

    gameLoop() {
        let time = Date.now()
        if (update)
            update()
        let calculatedText = this.chars.map((row) => row.join(""))
        calculatedText = calculatedText.join("\n")
        if (document.getElementById("frameworkPre"))
            document.getElementById("frameworkPre").innerText = calculatedText
        let now = Date.now()
        let timeTaken = now - time
        this.nextFrameTimeout = setTimeout(this.gameLoop.bind(this), (1000 / FPS - timeTaken))
    }
}

let framework = new Framework()

function fillScreen(char) {
    for (let y = 0; y < framework.chars.length; y++) {
        for (let x = 0; x < framework.chars[0].length; x++) 
            framework.chars[y][x] = char
    }
}

function print(text, x, y) {
    const origX = x
    let cursorX = x
    let cursorY = y

    for (let c of text) {
        if (c == "\n") {
            cursorY += 1
            cursorX = origX
            continue
        }
        if (framework.chars[cursorY] && framework.chars[cursorY][cursorX])
            framework.chars[cursorY][cursorX] = c
        cursorX += 1
    }
}

function setFPS(fps) {
    this.FPS = fps
    framework.gameLoop()
}

function setSize(width, height) {
    framework.chars = []
    for (let y = 0; y < height; y++) {
        let cur = []
        for (let x = 0; x < width; x++)
            cur.push(" ")
        framework.chars.push(cur)
    }

    if (document.getElementById("frameworkPre") == null) {
        let textContainer = document.createElement("pre")
        textContainer.id = "frameworkPre"
        document.body.append(textContainer)
    }
}

function get(x, y) {
    return framework.chars[y][x]
}



