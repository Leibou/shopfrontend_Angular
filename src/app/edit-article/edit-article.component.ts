import { Component, OnInit } from '@angular/core';
import {ArticlesModel} from '../models/articles.model';
import {ArticlesServices} from '../services/articles.services';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  article: ArticlesModel = new ArticlesModel();
  mode = 1;
  idarticle;
  datas;
  constructor(public articleservice: ArticlesServices, public activatedroute: ActivatedRoute, public router: Router) {
  this.idarticle = activatedroute.snapshot.params['id'];
  console.log(this.idarticle);
  console.log();
  }

  ngOnInit() {
     this.articleservice.findArticle(this.idarticle)
       .subscribe(data => {
         this.datas = data ;
         this.article = this.datas ;
       });
  }

  updateArticle() {
    this.articleservice.updatearticle(this.article)
      .subscribe(data => {
         alert('Mise à jour effectué avec succès');
         console.log(data);
         this.router.navigate(['articles']);
      }, ( error1 => {
        alert('Problème rencontré à la suppression');
      }));
  }
}
