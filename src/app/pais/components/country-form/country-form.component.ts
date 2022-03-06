import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss'],
})
export class CountryFormComponent implements OnInit {
  pais: Country | undefined;

  countryForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    capital: ['', Validators.required],
    poblacion: ['', Validators.required],
    idioma: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id']) {
      this.activatedRoute.params
        .pipe(switchMap(({ id }) => this.paisService.buscarPais(id)))
        .subscribe((pais) => {
          this.pais = pais[0];
          this.setValues();
        });
    }
  }

  setValues() {
    this.countryForm.controls['nombre'].setValue(this.pais!.name.common);
    this.countryForm.controls['capital'].setValue(this.pais!.capital);
    this.countryForm.controls['poblacion'].setValue(this.pais!.population);
    this.countryForm.controls['idioma'].setValue(
      this.getLanguage(this.pais!.languages)
    );
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
    this.countryForm.reset();
    if (this.activatedRoute.snapshot.params['id']) {
      this.router.navigate(['/paises']);
    }
  }

  getLanguage(language: object) {
    if (language) {
      return Object.values(language)[0];
    }
    return;
  }
}
