import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit , ViewChild} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {ContactType, Feedback, } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm:FormGroup; //feedbackFrom holds the reactive feedback form

  feedback:Feedback;

  contactType = ContactType;

  @ViewChild('fform') feedbackFormDirective: any;

  constructor(private fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm(){
    this.feedbackForm = this.fb.group({
      //The below fields are actually form controls. These are fields on a form in a nutshell.
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      telnum: [0,Validators.required],
      email: ['',Validators.required],
      agree: false,
      contacttype: '',
      message: ''
    });
  }

  onSubmit(){
    this.feedback =this.feedbackForm.value;
    console.log(this.feedback);

    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackFormDirective.resetForm();
  };

}
