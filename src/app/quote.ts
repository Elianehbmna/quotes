import { Variable } from '@angular/compiler/src/render3/r3_ast';

export class Quote {

  constructor(public id: number,public description: string,public name: string,public Aname: string,public Upvote: number,public Downvote: number, public completeDate: Date){
    
  }
}
