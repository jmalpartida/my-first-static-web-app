import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    name: 'Contactanos ahora',
    email: 'systemredpc'@'gmail.com',
    bio: 'Mayor información o realizar una prueba del Software, solo escríbenos.',
  };
}

