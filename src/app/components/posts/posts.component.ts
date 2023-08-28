import {Component, OnInit} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PostsData } from 'src/app/models/users.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, RouterLink],
})
export class PostsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title'];

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com'

  posts: PostsData[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
      this.http.get<PostsData[]>(this.ROOT_URL + '/posts').subscribe((data:PostsData[]) => {
      this.posts = data
    })
  }

  logOut() {
    localStorage.removeItem('isActive');
    this.router.navigate([''])
  }

}

