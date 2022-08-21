import { Component, OnInit } from '@angular/core';
import { CardArmon } from 'src/app/interfaces/cards';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  cardArmadura: CardArmon[];
  constructor( private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCardArmon().subscribe(cardArmadura =>{
      //console.log(cardArmadura);
      this.cardArmadura = cardArmadura;
    })
  }

}
