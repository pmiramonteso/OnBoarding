import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStep } from '../interface/i-step';
import { trigger, transition, style, animate } from '@angular/animations';

const slideInOut = [
  transition(':enter', [
    style({ transform: 'translateY(-100%)', opacity: 0 }),
    animate('300ms ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('300ms ease-out', style({ transform: 'translateY(-100%)', opacity: 0 }))
  ])
];

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss'],
  animations: [
    trigger('slideInOut', slideInOut)
  ]
})
export class EscenaComponent {

@Input() data: IStep[] = [];
currentStep = 0;

nextStep(): void {
  if (this.currentStep < this.data.length - 1) {
    this.currentStep++;
  }
}

prevStep(): void {
  if (this.currentStep > 0) {
    this.currentStep--;
  }
}

isActiveStep(index: number): boolean {
  return this.currentStep === index;
}
}