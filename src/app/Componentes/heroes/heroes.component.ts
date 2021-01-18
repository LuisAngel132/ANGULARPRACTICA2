import { Component, OnInit } from '@angular/core';
import{Heroes} from '../../Modelos/heroes'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public menu2:Boolean=false;
  public menu3:Boolean=false;
  public menu4:Boolean=false;
  public menu5:Boolean=false;
  public menu6:Boolean=false;

  Heroes:Heroes[]=[]
 
  constructor() { }
  anadirHeroe(imagen, nombre,apellidos,habilidades,edad)
  {
  this.Heroes.push(imagen);
  this.Heroes.push(nombre);
  this.Heroes.push(apellidos);
  this.Heroes.push(habilidades);
  this.Heroes.push(edad);
  
  }
  ngOnInit(): void {
 this.Heroes=[
  {
    imagen:"",
    nombre:"John cena",
    apellidos:"zaragosa",
    habilidades:"tecnica del dragon",
    edad:32
  },
  {
    imagen:"",
    nombre:"Cristian aguilar",
    apellidos:"zaragosa",
    habilidades:"tecnica del dragon",
    edad:22
  },  {
    imagen:"",
    nombre:"Darwin quintero",
    apellidos:"zaragosa",
    habilidades:"tecnica del dragon",
    edad:12
  }, 
 ];
  }
  MiMetodo(Heroes:Heroes){
this.menu3=false
this.menu2=false
this.menu4=false
this.menu5=false
this.menu6=false
    return this.menu2,this.menu3,this.menu4,this.menu5,this.menu6
  }
  MiMetodo2(Heroes:Heroes){
    this.menu3=true
    this.menu2=false
    this.menu4=false
    this.menu5=false
    this.menu6=false
        return this.menu2,this.menu3,this.menu4,this.menu5,this.menu6
      }
}
