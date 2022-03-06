import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  term: string = '';

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  /**
   * Search the selected term
   * @date 3/6/2022 - 7:56:33 PM
   */
  search() {
    this.onEnter.emit(this.term);
  }

  /**
   * Call the Debounce event
   * @date 3/6/2022 - 7:56:02 PM
   */
  pressedKey() {
    this.debouncer.next(this.term);
  }
}
