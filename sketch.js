var bgi;
function preload(){
    bgi = loadImage("images/bg.jpeg")
    pci= loadImage("images/shooter_1.png")
    pc2 = loadImage("images/shooter_3.png")
    npci= loadImage("images/zombie.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    pc = createSprite(displayWidth/2-300,displayHeight/2,30,50)
    pc.addImage(pci);
    pc.scale=0.3
    pc.setCollider("rectangle",0,0,250,450)


}
function draw(){
    background(0)
    background(bgi);
    if(keyDown("UP_ARROW")){
        pc.y-=4
    }
    if(keyDown("DOWN_ARROW")){
        pc.y+=4;
    }
    if(keyDown("LEFT_ARROW")){
        pc.x-=4
    }
    if(keyDown("RIGHT_ARROW")){
        pc.x+=4
    }
    if(keyWentDown(32)){
     pc.addImage(pc2);
    }
    else if(keyWentUp(32)){
        pc.addImage(pci)
    }
    spawnZombie();

    drawSprites();
    
}
function spawnZombie(){
    if(frameCount%200===0){
    npc=createSprite(random(500,900),random(100,500));
    npc.addImage(npci)
    npc.velocityX=-2;
    npc.scale=0.15;

}
}