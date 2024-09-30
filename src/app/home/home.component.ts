import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscenaComponent } from '../escena/escena.component';
import { StepsService } from '../servicio/steps.service';
import { IStep } from '../interface/i-step';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EscenaComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  steps: IStep[] = [];

  constructor(public stepsService: StepsService) {}

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
    console.log(this.steps);
  }
}