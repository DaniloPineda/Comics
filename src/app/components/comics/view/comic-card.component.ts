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
        this._comic = new ComicModel();
        if (this.comicId != null)
            this.getComic(this.comicId);        
        else
            this.getCurrentComic();

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
        error =>{
            this.toastr.error("Error obteniendo cómic", error);
        })
    }

    getComic(num){
        this.comicService.getById(num).subscribe(c =>{
            this._comic = c;
        },
        error =>{
            this.toastr.error(error.message,"Error obteniendo cómic");
        })
    }

    rateComic(){
        this.toastr.success(this._comic.rate.toString(),"Se calificó el cómic");
    }

}