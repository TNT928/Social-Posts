import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import{Post} from '../post';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Input() post:Post
  @Output() submitted = new EventEmitter()

  
  click : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  submitPost(title, thought){
    this.submitted.emit({title, thought});
    this.click = false;
  }

  onClick(){
    this.click = true;
  }

  closeForm(){
    this.click = false;
  }
 
}
