import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationTableComponent } from './combination-table.component';
import {GenerateCombinationComponent} from "../generate-combination/generate-combination.component";
import {GenerateCombService} from "../../services/generate-comb.service";

describe('CombinationTableComponent', () => {
  let component: CombinationTableComponent;
  let fixture: ComponentFixture<CombinationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinationTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
