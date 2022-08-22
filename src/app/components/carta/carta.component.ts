import { Component, OnInit } from '@angular/core';
import { CardAbility, CardArmon, CardPowers, CardWeapon, Mazo } from 'src/app/interfaces/cards';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  cardArmadura: CardArmon[];
  cardArmas: CardWeapon[];
  cardHabilidad: CardAbility[];
  cardPower:  CardPowers[];
  

  //varibles de filtro
  filtro:string;
  busquedas: string;
//ensayo de guardar
  cartas:Array<any>=[];
  variables:Array<string>=['ligera','mediana','pesada','Dos manos','Una Mano']
  mazo:Mazo ={
      name :'mazo 1',
      active: true
    };
  guardar(evento:any){
    for (const key in evento) {
        if (Object.prototype.hasOwnProperty.call(evento, key)) {
          const element = evento[key];
          for(const x in this.variables){
            if(this.variables[x]== element){
              this.cartas.push(evento)
              console.log(element)
            }
          }
        }
      }
    /*
    
    
    (this.mazo.cardArmon.length >22)?console.log('superor el limite'):console.log('tiene limite');
    */
  }
  constructor( private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCardArmon().subscribe(cardArmadura =>{
      this.cardArmadura = cardArmadura;
    })
    this.cardService.getCardAbility().subscribe(cardHabilidad=>{
      this.cardHabilidad = cardHabilidad;
    })
    this.cardService.getCardWeapon().subscribe(cardArmas=>{
      this.cardArmas = cardArmas;
    })
    this.cardService.getCardPower().subscribe(cardPower=>{
      this.cardPower = cardPower;
    })
  }

}


