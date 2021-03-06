import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticlesLatestComponent } from './components/articles/articles-latest/articles-latest.component';
import { ArticleDetailComponent } from './components/articles/article-detail/article-detail.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { ArticlesArchiveComponent } from './components/articles/articles-archive/articles-archive.component';
import { PageComponent } from './pages/page/page.component';
import { ContentComponent } from './components/pages/content/content.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ContactComponent } from './components/forms/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ArticleComponent,
    NavbarComponent,
    FooterComponent,
    ArticlesLatestComponent,
    ArticleDetailComponent,
    ArchiveComponent,
    ArticlesArchiveComponent,
    PageComponent,
    ContentComponent,
    ContactUsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
