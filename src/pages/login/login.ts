import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../../pages/home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  reg: boolean;
  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
      this.reg=false;
    }
  async login(user: User){
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log('>>>>>>>>>>>>',result);
      this.navCtrl.push(HomePage);
    }
    catch (e){
      console.error(e);
    }
  }
  regAuth(){
    this.reg = true;
  }
  async register(user: User){
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
    }
    catch(e){
      console.error(e)
    }
    this.reg = false;
  }
}
