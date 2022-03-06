import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss'],
})
export class CountryFormComponent implements OnInit {
  @Input()
  pais!: Country;

  countryForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    capital: ['', Validators.required],
    poblacion: ['', Validators.required],
    idioma: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.pais) {
      console.log(this.pais);
    }
  }

  campoEsValido(campo: string) {
    return (
      this.countryForm.controls[campo].errors &&
      this.countryForm.controls[campo].touched
    );
  }

  guardar() {
    if (this.countryForm.invalid) {
      this.countryForm.markAllAsTouched();
      return;
    }
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${this.countryForm.value.nombre.toUpperCase()} guardado con éxito`,
      showConfirmButton: false,
      timer: 5000,
    });
    console.log(this.countryForm.value);
    this.countryForm.reset();
  }
}
