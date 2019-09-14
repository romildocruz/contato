import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ToastController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { contatoUtil } from 'src/Utils/contato.util';
import { Contato } from 'src/models/contato.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public contato: Contato = new Contato();
  public contatos: any[];

  constructor(
    private service: DataService,
    private toastCtrl: ToastController,
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.contatos = contatoUtil.load();
    if (this.contatos.length === 0) {
      this.service.getContatos()
        .subscribe(
          (res: any) => {
            this.contatos = res;
            contatoUtil.save(this.contatos);
          }
        );
    }
  }

  contatoCriar() {
    this.contato = new Contato();
    this.navCtrl.navigateRoot('/contato-editar');
  }
  contatoDetalhe() {
    const id = this.route.snapshot.paramMap.get('id');

  }
  async showMessage(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      closeButtonText: "Fechar",
      showCloseButton: true
    });
    toast.present();
  }
}