import { Component, OnInit, viewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../model/post';
import { PostService } from '../Services/post.service';
import { NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  id: string | null = "";
  post: Post | null = null;
  isEdit: boolean = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if (this.id !== null) {
      this.postService.getPostById(this.id).subscribe(
        (data: Post) => {
          this.post = data;
        },
        (error) => {
          console.error('Error fetching post:', error);
        }
      );
    }
  }

  toggleEdit(): void {
    this.isEdit = !this.isEdit;
  }

  updatePost(): void {
    if (this.post !== null) {
      this.postService.updatePost(this.post).subscribe(
        response => {
          this.post = response;
          alert('Post updated successfully');
          this.isEdit = false; // Exit edit mode
          this.router.navigate(['/show']); // Optionally navigate to another page
        },
        error => {
          console.error('Error updating post', error);
        }
      );
    }
  }

  deletePost(): void {
    if (this.id !== null) {
      this.postService.deletePostById(this.id).subscribe(
        response => {
          alert('Post deleted successfully');
          this.router.navigate(['/show']); // Navigate to the list of posts after deletion
        },
        error => {
          console.error('Error deleting post', error);
        }
      );
    }
  }
}