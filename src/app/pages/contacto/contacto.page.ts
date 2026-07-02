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

constructor(private messagesService:MessagesService){} 


ngOnInit() {}

async enviar(){
  this.messagesService.guardarMensaje(this.correo,this.mensaje)  
};

guardar(){
  this.messagesService.guardarMensaje(this.correo,this.mensaje)
  console.log(this.correo,this.mensaje)
};

leer(){
  this.messagesService.leerMensaje()
};

consultar(){
  this.messagesService.consultarPlataforma(this.correo,this.mensaje)
};


 }



