import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { DatabaseProvider } from './../../providers/database/database';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  developer = {};
  developers = [];
  detail: boolean;

  
  constructor(public navCtrl: NavController, private databaseprovider: DatabaseProvider, private platform: Platform) {
    this.databaseprovider.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.loadDeveloperData();
      }
    })
    this.detail=false;
  }

  loadDeveloperData() {
    this.databaseprovider.getAllDevelopers().then(data => {
      this.developers = data;
    })
  }

  addDeveloper() {
    this.databaseprovider.addDeveloper(this.developer['name'], this.developer['skill'], parseInt(this.developer['yearsOfExperience']))
    .then(data => {
      this.loadDeveloperData();
    });
    this.developer = {};
  }
  view(){
    if(this.detail==false){
      this.detail=true;
    }else{
      this.detail=false;
    }
  }
  desk(){
    console.log('wel-come');
    this.navCtrl.push(RegisterPage);
  }

}
