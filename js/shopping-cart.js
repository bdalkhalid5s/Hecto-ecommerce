//  JavaScript for quantity increment and decrement product 1
// Get references to the buttons and the input field

// Get references to all quantity divs
var quantityDivs = document.querySelectorAll('.quantity');

// Loop through each quantity div
quantityDivs.forEach(function(quantityDiv) {
    // Get references to the buttons and the input field within each quantity div
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var resultInput = document.getElementById("result");

    // placeholder value
    var placeholder = 1;

    // click event listeners to the minus
    button1.addEventListener("click", function() {
        // subtracting 1 from the value if it's greater than 1
        if (placeholder > 1) {
            placeholder -= 1;
            resultInput.placeholder = placeholder;
        }
    });

    button2.addEventListener("click", function() {
        // adding 1 to the value
        placeholder += 1;
        resultInput.placeholder = placeholder;
    });
});