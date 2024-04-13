const button = document.getElementById('submit')
const nameInput = document.getElementById('username')
const title = document.getElementById('blog-title')
const content = document.getElementById('comment')
let blogParts = []

//creates blog post elements
for (let i = 0; i < blogParts.length; i++) {
const username = document.createElement(h3);
const blogTitle = document.createElement(h3);
const blogContent = document.createElement(p);

username.textContent = '';
blogTitle.textContent = '';
blogContent.textContent = '';

const blogObject = {
    username: username,
    blogTitle: blogTitle,
    blogContent: blogContent,
}
}

//handles submit button on index.html
function submit(event) {
    event.preventDefault();
    const name = nameInput.value
    const bT = title.value
    const message = content.value
    console.log(name)
    console.log(bT)
    console.log(message)
}
button.addEventListener('click', submit)
//light-dark mode
let mode = 'light';

//themeSwitcher.addEventListener('click', function (){
  //  if (mode === 'light') {
    //    mode = 'dark';
      //  container.setAttribute('class', 'dark');
   // }
   // else {
     //   mode = 'light';
       // constainer.setAttribute('class', 'light');
//     }
// })
