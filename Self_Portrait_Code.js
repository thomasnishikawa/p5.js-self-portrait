function setup() {

  createCanvas(1000, 1000);
  
  background(0, 169, 157)
  
  //jacket1
  noStroke(0);
  fill(0, 0, 0)
  beginShape();
  
  vertex(0, 1000);
  vertex(0, 847);
  vertex(101, 826);
  vertex(249, 770);
  vertex(225, 858);
  vertex(277, 1000);
  
  endShape(CLOSE);
  
  //jacket2
  beginShape();
  
  vertex(677, 840);
  vertex(671, 927);
  vertex(615, 1000);
  vertex(825, 1000);
  
  endShape(CLOSE);
  
  //neck
   fill(140, 98, 57)
  beginShape();
  
  vertex(277, 1000);
  vertex(226, 858);
  vertex(270, 695);
  vertex(364, 800);
  vertex(560, 826);
  vertex(682, 753);
  vertex(671, 927);
  vertex(615, 1000);
  
  endShape(CLOSE);
  
    //head
   fill(198, 156, 109)
  beginShape();
  
  vertex(225, 205);
  vertex(397, 69);
  vertex(667, 99);
  vertex(793, 261);
  vertex(764, 635);
  vertex(682, 753);
  vertex(560, 826);
  vertex(364, 800);
  vertex(270, 695);
  vertex(225, 604);
  
  endShape(CLOSE);
  
  //ear1
  beginShape();
  
  vertex(225, 573);
  vertex(188, 573);
  vertex(167, 535);
  vertex(173, 495);
  vertex(154, 441);
  vertex(181, 405);
  vertex(225, 393);
  
  endShape(CLOSE);
  
  //ear2
  beginShape();
  
  vertex(764, 624);
  vertex(793, 624);
  vertex(812, 603);
  vertex(812, 553);
  vertex(832, 507);
  vertex(832, 435);
  vertex(781, 405);
  
  endShape(CLOSE);
  
  //mouth
  fill(0)
  beginShape();
  
  vertex(369, 659);
  vertex(491, 691);
  vertex(629, 684);
  vertex(629, 628);
  vertex(493, 586);
  vertex(379, 591);
  
  endShape(CLOSE);
  
  ellipse(462, 513, 52, 52);
  ellipse(540, 519, 54, 54);
  
   //teethlow
  fill(128, 128, 128);
  beginShape();
  
  vertex(412, 626);
  vertex(412, 640);
  vertex(486, 672);
  vertex(582, 663);
  vertex(582, 646);
  
  endShape(CLOSE);
  
   //teethtop
  fill(250, 250, 250);
  beginShape();
  
  vertex(586, 654);
  vertex(586, 626);
  vertex(517, 603);
  vertex(472, 598);
  vertex(414, 607);
  vertex(412, 633);
  
  endShape(CLOSE);
  
  //eye
  ellipse(383, 381, 82, 82);
  ellipse(622, 400, 84, 84);
  
  //pulpil
  fill(0)
  ellipse(380, 387, 48, 48);
  ellipse(618, 409, 48, 48);
  
  //eyebags
  fill(166, 124, 82)
  beginShape();
  
  vertex(570, 406);
  vertex(588, 441);
  vertex(632, 450);
  vertex(674, 442);
  vertex(674, 407);
  vertex(625, 414);
  vertex(570, 406);
  
  endShape(CLOSE);
  
  beginShape();
  
  vertex(445, 394);
  vertex(380, 390);
  vertex(328, 373);
  vertex(333, 405);
  vertex(371, 425);
  vertex(414, 419);
  
  endShape(CLOSE);
  
  //nose
   fill(198, 156, 109)
  beginShape();
  
  vertex(419, 473);
  vertex(421, 526);
  vertex(436, 511);
  vertex(455, 511);
  vertex(483, 526);
  vertex(482, 533);
  vertex(518, 537);
  vertex(516, 524);
  vertex(541, 518);
  vertex(556, 522);
  vertex(577, 541);
  vertex(590, 485);
  
  endShape(CLOSE);
  
  //liptop
  beginShape();
  
  vertex(355, 591);
  vertex(382, 626);
  vertex(458, 605);
  vertex(498, 611);
  vertex(532, 611);
  vertex(602, 645);
  vertex(650, 615);
  vertex(519, 545);
  vertex(450, 545);
  
  endShape(CLOSE);
  
  //lipbot
  beginShape();
  
  vertex(355, 591);
  vertex(382, 625);
  vertex(445, 648);
  vertex(536, 663);
  vertex(602, 644);
  vertex(650, 615);
  vertex(636, 695);
  vertex(543, 727);
  vertex(445, 719);
  vertex(365, 666);
  
  endShape(CLOSE);
  
  //brow1
  beginShape();
  
  vertex(335, 376);
  vertex(287, 358);
  vertex(308, 321);
  vertex(381, 303);
  vertex(462, 358);
  vertex(445, 394);
  vertex(385, 355);
  vertex(352, 357);
  
  endShape(CLOSE);
  
  //brow2
  beginShape();
  
  vertex(570, 400);
  vertex(551, 365);
  vertex(597, 329);
  vertex(664, 329);
  vertex(707, 376);
  vertex(674, 407);
  vertex(635, 380);
  vertex(604, 378);
  
  endShape(CLOSE);
  
  //chin
  fill(166, 124, 82)
  beginShape();
  
  vertex(418, 676);
  vertex(439, 708);
  vertex(521, 720);
  vertex(551, 693);
  
  endShape(CLOSE);
  
  //wrinkle11
  beginShape();
  
  vertex(366, 557);
  vertex(435, 529);
  vertex(413, 516);
  vertex(413, 495);
  vertex(428, 476);
  vertex(452, 471);
  vertex(457, 455);
  vertex(418, 471);
  
  endShape(CLOSE);
  
  //wrinkle12
  beginShape();
  
  vertex(634, 583);
  vertex(557, 543);
  vertex(576, 543);
  vertex(589, 529);
  vertex(584, 506);
  vertex(573, 491);
  vertex(554, 480);
  vertex(551, 468);
  vertex(576, 482);
  vertex(599, 510);
  
  endShape(CLOSE);
  
  //hair1
   fill(0)
  beginShape();
  
  vertex(344, 168);
  vertex(279, 105);
  vertex(307, 65);
  vertex(403, 23);
  vertex(641, 50);
  vertex(721, 94);
  vertex(840, 240);
  vertex(850, 342);
  vertex(850, 470);
  vertex(780, 516);
  vertex(780, 469);
  vertex(733, 393);
  vertex(588, 330);
  
  endShape(CLOSE);
  
  //hair2
  beginShape();
  
  vertex(218, 516);
  vertex(153, 421);
  vertex(126, 310);
  vertex(183, 182);
  vertex(279, 105);
  vertex(345, 168);
  vertex(287, 183);
  vertex(227, 349);
  
  endShape(CLOSE);
  
  //eyebrow
  beginShape();
  
  vertex(273, 294);
  vertex(342, 283);
  vertex(448, 290);
  vertex(509, 306);
  vertex(450, 265);
  vertex(344, 260);
  
  endShape(CLOSE);
  
}


function draw() {

}
