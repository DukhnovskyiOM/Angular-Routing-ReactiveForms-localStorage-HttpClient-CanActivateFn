
import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PostsData } from 'src/app/models/users.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatCardModule, MatButtonModule, RouterLink],
})
export class PostComponent implements OnInit{

  postId: any;
  post: PostsData = {};

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com'

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getPosts();
  }

  getPosts() {
      this.http.get<PostsData>(this.ROOT_URL + '/posts/' + this.postId).subscribe((data:PostsData) => {
      this.post = data
    })
  }

  logOut() {
    localStorage.removeItem('isActive');
    this.router.navigate([''])
  }
}

