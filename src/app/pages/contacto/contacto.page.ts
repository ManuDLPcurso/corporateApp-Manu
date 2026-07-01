import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonTextarea, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ProductsService } from 'src/app/services/products.service';
import { Preferences } from '@capacitor/preferences';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton,IonInput,IonTextarea,IonItem]
})
export class ContactoPage implements OnInit {

correo:string="";
mensaje:string="";

constructor(private messagesService:MessagesService) {
  async guardar() {
await this.messagesService.guardarDato(this.correo, this.mensaje);
}
async leer() {
correo = await this.messagesService.obtenerDato(this.correo);
}
}

async enviar(){
await Preferences.set({
  key: 'ultimoMensaje',
  value: JSON.stringify({
  correo:this.correo,
  mensaje:this.mensaje
})
})
}




 ngOnInit() {}

}

