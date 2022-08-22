import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CardService } from 'src/app/services/card.service';
import { StorageService } from 'src/app/services/storage.service';
import {
  Ability,
  CardAbility,
  CardArmon,
  CardPowers,
  CardWeapon,
  Part,
  Powers,
  Weapon,
} from '../../interfaces/cards';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent implements OnInit {
  armaduras: string;
  arma: string;
  habilidad: string;
  valorHyP: string;
  valorTipo: string;
  //ARMADURA
  parte: Part = {
    name: '',
    img: '',
    defens: 0,
    part: '',
    styl: '',
    description: '',
  };
  carta: CardArmon = {
    armon: this.parte,
  };

  //ARMA

  armas: Weapon = {
    img: '',
    name: '',
    damange: 0,
    styl: '',
    description: '',
  };
  cardArma: CardWeapon = {
    arma: this.armas,
  };
  //HABILIDAD Y PODER

  power: Powers = {
    name: '',
    img: '',
    powers: 0,
  };

  ability: Ability = {
    img: '',
    name: '',
    description: '',
    damage: 0,
    turn: 0,
    defens :0,
    styl: '',
  };
  cardAbility:CardAbility={
    ability: this.ability
  }
  cardPower: CardPowers = {
    powers: this.power,
  };
  constructor(
    private cardService: CardService,
    private toastr: ToastrService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {}

  eleccion(valor: string) {
    console.log("este es vlaor que llega "+valor)
    switch (valor) {
      case 'pesada':
        this.parte.defens = 150;
        break;
      case 'mediana':
        this.parte.defens = 100;
        break;
      case 'ligera':
        this.parte.defens = 50;
        break;
      case 'Una Mano':
        this.armas.damange = 100;
        break;
      case 'Dos manos':
        this.armas.damange = 50;
        break;
      default:
        console.error('error');
    }
  }
  async guardar() {
    try {
      //metodo
      
      this.eleccion(this.parte.styl || this.armas.styl);

      if (this.parte.defens > 49) {
        this.storageService
          .subirImagen(
            this.parte.part,
            this.parte.name + '_' + Date.now(),
            this.parte.img
          )
          .then((urlImagen) => {
            this.parte.img = urlImagen;
            //para los mensajes
            this.toastr.success(this.parte.name, 'Carta guardad');
            const response = this.cardService.addCardArmon(this.carta);
            this.limpiarFA();
          });
      }
      if (this.valorHyP == 'Poder') {
        this.storageService
          .subirImagen(
            this.valorHyP,
            this.power.name + '_' + Date.now(),
            this.power.img
          )
          .then((urlImagen) => {
            this.power.img = urlImagen;
            //para los mensajes
            this.toastr.success(this.power.name, 'Carta guardad');

            const response = this.cardService.addCardPower(this.cardPower);
            console.log(response);

            this.limpiarHP();
          });
    
      }  if(this.valorHyP == 'Habilidad'){
        this.storageService
        .subirImagen(
          this.valorHyP,
          this.ability.name + '_' + Date.now(),
          this.ability.img
        )
        .then((urlImagen) => {
          this.ability.img = urlImagen;
          //para los mensajes
          this.ability.styl =  this.valorTipo;
          this.ability.damage= Number(this.ability.damage);
          this.ability.defens = Number(this.ability.defens);
          this.toastr.success(this.ability.name, 'Carta guardad');
          const response = this.cardService.addCardAbility(this.cardAbility);
          console.log(response);

          this.limpiarHP();
        });
      } else {
        this.storageService
          .subirImagen(
            this.armas.styl,
            this.armas.name + '_' + Date.now(),
            this.armas.img
          )
          .then((urlImagen) => {
            this.armas.img = urlImagen;
            //para los mensajes
            this.toastr.success(this.armas.name, 'Carta guardad');
            const response = this.cardService.addCardWeapon(this.cardArma);

            this.limpiarAR();
          });
      }
    } catch (error) {
      this.toastr.warning('error problemas al guardar la carta', 'Error');
      console.log(error);
    }
  }
  cargarImagen(event: any, x: string) {
    switch (x) {
      case 'armaduras':
        let archivo = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(archivo[0]);
        reader.onloadend = () => {
          this.parte.img = reader.result;
        };
        break;
      case 'arma':
        let archivos = event.target.files;
        let readers = new FileReader();
        readers.readAsDataURL(archivos[0]);
        readers.onloadend = () => {
          this.armas.img = readers.result;
        };
        break;
      case 'Habilidad':
        let archivosHabilidad = event.target.files;
        let readersHabilidad = new FileReader();
        readersHabilidad.readAsDataURL(archivosHabilidad[0]);
        readersHabilidad.onloadend = () => {
          this.ability.img = readersHabilidad.result;
        };
        break;
      case 'Poder':
        let archivosPoder = event.target.files;
        let readersPoder = new FileReader();
        readersPoder.readAsDataURL(archivosPoder[0]);
        readersPoder.onloadend = () => {
          this.power.img = readersPoder.result;
        };
        break;
      default:
        this.toastr.warning('formato no compatible', 'erro de imagen');
        console.log('error de imagen');
    }
  }
  radio(parametro: string) {
    switch (parametro) {
      case this.armaduras:
        this.armaduras = parametro;
        this.arma = '';
        this.habilidad = '';
        break;
      case this.arma:
        this.arma = parametro;
        this.armaduras = '';
        this.habilidad = '';
        break;
      case this.habilidad:
        this.habilidad = parametro;
        this.arma = '';
        this.armaduras = '';
        break;
      default:
        console.error('parametro no valido');
        break;
    }
  }

  //limpiar formulario de armaduras se puede menter en una sola funcion y con el switch recortar un poco mas
  limpiarFA() {
    this.parte.name = '';
    this.parte.img = '';
    this.parte.description = '';
    this.parte.defens = 0;
    this.parte.styl = '';
    this.parte.part = '';
  }
  limpiarAR() {
    this.armas.name = '',
      this.armas.img = '',
      this.armas.description = '',
      this.armas.damange = 0,
      this.armas.styl = '';
  }
  limpiarHP() {
    if (this.valorHyP == 'Poder') {
      this.power.name = '',
        this.power.img = '',
        this.power.powers = 0,
        this.valorHyP = '';
    } else {
      this.ability.description = '',
        this.ability.img = '',
        this.ability.name = '',
        this.ability.damage = 0,
        this.ability.defens = 0,
        this.ability.styl = '',
        this.ability.turn = 0,
        this.valorTipo = ''
    }
  }
  
}
