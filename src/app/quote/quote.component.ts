import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotez:Quote[] = [
    new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son','me',new Date(2019,3,14)),
    new Quote(2,'Buy Cookies','I have to buy cookies for the parrot','you',new Date(2019,6,9)),
    new Quote(3,'Get new Phone Case','Diana has her birthday coming up soon','us',new Date(2019,1,12)),

  ];
  /*toggleDetails(index){
    this.quotez[index].showDescription = !this.quotez[index].showDescription;
  }*/
 
  deleteQuotes(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotez[index].name}?`)

      if (toDelete){
        this.quotez.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotez.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotez.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
