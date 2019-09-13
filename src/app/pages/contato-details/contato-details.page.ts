import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contato-details',
  templateUrl: './contato-details.page.html',
  styleUrls: ['./contato-details.page.scss'],
})
export class ContatoDetailsPage implements OnInit {

  public contato: any;

  constructor(
    private service: DataService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this
      .service
      .getContato(id)
      .subscribe(
        (res: any) => this.contato = res
      );
  }
  editarContato() {
    const id = this.route.snapshot.paramMap.get('id');
    this.navCtrl.navigateRoot('contato-editar');
  }
}
