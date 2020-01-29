import { Component, OnInit } from '@angular/core';
import{Post} from '../app.component'

@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts: Post[]
  constructor() { }

  ngOnInit() {

    this.posts = [
      {
      title:'Angular',
      thought: `Is a very complicated thing.`
      },
      {
      title:'Pizza is good',
      thought: `Pizza is best when it is in your stomach`
      },
      {
      title:'Goonies is overrated',
      thought: `Of all the movie's I've seen, Goonies is the most overrated.`
      }
  
  ]

 
  }

  onDelete(i){
    this.posts.splice(i,1)

  }

  onSubmit(post){
   this.posts.unshift(post)
     
    
  }

 
}
