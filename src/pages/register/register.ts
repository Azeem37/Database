import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostsService } from '../../app/services/posts.service';
import { Http } from '@angular/http';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [PostsService]
})
export class RegisterPage {

  posts: Post[];
  name: string = "";

  constructor(private service: PostsService, private http: Http,
    public navCtrl: NavController, public navParams: NavParams) {
      this.service.getPosts().subscribe(posts => {
        console.log(posts);
        this.posts = posts;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}

interface Post{
  id: number;
  title: string;
  body: string;
}