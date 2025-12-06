import {
  Component,
  EventEmitter,
  input,
  Input,
  model,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  // @Input({ required: true }) size!: { width: string; height: string };
  // @Output() sizeChange = new EventEmitter<{ width: string; height: string }>();
  // in Angular 17.2 or later, better way of doing it.
  size = model.required<{ width: string; height: string }>();

  onReset() {
    // ...
    const newSize = { width: '250', height: '250' };
    // this.sizeChange.emit(newSize);
    this.size.set(newSize);
  }
}
