import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactFormService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl;

  onSubmit(data: object) {
    return this.http
      .post<any>(this.apiUrl + 'formContact', data)
      .pipe(map((data, error) => (data ? data : error)));
  }
}
