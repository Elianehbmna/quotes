import { Variable } from '@angular/compiler/src/render3/r3_ast';

export class Quote {
  //public showDescription: boolean;
  constructor(public id: number,public description: string,public name: string,public Aname: string,public Upvote: number,public Downvote: number, public completeDate: Date){
    //this.showDescription=false;
  }
}
