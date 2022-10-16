const posts = [{
        title: 'post one',
        body: 'This is post one'
    },
    {
        title: 'post two',
        body: 'This is post two'
    }
];

//Outpuits the posts
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)
}

//Creates new posts
function createPost(post) {
    const promise =  new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error: something is wrong')
            };
        }, 2000);
    });
    console.log("promise returned")
    return promise;
}

//We then need to output the posts and update it whenever new posts
//are created:
async function init() {
    await createPost(
        {title: 'post three', body: 'this is post three'}
    );
    getPosts();
    console.log('post updated')
}
init();

        //Can also be done like this:
        // createPost(
        //     {title: 'post three', body: 'this is post three'}
        // )
        // .then(getPosts)
        // .catch(err => console.log(err));

        //theres also Promise.all

//Async and await with fetch
async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = response.json();
    console.log(data)
}
fetchUsers();