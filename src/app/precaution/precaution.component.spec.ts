import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecautionComponent } from './precaution.component';

describe('PrecautionComponent', () => {
  let component: PrecautionComponent;
  let fixture: ComponentFixture<PrecautionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecautionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecautionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(PrecautionComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Basic protective measures against the new coronavirus');
  }));
});
