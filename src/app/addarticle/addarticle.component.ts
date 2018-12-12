import { Component, OnInit } from '@angular/core';
import {ArticlesModel} from '../models/articles.model';
import {ArticlesServices} from '../services/articles.services';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {
  article: ArticlesModel  =  new ArticlesModel();
  mode = 1;
  constructor(public articleService: ArticlesServices) { }

  ngOnInit() {
  }

  saveArticle() {
   this.articleService.savearticle(this.article)
     .subscribe(data => {
       this.mode = 2;
     },
       (error1 => {
         console.log(error1);
       })
       );
  }

}
