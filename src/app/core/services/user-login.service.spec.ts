import { LoginService } from "./user-login.service";
import { TestBed } from '@angular/core/testing';
import { fakeAsync } from '@angular/core/testing';

describe('LoginService', () => {
    let service: LoginService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LoginService);
    });

    it('should return false from service when there is no token',fakeAsync(() => {
        expect(service.isUserLoggedIn()).toBeFalsy();
    }));

    it('sholuid return false if password is incorrect', fakeAsync(() => {
        let result = service.authenticate("abc@gmail.com","rout")
        expect(result).toBeFalsy();
    }))
})