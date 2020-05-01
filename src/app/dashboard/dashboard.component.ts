import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDasboardPost } from '../models/dashboard-post.model';
import { DashboardPostService } from '../services/dashboard-post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  observableTest: Observable<any>
  errorMessage: String;
  loadedPosts: IDasboardPost [] = [];

  constructor(private router: Router, private dashboardPostService: DashboardPostService ) { }

  ngOnInit(): void {
    this.fetchDashBoardData();
  }
  
  onLoadStateInfo(event: any){
    this.router.navigate(['/state',event.target.innerHTML]);
  }
   
  private fetchDashBoardData(){
   this.dashboardPostService.getTestWithObservable().subscribe(
     res => { 
      this.loadedPosts = res['statewise'];
     }
   )
  };
}
