import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, ToastController, AlertController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { Contato } from 'src/models/contato.model';

@Component({
  selector: 'app-contato-editar',
  templateUrl: './contato-editar.page.html',
  styleUrls: ['./contato-editar.page.scss'],
})
export class ContatoEditarPage implements OnInit {
  @Input() contato: Contato = new Contato();
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
      id: [this.contato.id],
      nome: [this.contato.nome, Validators.minLength(5)],
      email: [this.contato.email, Validators.minLength(10)],
      CPF: [this.contato.CPF, Validators.minLength(11)],
      telefone: [this.contato.telefone, Validators.minLength(8)],
      endereco: [this.contato.endereco, Validators.minLength(10)],
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
  ngOnChanges(chances: SimpleChange) {
    this.form.controls['id'].setValue(this.contato.id);
    this.form.controls['nome'].setValue(this.contato.nome);
    this.form.controls['email'].setValue(this.contato.email);
    this.form.controls['CPF'].setValue(this.contato.CPF);
    this.form.controls['telefone'].setValue(this.contato.telefone);
    this.form.controls['endereco'].setValue(this.contato.endereco);
  }
  async submit() {
    const loading = await this.loadingCtrl.create({ message: 'Criando...' });
    loading.present();

    this
      .service
      .put(this.form.value)
      .subscribe(
        (res: any) => {
          loading.dismiss();
          this.showSuccess();
        },
        (err: any) => {
          loading.dismiss();
          console.log(err);
          this.showError("Falha ao alterar");
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

  async showSuccess() {
    const alert = await this.alertCtrl.create({
      message: 'Contato. Alterado com Sucesso',
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
