import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';
import { EmployerModel } from './employer.model';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private authService:AuthService,public router:Router,private rout:ActivatedRoute) { }
  employerItem = new EmployerModel("","","","",0,"","","","",""); //template validate
  formdata = new FormData();

  ngOnInit(): void {
   
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      jobtitle: ['', Validators.required],
      website: ['', Validators.required],
      company: ['', Validators.required],
      companytype: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },
    );
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log("innnnnnnnnvalid");
      
      return;
    }
    else{

      this.authService.newEmployer(this.registerForm.value);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Successful!!!',
      showConfirmButton: false,
      timer: 3300
    })
    this.router.navigate(['/login']);

    }
    




    // const formdata = new FormData();
    //console.log(this.registerForm.value);



  }
}
