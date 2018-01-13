import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular4';
  name:string='';
  grilla:Array<object>=[];
  showform:boolean=false;
  crearsh:boolean=false;
  editarsh:boolean=false;
  json:object = {};
  addpersona(){
    this.showform=true;
    this.crearsh=true;
    this.editarsh=false;
  }
  createpersona(){
    this.grilla.push(this.json);   
    this.json={}; 
  }
  cancel(){
    this.json={};
    this.showform=false;
  }
  eliminar(x){
    this.grilla.splice(this.grilla.indexOf(x),1);
  }
  read(x){
    this.json=x;
    this.crearsh=false;
    this.editarsh=true;
  }
  update(){
    this.json={};    
  }

}
