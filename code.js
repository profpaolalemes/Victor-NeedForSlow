var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b5d8fc53-f947-4b2d-ac8d-f61f9fbbb56f","4065b502-0b15-4a46-abea-3eed5db78a8d","26b7a926-4138-4fda-9323-4cd24efad32c","39879dc3-5c10-4aab-901e-993e0c0ec13c","6ca22de0-cc68-455a-aa1f-271a0e144f5f","a352ad3c-6baf-4e06-b342-81e6390a2f66"],"propsByKey":{"b5d8fc53-f947-4b2d-ac8d-f61f9fbbb56f":{"name":"carro","sourceUrl":"assets/v3/animations/ufZJzUXAvI0z43_eOViEJOSM3jfzX1JF6UKxExhbviE/b5d8fc53-f947-4b2d-ac8d-f61f9fbbb56f.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":4,"version":"L375otdhJ.SgM.1RZyrsDuAwLKZSUvE9","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/v3/animations/ufZJzUXAvI0z43_eOViEJOSM3jfzX1JF6UKxExhbviE/b5d8fc53-f947-4b2d-ac8d-f61f9fbbb56f.png"},"4065b502-0b15-4a46-abea-3eed5db78a8d":{"name":"carro1","sourceUrl":null,"frameSize":{"x":73,"y":133},"frameCount":4,"looping":true,"frameDelay":12,"version":"7o1M_SMndzm03HNJbG6udX_cUBv5U5hc","loadedFromSource":true,"saved":true,"sourceSize":{"x":219,"y":266},"rootRelativePath":"assets/4065b502-0b15-4a46-abea-3eed5db78a8d.png"},"26b7a926-4138-4fda-9323-4cd24efad32c":{"name":"carro2","sourceUrl":null,"frameSize":{"x":73,"y":133},"frameCount":4,"looping":true,"frameDelay":12,"version":"FrIi4FLYWDrp150rPEfWYq416aPz7KCD","loadedFromSource":true,"saved":true,"sourceSize":{"x":219,"y":266},"rootRelativePath":"assets/26b7a926-4138-4fda-9323-4cd24efad32c.png"},"39879dc3-5c10-4aab-901e-993e0c0ec13c":{"name":"comeco","sourceUrl":null,"frameSize":{"x":666,"y":638},"frameCount":1,"looping":true,"frameDelay":12,"version":"9JG_F7Hq76WjdoqjZGr9SdXNbjy7U8_q","loadedFromSource":true,"saved":true,"sourceSize":{"x":666,"y":638},"rootRelativePath":"assets/39879dc3-5c10-4aab-901e-993e0c0ec13c.png"},"6ca22de0-cc68-455a-aa1f-271a0e144f5f":{"name":"estrada","sourceUrl":null,"frameSize":{"x":556,"y":556},"frameCount":1,"looping":true,"frameDelay":12,"version":"WEUQ4I6xh_NGJlaj3owVFJuCel1oQ25g","loadedFromSource":true,"saved":true,"sourceSize":{"x":556,"y":556},"rootRelativePath":"assets/6ca22de0-cc68-455a-aa1f-271a0e144f5f.png"},"a352ad3c-6baf-4e06-b342-81e6390a2f66":{"name":"recomecar","sourceUrl":null,"frameSize":{"x":612,"y":611},"frameCount":1,"looping":true,"frameDelay":12,"version":"z22np3veXijrD5sxlO2j8gZuSy1F4Dwr","loadedFromSource":true,"saved":true,"sourceSize":{"x":612,"y":611},"rootRelativePath":"assets/a352ad3c-6baf-4e06-b342-81e6390a2f66.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var estrada = createSprite(200, 200);
estrada.setAnimation("estrada");
var carro1 = createSprite(100, 200);
carro1.setAnimation("carro1");
var carro2 = createSprite(300, 200);
carro2.setAnimation("carro2");
carro1.scale = 0.6;
carro2.scale = 0.6;
var jogador = createSprite(200, 350);
jogador.setAnimation("carro");
jogador.scale = 0.6;
var inicio = createSprite(200, 200);
inicio.setAnimation("comeco");
inicio.scale = 0.8;
var recomeco = createSprite(200, 200);
recomeco.setAnimation("recomecar");
recomeco.scale = 0.8;
recomeco.visible = false;
createEdgeSprites();
function draw() {
  drawSprites();
  jogador.bounceOff(edges);
  if (keyDown("space")) {
    carro1.velocityY = 10;
    inicio.visible = false;
    carro2.velocityY = 10;
  }
  if (carro1.y > 400) {
    carro1.y = 0;
    carro1.x = randomNumber(0, 400);
  }
  if (carro2.y > 400) {
    carro2.y = 0;
    carro2.x = randomNumber(0, 400);
  }
  if (carro1.isTouching(carro2)) {
    carro2.x = randomNumber(0, 400);
    carro2.y = 0;
  }
  if (keyDown("left")) {
    jogador.velocityX = -5;
  }
  if (keyDown("right")) {
    jogador.velocityX = 5;
  }
  if (jogador.isTouching(carro1)) {
    recomeco.visible = true;
  }
  if (jogador.isTouching(carro2)) {
    recomeco.visible = true;
  }
  if (mousePressedOver(recomeco)) {
    recomeco.visible = false;
  }
  if (!keyDown("left") && !keyDown("right")) {
    jogador.velocityX = 0;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
