import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';

@Component({
  selector: 'app-articles-archive',
  templateUrl: './articles-archive.component.html',
  styleUrls: ['./articles-archive.component.css'],
})
export class ArticlesArchiveComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.articlesService
      .archive()
      .subscribe((articles) => (this.articles = articles));
  }
}
