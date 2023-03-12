const get = (id) => document.getElementById(id)
const button = get('button')
const input = get('input')
const length = get('length')
const volume = get('volume')
const mass = get('mass')

button.addEventListener('click', () => {
    const value = parseInt(input.value)
    if(value){
        const result = calculate(value)
        for (const prop in result) {
            result[prop] = result[prop].toFixed(2)
        }
        setInterval(()=>{
            length.textContent = `${value} meters = ${result.feet} feet | ${value} feet = ${result.meters} meters`
            volume.textContent = `${value} liters = ${result.gallons} gallons | ${value} gallons = ${result.liters} liters`
            mass.textContent = `${value} kilos = ${result.pounds} pounds | ${value} pounds = ${result.kilos} kilos`
        }
        ,200)
    }
})

const calculate = (unit) => {
    const meters = unit / 3.28084 
    const feet = unit * 3.28084 
    const liters = unit / 3.785
    const gallons = unit * 3.785
    const kilos = unit * 2.2
    const pounds = unit / 2.2
    return { meters, feet, liters, gallons, kilos, pounds}
} 

input.addEventListener('keydown', (e) => {
    if (!(e.key >= '0' && e.key <= '9') && e.key !== 'Backspace') {
      e.preventDefault()
    }
})

