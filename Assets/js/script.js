const button = document.querySelector('#submit')
const nameInput = document.getElementById('username')
const titleInput = document.getElementById('blog-title')
const contentInput = document.getElementById('comment')
const themeSwitcher = document.querySelector
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
function submitBlog(event) {
    event.preventDefault();  
    const localBlog = JSON.parse(localStorage.getItem('blog', JSON)) || [];
    const name = nameInput.value
    const title = titleInput.value
    const content = contentInput.value
    const blog = {
      name: name,
      title: title,
      content: content,
    }
    localBlog.push(blog);
    console.log(name)
    console.log(title)
    console.log(content)
  localStorage.setItem('blog', JSON.stringify(localBlog));
  window.location.href = 'blog-posts.html'
}

button.addEventListener('click', submitBlog);

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
