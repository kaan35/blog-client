import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { PageComponent } from './pages/page/page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
    title: 'Home Page',
  },
  { path: 'article/:slug', component: ArticleComponent },
  { path: 'page/:slug', component: PageComponent },
  {
    path: 'archive',
    component: ArchiveComponent,
    title: 'Archive',
  },
  {
    path: 'contact',
    component: ContactUsComponent,
    title: 'Contact Us',
  },
  {
    path: '',
    component: IndexComponent,
    title: 'Home Page',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
