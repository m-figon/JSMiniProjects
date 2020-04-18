const button = document.querySelector('button');
const name = document.querySelector('#name');
const nickname = document.querySelector('#nickname');

const createDiv =(elem1,elem2)=>{
  const post = document.createElement('div');
      post.className="post";
      const title = document.createElement('h2');
      const postContent = document.createElement('h1');
      title.textContent = elem1;
      postContent.textContent = elem2;
      post.appendChild(title);
      post.appendChild(postContent);
      app.appendChild(post);
}
const app = document.querySelector(".app");
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    json.map((element)=>{
      createDiv(element.name,element.username);
    })
  })
button.addEventListener('click',()=>{
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify({
      title: name.value,
      body: nickname.value,
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => {
    createDiv(json.title,json.body);
    })
})

 
  //zrob teraz tak jak on i drukuj zawartosc i dodawaj za pomoca formularza