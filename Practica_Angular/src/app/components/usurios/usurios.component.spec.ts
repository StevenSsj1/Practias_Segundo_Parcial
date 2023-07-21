import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuriosComponent } from './usurios.component';

describe('UsuriosComponent', () => {
  let component: UsuriosComponent;
  let fixture: ComponentFixture<UsuriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuriosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
