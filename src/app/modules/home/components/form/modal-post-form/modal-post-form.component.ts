import { Component, Output, EventEmitter , OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-modal-post-form',
  templateUrl: './modal-post-form.component.html',
  styleUrls: ['./modal-post-form.component.scss']
})
export class ModalPostFormComponent implements OnInit {

  isModalVisible: boolean = false;
  postForm!: FormGroup;
  selectedType: String = '';

  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder, private postService: PostService) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      tag: [''],
      imageTitle: [''],
      imageUrl: ['', Validators.required],
      images: this.formBuilder.array([]),
      tags: this.formBuilder.array([])
    })
  }

  onSelectedType(value: string) {
    this.selectedType = value;
  }
  showModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
    this.postForm.reset();
    this.newItemEvent.emit("cerrado");
  }

  createPost() {
    if(!this.selectedType)return;
    if (this.selectedType == "slideshow") {
      this.postForm.get('imageUrl')?.clearValidators();
      this.postForm.get('imageUrl')?.updateValueAndValidity();
    }else{
      let imageUrl = this.postForm.get('imageUrl')?.value;
      const imageUrlControl = new FormControl(imageUrl);
      const imageTitleControl = new FormControl("");
  
      const imageGroup = new FormGroup({
        title:imageTitleControl,
        image:imageUrlControl
      });
      if(this.postForm.get('images')){
        this.postForm.setControl('images',imageGroup);
      }
    }

    if (this.postForm.valid) {
      let post = new Post(
        this.postForm.get('title')?.value,
        this.postForm.get('text')?.value,
        this.postForm.get('tags')?.value,
        this.postForm.get('images')?.value,
      );

      this.postService.createPost(post).subscribe(data=>{
        console.log(data);
        this.closeModal();
      });
    }else{
      console.log("invalid form");
      console.log(this.findInvalidControls());
    }

  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.postForm.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    return invalid;
}
}
