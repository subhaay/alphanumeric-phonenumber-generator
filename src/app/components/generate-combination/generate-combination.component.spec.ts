import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GenerateCombinationComponent} from './generate-combination.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GenerateCombService} from "../../services/generate-comb.service";
import {BehaviorSubject, Observable, of} from "rxjs";
import {filter} from "rxjs/operators";

describe('GenerateCombinationComponent', () => {
  let component: GenerateCombinationComponent;
  let fixture: ComponentFixture<GenerateCombinationComponent>;
  const subjectMock = new BehaviorSubject<string>('12345');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GenerateCombinationComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule],
      providers: [
      ],
    }).compileComponents();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(GenerateCombinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('onSubmit should call phoneNumber$.next', () => {
    const value = '12345';
    subjectMock
      .pipe(filter(res => !!res))
      .subscribe(res => expect(res).toEqual(value));
    subjectMock.next(value);
  });

  it('should have called submit method', () => {
    const fixture = TestBed.createComponent(GenerateCombinationComponent);
    const component = fixture.componentInstance;
    const service = fixture.debugElement.injector.get(GenerateCombService);
    spyOn(service, 'getLatestPhoneNumber');
    component.onSubmit();
    expect(service.getLatestPhoneNumber).toHaveBeenCalled();
  });
});
