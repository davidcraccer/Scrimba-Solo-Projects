import menuArray from "/data.js"

const menuHtml = document.querySelector(".menu")
const totalPrice = document.querySelector('.total-price .item-price')


menuArray.forEach((item) => {
    const { name, ingredients, id, price, emoji } = item;
    menuHtml.innerHTML += `
    <div class="item flex" id="${id}">
    <div class="flex">
    
    <h1>${emoji}</h1>
    <div class="text flex">
    <h3 class="item-name">${name}</h3>
    <p class="description">${ingredients}</p>
    <p class="item-price">$${price}</p>  
    </div>
    </div>
    <h1 class="add-btn flex"  data-add-button="${id}">+</h1>
    </div>
    `
})

const addBtns = document.querySelectorAll('.add-btn')
addBtns.forEach(btn => {
    btn.addEventListener('click', (e)=> {
        if(e.target.dataset.addButton){
            handleAddClick(e.target.dataset.addButton)
        }
    })
})


const handleAddClick = (itemId) => {
    const targetItemObj = menuArray.find(item => {
        return item.id === parseInt(itemId)
    })
    
    renderCheckout(targetItemObj)
    renderTotalPrice(targetItemObj.price)
}


const renderTotalPrice = (itemPrice) => {
    const currentTotalPrice = parseFloat(totalPrice.dataset.totalPrice)
    const newTotalPrice = currentTotalPrice + itemPrice
    totalPrice.dataset.totalPrice = newTotalPrice
    totalPrice.textContent = `$${newTotalPrice}`
}


const checkoutItems = document.querySelector('.checkout-items')
checkoutItems.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')){
    const itemId = e.target.dataset.removeButton
    handleRemoveClick(itemId)
  }
})

const handleRemoveClick =(itemId)=>{
    const targetItemObj = menuArray.find(item => {
        return item.id === parseInt(itemId)
    })
    renderTotalPrice(targetItemObj.price * -1)
    document.querySelector(`[data-checkout-id="${targetItemObj.id}"]`).remove()
}



const renderCheckout = (item) => {
    const {name, id, price} = item
    document.querySelector('.checkout').classList.remove('hidden')
        checkoutItems.innerHTML +=`
        <div class="checkout-item flex" data-checkout-id="${id}">
        <div class="flex">
        <h3 class="item-name">${name}</h3>
        <button class="remove" data-remove-button="${id}">remove</button>
        </div>
        <p class="item-price">$${price}</p>
        </div>
        `
}


