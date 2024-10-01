import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStep } from '../interface/i-step';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
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
