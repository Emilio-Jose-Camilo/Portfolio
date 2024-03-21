import { Component, signal } from '@angular/core';
//Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      sumary: {
        strong: 'UniCV - Análise e Desenvolvimento de Sistemas',
        p: 'Centro Universitário cidade verde  2021 / 2024 - 1800 horas no total'
      },
      text: '<P> Criar soluções, analisar informações e dados, possibilitar um novo olhar e, principalmente, construir novas possibilidades e resultados.</P>'
    },
    {
      sumary: {
        strong: 'Cod3r Cursos - Desenvolvimento Frontend',
        p: '15 de Março de 2022 - 97.5 hotas no total'
      },
      text: '<P>Curso Web Moderno Completo com JavaScript 2022 + Projetos, Professor: Leonardo Moura Leitão.</P>'
    },
    {
      sumary: {
        strong: 'Ûdemy - Desenvolvimento Front End',
        p: '14 de Janeiro de 2024 - 15 horas no total'
      },
      text: '<P>RxJS + Angular Material - Frontend Reativo. Professor: Vinícius de andrade.</P>'
    },
    {
      sumary: {
        strong: 'Ûdemy Formação Angular',
        p: '14 de Janeiro de 2024 - 18.5 horas no total'
      },
      text: '<P>Formação Angular 2024 - Professor Marcos Júnior Passarela Neves</P>'
    },
    {
      sumary: {
        strong: 'Údemy - Língua de Programação C# ',
        p: '12 de Dezembro de 2022 - 17 horas total'
      },
      text: '<P>Curso completo: Básico ao Avançado. Professor: Leonardo Moura Leitão, Cod3r Cursos.</P>'
    },
    {
      sumary: {
        strong: '.NET 6/7 WEB API - Do zero ao avançado',
        p: 'Em andamento'
      },
      text: '<P>Crud, Boas práticas para API, SQL, Entity Framework Core, Validações, JWT e Autenticação, Async vs Sync.</P>'
    },
  ])
}
