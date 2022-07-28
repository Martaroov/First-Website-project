async function getPosts() {
    // API: https:/jsonplaceholder.typicode.com/posts

    // GET
    const res = await fetch('https:/jsonplaceholder.typicode.com/posts');
    const finalRes = await res.json();
    

    //GET images
    const resImg = await fetch('https:/jsonplaceholder.typicode.com/photos');
    const finalResImg = await resImg.json();
    paintHTML(finalRes, finalResImg)
}


getPosts()

//shorten string
/*function truncateString(getPosts,num) {
    if (getPosts.length <= num) {
      return getPosts
    }
    return getPosts.slice(0, num) + '...'
  }
  
  truncateString('Sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 8);
*/

// Pintar HTML
// getElementById, querySelector, getElementByClassName

function paintHTML(posts, images) {

    const projects = document.querySelectorAll('.projects');
    for(let i = 0; i< projects.length; i++) {
        projects[i].childNodes[1].firstChild.setAttribute('src', images[i].url) 
        projects[i].childNodes[3].innerText = posts[i].title
        projects[i].childNodes[5].innerText = posts[i].body
    }
    
}

// POST

const subscribeButton = document.querySelector('#subscribe');
subscribeButton.addEventListener('click', subscribe);
const alert = document.querySelector('#alert');

async function subscribe() {
    const email = document.getElementById('email').value;
    if(email.length > 0) {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email:email
            })
        });
        const finalRes = await res.status;
        if(finalRes === 201) {
            alert.classList.remove('hidden');
        alert.innerText = `Tu email se ha guardado con éxito. Bienvenido, ${email}`
        }
    } else {
        alert.classList.remove('hidden');
        alert.innerText = 'Por favor, escribe algo'
    }
}