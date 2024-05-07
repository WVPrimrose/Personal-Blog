// Defining variables in HTML file
const allBlog = document.getElementById('all-blogs')
// Gets the blog object from the first JavaScript file through JSON parsing
const blogItems = JSON.parse(localStorage.getItem('blog'))

// creates a for-loop to create HTML elements:
for (let i = 0; i < blogItems.length; i++) {
    console.log(blogItems[i]);
    // creates div container for each new blog entry
    const newBlog = document.createElement('div');
    newBlog.setAttribute('style', 
    'border: 3px solid #ffffff; margin-top: 10px;'
    );
    // creates h2 element for each username
    const username = document.createElement('h2');
    username.textContent = blogItems[i].name
    username.setAttribute(
        'style',
        'font-size: 35px; font-wieght: bold; color: #006400; background-color: #ffffff;'
    );
    newBlog.appendChild(username);
    // creates h3 element for each Blog Title
    const blogTitle = document.createElement('h3');
    blogTitle.textContent = blogItems[i].title
    blogTitle.setAttribute(
        'style',
        'font-size: 30px; color: #000080; background-color: #ffffff;'
    );
    newBlog.appendChild(blogTitle);    
    // create p element for each Blog Content
    const blogContent = document.createElement('p');
    blogContent.textContent = blogItems[i].content
    
    newBlog.appendChild(blogContent);
    // Creates new dive section to each subsequent blog div
    allBlog.appendChild(newBlog);
    }

const themeSwitcher = document.getElementById('theme-switcher')
const container = document.querySelector('.container')
let mode = 'light';
    themeSwitcher.addEventListener('click', function (){
        // If the mode is light, apply dark background
         if (mode === 'light') {
             mode = 'dark';
             container.setAttribute('class', 'dark');
         }
        //  If the mode is dark, apply light background
         else {
             mode = 'light';
             container.setAttribute('class', 'light');
          }
      })