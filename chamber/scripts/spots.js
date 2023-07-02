const display = document.querySelector(".spotsection");
const spotsurl = './json/data.json';  //location of data
let newid = ""; //used for setting a specific id on each spot
let count = 0; //used as an index for naming ids

// function to get the data from json file
async function getspots() {
    const response = await fetch(spotsurl);
    const complist = await response.json();
    //console.log("end of getspots function, complist.companies =", complist);
    cleancomplist(complist.companies); //Narrow down to silver and gold companies
}

// This function removes any companies that are non silver or gold level membership
function cleancomplist(companies) {
    //console.log("in cleancomplist before cleanup. Companies= ", companies);  //debugging only

    for (let i = 0; i < companies.length ; i++) {   //Loop through each company so we can look for silver and gold members to display
        //If membership level is not silver or gold, remove it from the list
        if (companies[i].membership != "silver" && companies[i].membership != "gold") {
            //console.log("in the if statement, removing this company: ", companies[i]);  //debugging only
            companies.splice(i, 1);
        };
    } // end of for loop

    //console.log("end of cleancomplist function, complist =", companies);
    choosethree(companies); // From the list of silver and gold companies, choose 3 random companies
}


// This function takes the list of silver and gold companies and chooses three, randomly and removes the rest
function choosethree(companies) {
  //console.log("this is the start of the choosethree function, companies= ", companies);  //debugging
  companies
  let min = 0;
  let max = companies.length;

  //keep looping until we have reduced the array to size of three
  while (companies.length > 3) {
    max = companies.length;
    min = Math.ceil(min);
    max = Math.floor(max);
    let randnum = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    console.log("random number = ", randnum);  //Debugging only
    companies.splice(randnum, 1);
  }
  //console.log("this is in choosethree function, after randomly removing the extra companies, companies= ", companies); //debugging
  
  // After we have a list of 3 companies that are silver or gold, display them
  displayspots(companies);  
}


// This function display the spots after previous functions cleaned the list and chose three random companies
function displayspots(companies)  {
    const spots = document.querySelector('div.spots'); // select the output container element
  
    companies.forEach((company) => {   //Loop through each company to display it
      count = count + 1; // increment the counter we use for naming the ids for the elements we add
      console.log("display function counter in forEach = ", count); //debugging only

      // Create elements to add to the div.spots element
      let spot = document.createElement('section');
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
  
      // Append the section(spotsection) with the created elements
      spot.appendChild(logoimage);
      spot.appendChild(busname);
      spot.appendChild(busaddress);
      spot.appendChild(busphone);
      spot.appendChild(buswebsite);

      //Set an id on each spot that we are creating
      newid = "spotnumber"+count;
      console.log("newid= ", newid); //debugging only
      spot.setAttribute('id', newid);
      
      spots.appendChild(spot);

    });  // end of forEach loop 
  } // end of displayspots function expression


getspots();  //load the data from the API
