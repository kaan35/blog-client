import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ArticleComponent } from './pages/article/article.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'article/:slug', component: ArticleComponent },
  { path: '', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
