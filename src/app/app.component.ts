import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  ////VARIABLES///
  title:string = 'Angular4';
  name:string='';
  //grilla:Array<object>=[];
  showform:boolean=false;
  crearsh:boolean=false;
  editarsh:boolean=false;
  json:object = {id:null};
  list:Array<object>=[];
  grilla: any;


  ////FUNCIONES///
  constructor(public afDB: AngularFireDatabase) {
      this.readall();          
  }

  readall(){
    this.grilla=this.afDB.list('persona').valueChanges();
    localStorage.setItem('PRUEBA',JSON.stringify(this.grilla)); 
    //localStorage.setItem('key',JSON.stringify(this.grilla)); 
    //localStorage.setItem('grilla',JSON.stringify(this.grilla)); 
    //window.localStorage.addItem("someKey", "someValue");   
  }
  createpersona(){
    this.afDB.database.ref('persona/'+this.json["codigo"]).set(this.json);
    this.readall();
    this.json={};
    this.showform=false;
    localStorage.setItem('PRUEBA',JSON.stringify(this.grilla["codigo"])); 
  }
  addpersona(){
    this.showform=true;
    this.crearsh=true;
    this.editarsh=false;
  }
  
  cancel(){
       this.json={};
       this.showform=false;
  
  }
  eliminar(x){
    this.afDB.database.ref('persona/'+x["codigo"]).remove();
    this.readall();
    //localStorage.setItem('grilla',JSON.parse(this.grilla)); 
  }
  read(x){    
    this.json=x;
    this.showform=true;
    this.crearsh=false;
    this.editarsh=true;
  }
  update(){
    this.afDB.database.ref('persona/'+this.json["codigo"]).set(this.json);
    this.readall();
    this.json={};
    this.showform=false;
    //localStorage.setItem('grilla',JSON.parse(this.grilla)); 
  }
  // update(){
  //   this.json={};    
  // }
  // createpersona(){
  //   this.grilla.push(this.json);   
  //   this.json={}; 
  // }
  // cancel(){
  //   this.json={};
  //   this.showform=false;
  // }
  // eliminar(x){
  //   this.grilla.splice(this.grilla.indexOf(x),1);
  // }

  

}
