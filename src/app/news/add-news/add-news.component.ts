import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { News } from "../../core/models/news.model";
import { NewsService } from "../../core/services/news.service";
import { DatePipe } from '@angular/common';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css'],
  providers: [DatePipe] 
})

export class AddNewsComponent implements OnInit {

  titleFormControl = new FormControl('', [
    Validators.required
  ]);
  
  descriptionFormControl = new FormControl('', [
    Validators.required
  ]);

  contentFormControl = new FormControl('', [
    Validators.required
  ]);

  newsForm: FormGroup;

  matcher = new MyErrorStateMatcher();

  public Editor = ClassicEditor;
  ckeConfig: any;

  constructor(private newsService: NewsService, private datePipe: DatePipe, private router: Router) { }

  ngOnInit(): void {
    this.newsForm = new FormGroup({
      'title': this.titleFormControl,
      'description': this.descriptionFormControl,
      'content':  this.contentFormControl
    });

    this.setEditorConfig(); 
    console.log(this.titleFormControl.hasError('required'))
    console.log(this.descriptionFormControl.hasError('required'))
  }

  onSubmit(){
    if(!this.newsForm.invalid){
      this.newsService.addNews(new News(this.titleFormControl.value,this.descriptionFormControl.value,this.contentFormControl.value));
      this.router.navigate(['/news']);
    }    
  };

  setEditorConfig() {
    this.ckeConfig = {
      removePlugins: ['ImageUpload', 'MediaEmbed'],
      heading: {
        options: [
          { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
          { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
          { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
          { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
          { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
          { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
          { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' },
          { model: 'Formatted', view: 'pre', title: 'Formatted' },
        ]
      }
    };
  }

  onCancel(){
    this.router.navigate(['/news']);
  }

}
