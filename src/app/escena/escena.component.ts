import { Component, Input } from '@angular/core';
import { IStep } from '../interface/i-step';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent {

@Input() data: IStep[] = [];

}
