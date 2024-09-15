import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnChanges {

  ngOnChanges(): void {
    if (this.card) { 
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description= this.cardAction[cardNumber - 1].description;
    }
  }

  cardAction = [
    {title: "Waterfall", description: "All players start drinking at the same time. The player who drew the card can stop drinking whenever they choose, but the next person in line cannot stop until the first player does, and so on."},
    {title: "You", description: "The player who drew the card picks someone to take a drink."},
    {title: "Me", description: "The player who drew the card takes a drink."},
    {title: "Floor", description: "All players must touch the floor as quickly as possible. The last person to do so drinks."},
    {title: "Guys", description: "All male players drink."},
    {title: "Chicks", description: "All female players drink."},
    {title: "Heaven", description: "All players must point to the sky. The last person to do so drinks."},
    {title: "Mate", description: "The player who drew the card picks a 'mate.' Whenever one of them drinks, the other must drink as well."},
    {title: "Rhyme", description: "The player who drew the card says a word, and the next player must say a word that rhymes with it. This continues around the circle until someone either repeats a word or can`t think of a rhyme. That person drinks."},
    {title: "Categories", description: "The player who drew the card picks a category (e.g., types of cars, pizza toppings). Players take turns naming something that fits in that category. The first person who can't think of something drinks."},
    {title: "Make a Rule", description: "The player who draws a Jack gets to make a rule that stays in effect for the rest of the game. Anyone who breaks the rule drinks."},
    {title: "Question Master", description: "The player who draws the Queen becomes the Question Master. Whenever they ask another player a question, the other player must answer with another question. If a player fails to answer with a question, they drink."},
    {title: "King`s Cup", description: "The first three Kings require the player to pour some of their drink into the King's Cup. The player who draws the fourth King must drink the entire King`s Cup, ending the game."}
  ]

  title: string = '';
  description: string = '';
  @Input() card: string = '';


}
