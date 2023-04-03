import { extraBlogs } from "../sub-js/data.js"

document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search)
  const blogId = params.get('id')
  const clickedBlog = extraBlogs.find(blog => blog.id === blogId)
  const {id, date, img, description, content} = clickedBlog

  document.querySelector('.render-blog').innerHTML = `

  <section class="home-intro">
  <div>
      <p class="date">${date}</p>
      <h1 class="spotlight-title">Blog ${id}</h1>
      <p class="spotlight-description">${description}</p>
  </div>
  <img src=${img} alt="">
  <div>
      <p class="learning-journey">
          ${content}
      </p>
  </div>
</section>
  `
  
})
