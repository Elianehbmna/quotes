import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotez:Quote[] = [
    new Quote(1, 'No one can make you feel inferior without your consent', 'Irene','Eleanor Roosevelt',0,0,new Date(2019,3,14)),
    new Quote(2,'The only true wisdom is in knowing you know nothing','Diola','socrate',0,0,new Date(2019,6,9)),
    

  ];
 
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
  constructor() { 
   
  }
  
  ngOnInit() {
  }

}
