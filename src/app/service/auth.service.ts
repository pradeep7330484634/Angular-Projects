import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // post: login submit
  loginSubmit(body: any) {
   return this.http.post("https://jsonplaceholder.typicode.com/posts", body);
  }
}
