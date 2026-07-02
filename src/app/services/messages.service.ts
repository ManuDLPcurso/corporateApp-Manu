import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';
import { Filesystem,Directory,Encoding } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {

async guardarMensaje(correo:string,mensaje:string){
  console.log("guardar")};
  
async leerMensaje(){
  console.log("leer")};

async consultarPlataforma(correo:string,mensaje:string){
  console.log(Capacitor.getPlatform())

  if(Capacitor.getPlatform()==='web'){
    console.log("web")
    localStorage.setItem('mensaje',mensaje);
    localStorage.setItem('correo',correo);
      
    }
  else{
      const dato=correo;
      await Filesystem.writeFile({
      path:'mensaje.txt',  
      directory:Directory.Documents,
      encoding:Encoding.UTF8,
      data:dato
      }
    );

    }
    
  };
 




}
