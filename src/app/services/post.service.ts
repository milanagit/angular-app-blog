import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  postsLimit = '?_limit=5';

  constructor(private http: HttpClient) { }

  // Get POSTS from API
  getPosts():Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postsUrl}${this.postsLimit}`);
  }

  // Delete POSTS from API
  deletePost(post:Post): Observable<Post> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.http.delete<Post>(url, httpOptions);
  }

  // Add POST to API
  addPost(post:Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }

  // Edit post completed
  editCompleted(post:Post): Observable<any> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.http.put(url, post, httpOptions);
  }
}
