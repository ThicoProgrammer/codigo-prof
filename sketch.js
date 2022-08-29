var fundo;
var birdImg, bird;
var predio, obstaculo, obstaculo_aereo;
var nuvem, carro1, carro2, carro3;

function preload() {
    fundo = loadImage("assets/fundo.jpg")
    birdImg = loadImage("assets/bird.png")
    predio = loadImage("assets/obstaculo.png")
    nuvem = loadImage("assets/nuvem.png")
    carro1 = loadImage("assets/carro1.png")
    carro2 = loadImage("assets/carro2.jpg")
    carro3 = loadImage("assets/carro3.png")
}



function setup() {
    createCanvas(1000,500)

    bird = createSprite(300, 250)
    bird.addImage(birdImg)
    bird.scale = 0.05; 
}



function draw() {
    background(fundo)

    bird.velocityY += 0.8

    if(keyDown("space")) {
        bird.velocityY = -10
    }

    criarObstaculos();
    criarObstaculosAereos();

    drawSprites()
}



function criarObstaculos() {
    if(frameCount % 80 === 0) {
        obstaculo = createSprite(width, 350)
        obstaculo.addImage(predio)
        obstaculo.scale = 0.3
        obstaculo.velocityX = -6
    }  
}



function criarObstaculosAereos() {
    if(frameCount % 90 === 0) {
        obstaculo_aereo = createSprite(width, random(80, 180))

    //Math.round serve para arredondar para o valor exato
        var dado = Math.round(random(1,4))

        switch(dado) {
            case 1 : obstaculo_aereo.addImage(carro1);
                break;
            case 2 : obstaculo_aereo.addImage(carro1);
                break;
            case 3 : obstaculo_aereo.addImage(carro1);
                break;
            case 4 : obstaculo_aereo.addImage(carro1);
                break;
        }

        obstaculo_aereo.scale = 0.2

        obstaculo_aereo.velocityX = -4
    }  
}