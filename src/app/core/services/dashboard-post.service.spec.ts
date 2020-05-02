import { DashboardPostService } from "./dashboard-post.service";
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginService', () => {
    let service: DashboardPostService;

    let url: string = "https://api.covid19india.org/data.json";
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
              ],
        });
        service = TestBed.inject(DashboardPostService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should contain correct URL', () => {
        expect(service.url).toEqual(url);
    });

})