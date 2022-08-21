import { Component, OnInit } from '@angular/core';
import { CardAbility, CardArmon, CardPowers, CardWeapon } from 'src/app/interfaces/cards';
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
  
  constructor( private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCardArmon().subscribe(cardArmadura =>{
      //console.log(cardArmadura);
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
