const nameInput = document.getElementById('username')
const titleInput = document.getElementById('blog-title')
const contentInput = document.getElementById('comment')

const blog = {
    name: name,
    title: title,
    content: content,
}

localStorage.getItem('blog', JSON.stringify(blog))

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