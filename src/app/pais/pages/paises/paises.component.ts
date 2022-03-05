import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss'],
})
export class PaisesComponent implements OnInit {
  @ViewChild('myModalInfo', { static: false }) myModalInfo:
    | TemplateRef<any>
    | undefined;

  paises: Country[] = [];
  coatOfArms: string | undefined;

  constructor(
    private paisService: PaisService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.paisService.buscarPaises().subscribe((data) => {
      this.paises = data;
    });
  }

  getLanguage(language: object) {
    if (language) {
      return Object.values(language)[0];
    }
    return;
  }

  mostrarModalInfo(pais: any) {
    this.modalService.open(this.myModalInfo);
    this.coatOfArms = pais.coatOfArms.svg;
  }
}
