import { extraBlogs } from "./sub-js/data.js"
const get = id => document.querySelector(id)

const handClickBlog = () => {
    const blogs = document.querySelectorAll('.blog')
    
    blogs.forEach(blog => {
        blog.addEventListener('click', ()=>{
            const blogId = blog.dataset.id 
            const clickedBlog = extraBlogs.find(blog => blog.id === blogId)
            
            window.location.href = `blog.html?id=${clickedBlog.id}`
        })
    })
}

//on render
handClickBlog()


if (window.location.pathname === '/main.html') {
get('.more-blogs-btn').addEventListener('click', () =>{
extraBlogs.forEach(((blog)=>{
    const {id, img, date, description} = blog
    const displayedBlogs = ['One', 'Two', 'Three']

    if(!displayedBlogs.includes(id)){
        get('.blogs').innerHTML +=`
        <div class="blog grid" data-id=${id}>
        <img src=${img} alt="Blog Picture">
        <p class="date">${date}</p>
        <h3>Blog ${id}</h3>
        <p>${description}</p>
        </div>
        `
    }
    get('.more-blogs-btn').style.display = 'none'
    //after blogs rendered
    handClickBlog()
}))
})
}