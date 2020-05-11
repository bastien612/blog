(function ($) {
  colorMenu($);

  if ($(window).width() > 750) {
    animatePieces($);
    assembleLogo($);
  }
})(jQuery);

function assembleLogo($) {
  var tl = new TimelineLite();
  const mainLogo = $(".main-cover-logo").first();

  tl.set("#logo-assembling", {
    opacity: 0.8,
  });

  $("polygon").each(function (index, el) {
    tl.from(
      el,
      {
        x: rndShardCoord(400, 800),
        y: rndShardCoord(400, 800),
        rotation: rndShardCoord(1, 2) * 360,
        scale: rndShardCoord(1, 2) * 2,
        ease: "power4.out",
        transformOrigin: "center center",
        duration: 2,
      },
      "polygon"
    );

    tl.to(
      el,
      {
        autoAlpha: 0,
        duration: 1,
      },
      "fade"
    );
  });
  tl.from(
    mainLogo,
    {
      opacity: 0,
      duration: 1,
    },
    "fade"
  );
  tl.play();
}

function getRandWithSignBetween(absoluteMin, absoluteMax) {
  const amplitude = absoluteMax - absoluteMin;
  const value = Math.floor(rndPosNeg() * amplitude);
  return min + value;
}

function rndPosNeg() {
  return Math.random() * 2 - 1;
}
function rndShardCoord(absoluteMin, absoluteMax) {
  const amplitude = absoluteMax - absoluteMin;
  const rndSign = rndPosNeg();
  return rndSign > 0
    ? absoluteMin + rndSign * amplitude
    : -absoluteMin - rndSign * amplitude;
}

function colorMenu($) {
  let oldSelected = undefined;
  const tabsName = ["home", "action", "member", "news", "contact"];
  const selectedItem = $(".current_page_item");
  const tabs = [];
  tabsName.forEach((itemName) =>
    tabs.push([itemName, $(".menu-" + itemName + "-link")])
  );

  tabs.forEach((element) => {
    if (selectedItem.text() == element[1].text()) {
      selectedItem.addClass("selected-" + element[0] + "-link");
      if (oldSelected) {
        oldSelected[1].removeClass("selected-" + oldSelected[0] + "-link");
      }
      oldSelected = selectedItem;
    }
  });
}

function animatePieces($) {
  initTimeLine(".piece1");
  initTimeLine(".piece2");
  initTimeLine(".piece3");
  initTimeLine(".piece4");
  initTimeLine(".piece5");
  initTimeLine(".piece6");
}

function initTimeLine(piece) {
  const tl = gsap.timeline({ repeat: -1, delay: 0 });
  let sign = Math.random() < 0.5;

  let i;
  for (i = 0; i < 8; i++) {
    sign ? addMoveUp(tl, piece) : addMoveDown(tl, piece);
    sign = !sign;
  }
  addMoveToStartingPlace(tl, piece);

  tl.play();
}

function addMoveToStartingPlace(timeline, name) {
  timeline.to(name, {
    x: 0,
    y: 0,
    duration: 6,
    ease: "power1.inOut",
  });
}

function addMoveUp(timeline, name) {
  addMove(timeline, name, false);
}

function addMoveDown(timeline, name) {
  addMove(timeline, name, true);
}

function addMove(timeline, name, ySign) {
  const x = calcNewX();
  const y = calcNewY();
  const duration = getRandBetween(3, 6);

  timeline.to(name, {
    x: x,
    y: ySign ? y : -y,
    duration: duration,
    ease: "power1.inOut",
  });
}

function calcNewX() {
  return calcNewCoord(5, 10);
}

function calcNewY() {
  return getRandBetween(15, 35);
}

function calcNewCoord(min, max) {
  const sign = Math.random();
  const value = getRandBetween(min, max);
  return sign < 0.5 ? value : -value;
}

function getRandBetween(min, max) {
  const amplitude = max - min;
  const value = Math.floor(Math.random() * amplitude);
  return min + value;
}
