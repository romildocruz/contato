import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contato-lista',
  templateUrl: './contato-lista.component.html',
  styleUrls: ['./contato-lista.component.scss'],
})
export class ContatoListaComponent implements OnInit {
  @Input() contatos: any[] = [];
  constructor() { }

  ngOnInit() { }

}
