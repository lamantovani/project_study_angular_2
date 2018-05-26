import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

  menuFavorito: boolean = true;

  onMenuFavorito(){
    console.log("chamou");
    this.menuFavorito = !this.menuFavorito;
  }

  constructor() { }

  ngOnInit() {
  }



}
