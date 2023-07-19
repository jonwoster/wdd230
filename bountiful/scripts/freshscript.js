//Get fruit info via API
const fruit1 = document.querySelector('#fruit1');
const fruit2 = document.querySelector('#fruit2');
const fruit3 = document.querySelector('#fruit3');
let fruitdata = [];
let nutrients = new Map();

// set JSON location
const fruiturl = "https://brotherblazzard.github.io/canvas-content/fruit.json";

// fetch the data
async function apiFruitFetch() {
    try {
      const response = await fetch(fruiturl);
      if (response.ok) {
        fruitdata = await response.json();
        //console.log("this is the fruitdata ", fruitdata); // Debugging only
        //call the function which sets the pulldown selection options, sending the data from API
        populateFruitSelection(fruitdata);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

// function which populates the options for selecting in the Fresh order form
function populateFruitSelection(fruitdata) {

    // loop through each of the items in the fruitdata that came from API
    for (item in fruitdata) {
        // Create an option for each of the three pulldowns
        const newOption1 = document.createElement("option");
        const newOption2 = document.createElement("option");
        const newOption3 = document.createElement("option");

        // Set the text for each of the new options we just created
        newOption1.textContent = `${fruitdata[item].name}`;
        newOption2.textContent = `${fruitdata[item].name}`;
        newOption3.textContent = `${fruitdata[item].name}`;
        // console.log("fruitdata[item].name= ", `${fruitdata[item].name}`);   // Debug only

        // Append the new options inside of the select elements
        fruit1.appendChild(newOption1);
        fruit2.appendChild(newOption2);
        fruit3.appendChild(newOption3);

        // Fill in the map with the nutrient info per fruit for easy access later on
        nutrients.set(`${fruitdata[item].name}`, { calories: `${fruitdata[item].nutritions.calories}`, carbohydrates: `${fruitdata[item].nutritions.carbohydrates}`,
        fat: `${fruitdata[item].nutritions.fat}`, protein: `${fruitdata[item].nutritions.protein}`, sugar: `${fruitdata[item].nutritions.sugar}`});
    };
    console.log("nutrients = ", nutrients);  //debug only
}
// Call the function which fetches the API data
apiFruitFetch();


//  **************** Capture data when form is submitted     *********************************** 

// Create variables that hold references to the data in the form
const buttonvariable = document.querySelector('#freshbutton');  // the button
const fruit1var = document.querySelector('#fruit1');
const fruit2var = document.querySelector('#fruit2');
const fruit3var = document.querySelector('#fruit3');
const fnamevar = document.querySelector('#fname');
const emailvar = document.querySelector('#email');
const phonevar = document.querySelector('#phone');
const instructionsvar = document.querySelector('#instructions');
const submittime = document.querySelector('#time');
const nutritionalulvar = document.querySelector('.nutritionalul');
let totalprotein = 0.0;
let totalfat = 0.0;
let totalcalories = 0.0;
let totalsugar = 0.0;
let totalcarbs = 0.0;

buttonvariable.addEventListener('click', () => {
    // assign date value to the date variable
    const datevar = new Date();
    const currentdate = "Order Date: " + new Intl.DateTimeFormat('en-US').format(datevar);

    calculatenutrients(fruit1var.value, fruit2var.value, fruit3var.value);

    // assign values to other variables
    const currentname = "First name: "+ fnamevar.value;
    const currentemail = "Email: " + emailvar.value;
    const currentphone = "Phone: " + phonevar.value;
    const currentinstructions = "Instructions: " + instructionsvar.value;
    const currentfruit1 = "Fruit 1: " + fruit1var.value;
    const currentfruit2 = "Fruit 2: " + fruit2var.value;
    const currentfruit3 = "Fruit 3: " + fruit3var.value;
    const currentcarbs = "Carbs: " + totalcarbs +" grams";
    const currentfat = "Fat: " + totalfat +" grams";
    const currentcalories = "Calories: " + totalcalories;
    const currentsugar = "Sugar: " + totalsugar +" grams";
    const currentprotein = "Protein: " + totalprotein +" grams";

    // Create the li and span elements
    const nameli = document.createElement("li");
    const namespan = document.createElement('span');
    const emailli = document.createElement("li");
    const emailspan = document.createElement('span');
    const phoneli= document.createElement("li");
    const phonespan = document.createElement('span');
    const fruit1li = document.createElement("li");
    const fruit1span = document.createElement("span");
    const fruit2li = document.createElement("li");
    const fruit2span = document.createElement("span");
    const fruit3li = document.createElement("li");
    const fruit3span = document.createElement("span");
    const dateli = document.createElement("li");
    const datespan = document.createElement("span");
    const carbsli = document.createElement("li");
    const carbspan = document.createElement("span");
    const proteinli = document.createElement("li");
    const proteinspan = document.createElement("span");
    const fatli = document.createElement("li");
    const fatspan = document.createElement("span");
    const sugarli = document.createElement("li");
    const sugarspan = document.createElement("span");
    const caloriesli = document.createElement("li");
    const caloriesspan = document.createElement("span");
  
    // Set the textContent of the spans that we created to be the variables that hold the input values
    namespan.textContent = currentname;
    emailspan.textContent = currentemail;
    phonespan.textContent = currentphone;
    fruit1span.textContent = currentfruit1;
    fruit2span.textContent = currentfruit2;
    fruit3span.textContent = currentfruit3;
    datespan.textContent = currentdate;
    carbspan.textContent = currentcarbs;
    fatspan.textContent = currentfat;
    sugarspan.textContent = currentsugar;
    caloriesspan.textContent = currentcalories;
    proteinspan.textContent = currentprotein;

    // append the spans to the li elements
    dateli.appendChild(datespan);
    nameli.appendChild(namespan);
    emailli.appendChild(emailspan);
    phoneli.appendChild(phonespan);
    fruit1li.appendChild(fruit1span);
    fruit2li.appendChild(fruit2span);
    fruit3li.appendChild(fruit3span);
    carbsli.appendChild(carbspan);
    fatli.appendChild(fatspan);
    sugarli.appendChild(sugarspan);
    caloriesli.appendChild(caloriesspan);
    proteinli.appendChild(proteinspan);

    // append the li elements to the ul where we want them to display
    nutritionalulvar.appendChild(dateli);
    nutritionalulvar.appendChild(nameli);
    nutritionalulvar.appendChild(emailli);
    nutritionalulvar.appendChild(fruit1li);
    nutritionalulvar.appendChild(fruit2li);
    nutritionalulvar.appendChild(fruit3li);
    nutritionalulvar.appendChild(carbsli);
    nutritionalulvar.appendChild(fatli);
    nutritionalulvar.appendChild(sugarli);
    nutritionalulvar.appendChild(caloriesli);
    nutritionalulvar.appendChild(proteinli);

    // If there is a value for special instructions, then include that as well. If empty, don't show it.
    if (instructionsvar.value) {
        const instructionsli = document.createElement("li");
        const instructionsspan = document.createElement("span");
        instructionsspan.textContent = currentinstructions;
        instructionsli.appendChild(instructionsspan);
        nutritionalulvar.appendChild(instructionsli);
    }

    // call function to increment the local storage for the count of drinks ordered
    storedrinkinfo();
});

// Function gets the fruit names from the calling function and then calculates total nutrients
function calculatenutrients(fruit1name, fruit2name, fruit3name) {
    //Using the map which was created for nutrients, get the nutrients for each fruit selected
    const fruit1nutrients = nutrients.get(`${fruit1name}`);
    const fruit2nutrients = nutrients.get(`${fruit2name}`);
    const fruit3nutrients = nutrients.get(`${fruit3name}`);

    //Get totals for each type of nutrient
    totalprotein = Number(fruit1nutrients.protein) + Number(fruit2nutrients.protein) + Number(fruit3nutrients.protein);
    // console.log("totalprotein", totalprotein);
    totalfat= Number(fruit1nutrients.fat) + Number(fruit2nutrients.fat) + Number(fruit3nutrients.fat);
    totalcalories= Number(fruit1nutrients.calories) + Number(fruit2nutrients.calories) + Number(fruit3nutrients.calories);
    totalsugar= Number(fruit1nutrients.sugar) + Number(fruit2nutrients.sugar) + Number(fruit3nutrients.sugar);
    totalcarbs= Number(fruit1nutrients.carbohydrates) + Number(fruit2nutrients.carbohydrates) + Number(fruit3nutrients.carbohydrates);
}

// Function uses local storage to increment the running tally of drinks ordered. This should only be called when 
// a drink has been ordered.
function storedrinkinfo() {
    // Get the drinks ordered from local storage
    let drinksordered= Number(localStorage.getItem("fresh-drinkcounter-ls"));
    //console.log("drinksordered after getItem= ", drinksordered);  //Debug only

    // If it exists, then increment it to show an additional drink was ordered and save it to local storage
    if (drinksordered) {
        //drinks were ordered in the past so just add one to it
        drinksordered = drinksordered + 1;
    } else {
        //drinks were apparently not ordered in the past so, consider this the first drink ordered
        drinksordered = 1;
    }
    //console.log("drinks ordered after if else = ", drinksordered);  //Debug only
    localStorage.setItem("fresh-drinkcounter-ls", drinksordered);
}






