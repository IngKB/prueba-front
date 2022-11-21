import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-modal-post-form',
  templateUrl: './modal-post-form.component.html',
  styleUrls: ['./modal-post-form.component.scss']
})
export class ModalPostFormComponent implements OnInit {

  isModalVisible:boolean=false;
  postForm!:FormGroup;
  selectedType:String='';

  constructor(private formBuilder: FormBuilder,private postService: PostService) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup(){
    this.postForm = this.formBuilder.group({
      title:['',Validators.required],
      text:['',Validators.required],
      tag:[''],
      imageTitle:[''],
      imageUrl:['',Validators.required],
      images:this.formBuilder.array([]),
      tags:this.formBuilder.array([])
    })
  }

  onSelectedType(value:string){
    this.selectedType = value;
  }
  showModal(){
    this.isModalVisible = true;
  }

  closeModal(){
    this.isModalVisible = false;
    this.createFormGroup();
  }

  createPost(){
    console.log(this.postForm.getRawValue());
  }
}
