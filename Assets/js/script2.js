const allBlog = document.getElementById('all-blogs')

const blogItems = JSON.parse(localStorage.getItem('blog'))

for (let i = 0; i < blogItems.length; i++) {
    console.log(blogItems[i]);
    const newBlog = document.createElement('div');
    newBlog.setAttribute(
        'style',
        'border: 3px solid #000000,'
    )
    const username = document.createElement('h2');
    username.textContent = blogItems[i].name
    username.setAttribute(
        'style',
        'font-size: 35px; font-wieght: bold; color: #006400; background-color: #ffffff'
    )
    newBlog.appendChild(username);
    const blogTitle = document.createElement('h3');
    blogTitle.textContent = blogItems[i].title
    blogTitle.setAttribute(
        'style',
        'font-size: 30px; color: #000080'
    )
    newBlog.appendChild(blogTitle);
    const blogContent = document.createElement('p');
    blogContent.textContent = blogItems[i].content
    
    newBlog.appendChild(blogContent);
    allBlog.appendChild(newBlog);
    }