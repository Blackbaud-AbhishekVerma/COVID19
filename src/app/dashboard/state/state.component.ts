import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegionModel, DistrictDataModel } from '../../core/models/state-region.model';
import { StateRegionService } from '../../core/services/state-region.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  stateName: string;
  observableTest: Observable<any>
  errorMessage: String;
  regionalData: RegionModel [] = [];
  abc: DistrictDataModel[] =[];
  DistrictData: [];
  Districts;
  
  constructor(private router: Router, private route: ActivatedRoute, private stateRegionService: StateRegionService) { }

  ngOnInit(): void {
    this.stateName = this.route.snapshot.params['name'];
    this.fetchData();
  }

  private fetchData(){
    this.stateRegionService.getRegionalData().subscribe((res: any) => {
      this.DistrictData = res[this.stateName.trim()].districtData;
      this.Districts = Object.entries(this.DistrictData);
    });
  }
}