import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {GenerateCombService} from "../../services/generate-comb.service";

@Component({
  selector: 'app-generate-combination',
  templateUrl: './generate-combination.component.html',
  styleUrls: ['./generate-combination.component.scss']
})
export class GenerateCombinationComponent implements AfterViewInit {
  submitted: boolean = false;
  numberGeneratorForm = this.fb.group({
    phoneNumber: ['', [Validators.required, Validators.pattern("^[0-9]{7}$|^[0-9]{10}$")]],
  });

  constructor(private fb: FormBuilder,
              private generateCombService: GenerateCombService,
              private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  get f() {
    return this.numberGeneratorForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.generateCombService.getLatestPhoneNumber(this.numberGeneratorForm.value.phoneNumber);
  }
}
