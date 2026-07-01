import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton]
})
export class NosotrosPage implements OnInit {

  oficinaLat:number = 50;
  oficinaLon:number = -5;
  actualLat:number= 0;
  actualLon:number= 0;
  distancia: number=0;
  
  constructor(private geolocationService:GeolocationService) { 

  }

async obtenerUbicacion() {
const coords = await this.geolocationService.getCurrentPosition();
this.actualLat = coords.latitude;
this.actualLon = coords.longitude;
}

distanciaTotal(){
this.distancia= this.geolocationService.calcularDistancia(this.oficinaLat,this.oficinaLon,this.actualLat,this.actualLon);
}


 async ngOnInit() {

    }

}






