import { StateRegionService } from "./state-region.service";
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginService', () => {
    let service: StateRegionService;

    let url: string = "https://api.covid19india.org/state_district_wise.json";
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
              ],
        });
        service = TestBed.inject(StateRegionService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should contain correct URL', () => {
        expect(service.url).toEqual(url);
    });

})