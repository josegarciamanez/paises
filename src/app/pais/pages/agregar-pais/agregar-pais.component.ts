import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-pais',
  templateUrl: './agregar-pais.component.html',
  styleUrls: ['./agregar-pais.component.scss'],
})
export class AgregarPaisComponent implements OnInit {
  countryForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    capital: ['', Validators.required],
    poblacion: ['', Validators.required],
    idioma: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

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
