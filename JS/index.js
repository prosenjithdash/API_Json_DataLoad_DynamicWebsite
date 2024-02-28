
// 33-5 Dynamically Display Loaded Data On Your Website

function dynamicallyLoadUserData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayDaynamicData(data))
}

function displayDaynamicData(data) {

    // // console.log(data)

    // // use for of

    // for (const object of data) {

    //     // show all object
    //     console.log(object)

    //     // show object name
    //     console.log(object.email)
    //     }

    const ul = document.getElementById('ul_list');
   

    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }

    
}