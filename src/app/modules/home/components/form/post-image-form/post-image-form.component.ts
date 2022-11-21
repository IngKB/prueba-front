import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-image-form',
  templateUrl: './post-image-form.component.html',
  styleUrls: ['./post-image-form.component.scss']
})
export class PostImageFormComponent implements OnInit {

  public ogFormGroup:any;
  constructor(public controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.ogFormGroup = this.controlContainer.control;
  }

  getImages() {
    return this.ogFormGroup.get("images").value;
  }

  addImage(imageTitle:string,imageUrl: string): void {
    if(imageTitle.length>0 && imageUrl.length>0){
      const imageUrlControl = new FormControl(imageUrl);
      const imageTitleControl = new FormControl(imageTitle);
  
      const imageGroup = new FormGroup({
        title:imageTitleControl,
        image:imageUrlControl
      })
      this.ogFormGroup.get('images').push(imageGroup);
      this.ogFormGroup.get('imageTitle').setValue('');
      this.ogFormGroup.get('imageUrl').setValue('');
    }
  }

}
