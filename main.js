"use strict"

//BELOW IS FROM EXISTING CODE. MOVING ALL VARS (GLOBAL) UP TOP FOR READABILITY? I DON"T KNOW. IT MADE SENSE AT THE TIME!!
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
/* ARE WE USING THESE???
let allLight = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
]

let allMedium = [
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
]

let allDark = [
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
]
*/

//CASEY CODE BELOW//
var coffeeList = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

renderCoffees(coffees);


submitButton.addEventListener('click', updateCoffees);


// COFFEES//

function renderCoffee(coffee) {    //classList
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    var p = document.createElement('h5');
    h3.innerText = coffee.name;
    p.innerText = coffee.roast;

    div.appendChild(h3);
    h3.appendChild(p);

    return div;
}

function renderCoffees(coffees) {
    for(var i = coffees.length - 1; i >= 0; i--) {
        coffeeList.appendChild(renderCoffee(coffees[i]));
    }

}
//END CASEY'S CODE THAT I STILL DON"T COMPLETELY UNDERSTAND BUT NOT SMART ENOUGH TO REFACTOR//

function updateCoffees(e) {   //same format for searching for name
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeList.appendChild(renderCoffees(filteredCoffees));
    console.log(coffeeList);
}

//          START AUTOCOMPLETE CODE   --- STILL WORKING ON MAKING THE SECOND TEXT INPUT SEARCHABLE ---

function searchBar() {

    var input, filter, tbody, div, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    tbody = document.getElementById("coffees");
    div = tbody.getElementsByTagName('div');   //TBODY?


    // FOR LOOP TO SORT THROUGH ITEMS IN AUTOCOMPLETE

    for (var i = 0; i < div.length; i++) {
        txtValue = div[i].textContent || div[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }
}

//           END AUTOCOMPLETE

/*var coffeeName = document.getElementById('coffeeName').value;

var actualCoffeeArray = coffees;

if (localStorage.getItem('coffees') !== null){
    actualCoffeeArray = JSON.parse(localStorage.getItem('coffees'));
}

actualCoffeeArray.push({id: coffees.length + 1, name: coffeeName, roast: roastSelect});
*/

/*
// ALL BELOW IS THE START OF JS SKELETON JUST BECAUSE I GOT TIRED OF BEING ON THE HTML PAGE
// INCOMPLETE

var allLight
var allMedium
var allDark
var allSpecial
var allSmallSize
var allMediumSize
var allLargeSize

*/
