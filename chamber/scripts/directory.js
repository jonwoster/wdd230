// const gridbutton = document.querySelector("#grid");
// const listbutton = document.querySelector("#list");
// const display = document.querySelector("article");

// gridbutton.addEventListener("click", () => {
// 	// example using arrow function
// 	display.classList.add("grid");
// 	display.classList.remove("list");
// });

// listbutton.addEventListener("click", showList); // example using defined function

// function showList() {
// 	display.classList.add("list");
// 	display.classList.remove("grid");
// }

// **************************************************************************

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
      let buswebsite = document.createElement('p');
  
      //h2.textContent = `${prophet.name} ${prophet.lastname}`;
      busname.textContent = `${company.name}`;
      busaddress.textContent = `${company.address}`;
      busphone.textContent = `${company.phone}`;
      buswebsite.textContent = `${company.website}`;
  
      // Build the image portrait by setting all the relevant attribute
      logoimage.setAttribute('src', company.image);
      logoimage.setAttribute('alt', `Logo for ${company.name}`);
      logoimage.setAttribute('loading', 'lazy');
      //logoimage.setAttribute('width', '340');
      //logoimage.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      //card.appendChild(h2);
      card.appendChild(logoimage);
      card.appendChild(busname);
      card.appendChild(busaddress);
      card.appendChild(busphone);
      card.appendChild(buswebsite);
      
      cards.appendChild(card);

    }); // end of forEach loop
  } // end of function expression

getcards();