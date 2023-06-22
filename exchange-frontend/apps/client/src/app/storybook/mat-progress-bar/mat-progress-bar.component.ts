import { Component, Input } from '@angular/core';
import {
  MatProgressBarModule,
  ProgressBarMode
} from '@angular/material/progress-bar';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'exchange-frontend-mat-progress-bar',
  templateUrl: './mat-progress-bar.component.html',
  styleUrls: ['./mat-progress-bar.component.scss'],
  imports: [MatProgressBarModule],
  standalone: true
})
export class MatProgressBarComponent {
  @Input()
  mode: ProgressBarMode = 'determinate';

  /**
   * ProgressBar Value (0 -100) - Applicable only for Determinate and Buffer modes
   */
  @Input()
  value: number = 40;

  /**
   * ProgressBar BufferValue (0 -100) - Applicable only for Buffer mode
   */
  @Input()
  bufferValue: number = 60;

  /**
   * ProgressBar Color - primary (Theme color) | accent | warn
   */
  @Input()
  color: ThemePalette = 'primary';
}
