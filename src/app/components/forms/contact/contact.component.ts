import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ContactFormService } from './contact-form.service';

@Component({
  selector: 'app-form-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  notificationShow: boolean = false;
  notificationMessage: string | undefined;
  notificationStatus: string | undefined;
  formData = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl(''),
  });

  constructor(
    private builder: FormBuilder,
    private contact: ContactFormService
  ) {}

  ngOnInit() {}

  onSubmit() {
    if (this.formData.valid) {
      this.contact.onSubmit(this.formData.value).subscribe((response) => {
        this.notificationShow = true;
        this.notificationMessage = response.message;
        this.notificationStatus = response.status;
      });
    } else {
      this.notificationShow = true;
      this.notificationMessage = 'Form not valid';
      this.notificationStatus = 'error';
    }
  }
}
