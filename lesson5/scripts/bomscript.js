// Create three variables that hold references to the input, button, and list elements using const.
const unolistvar = document.querySelector('ul');
const inputvar = document.querySelector('#favchap');
const buttonvar = document.querySelector('button');


// Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.  
// Example:  button.addEventListener('click', function() { ...
buttonvar.addEventListener('click', () => {
 
    // make sure the input is not blank before doing the following remaining tasks in this list
    if (inputvar.value.length !== 0) {

        //start off by storing the current value of the input element in a variable.
        const currvalue = inputvar.value;
        console.log("inputvar.value = ",inputvar.value);

        // create an li element
        const livar = document.createElement('li'); 

        // create a delete button
        const delbuttvar = document.createElement('button');

        const spanvar = document.createElement('span');

        // populate the li elements textContent or innerHTML with the input
        spanvar.textContent = currvalue;

        // change the input value to nothing or the empty string to clean up the interface for the user
        inputvar.value = '';

        // append the list element with the li element just created and appended with text and the delete button
        livar.appendChild(spanvar);

        // append the li element with the delete button
        livar.appendChild(delbuttvar);

        // populate the button textContent with an ❌
        delbuttvar.textContent = '❌';

        //Append the list item as a child of the list.
        unolistvar.appendChild(livar);

        // add an event listener to the delete button that removes the li element when clicked
        delbuttvar.addEventListener('click', () => {
            unolistvar.removeChild(livar);
        });

        // send the focus to the input element
        inputvar.focus();

    }
});





