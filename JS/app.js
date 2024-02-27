//  33-4 Load More Data, More APIs, Send Data To Function


// console.log('app js');

// Recap load data with fetch

function dataload() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

//loadUserData

// function loadUserData() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => console.log(data))
// }


// load data fetch & display functions
function loadUserData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayData(data))
}

// Display Function
function displayData(data) {
    console.log(data);
}