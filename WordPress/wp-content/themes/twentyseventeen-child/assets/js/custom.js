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
  console.log("GSAP ? :", gsap);
  const tl = gsap.timeline();
  const piece1 = $(".piece1").first();
  const xLeft = piece1.position().left;
  console.log("piece1 : ", piece1);
  console.log("xLeft : ", xLeft);
  tl.to(".piece1", { x: xLeft + 100, duration: 5, ease: "power4" });

  tl.play();
}

function movePiece($, pieceName) {
  const piece = $(pieceName);
  console.log("GSAP ? :", gsap);
}
