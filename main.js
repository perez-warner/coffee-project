"use strict"

//BELOW IS FROM EXISTING CODE. MOVING ALL VARS (GLOBAL) UP TOP FOR READABILITY? I DON"T KNOW. IT MADE SENSE AT THE TIME!!
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
//VAR COFFEES ARRAY OF OBJECTS WITH PROPERTIES OF ID, NAME, ROAST
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
/*
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

//THE BELOW QUERYSELECTORS ARE GRABBING THE FIRST ELEMENT IN THE DOCUMENT FROM THE ID(#)

var coffeeList = document.querySelector('#coffees');
var searchBtn = document.querySelector('#search-btn');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSelection = document.querySelector('#coffee-input');
var search = document.querySelector('#search')
var dropdown = document.querySelector('#dropdown')

// renderCoffees(coffees);





// COFFEES//
/*
function renderCoffee(coffee) {    //classList
    var div = document.createElement('div');
    var coffeeName = document.createElement('div');
    var coffeeRoast = document.createElement('div');
    coffeeName.innerText = coffee.name;
    coffeeRoast.innerText = coffee.roast;
    coffeeRoast.style.color = 'grey';
    coffeeName.style.fontSize = '2em';

    coffeeName.style.display = 'inline';
    coffeeRoast.style.display = 'inline';

    div.setAttribute('data-id', coffee.id);
    div.appendChild(coffeeName);
    div.appendChild(coffeeRoast);
    return div;
}

 */
//STRING LITERAL ' ' is the string text. $ is the start of the expression.
function renderCoffee(coffee) {
    return `<h3 class="header">${coffee.name}</h3> <!-- I SEE THIS IN THE BROWSER BUT WHY NOT IN THE ACTUAL HTML??? -->
            <p>${coffee.roast}</p>`
}


// function renderCoffees(coffees) {
//   /*  coffees = coffees.sort((a,b) => {return b.id - a.id;});
//     console.log(coffees); */
//     var html = '';
//     for(var i = 0; i < coffees.length - 1; i++) {
//         html += (renderCoffee(coffees[i]));
//     }
//     return html;
// }


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//REDUCE - The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
//STRINGBUILDER - StringBuilder objects are like String objects, except that they can be modified.
//???IS THIS CREATING coffee?
function renderCoffees(coffees) {
   const coffeesHtml = coffees.reduce((stringBuilder, coffee) => {
        return stringBuilder.concat(renderCoffee(coffee))
    }, '')
    return coffeesHtml;
}

//innerHTML property sets or returns the HTML content (inner HTML) of an element.
function updateCoffees(e) {   //same format for searching for name according to Zach
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees;
        if (selectedRoast === 'All') {
           filteredCoffees = coffees;
        }else {
            filteredCoffees = filterByRoast(selectedRoast.toLowerCase())
        }
    coffeeList.innerHTML = renderCoffees(filteredCoffees);

}
//The filter() method creates an array filled with all array elements that pass a test (provided as a function).
function filterByName(value) {
    return coffees.filter(coffee => coffee.name.toLowerCase().search(value) > -1)
}

function filterByRoast(value) {
    return coffees.filter(coffee => {
        return   coffee.roast.toLowerCase().search(value) > -1
    })

}
//e = event object being passed
//e.target = The target event property returns the element that triggered the event.
// The target property gets the element on which the event originally occurred
//e.target.value gives the value of the target event
//innerHTML property sets or returns the HTML content (inner HTML) of an element.
function searchQuery(e) {
    const searchString = e.target.value;
    coffeeList.innerHTML = renderCoffees(filterByName(searchString))
}


console.log(coffeeList);
coffeeList.innerHTML = renderCoffees(coffees)
searchBtn.addEventListener('click', updateCoffees);

search.addEventListener('keyup', searchQuery);

dropdown.addEventListener('mouseover', updateCoffees);


// FILTER ROAST SEARCH ///
// WHEN ROAST IS SELECTED, WE NEED ONLY THE COFFEES IN THAT ROAST TO AUTOPOPULATE IN SEARCH
// ??? USE VARS FOR LIGHT/MED/DARK TO RUN


//          START AUTOCOMPLETE CODE   --- STILL WORKING ON MAKING THE SECOND TEXT INPUT SEARCHABLE ---
/*
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

*/

//           END AUTOCOMPLETE

/*var coffeeName = document.getElementById('coffeeName').value;

var actualCoffeeArray = coffees;

if (localStorage.getItem('coffees') !== null){
    actualCoffeeArray = JSON.parse(localStorage.getItem('coffees'));
}

actualCoffeeArray.push({id: coffees.length + 1, name: coffeeName, roast: roastSelect});
*/

/*


*/
