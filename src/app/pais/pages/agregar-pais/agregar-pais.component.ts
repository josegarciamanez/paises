import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-agregar-pais',
  templateUrl: './agregar-pais.component.html',
  styleUrls: ['./agregar-pais.component.scss'],
})
export class AgregarPaisComponent implements OnInit {
  pais!: Country;
  isEdit: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id']) {
      let params = this.activatedRoute.snapshot.params['id'];
      this.paisService.buscarPais(params).subscribe((pais) => {
        this.pais = pais[0];
        this.isEdit = true;
      });
    }
  }
}
