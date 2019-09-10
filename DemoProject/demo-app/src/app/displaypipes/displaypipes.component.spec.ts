import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypipesComponent } from './displaypipes.component';

describe('DisplaypipesComponent', () => {
  let component: DisplaypipesComponent;
  let fixture: ComponentFixture<DisplaypipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaypipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaypipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
