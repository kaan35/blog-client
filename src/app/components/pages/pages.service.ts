import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Page } from './page';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl;

  detail(slug: string): Observable<Page> {
    return this.http.get<Page>(this.apiUrl + 'pages/detail/' + slug);
  }
}
