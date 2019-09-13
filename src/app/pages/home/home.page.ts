import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ToastController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public contatos: any[];

  constructor(
    private service: DataService,
    private toastCtrl: ToastController,
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.service.getContatos()
      .subscribe(
        (res: any) => {
          this.contatos = res;
        }
      );
  }

  contatoDetalhe() {
    const id = this.route.snapshot.paramMap.get('id');

  }


  contatoExcluir() {

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