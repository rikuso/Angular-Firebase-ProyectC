import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  Firestore,
  collectionData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {
  CardAbility,
  CardArmon,
  CardPowers,
  CardWeapon,
  ClassPersonaje,
  Mazo,
  Type,
  User,
} from '../interfaces/cards';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private firestore: Firestore) {}
  //USUARIOS
  addUser(user: User) {
    const userRef = collection(this.firestore, 'Usuario');
    return addDoc(userRef, user);
  }
  //MAZO
  addMazo(mazo: Mazo) {
    const mazoRef = collection(this.firestore, 'Mazo');
    return addDoc(mazoRef, mazo);
  }
  // CARTA DE PODER
  addCardPower(cardPowers: CardPowers) {
    const cardPowerRef = collection(this.firestore, 'cardPower');
    return addDoc(cardPowerRef, cardPowers);
  }
  //ARMA MOSTRAR
  getCardPower(): Observable<CardPowers[]> {
    const cardPowerRef = collection(this.firestore, 'cardPower');
    return collectionData(cardPowerRef, { idField: 'id' }) as Observable<
      CardPowers[]
    >;
  }
  // CARTA DE HABILIDAD
  addCardAbility(cardAbility: CardAbility) {
    const cardAbilityRef = collection(this.firestore, 'cardAbility');
    return addDoc(cardAbilityRef, cardAbility);
  }
  //HABILIDAD MOSTRAR
  getCardAbility(): Observable<CardAbility[]> {
    const cardAbilityRef = collection(this.firestore, 'cardAbility');
    return collectionData(cardAbilityRef, { idField: 'id' }) as Observable<
      CardAbility[]
    >;
  }
  // ARMADURA  CARTA AGREGAR
  addCardArmon(cardArmon: CardArmon) {
    const cardArmonRef = collection(this.firestore, 'cardArmon');
    return addDoc(cardArmonRef, cardArmon);
  }
  //ARMADURA MOSTRAR
  getCardArmon(): Observable<CardArmon[]> {
    const cardArmonRef = collection(this.firestore, 'cardArmon');
    return collectionData(cardArmonRef, { idField: 'id' }) as Observable<
      CardArmon[]
    >;
  }
  // ARMA CARTA
  addCardWeapon(cardWeapon: CardWeapon) {
    const cardWeaponRef = collection(this.firestore, 'cardWeapon');
    return addDoc(cardWeaponRef, cardWeapon);
  }
  //ARMA MOSTRAR
  getCardWeapon(): Observable<CardWeapon[]> {
    const cardWeaponRef = collection(this.firestore, 'cardWeapon');
    return collectionData(cardWeaponRef, { idField: 'id' }) as Observable<
      CardWeapon[]
    >;
  }
  // CLASS Y TIPO
  addClass(classP: ClassPersonaje) {
    const classPRef = collection(this.firestore, 'classP');
    return addDoc(classPRef, classP);
  }
  addType(type: Type) {
    const typeRef = collection(this.firestore, 'type');
    return addDoc(typeRef, type);
  }
}
