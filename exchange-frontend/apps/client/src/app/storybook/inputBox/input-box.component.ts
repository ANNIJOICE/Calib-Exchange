import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'exchange-frontend-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss'],
  imports: [MatInputModule, FormsModule],
  standalone: true
})
export class InputBoxComponent {
  @Input() title: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';

  @Input() className: string = '';
  @Input() backgroundColor: string = '';
}
