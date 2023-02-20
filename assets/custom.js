/*
* Broadcast Theme
*
* Use this file to add custom Javascript to Broadcast.  Keeping your custom
* Javascript in this fill will make it easier to update Broadcast. In order
* to use this file you will need to open layout/theme.liquid and uncomment
* the custom.js script import line near the bottom of the file.
*/


(function() {
  // Add custom code below this line
  // Since there can be multiple elements with the class "popup-trigger", it returns an array. Putting the [0] will call the first button with the class "popup-trigger".
  var formBuilderButton = document.getElementsByClassName("submit");

  // Check for clicks on the button
  console.log(formBuilderButton)
  for(let formButton of formBuilderButton){
    formButton[0].onclick = function(e) {
      alert("clicked")
      alert(e.target.getAttribute("data-modal"));
    }
  }
  

  // document.dispatchEvent(
  //   new CustomEvent('theme:resize', {
  //     bubbles: true,
  //   })
  // )


  document.getElementsByClassName("submit")[0].onclick=function(e){
    alert("dd")
  }

  // ^^ Keep your scripts inside this IIFE function call to 
  // avoid leaking your variables into the global scope.
})();
