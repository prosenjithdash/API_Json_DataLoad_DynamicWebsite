
//33-6 Load Posts And Display On The Website With CSS


function loadPostData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPostData(data))
}


/*

1. get the container element where we want to add new elements
2. create childElement
3. set innerText or innerHTML
4. appenChild

*/
function displayPostData(posts) {
  
    const postContainer = document.getElementById('post_container');

    for (const post of posts) {
        console.log(post)
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')

        postDiv.innerHTML = `
            <h4>User: ${post.userId}</h4>
            <h5>Post: ${post.title}</h5>
            <p> Post Description: ${post.body}</p>
        `
        postContainer.appendChild(postDiv)
        

    }
}

loadPostData();