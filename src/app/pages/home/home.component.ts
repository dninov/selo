import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatBottomSheet } from '@angular/material/bottom-sheet'
import { AuthenticatorComponent } from 'src/app/tools/authenticator/authenticator.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeSlideFromTop', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('fadeSlideFromBottomDelay1', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('400ms 200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('scaleUpDelay2', [
      transition(':enter', [
        style({opacity: 0, transform: 'scale(50%)' }),
        animate('400ms 400ms ease-out', style({ opacity: 1, transform: 'scale(100%)' })),
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {

  constructor(private loginSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }
  enterClicked(){
    console.log('hui');
   
    
    this.loginSheet.open(AuthenticatorComponent)
  }
}
