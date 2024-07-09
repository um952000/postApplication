import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../Services/post.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private postService: PostService) { }

  onFormSubmit(postForm: NgForm) {

    let post: Post =
    {
      name: postForm.value.name,
      title: postForm.value.title,
      content: postForm.value.content,
      date: postForm.value.date
    }

    this.postService.createPost(post).subscribe(
      response => {
        alert('Post Successfully created');
        postForm.reset();
      },
      error => {
        alert('Failed to create a post');
      }
    );
  }

  generateRandomId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    return result;
  }
}