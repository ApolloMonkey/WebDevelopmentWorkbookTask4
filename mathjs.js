document.getElementById('mathForm').addEventListener('submit', function(event) { // Adding an event listener to the form with the id 'mathForm' when it's submitted

    var number = document.getElementById('number').value;  // Assigning the value entered in the input field


    function decimalToBinary(number) {  // creating the decimalToBinary function to convert a decimal number to binary
        if (number == 0) {  // Checking if the number is equal to 0
            return " Please select a number greater than 0";  // If the number is 0, return a message displaying that a number greater than 0 should be chosen.
        }
    
        let binary = '';  // Initializing an empty string to store the binary number
        while (number > 0) { // iterating through a while loop
            binary = (number % 2) + binary; // Calculating the remainder when divided by 2 and appending it to the left of the binary string
            number = Math.floor(number / 2); // Updating the number whn divided by 2
        }
        return binary; // returns the binary number
    }
  
    alert("The binary representation of " + number + " is: " + decimalToBinary(number)); // displaying the result on an alert

});