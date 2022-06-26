//Variables Defined

let playerX = 235;
let playerY = 420;
let redcarX = 1;
let moneyX;
let moneyY;
let creditX;
let creditY;
let level = 1;
let gotMoney = false;
let gotCredit = false;
let deltaX = 0;
let deltaY = 0;
let score = 0;
let snowY1 = 20;
let snowX1 = 20;
let snowY2 = 20;
let snowX2 = 40;
let snowY3 = 20;
let snowX3 = 60;
let snowY4 = 20;
let snowX4 = 80;
let snowY5 = 20;
let snowX5 = 100;
let snowY6 = 20;
let snowX6 = 120;
let snowY7 = 20;
let snowX7 = 140;
let snowY8 = 20;
let snowX8 = 160;
let snowY9 = 20;
let snowX9 = 180;
let snowY10 = 20;
let snowX10 = 200;
let snowY11 = 20;
let snowX11 = 220;
let snowY12 = 20;
let snowX12 = 240;
let snowY13 = 20;
let snowX13 = 260;
let snowY14 = 20;
let snowX14 = 280;
let snowY15 = 20;
let snowX15 = 300;
let snowY16 = 20;
let snowX16 = 320;
let snowY17 = 20;
let snowX17 = 340;
let snowY18 = 20;
let snowX18 = 360;
let snowY19 = 20;
let snowX19 = 380;
let snowY20 = 20;
let snowX20 = 400;
let snowY21 = 20;
let snowX21 = 420;
let snowY22 = 20;
let snowX22 = 440;
let snowY23 = 20;
let snowX23 = 460;
let snowY24 = 20;
let snowX24 = 480;
let snowY25 = 20;
let snowX25 = 500;
let snowY26 = 20;
let snowX26 = 520;
let snowY27 = 20;
let snowX27 = 540;
let snowY28 = 20;
let snowX28 = 560;
let snowY29 = 20;
let snowX29 = 580;
let snowY30 = 20;
let snowX30 = 600;
let snowY31 = 20;
let snowX31 = 620;
let snowY32 = 20;
let snowX32 = 640;
let snowY33 = 20;
let snowX33 = 660;
let snowY34 = 20;
let snowX34 = 680;
let snowY35 = 20;
let snowX35 = 700;

//The Code

function setup() {
  createCanvas(700, 500);
  moneyX = random(650);
  moneyY = random(400, 480);

  creditX = random(650);
  creditY = random(400, 480);
}

