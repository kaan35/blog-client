import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { PageComponent } from './pages/page/page.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'article/:slug', component: ArticleComponent },
  { path: 'page/:slug', component: PageComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: '', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
