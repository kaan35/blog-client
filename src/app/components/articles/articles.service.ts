import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl;

  latest(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl + 'articles/latest/6');
  }

  detail(slug: string): Observable<Article> {
    return this.http.get<Article>(this.apiUrl + 'articles/detail/' + slug);
  }
}
