import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArticlesModel} from '../models/articles.model';

@Injectable()
export class  ArticlesServices {
  constructor(public http: HttpClient) {
  }
  getContacts(motCle: String, size: number, page: number) {
    return this.http.get('http://localhost:8080/api/findarticle?mc=' + motCle + ' & size=' + size + '+&page=' + page + '');
  }
  savearticle(article: ArticlesModel) {
    return this.http.post('http://localhost:8080/api/savearticles', article);
  }
  findArticle( id: number) {
    return this.http.get('http://localhost:8080/api/articles' + id);
  }

  deleteArticle(id: number) {
    return this.http.delete('http://localhost:8080/api/deletearticles/' + id);
  }


  updatearticle(article: ArticlesModel) {
    return this.http.put('http://localhost:8080/api/editarticles' + article.id, article);
  }
}
