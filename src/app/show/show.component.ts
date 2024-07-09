import { Component } from '@angular/core';
import { PostService } from '../Services/post.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  allPosts: Post[] = []
  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(
      (data: Post[]) => {
        this.allPosts = data;
      },
      (error: any) => {
        console.error('Error fetching posts:', error);
      }
    );
  }


}