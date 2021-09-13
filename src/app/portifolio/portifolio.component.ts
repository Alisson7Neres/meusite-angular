import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {

  mostrarCadastro: Boolean = true;
  mostrarFesta: Boolean = true;
  mostrarIMC: Boolean = true;
  mostrarSpring: Boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  mostrarCampoCadastro(): boolean {
    console.log("mostrou")
    return this.mostrarCadastro = !this.mostrarCadastro;
  }
  mostrarCampoFesta(): boolean {
    return this.mostrarFesta = !this.mostrarFesta;
  }
  mostrarCampoIMC(): boolean {
    return this.mostrarIMC = !this.mostrarIMC;
  }
  mostrarCampoSpring(): boolean {
    return this.mostrarSpring = !this.mostrarSpring;
  }
}
