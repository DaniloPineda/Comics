import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComicModel } from './models/comic';
import { ComicService } from './service/comic-service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'comic-card',
    templateUrl: './comic-card.component.html',
    styleUrls: ['./comic-card.component.sass']
  })

export class ComicCardComponent implements OnInit{

    editComicForm: FormGroup;
    _comic : ComicModel;
    rate:number;

    @Input() comicId:number;

    constructor(private comicService: ComicService, 
                private toastr: ToastrService, 
                private formBuilder: FormBuilder){  
                }
                
    ngOnInit(){
        this.comicId = Math.floor(Math.random() * Math.floor(2286));
        this._comic = new ComicModel();
        this.getComic();
        this.editComicForm = this.formBuilder.group({
            rating: new FormControl(""),
        });
    }

    getRating(rate:number){
        this._comic.rate = rate;        
    }

    getCurrentComic(){
        this.comicService.getCurrent().subscribe(c =>{
            this._comic = c;
        },
        () =>{
            this.toastr.error(`Comic con id ${this.comicId} no existe`,"Error obteniendo cómic");
        })
    }

    getComic(){        
        if (this.comicId != null && this.comicId > 0)
        {
            this.comicService.getById(this.comicId.toString()).subscribe(c =>{
                this._comic = c;
            },
            () =>{
                this.toastr.error(`Comic con id ${this.comicId} no existe`, "Error obteniendo cómic");
            })
        }    
        else
            this.getCurrentComic();
        
    }
}