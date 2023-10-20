import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent {

  constructor(private service: CategoryService) {};

  public formCategory: FormGroup = new FormGroup ({
    name:new FormControl('')
  })

  onSubmit() {
    this.service.addCategory(this.formCategory.value.name).subscribe(response => {
      console.log('Category added successfully:', response)
    });
    this.formCategory.reset;
  }
}
