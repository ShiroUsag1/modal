import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}

  public static getblank() {
    return {
      id: '',
      titulo: '',
      body: {
        infosEscritas: [''],
        img: '',
      },
      botao: [{ icone: 'bi-check', label: 'Confirmar' }],
    };
  }

  public static iniciarTransicao() {
    const modalModelo = document.querySelector('.modalModelo') as HTMLElement;
    modalModelo.classList.add('show');
  }

  public static iniciarSegundaTransicao() {
    const modalContent = document.querySelector(
      '.modal-content'
    ) as HTMLElement;
    modalContent.classList.add('show');
  }

  public static fecharModal() {
    const modalContent = document.querySelector(
      '.modal-content'
    ) as HTMLElement;
    const modalModelo = document.querySelector('.modalModelo') as HTMLElement;
    modalContent.classList.remove('show');
    modalModelo.classList.remove('show');

    modalContent.style.transition = 'none';
    modalContent.offsetHeight;
    modalContent.style.transition = '';
    modalModelo.style.transition = 'none';
    modalModelo.offsetHeight;
    modalModelo.style.transition = '';
  }
}
