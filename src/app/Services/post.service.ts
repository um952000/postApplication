import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  createPost(post: Post): Observable<Post> {
    let url = this.apiUrl + '/createpost';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<Post>(url, post, { headers });
  }

  getAllPosts(): Observable<Post[]> {
    let url = this.apiUrl + '/allposts'
    return this.httpClient.get<Post[]>(url);
  }

  getPostById(id: string): Observable<Post> {
    let url = this.apiUrl + '/posts' + '/' + id;
    return this.httpClient.get<Post>(url);
  }

  deletePostById(id: string): Observable<any> {
    let url = this.apiUrl + '/deletepost' + '/' + id;
    return this.httpClient.delete(url);
  }

  updatePost(updatedPost: Post): Observable<Post> {
    const url = `${this.apiUrl}/updatepost/${updatedPost.id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put<Post>(url, updatedPost, { headers });
  }
}