import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss'],
})
export class PorPaisComponent implements OnInit {
  pais: Country[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {
    this.paisService.buscarPais('españa').subscribe((data) => {
      this.pais = data;
      console.log(this.pais);
    });
  }
}
