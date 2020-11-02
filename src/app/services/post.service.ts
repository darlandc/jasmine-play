import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API_URL = 'http://jsonplaceholder.typicode.com';

  constructor(public http: HttpClient) {}

  getPosts(): any {
    return this.http.get(`${this.API_URL}/posts`);
  }

  addPost(post): any {
    return this.http.post(`${this.API_URL}/posts`, post);
  }

  deletePost(id): any {
    return this.http.delete(`${this.API_URL}/posts/${id}`);
  }
}
