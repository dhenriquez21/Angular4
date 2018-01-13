import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular4';
  name='';
  grilla=[
      {id:1,codigo:'1',nombre:'David'},
      {id:2,codigo:'2',nombre:'Henriquez'},
  ];
  showform=false;
  json = {};
  addpersona(){
    this.showform=true;
  }
}
