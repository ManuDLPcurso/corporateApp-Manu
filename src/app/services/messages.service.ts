import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {

    async guardarDato(correo: string, mensaje: string) {
  await Preferences.set({ mensaje });
}
async obtenerDato(correo: string, mensaje: string) {
  const result = await Preferences.get({ mensaje });
  return result.value;
}
}
