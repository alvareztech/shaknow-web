import {RouterModule, Routes} from '@angular/router';
import {ArticlesComponent} from './articles/articles.component';
import {AdminComponent} from './admin/admin.component';
import {ArticleComponent} from './article/article.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: ':id',
    component: ArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
