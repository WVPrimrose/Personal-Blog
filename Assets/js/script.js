// This is defining the variables in the index.HTML file.
const button = document.querySelector('#submit')
const nameInput = document.getElementById('username')
const titleInput = document.getElementById('blog-title')
const contentInput = document.getElementById('comment')
const themeSwitcher = document.querySelector
let blogParts = []

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
  localStorage.setItem('blog', JSON.stringify(localBlog));
  window.location.href = 'blog-posts.html'
}

// This is adding an event listener to the submit button.
button.addEventListener('click', submitBlog);

// Accessing toggle swithc in HTML files (index and blog-posts)
//light-dark mode will be default
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
