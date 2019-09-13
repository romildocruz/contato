import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController, AlertController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-reset-senha',
  templateUrl: './reset-senha.page.html',
  styleUrls: ['./reset-senha.page.scss'],
})
export class ResetSenhaPage implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private service: DataService,
  ) {
    this.form = this.fb.group({
      email: ['', Validators.minLength(6)],
    });
  }

  ngOnInit() {
  }
  async submit() {
    const loading = await this.loadingCtrl.create({ message: 'Enviando...' });
    loading.present();
    this.showSuccess();
    loading.dismiss();

  }

  async showSuccess() {
    const alert = await this.alertCtrl.create({
      message: 'Bem-vindo ao meus Contatos!',
      buttons: [{
        text: 'Continuar',
        handler: () => {
          this.navCtrl.navigateRoot('/login');
        }
      }]
    });
    await alert.present();
  }
}
