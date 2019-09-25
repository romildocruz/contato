import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, ToastController, AlertController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { Contato } from 'src/models/contato.model';
import { contatoUtil } from 'src/Utils/contato.util';

@Component({
  selector: 'app-contato-editar',
  templateUrl: './contato-editar.page.html',
  styleUrls: ['./contato-editar.page.scss'],
})
export class ContatoEditarPage implements OnInit {
  @Input() contato: Contato = new Contato();
  public contatos: Contato[];
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private service: DataService,
    private route: ActivatedRoute,

  ) {
    this.form = this.fb.group({
      id: [''],
      nome: ['', Validators.minLength(5)],
      email: ['', Validators.minLength(10)],
      CPF: ['', Validators.minLength(11)],
      telefone: ['', Validators.minLength(8)],
      endereco: ['', Validators.minLength(10)],
       cep: ['', Validators.minLength(8)],
       logradouro: ['', Validators.minLength(60)],
       complemento: ['', Validators.minLength(45)],
       bairro: ['', Validators.minLength(60)],
       localidade: ['', Validators.minLength(60)],
       uf: ['', Validators.minLength(2)],
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this
      .service
      .getContato(id)
      .subscribe(
        (res: any) => this.contato = res
      );
  }
  async submit() {
    const loading = await this.loadingCtrl.create({ message: 'Alterando...' });
    loading.present();

    this
      .service
      .put(this.form.value)
      .subscribe(
        (res: any) => {
          loading.dismiss();
          this.showSuccess('Contato. Alterado com Sucesso');
        },
        (err: any) => {
          loading.dismiss();
          console.log(err);
          this.showError("Falha ao alterar");
        }
      );
  }
  async contatoExcluir() {
    const loading = await this.loadingCtrl.create({ message: 'Excluindo...' });
    loading.present();

    this
      .service
      .delete(this.form.value)
      .subscribe(
        (res: any) => {
          loading.dismiss();
          this.showSuccess('Contato. Excluido com Sucesso');
        },
        (err: any) => {
          loading.dismiss();
          console.log(err);
          this.showError("Falha ao excluir");
        }
      );
  }
  async showError(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'Fechar',
    });
    toast.present();
  }

  async showSuccess(msg: string) {
    const alert = await this.alertCtrl.create({
      message: msg,
      buttons: [{
        text: 'Continuar',
        handler: () => {
          this.navCtrl.navigateRoot('/home');
        }
      }]
    });

    await alert.present();
  }
}
