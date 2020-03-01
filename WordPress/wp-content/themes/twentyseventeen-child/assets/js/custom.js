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
})(jQuery);
