import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
})
export class PaisesComponent implements OnInit {
  @ViewChild('myModalInfo', { static: false }) myModalInfo:
    | TemplateRef<any>
    | undefined;

  paises: Country[] = [];
  coatOfArms: string | undefined;
  page: number = 1;
  pageSize = 20;

  constructor(
    private paisService: PaisService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.paisService.buscarPaises().subscribe((data) => {
      this.paises = data;
    });
  }

  /**
   * Recover the language from the Languages object
   * @date 3/6/2022 - 7:50:32 PM
   *
   * @param {object} language
   * @returns {*}
   */
  getLanguage(language?: object) {
    if (language) {
      return Object.values(language)[0];
    }
    return;
  }

  /**
   * Display Coat of Arms Info in Modal
   * @date 3/6/2022 - 8:18:10 PM
   *
   * @param {*} pais
   */
  showModalInfo(pais: any) {
    this.modalService.open(this.myModalInfo);
    this.coatOfArms = pais.coatOfArms.svg;
  }

  /**
   * Delete a country
   * @date 3/6/2022 - 8:19:07 PM
   *
   * @param {Country} pais
   */
  delete(pais: Country) {
    Swal.fire({
      title: `¿Desea eliminar ${pais.name.common}?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `No Eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`${pais.name.common} eliminado!`, '', 'success');
      } else if (result.isDenied) {
        Swal.fire(`No se eliminó ${pais.name.common}`, '', 'info');
      }
    });
  }
}
