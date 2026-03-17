import { Component, signal } from '@angular/core';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-header',
  imports: [MatFormFieldModule, MatIconModule, MatHint, MatInputModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
    protected readonly title = signal('Recipe Box');
}
