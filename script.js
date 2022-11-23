// 1 //

let number = +prompt('write number')

if(number % 2 === 0) {
    alert(true)
} else (
    alert(false)
)

// 2 //

// let name = prompt('what is your name?').toUpperCase().trim()
// let age = +prompt('how old are u?')

// if(name % 2 === 0 && age <= 18) {
//     alert('welcome')
// } else(
//     alert('go home')
// )  

// 3 //

let nameOne = prompt('what is your name?').toUpperCase().trim()
let ageOne = confirm('are u upper 18?')

if(nameOne[0] === 'A' && ageOne === true) {
    alert('welcome')
} else(
    alert('go home')
)  

// 4 //

// let nameTwo = prompt('what is your name?').trim()
// let guests = 'Mirziyoyev, Putin, Obama, Biden, Zelenskiy, Trump'

// if(nameTwo === guests) {
//     alert(`welcome mr ${nameTwo}`)
// } else(
//     alert(`u are not on the list ${nameTwo}`)
// )