import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Page } from '../page';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  page: Page | undefined;

  constructor(
    private route: ActivatedRoute,
    private pagesService: PagesService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    const slug = String(this.route.snapshot.paramMap.get('slug'));
    this.pagesService.detail(slug).subscribe((page) => {
      this.titleService.setTitle(page.title);
      return (this.page = page);
    });
  }
}
