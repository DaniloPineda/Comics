import {Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
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
export class ComicRate implements OnInit {  
  constructor(private toastr: ToastrService ){

  }

  @Output() emitRate = new EventEmitter();
  @Input() rate:number=0;
  hovered = 0;
  readonly = false;  

  
  ngOnInit(){
    this.rate = 0;
  }

  onSelected(rate):void{
    this.rate = rate;
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