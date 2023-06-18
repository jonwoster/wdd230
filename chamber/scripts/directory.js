const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");


// When the user clicks on the grid button apply the grid class styling to the article ("display")
gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
  //Change appearance of the grid vs list buttons to show which is active
  gridbutton.classList.add("gridactive");
  listbutton.classList.remove("listactive");
});

// When the user clicks on the list button apply the list class styling to the article ("display")
listbutton.addEventListener("click", showList); 
function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
  //Change appearance of the grid vs list buttons to show which is active
  gridbutton.classList.remove("gridactive");
  listbutton.classList.add("listactive");
}


// Logic and function for when we want to load the data from API
const url = './json/data.json';

async function getcards() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.companies);  // for debugging
    displaycards(data.companies);
}
  
const displaycards = (companies) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    companies.forEach((company) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      //let h2 = document.createElement('h2');
      let logoimage = document.createElement('img');
      let busname = document.createElement('p');
      let busaddress = document.createElement('p');
      let busphone = document.createElement('p');
      let buswebsite = document.createElement('a');
  
      busname.textContent = `${company.name}`;
      busaddress.textContent = `${company.address}`;
      busphone.textContent = `${company.phone}`;
      buswebsite.textContent = `${company.website}`;

      // Set attributes for links so they work as links but don't go anywhere because they are fictional
      buswebsite.setAttribute('href', '#');

      // Set attribute for company name
      busname.setAttribute('class', 'compname');
  
      // Set attributes for logo images
      logoimage.setAttribute('src', company.image);
      logoimage.setAttribute('alt', `Logo for ${company.name}`);
      logoimage.setAttribute('loading', 'lazy');
      //logoimage.setAttribute('width', '340');
      //logoimage.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(logoimage);
      card.appendChild(busname);
      card.appendChild(busaddress);
      card.appendChild(busphone);
      card.appendChild(buswebsite);
      
      cards.appendChild(card);

    }); // end of forEach loop
  } // end of function expression

getcards();  //load the data from the API