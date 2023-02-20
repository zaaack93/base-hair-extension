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

  // Check for clicks on the button
  $(document).on('click', '.submit', function () { 
    setTimeout(function () { 
            document.dispatchEvent(
    new CustomEvent('theme:resize', {
      bubbles: true,
    })
  )
    },50)
  }); 

  // document.dispatchEvent(
  //   new CustomEvent('theme:resize', {
  //     bubbles: true,
  //   })
  // )

  // ^^ Keep your scripts inside this IIFE function call to 
  // avoid leaking your variables into the global scope.
})();
