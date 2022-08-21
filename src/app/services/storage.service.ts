import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';
firebase.initializeApp(environment.firebase);
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  storageRef = firebase.app().storage().ref();

  constructor() {}

  async subirImagen(carpeta: string, nombre: string, imgBase64: any) {
    try {
      if (carpeta == 'casco' || carpeta == 'torso' || carpeta == 'botas') {
        let respuesta = await this.storageRef
          .child('Armaduras/' + carpeta + '/' + nombre)
          .putString(imgBase64, 'data_url');
        return await respuesta.ref.getDownloadURL();
      }if(carpeta == 'Habilidad'|| carpeta == 'Poder'){
        let respuestas = await this.storageRef
          .child('HabilidadPoder/' + carpeta + '/' + nombre)
          .putString(imgBase64, 'data_url');
        return await respuestas.ref.getDownloadURL();
      } else {
        let respuestas = await this.storageRef
          .child('Armas/' + carpeta + '/' + nombre)
          .putString(imgBase64, 'data_url');
        return await respuestas.ref.getDownloadURL();
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
