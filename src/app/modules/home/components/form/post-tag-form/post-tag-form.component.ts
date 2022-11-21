import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-tag-form',
  templateUrl: './post-tag-form.component.html',
  styleUrls: ['./post-tag-form.component.scss']
})
export class PostTagFormComponent implements OnInit {

  public ogFormGroup:any;
  constructor(public controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.ogFormGroup = this.controlContainer.control;
  }

  getTags() {
    return this.ogFormGroup.get("tags").value;
  }

  addTag(tagValue: string): void {
    if(tagValue.length>0){
      const tagControl = new FormControl(tagValue);
      this.ogFormGroup.get('tags').push(tagControl);
      this.ogFormGroup.get('tag').setValue('');
    }

  }
}
