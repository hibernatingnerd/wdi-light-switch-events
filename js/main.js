document.addEventListener('DOMContentLoaded', function() {

  var switchSwap = document.querySelector('button.switch.on');
  // function flipTheSwitch() {
  //   if (switchSwap.className="switch on") {
  //     switchSwap.className="switch off";
  //   } else if {
  //     switchSwap.className="switch on";
  //   }
  // }
  switchSwap.addEventListener('click', function() {
    if (switchSwap.className === "switch on") {
      switchSwap.className = "switch off";
      document.querySelector('body').className = "dark";
      document.querySelector('body .status').innerHTML = "My gosh it's pretty dark in here.";

    } else if (switchSwap.className === "switch off") {
      switchSwap.className = "switch on";
      document.querySelector('body .status').innerHTML = "It's so bright in here!";
      document.querySelector('body').className = "light";
    }
  });

});
