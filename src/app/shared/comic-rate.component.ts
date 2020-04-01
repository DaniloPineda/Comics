import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'comic-rate',
  templateUrl: './comic-rate.component.html',
  styles: [`
  .star {
    position: relative;
    display: inline-block;
    font-size: 2rem;
    color: grey;
  }
  .bad{
    color: red;
  }
  .medium{
    color: orange;
  }
  .good{
    color: green;
  }
  .full {
    color: #28c800;
  }
`]
})
export class ComicRate {  
  @Output() emitRate = new EventEmitter<number>();
  hovered = 0;
  rate:number=0;
  readonly = false;
  
  onSelected():void{
    this.emitRate.emit(this.rate)
  }
  
  checkBad(fill){
    return ((this.hovered <3 && this.hovered>0)
            || (this.rate <3 && this.rate>0))
            && fill === 100;
  }

  checkMedium(fill){
    return (this.hovered === 3 || this.rate === 3) && fill === 100;
  }

  checkGood(fill){
    return (this.hovered >3 || this.rate >3 && this.rate>0) && fill === 100;
  }

  onHover(hover){
    this.hovered = hover;
  }


}