(function($) {
  let oldSelected = undefined;
  const tabsName = ["home", "action", "member", "news", "contact"];
  const selectedItem = $(".current_page_item");
  const tabs = [];
  tabsName.forEach(itemName =>
    tabs.push([itemName, $(".menu-" + itemName + "-link")])
  );

  tabs.forEach(element => {
    if (selectedItem.text() == element[1].text()) {
      selectedItem.addClass("selected-" + element[0] + "-link");
      if (oldSelected) {
        oldSelected[1].removeClass("selected-" + oldSelected[0] + "-link");
      }
      oldSelected = selectedItem;
    }
  });

  animatePieces($);
})(jQuery);

function animatePieces($) {
  console.log("Animation !!!");

  initTimeLine(".piece1");
  initTimeLine(".piece2");
  initTimeLine(".piece3");
  initTimeLine(".piece4");
  initTimeLine(".piece5");
}

function initTimeLine(piece) {
  const tl = gsap.timeline({ repeat: -1, delay: 0 });
  let sign = Math.random() < 0.5;
  console.log("pouet : ", sign);

  let i;
  for (i = 0; i < 8; i++) {
    console.log("Add move :", sign);
    console.log("i: ", i);
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
    ease: "power1.inOut"
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
  const duration = getRandBetween(5, 8);
  // console.log(`x: ${x}, y: ${y} , duration: ${duration}`);

  timeline.to(name, {
    x: x,
    y: ySign ? y : -y,
    duration: duration,
    ease: "power1.inOut"
  });
}

function calcNewX() {
  return calcNewCoord(5, 10);
}

function calcNewY() {
  return getRandBetween(10, 15);
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
