import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{Post} from '../post';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit {
@Input() post: Post
@Output() deleted = new EventEmitter()

  constructor() { }

  ngOnInit() {

   
  }

 deletePost() {
      this.deleted.emit()
    }


  
}
