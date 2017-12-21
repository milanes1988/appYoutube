import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  fieldSearch = 'Search vidos...';
  btnSignIn = 'Sign In';
  btnRegister = 'Register'
  btnUpload = 'Upload';
}
