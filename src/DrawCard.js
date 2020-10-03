import React from 'react';
import img1 from './images/1.jpeg';
import img2 from './images/2.jpeg';
import img3 from './images/3.jpeg';
import img4 from './images/4.jpeg';


class DrawCard extends React.Component {
    constructor(props) { 
        super(props)
        this.state = { 
            playerScore: 0,
            playerCards: [],
            botScore: 0,
            botCards: [],
            status: false,
            image_id: 1,
        };
    }
    
    createCardDeck() {
        var cardRank = ['2','3','4','5','6','7','8','9', '10','j', 'q', 'k', 'a'];
        var cardSuit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        var cardDeck = {};
        var cardDeckLength = 0;
        
        for (let index1 = 0; index1 < cardRank.length; index1++) {
            for (let index2 = 0; index2 < cardSuit.length; index2++) {
                cardDeckLength = cardDeckLength + 1
                //cardDeck[cardRank[index1].concat('-', cardSuit[index2])] = cardDeckLength
                cardDeck[cardDeckLength] = cardRank[index1].concat('-', cardSuit[index2])        
            }
            
        }
        return cardDeck    
    }

    getRandomInt(min, max) {
        var val_min = Math.ceil(min);
        var val_max = Math.floor(max);
        return Math.floor(Math.random() * (val_max - val_min + 1)) + val_min;
    }
    
    pick3Cards() {
        var cardDeck = this.createCardDeck()
        var firstCard = this.getRandomInt(1,52)
        var secondCard = this.getRandomInt(1,52)
        var thirdCard = this.getRandomInt(1,52)
        var playerScore = firstCard + secondCard + thirdCard
        var playerCards = [cardDeck[firstCard], cardDeck[secondCard], cardDeck[thirdCard]]
        return [playerScore, playerCards]
    }
    
  
    handleClick() {
        var playerResult = this.pick3Cards();
        var botResult = this.pick3Cards();
        this.setState({
            playerScore: playerResult[0] ,
            playerCards: playerResult[1].join(','),
            botScore: botResult[0] ,
            botCards: botResult[1].join(','),
            status: playerResult[0] > botResult[0],
            image_id:  playerResult[0] > botResult[0] ? this.state.image_id + 1 : this.state.image_id
        })
    }
    render() {  

        var imageStyle = {
            width: "200px",
            height: "200px",
            border: "1px solid black",
            backgroundImage: `url("./images/${this.state.image_id}.jpeg")`
        }
        return (
        <div className="card">
            <button onClick={() => this.handleClick()}>aaaaa</button>
            <div className="hidden">Player Score: {this.state.playerScore}</div>
            <div className="hidden">Player Card: {this.state.playerCards}</div>
            <div className="hidden">Bot Score: {this.state.botScore}</div>
            <div className="hidden">Bot Card: {this.state.botCards}</div>
            <div className="hidden">Status: {this.state.status ? "Win" : "Lose" }</div>
            {/* <div className="image" style={ imageStyle }></div> */}
            <img src={require(`./images/${this.state.image_id}.jpeg`)} />
        </div>
      );
    }
}
  
  export default DrawCard;