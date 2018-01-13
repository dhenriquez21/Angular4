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
  grilla: Observable<any[]>;


  ////FUNCIONES///
  constructor(public afDB: AngularFireDatabase) {
      this.readall();    
  }

  readall(){
    this.grilla=this.afDB.list('persona').valueChanges();
  }
  createpersona(){
    this.afDB.database.ref('persona/'+this.json["codigo"]).set(this.json);
    this.readall();
    this.json={};
    this.showform=false;
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
  }
  read(x){
    console.log(x);
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
