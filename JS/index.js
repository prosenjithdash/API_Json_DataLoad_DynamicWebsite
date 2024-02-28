
// 33-5 Dynamically Display Loaded Data On Your Website

function dynamicallyLoadUserData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayDaynamicData(data))
}

// Display function

function displayDaynamicData(data) {

    // // console.log(data)

    // // use for of

    // for (const object of data) {

    //     // show all objects data
    //     console.log(object)

    //     // show all objects data name
    //     console.log(object.email)
    //     }

    // get ul with id
    const ul = document.getElementById('ul_list');
   
    // use for of loop for createElement list
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }

    
}