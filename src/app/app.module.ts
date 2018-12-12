import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { NavigationComponent } from './navigation/navigation.component';
import {HttpClientModule} from '@angular/common/http';
import {ArticlesServices} from './services/articles.services';
import {FormsModule} from '@angular/forms';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { EditArticleComponent } from './edit-article/edit-article.component';



const shopRoutes: Routes = [
  {path: 'articles', component: ArticlesComponent},
  {path: 'editarticle/:id', component: EditArticleComponent},
  {path: '', redirectTo: '/articles', pathMatch: 'full'},
  {path: 'new-article', component: AddarticleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    NavigationComponent,
    AddarticleComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(shopRoutes), HttpClientModule, FormsModule
  ],
  providers: [ArticlesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
