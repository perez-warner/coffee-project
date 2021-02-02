"use strict"


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// VAR COFFEES IS AN ARRAY OF OBJECTS WITH PROPERTIES OF ID, NAME, ROAST
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

//THE BELOW QUERYSELECTORS ARE GRABBING THE FIRST ELEMENT IN THE DOCUMENT FROM THE ID(#)
var coffeeList = document.querySelector('#coffees');
var searchBtn = document.querySelector('#search-btn');
var roastSelection = document.querySelector('#roast-selection');
var search = document.querySelector('#search');
var addBtn = document.querySelector('#add-btn');

coffeeList.innerHTML = renderCoffees(coffees)
searchBtn.addEventListener('click', updateCoffees);
search.addEventListener('keyup', searchQuery);
const dropDown = document.getElementById('roast-selection');
dropDown.addEventListener('change', searchRoast)
addBtn.addEventListener('click' , newCoffee);


// renderCoffees(coffees);


function renderCoffee(coffee) {
    return `<h3>${coffee.name}</h3> 
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

// REDUCE - The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
// STRINGBUILDER - StringBuilder objects are like String objects, except that they can be modified. (NOTE STRINGBUILDER IS A JAVA CONCEPT THAT WE ARE MIMICKING HERE IN JS)
function renderCoffees(coffees) {
   const coffeesHtml = coffees.reduce((stringBuilder, coffee) => {
        return stringBuilder.concat(renderCoffee(coffee))
    }, '')
    return coffeesHtml;
}
// innerHTML property sets or returns the HTML content (inner HTML) of an element.
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
        const coffeeRoast = coffee.roast.toLowerCase();
        const selectedRoast = value.toLowerCase();
        const coffeeResult = coffeeRoast.search(selectedRoast)
        return coffeeResult > -1
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
function searchRoast(e) {
    const searchRoastString = e.target.value;
    coffeeList.innerHTML = renderCoffees(filterByRoast(searchRoastString))
}

function newCoffee(e){
    e.preventDefault();
    let addedCoffee = document.querySelector('#addCoffeeName');
    let addedRoast = document.querySelector('#add-roast')
    let newobj = {
        id: coffees.length + 1,
        name: addedCoffee.value,
        roast: addedRoast.value
    }
    coffees.unshift(newobj);
    coffeeList.innerHTML = renderCoffees(coffees);
    }





// HIDDEN MESSAGE IN CONSOLE //
console.log('you found it! Enter CODE:TimeVortex in your cart to unlock our secret roast')


/*var coffeeName = document.getElementById('coffeeName').value;

var actualCoffeeArray = coffees;

if (localStorage.getItem('coffees') !== null){
    actualCoffeeArray = JSON.parse(localStorage.getItem('coffees'));
}

actualCoffeeArray.push({id: coffees.length + 1, name: coffeeName, roast: roastSelect});
*/

/*


*/
/*
function addCoffees(e) {   //same format for searching for name according to Zach
    e.preventDefault();
    var addedRoast = addRoast
    var filteredCoffees;
        if (addedRoast === 'All') {
        filteredCoffees = coffees;
    }else {
        filteredCoffees = filterByRoast(addedRoast.toLowerCase())
}


coffeeList.innerHTML = renderCoffees(filteredCoffees);

}

 */