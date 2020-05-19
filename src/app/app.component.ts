import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

opciones = ['FOTOGRAFIA', 'LORENZO', 'KEYLETH', 'YEINER', 'RADIO', 'SILLA', 'CASA', 'PERRO', 'MESA', 'CIELO', 'OREJA', 'SAL', 'REFRIGERADORA', 'HORMIGA', 'MURCIELAGO', 'PELOTA'];

palabra = '';
palabraOculta = '';

intentos = 0;

gano = false;
perdio = false;
jugando = false;
reiniciar = false;


letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
          'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
          'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


constructor() {

  this.palabraOculta = '_ '.repeat( this.palabra.length );

  console.log(this.opciones);

}

comprobar( letra, j ) {

  const myABC = this.letras;
  console.log(myABC);

  this.existeLetra(letra);

  const palabraOcultaArr = this.palabraOculta.split(' ');
  console.log(letra);
  console.log(j);
  this.letras.splice(j , 1);

  for ( let i = 0; i < this.palabra.length; i ++ ) {

    if ( this.palabra[i] === letra ) {
      palabraOcultaArr[i] = letra;
    }

  }

  this.palabraOculta = palabraOcultaArr.join(' ');
  this.verificaGane();

}

verificaGane() {

  const palabraArr = this.palabraOculta.split(' ');
  const palabraEvaluar = palabraArr.join('');

  if ( palabraEvaluar === this.palabra ) {
    this.gano = true;
    this.reiniciar = true;

  }

  if ( this.intentos >= 9 ) {
    this.perdio = true;
    console.log('Usuario perdio');
    this.reiniciar = true;
  }

}
elegiste(opcion){
  this.jugando = true;
  this.palabra = opcion;

  this.palabraOculta = '_ '.repeat( this.palabra.length );
  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < this.opciones.length; i++) {
    const element = i;
  }
}
volverJugar(){
  this.reiniciar = false;
  this.jugando = false;
  this.perdio = false;
  this.gano = false;
  this.palabra = '';
  this.palabraOculta = '';
  this.intentos = 0;
  this.letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
}

existeLetra( letra ) {

  if ( this.palabra.indexOf( letra ) >= 0  ) {
    // console.log('Letra existe ' + letra );
  } else {
    // console.log('Letra NO existe ' + letra );
    this.intentos ++;
  }

}
 }

