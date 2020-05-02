import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/services/user-login.service';
import { News } from "../core/models/news.model";
import { NewsService } from "../core/services/news.service";
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
    this.fetchNews();
    this.isAuthenticated = this.checkLogin();
  }

  private fetchNews(){
    this.newsService.fetchNews().subscribe(data => {
      this.newsList = data;
      this.newsList.sort((val1, val2)=> {return val1.dateAdded > val2.dateAdded ? -1 : 1 })
    })
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
