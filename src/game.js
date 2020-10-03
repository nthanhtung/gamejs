//https://en.wikipedia.org/wiki/Standard_52-card_deck


function createCardDeck() {
    cardRank = ['2','3','4','5','6','7','8','9', '10','j', 'q', 'k', 'a']
    cardSuit = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
    cardDeck = {}
    cardDeckLength = 0
    
    for (let index1 = 0; index1 < cardRank.length; index1++) {
        for (let index2 = 0; index2 < cardSuit.length; index2++) {
            cardDeckLength = cardDeckLength + 1
            //cardDeck[cardRank[index1].concat('-', cardSuit[index2])] = cardDeckLength
            cardDeck[cardDeckLength] = cardRank[index1].concat('-', cardSuit[index2])        
        }
        
    }
    return cardDeck    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick3Cards() {
    firstCard = getRandomInt(1,52)
    secondCard = getRandomInt(1,52)
    thirdCard = getRandomInt(1,52)
    playerScore = firstCard + secondCard + thirdCard
    playerCards = [cardDeck[firstCard], cardDeck[secondCard], cardDeck[thirdCard]]
    return [playerScore, playerCards]
}

function game(params) {
    
}

var idolList = [1,2,3,4,5,6]
//idolList['1'] = {'pic1': 'link1', 'pic2' : 'link2', 'pic3': 'link3'}
//idolList['2'] = {'pic1': 'link1', 'pic2' : 'link2', 'pic3': 'link3', 'pic4' : 'link4'}
//idolList['3'] = {'pic1': 'link1', 'pic2' : 'link2', 'pic3': 'link3'}


var cardDeck = createCardDeck()

var game1 = [1,2,3,4,5,6]
var idol = idolList['1']
// for (let index = 0; index < game1.length; index++) {
//     const element = game1[index];
//     var player = pick3Cards()
//     var bot = pick3Cards()    
//     console.log("player")
//     console.log(player[0])
//     console.log(player[1])
//     console.log("bot")    
//     console.log(bot[0])
//     console.log(bot[1])
//     if (player[0] > bot[0]) {
//         console.log("player win")
//         console.log(idolList[index])       
//         console.log("end game") 
//     }

// }
console.log('===============================================')
console.log(cardDeck)