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
fetch('http://localhost:3000/posts')
  .then(response => response.json())
  .then(json => {
    json.map((element)=>{
      createDiv(element.user,element.title);
    })
  })
button.addEventListener('click',()=>{
  fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify({
      user: name.value,
      title: nickname.value,
      post: '',
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

 