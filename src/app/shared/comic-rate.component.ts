import {Component, Output, EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private toastr: ToastrService ){

  }
  @Output() emitRate = new EventEmitter();
  hovered = 0;
  rate:number=0;
  readonly = false;
  
  onSelected(rate):void{
    this.rate = rate;
    //this.toastr.success(rate.toString(),"Se calificó el cómic");
    this.emitRate.emit(rate);
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