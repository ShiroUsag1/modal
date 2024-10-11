import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { modalModel } from '../../models/modalModel';
import { ControleServidorContract } from '@shaenkan/server-contract-library';
import { ModalService } from '../../services/ModalService/modal-service.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  @Input() dados: modalModel;
  @Input() bodyTemplate: boolean;
  @Input() bodyTemplateName: string;
  @Output() acaoBotao = new EventEmitter();

  ngOnInit(): void {
    this.dados = ModalService.getblank();
  }

  iniciarSegundaTransicao(){
    ModalService.iniciarSegundaTransicao();
  }

  fecharModal(){
    ModalService.fecharModal();
    this.dados = ModalService.getblank();
  }

  funcaoBotao(acaolabel) {
    this.acaoBotao.emit(acaolabel.toLowerCase());
  }

}
