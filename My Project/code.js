var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

background("white");
//Feet
var feet = 340;
fill(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
regularPolygon(100, feet, 5, 50);
fill(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
regularPolygon(200, feet, 5, 50);
fill(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
regularPolygon(300, feet, 5, 50);
//body
fill(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
rect(25, 250, 350, 50);
fill(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
rect(50, 150, 300, 100);
//Face
fill("white");
var eyes = randomNumber(15, 60);
ellipse(150, 200, eyes, eyes);
ellipse(250, 200, eyes, eyes);
fill("red");
rect(randomNumber(140, 270), 240, randomNumber(1, 100), 25);
//ears
var ears = randomNumber(1, 100);
var earheight = randomNumber(1, 100);
line(randomNumber(50, 350), 150, earheight, ears);
line(randomNumber(50, 350), 150, ears, earheight);
line(randomNumber(50, 350), 150, earheight, ears);
line(randomNumber(50, 350), 150, ears, earheight);

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
