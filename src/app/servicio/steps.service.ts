import { Injectable } from '@angular/core';
import { IStep } from '../interface/i-step';

@Injectable({
  providedIn: 'root'
})

export class StepsService {
    steps: IStep[] = [
    {
      title: 'Dedica muchas horas',
      description: 'Al menos 30 horas a la semana. Si no tienes suficiente, tendrás que dedicarle más horas. Al principio parece imposible, pero notarás una mejoría rápidamente.',
      image: 'assets/time_managment.svg'
    },
    {
      title: 'Programa proyectos propios',
      description: 'Más vale 10 horas trabajando en proyectos propios, que 10 horas mirando tutoriales. La motivación y la implicación en el proyecto ayudará a acelerar tu aprendizaje.',
      image: 'assets/programming.svg'
    },
    {
      title: 'Procura descansar',
      description: 'Descansar bien  y desconectar son vitales. De esta forma reducirás el estrés y la ansiedad. Mejorarás tu concentración y afianzarás tu aprendizaje.',
      image: 'assets/meditation.svg'
    }
  ]
getSteps(): IStep[] {
  return this.steps;
}
}
