import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
import { MasinfoPage } from '../../pages/masinfo/masinfo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
usuarios

  constructor(public navCtrl: NavController , public proveedor: Proveedor1Provider) {

  }

  otraPagina(d){
    this.navCtrl.push(MasinfoPage,{d:d});
  }

  ionViewDidLoad(){
    this.proveedor.obtenerDatos()
    .subscribe(
      (data)=>{this.usuarios=data;  console.log(data); },
      (error)=>{ console.log(error); }
    )

  }


}
