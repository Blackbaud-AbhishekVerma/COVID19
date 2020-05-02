import { NewsService } from "./news.service";
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginService', () => {
    let service: NewsService;

    let url: string = "http://localhost:3010/news";
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
              ],
        });
        service = TestBed.inject(NewsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should contain correct URL', () => {
        expect(service.apiJsonUrl).toEqual(url);
    });

})