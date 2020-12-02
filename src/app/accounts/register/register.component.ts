import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyServicesService } from '../../Services/my-services.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public http: MyServicesService, public router: Router) { }

  ngOnInit(): void {

    this.generateForm();
  }

  generateForm() {
    this.registerForm = this.formBuilder.group({
      name: ['',Validators.compose([Validators.required,Validators.maxLength(30)])],
      email: ['',Validators.compose([Validators.required,Validators.maxLength(50)])],
      mobile: ['',Validators.compose([Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')])],
      pri: ['',],
      password: ['',],
      confirmpassword: []
    });
  }

  // openSnackBar(message: string, action: string) {
  //   this.matsnackBar.open(message, action, {
  //     duration: 2000,
  //   });
  // }

  onSubmit() {


    console.log(this.registerForm.value);
    // this.http.regsiterUser(this.registerForm.value).subscribe((res) => {
    //   if (res._id)
    //     // alert('Successfully registered user...');
    //     this.openSnackBar('Successfully registered user...','OK');
    //   this.router.navigate(['./..']);
    // }, (err) => {
    //   console.log(err);
    // });

  }

}
