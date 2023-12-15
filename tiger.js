function setup(){
    canvas = createCanvas(600, 500)
    canvas.center()
}

function preload(){
    img = loadImage("tiger.jpg")
}

function draw(){
    image(img, 0, 0, 600, 500)
}