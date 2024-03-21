import { Component, inject, signal } from '@angular/core';

//Interface
import { IProjects } from '../../interface/IProjects.interface';

//Angular Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/calculadora.png',
      alt: 'Imagem de um programa calculadora',
      title: 'Calculadora - Angular',
      width: '100px',
      height: '51px',
      descripton: 'A calculadora foi implementada com uma interface intuitiva e funcionalidades simples, permitindo aos usuários realizar operações matemáticas básicas de forma rápida e eficiente. Com um design limpo e responsivo, a calculadora é acessível em diferentes dispositivos, proporcionando uma experiência amigável aos usuários. Este projeto demonstra a utilização do Angular para criar uma aplicação web interativa e prática, ideal para cálculos do dia a dia.',
      links: [
        {
          name: 'Acessar código fonte',
          href: 'https://github.com/Emilio-Jose-Camilo/calculadora-angular' 
        }
      ]
    },
    {
      src: 'assets/img/projects/dashboard.png',
      alt: 'Imagem de um programa Dashboard',
      title: 'Dashboard - Angular',
      width: '100px',
      height: '51px',
      descripton: 'Com um design moderno e intuitivo, o dashboard proporciona uma visão abrangente e organizada das informações essenciais para a tomada de decisões estratégicas. Os elementos do dashboard são dispostos de forma atraente e eficiente, garantindo uma experiência de usuário agradável e produtiva. Seja monitorando métricas-chave, exibindo gráficos dinâmicos ou apresentando dados em cards informativos, este sistema de dashboard Angular é uma solução robusta e flexível para atender às necessidades de análise e acompanhamento em tempo real.',
      links: [
        {
          name: 'Acessar código fonte',
          href: 'https://github.com/Emilio-Jose-Camilo/dashboard-angular' 
        },
      ],
    },
    {
      src: 'assets/img/projects/conversorMoedas.png',
      alt: 'Imagem de um programa de um conversor de moedas',
      title: 'Conversor de Moedas - Angular',
      width: '100px',
      height: '51px',
      descripton: 'Um aplicativo web desenvolvido em Angular que permite aos usuários converter valores monetários entre diferentes moedas de forma rápida, utilizando uma API externa para obter as taxas de câmbio atualizadas. Interface intuitiva, atualizações em tempo real e experiência interativa.',
      links: [
        {
          name: 'Conversor de Moedas - Angular',
          href: 'https://github.com/Emilio-Jose-Camilo/conversor-de-moedas-angular' 
        },
      ],
    },
    {
      src: 'assets/img/projects/jogo-da-velha.png',
      alt: 'Imagem de um programa de um Jogo da Velha',
      title: 'Jogo da Velha',
      width: '100px',
      height: '51px',
      descripton: 'O jogo da velha feito com Angular é uma aplicação interativa que permite aos jogadores desafiarem uns aos outros em partidas emocionantes. Com uma interface moderna e intuitiva, os usuários podem alternar entre X e O para marcar seus movimentos em um tabuleiro 3x3. O programa é desenvolvido com Angular, uma estrutura robusta que proporciona uma experiência de jogo fluida e responsiva. Divirta-se testando suas habilidades estratégicas neste clássico jogo de tabuleiro!',
      links: [
        {
          name: 'Jogo da Velha',
          href: 'https://github.com/Emilio-Jose-Camilo/jogo-da-velha-angular' 
        },
      ],
    },
    {
      src: 'assets/img/projects/sistema-de-previsao-do-tempo.png',
      alt: 'Imagem de um programa de sitema de previsão do tempo.',
      title: 'Previsão do tempo Mundial',
      width: '100px',
      height: '51px',
      descripton: 'Sistema de previsão do tempo mundial, desenvolvido com Angular e integrando uma API de previsão do tempo, é uma solução inovadora que oferece informações meteorológicas detalhadas de diversas localidades ao redor do mundo. Com uma interface intuitiva e responsiva, os usuários podem acessar facilmente previsões precisas de temperatura, condições climáticas e outros dados relevantes. Essa aplicação proporciona uma experiência personalizada e confiável para quem busca se manter informado sobre o clima global.',
      links: [
        {
          name: 'Sistema de previsão do tempo',
          href: 'https://github.com/Emilio-Jose-Camilo/sistema-de-previsao-do-tempo-angular15' 
        },
      ],
    },
    {
      src: 'assets/img/projects/expressoJa-em-construcao.png',
      alt: 'Imagem de um programa ExpressoJá.',
      title: 'ExpressoJá - Em Construção',
      width: '100px',
      height: '51px',
      descripton: 'Projeto de sistema de delivery, baseado e inspirado no site Bangood chines - em construção',
      links: [
        {
          name: 'Sistema ExpressoJá',
          href: 'https://github.com/Emilio-Jose-Camilo/expressoJa' 
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    })
  }

}
