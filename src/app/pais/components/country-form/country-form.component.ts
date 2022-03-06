import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss'],
})
export class CountryFormComponent implements OnInit {
  countryForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    capital: ['', Validators.required],
    poblacion: ['', Validators.required],
    idioma: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  doSomething() {
    console.log(this.countryForm.value);
  }
}
