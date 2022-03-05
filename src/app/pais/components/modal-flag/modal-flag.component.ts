import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-flag',
  templateUrl: './modal-flag.component.html',
  styleUrls: ['./modal-flag.component.scss'],
})
export class ModalFlagComponent implements OnInit {
  @Input() pais: any;
  constructor() {}

  ngOnInit(): void {}
}
