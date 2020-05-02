import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/user-login.service';
import { News } from "../models/news.model";
import { NewsService } from "../services/news.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
 
  newsList: News[] =[];

  isAuthenticated: boolean;

  constructor(private loginService: LoginService, private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.newsList = this.newsService.newsList;
    this.isAuthenticated = this.checkLogin();
    console.log(this.isAuthenticated);
  }

  private checkLogin(){
    return this.loginService.isUserLoggedIn();
  }

  addNews(){
    this.router.navigate(['/addnews']);
  }

  login(){
    this.router.navigate(['/login']);
  }

  logout(){
    this.loginService.logOut();
    this.router.navigate(['']);
  }
}
