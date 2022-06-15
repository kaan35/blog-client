import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';

@Component({
  selector: 'app-articles-latest',
  templateUrl: './articles-latest.component.html',
  styleUrls: ['./articles-latest.component.css'],
})
export class ArticlesLatestComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.latest();
  }

  latest(): void {
    this.articlesService
      .latest()
      .subscribe((articles) => (this.articles = articles));
  }
}
