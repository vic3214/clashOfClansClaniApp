import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarLeaguesComponent } from './war-leagues.component';

describe('WarLeaguesComponent', () => {
  let component: WarLeaguesComponent;
  let fixture: ComponentFixture<WarLeaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarLeaguesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
