import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-flag',
  templateUrl: './modal-flag.component.html',
})
export class ModalFlagComponent {
  @Input() pais: any;
}
