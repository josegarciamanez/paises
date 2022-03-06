import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-agregar-pais',
  templateUrl: './agregar-pais.component.html',
  styleUrls: ['./agregar-pais.component.scss'],
})
export class AgregarPaisComponent implements OnInit {
  pais!: Country[];
  isEdit: boolean = false;
  params = this.activatedRoute.snapshot.params['id'];
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.params) {
      this.isEdit = true;
    }
  }
}
