import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ArticlesServices} from '../services/articles.services';
import {Router} from '@angular/router';
import {ArticlesModel} from '../models/articles.model';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  pageArticles: any;
  motCle: String = '';
  page = 0;
  size = 10;
  pagination: Array<number>;
  currentPage = 0;
  status = '';
  constructor( public http:  HttpClient, public articleservice: ArticlesServices, public router: Router) { }

  ngOnInit() {
    this.articleservice.getContacts(this.motCle, this.size, this.page)
      .subscribe(data => {
          this.pageArticles = data;
          this.status = '';
        },
        (error1 => {
          console.log(error1);
          this.status = 'Connexion au serveur impossible' ;
        })
      );
  }
  doSearch() {
    this.articleservice.getContacts(this.motCle, this.size, this.page)
      .subscribe(data => {
          this.pageArticles = data;
          // this.pagination = new Array(data.totalPages);
        },
        (error1 => {
          console.log(error1);

        })
      );
  }
  Chercher() {
    this.doSearch();
  }
  GotoNexPages(i: number) {
    this.currentPage = i;
    this.doSearch();

  }
  OnEditArticle(id: number) {
    this.router.navigate(['editarticle', id]);
  }
  OnDeleteArticle(a: ArticlesModel) {
    let confirm = window.confirm('Voulez-vous supprimé cette article ?');
    if (confirm === true) {
      this.articleservice.deleteArticle(a.id)
        .subscribe(data => {
            this.pageArticles.content.splice(
              this.pageArticles.content.indexOf(a), 1
            );
          }, ( error1 => {
            console.log(error1);
          })
        );
    }
  }
}
