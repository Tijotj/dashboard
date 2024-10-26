import { Component } from '@angular/core';

@Component({
  selector: 'app-animated-modal',
  templateUrl: './animated-modal.component.html',
  styleUrl: './animated-modal.component.css'
})
export class AnimatedModalComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  displayMsg: boolean = false;
  onSubmit() {
    console.log('Name: ' + this.name);
    console.log('EMail: '+ this.email);
    console.log('Message: '+ this.message);
    this.displayMsg = true;
    setTimeout(() => this.displayMsg = false, 2000);
  }
}
