let firstCard = 2
let secondCard = 7
let sum = firstCard + secondCard
let hasBlackJack = false
let message = ''

if (sum < 21){
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "Wohoo you've got a Black Jack!! "
    hasBlackJack = true
} else if (sum > 21) {
    message = "You're out of the game 😭"
}

console.log(message)
console.log(hasBlackJack)