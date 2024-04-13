let blogParts = []

//creates blog post elements
for (let i = 0; i < blogObject.length; i++) {
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
blogParts.push(blogObject)
localStorage.setItem('blogObject', JSON.stringify(blogObject));
}

//handles submit button on index.html
function submit(event) {
    event.preventDefault();
}

//light-dark mode
let mode = 'light';

themeSwitcher.addEventListener('click', function (){
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
    }
    else {
        mode = 'light';
        constainer.setAttribute('class', 'light');
    }
})
