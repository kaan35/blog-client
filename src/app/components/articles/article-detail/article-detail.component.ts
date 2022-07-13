import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {
  article: Article | undefined;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private titleService: Title
  ) {}

  async ngOnInit() {
    const slug = String(this.route.snapshot.paramMap.get('slug'));
    this.articlesService.detail(slug).subscribe((article) => {
      this.titleService.setTitle(article.title);
      return (this.article = article);
    });
  }
}
