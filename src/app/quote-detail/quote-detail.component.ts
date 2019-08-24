import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  upvote: number;
  downvote:number;
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
 
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  likeVote(): boolean{
    this.upvote +=1;
    return false;
  }

  dislikeVote(): boolean{
   this.downvote -=1;
   return false;
 }

  constructor() {`  `
  this.upvote = 0;
  this.downvote = 0;
   }

  

  ngOnInit() {
  }

}
