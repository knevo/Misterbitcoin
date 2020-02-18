import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: string
  validation: string
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    try {
      if (!this.name) {
        this.validation = 'You need to enter a name'
        return
      }
      this.userService.login(this.name)
      this.router.navigate(['/contacts'])
    } catch (err) {
      console.log(err)
    }
  }
}