function draw() {
  if (level == 1) {
    background(47, 157, 226);

    //Background Code

    fill(71, 72, 76);
    rect(0, 400, 700, 300);

    fill(128, 128, 128);
    rect(0, 385, 700, 15);

    //Picking Up and Collecting Money

    fill(0, 255, 0);
    stroke(4);
    text("💵", moneyX, moneyY);
    if (dist(moneyX + 25, moneyY, playerX, playerY) < 20) {
      gotMoney = true;
      moneyX = random(650);
      moneyY = random(400, 480);
      score = score + 2;
    }

    //Credit Card Code

    if (score >= 50) {
      text("💳", creditX, creditY);
    }
    if (dist(creditX + 25, creditY, playerX, playerY) < 20) {
      gotCredit = true;
      creditX = random(650);
      creditY = random(400, 480);
    }
    if (gotCredit == true) {
      level = 2;
    }

    //Score Code

    text("Money (Score) = " + score, 125, 150);

    //Boundary from 3 Sides and Sidewalk

    if (playerX < 5) {
      playerX = playerX + 5;
    }
    if (playerX > 675) {
      playerX = playerX - 15;
    }
    if (playerY > 490) {
      playerY = playerY - 10;
    }
    if (playerY < 385) {
      playerY = playerY + 15;
    }

    //Other Background stuff

    fill(208, 204, 204);
    ellipse(82, 15, 194, 64);
    ellipse(148, 44, 175, 60);
    ellipse(336, 24, 175, 60);
    ellipse(384, 52, 184, 76);
    ellipse(628, 14, 184, 50);
    ellipse(589, 34, 184, 61);

    noStroke();
    fill(239, 183, 0);
    rect(25, 440, 75, 15);
    rect(150, 440, 75, 15);
    rect(275, 440, 75, 15);
    rect(400, 440, 75, 15);
    rect(525, 440, 75, 15);
    rect(650, 440, 75, 15);

    fill(45, 93, 102);
    stroke(4);
    rect(0, 135, 100, 250);
    fill(107, 206, 247, 50);
    rect(15, 150, 70, 200);
    fill(0, 0, 0);
    stroke(255, 255, 255);
    ellipse(25, 115, 15, 50);

    fill(156, 76, 52);
    stroke(0, 0, 0);
    rect(100, 300, 150, 85);
    triangle(100, 300, 175, 250, 250, 300);
    fill(161, 111, 13);
    stroke(1);
    rect(165, 350, 15, 35);

    fill(189, 206, 169);
    rect(250, 250, 250, 135);
    fill(255, 255, 255);
    rect(275, 275, 200, 110);
    fill(0, 0, 0);
    rect(360, 340, 25, 45);
    fill(48, 98, 112);
    rect(500, 90, 200, 295, 10);
    fill(177, 240, 178);
    rect(545, 270, 120, 115, 5);
    fill(0, 0, 0);
    rect(590, 340, 25, 45);

    //Moving Red Car Code and Boundary from Red Car

    fill(255, 0, 0);
    stroke(2);
    rect(redcarX, 460, 60, 20);
    fill(0, 0, 0);
    noStroke();
    ellipse(redcarX, 483, 20, 20);
    ellipse(redcarX + 60, 483, 20, 20);
    redcarX = redcarX + 3;
    if (redcarX > 670) {
      redcarX = 0;
    }
    if (dist(redcarX, 483, playerX, playerY) < 60) {
      fill(255, 0, 0);
      textSize(50);
      text("L kid is getting hurt!", 50, 400);
    }

    if (red(get(playerX + 25, playerY)) == 255) {
      playerX = playerX - 10;
    }
    if (red(get(playerX - 25, playerY)) == 255) {
      playerX = playerX + 10;
    }
    if (red(get(playerX, playerY + 25)) == 255) {
      playerY = playerY - 10;
    }

    //Character Code

    fill(173, 141, 90);
    stroke(2);
    textSize(35);
    text(" 💰 ", playerX, playerY);

    playerX = playerX + deltaX;
    playerY = playerY + deltaY;

    // Snowball Code

    noStroke();
    fill(255, 255, 255, 100);
    ellipse(snowX1, snowY1, 15, 15);
    snowY1 = snowY1 + 1.11;
    if (snowY1 > 400) {
      snowY1 = 0;
      snowX1 = random(700);
    }
    ellipse(snowX2, snowY2, 15, 15);
    snowY2 = snowY2 + 1.02;
    if (snowY2 > 400) {
      snowY2 = 0;
      snowX2 = random(700);
    }
    ellipse(snowX3, snowY3, 15, 15);
    snowY3 = snowY3 + 1.06;
    if (snowY3 > 400) {
      snowY3 = 0;
      snowX3 = random(700);
    }
    ellipse(snowX4, snowY4, 15, 15);
    snowY4 = snowY4 + 1.06;
    if (snowY4 > 400) {
      snowY4 = 0;
      snowX4 = random(700);
    }
    ellipse(snowX5, snowY5, 15, 15);
    snowY5 = snowY5 + 1.3;
    if (snowY5 > 400) {
      snowY5 = 0;
      snowX5 = random(700);
    }
    ellipse(snowX6, snowY6, 15, 15);
    snowY6 = snowY6 + 1.115;
    if (snowY6 > 400) {
      snowY6 = 0;
      snowX6 = random(700);
    }
    ellipse(snowX7, snowY7, 15, 15);
    snowY7 = snowY7 + 1.045;
    if (snowY7 > 400) {
      snowY7 = 0;
      snowX7 = random(700);
    }
    ellipse(snowX8, snowY8, 15, 15);
    snowY8 = snowY8 + 1.2055;
    if (snowY8 > 400) {
      snowY8 = 0;
      snowX8 = random(700);
    }
    ellipse(snowX9, snowY9, 15, 15);
    snowY9 = snowY9 + 1.115;
    if (snowY9 > 400) {
      snowY9 = 0;
      snowX9 = random(700);
    }
    ellipse(snowX10, snowY10, 15, 15);
    snowY10 = snowY10 + 1.015;
    if (snowY10 > 400) {
      snowY10 = 0;
      snowX10 = random(700);
    }
    ellipse(snowX11, snowY11, 15, 15);
    snowY11 = snowY11 + 1.25;
    if (snowY11 > 400) {
      snowY11 = 0;
      snowX11 = random(700);
    }
    ellipse(snowX12, snowY12, 15, 15);
    snowY12 = snowY12 + 1.305;
    if (snowY10 > 400) {
      snowY12 = 0;
      snowX12 = random(700);
    }
    ellipse(snowX13, snowY13, 15, 15);
    snowY13 = snowY13 + 1.21;
    if (snowY13 > 400) {
      snowY13 = 0;
      snowX13 = random(700);
    }
    ellipse(snowX14, snowY14, 15, 15);
    snowY14 = snowY14 + 0.91;
    if (snowY14 > 400) {
      snowY14 = 0;
      snowX14 = random(700);
    }
    ellipse(snowX15, snowY15, 15, 15);
    snowY15 = snowY15 + 1.1;
    if (snowY15 > 400) {
      snowY15 = 0;
      snowX15 = random(700);
    }
    ellipse(snowX16, snowY16, 15, 15);
    snowY16 = snowY16 + 1.00005;
    if (snowY16 > 400) {
      snowY16 = 0;
      snowX16 = random(700);
    }
    ellipse(snowX17, snowY17, 15, 15);
    snowY17 = snowY17 + 1.175;
    if (snowY17 > 400) {
      snowY17 = 0;
      snowX17 = random(700);
    }
    ellipse(snowX18, snowY18, 15, 15);
    snowY18 = snowY18 + 1;
    if (snowY18 > 400) {
      snowY18 = 0;
      snowX18 = random(700);
    }
    ellipse(snowX19, snowY19, 15, 15);
    snowY19 = snowY19 + 1.075;
    if (snowY19 > 400) {
      snowY19 = 0;
      snowX19 = random(700);
    }
    ellipse(snowX20, snowY20, 15, 15);
    snowY20 = snowY20 + 1;
    if (snowY18 > 400) {
      snowY20 = 0;
      snowX20 = random(700);
    }
    ellipse(snowX21, snowY21, 15, 15);
    snowY21 = snowY21 + 0.92;
    if (snowY21 > 400) {
      snowY21 = 0;
      snowX21 = random(700);
    }
    ellipse(snowX22, snowY22, 15, 15);
    snowY22 = snowY22 + 1.1;
    if (snowY22 > 400) {
      snowY22 = 0;
      snowX22 = random(700);
    }
    ellipse(snowX23, snowY23, 15, 15);
    snowY23 = snowY23 + 1;
    if (snowY23 > 400) {
      snowY23 = 0;
      snowX23 = random(700);
    }
    ellipse(snowX24, snowY24, 15, 15);
    snowY24 = snowY24 + 0.92;
    if (snowY24 > 400) {
      snowY24 = 0;
      snowX24 = random(700);
    }
    ellipse(snowX25, snowY25, 15, 15);
    snowY25 = snowY25 + 1.05;
    if (snowY25 > 400) {
      snowY25 = 0;
      snowX25 = random(700);
    }
    ellipse(snowX26, snowY26, 15, 15);
    snowY26 = snowY26 + 0.92;
    if (snowY26 > 400) {
      snowY26 = snowX26 = random(700);
    }
    ellipse(snowX27, snowY27, 15, 15);
    snowY27 = snowY27 + 1;
    if (snowY27 > 400) {
      snowY27 = 0;
      snowX27 = random(700);
    }
    ellipse(snowX28, snowY28, 15, 15);
    snowY28 = snowY28 + 1.3;
    if (snowY28 > 400) {
      snowY28 = 0;
      snowX28 = random(700);
    }
    ellipse(snowX29, snowY29, 15, 15);
    snowY29 = snowY29 + 0.85;
    if (snowY29 > 400) {
      snowY29 = 0;
      snowX29 = random(700);
    }
    ellipse(snowX30, snowY30, 15, 15);
    snowY30 = snowY30 + 1.15;
    if (snowY30 > 400) {
      snowY30 = 0;
      snowX30 = random(700);
      fill(0, 0, 0);
    }
    ellipse(snowX31, snowY31, 15, 15);
    snowY31 = snowY31 + 0.912;
    if (snowY30 > 400) {
      snowY30 = 0;
      snowX30 = random(700);
      fill(0, 0, 0);
    }
    ellipse(snowX32, snowY32, 15, 15);
    snowY32 = snowY32 + 0.9;
    if (snowY32 > 400) {
      snowY32 = 0;
      snowX32 = random(700);
      fill(0, 0, 0);
    }
    ellipse(snowX33, snowY33, 15, 15);
    snowY33 = snowY33 + 1.004;
    if (snowY33 > 400) {
      snowY33 = 0;
      snowX33 = random(700);
      fill(0, 0, 0);
    }
    ellipse(snowX34, snowY34, 15, 15);
    snowY34 = snowY34 + 1.25;
    if (snowY34 > 400) {
      snowY34 = 0;
      snowX34 = random(700);
      fill(0, 0, 0);
    }
    ellipse(snowX35, snowY35, 15, 15);
    snowY35 = snowY35 + 1.15;
    if (snowY35 > 400) {
      snowY35 = 0;
      snowX35 = random(700);
      fill(0, 0, 0);
    }
  }

  //Code for Level 2

  if (level == 2) {
    background(0, 0, 100);
    textSize(20);
    text("You win!! Nothing to do anymore", 200, 200);
  }
}
//Character Movement Code

function keyPressed() {
  if (key == "a") {
    deltaX = -5;
  }
  if (key == "d") {
    deltaX = 5;
  }
  if (key == "s") {
    deltaY = 5;
  }
  if (key == "w") {
    deltaY = -5;
  }
}

function keyReleased() {
  if (key == "a") {
    deltaX = 0;
  }
  if (key == "d") {
    deltaX = 0;
  }
  if (key == "s") {
    deltaY = 0;
  }
  if (key == "w") {
    deltaY = 0;
  }
}