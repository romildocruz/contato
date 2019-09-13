import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
  public contatos: any[];

  constructor(
    private service: DataService
  ) { }

  ngOnInit() {
    this.service.getContatos()
      .subscribe(
        (res: any) => {
          this.contatos = res;
        }
      )
  }

}
