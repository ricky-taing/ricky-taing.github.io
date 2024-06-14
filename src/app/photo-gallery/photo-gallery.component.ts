import { Component } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [Angular2ImageGalleryModule, HammerModule, RouterLink],
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.css'
})
export class PhotoGalleryComponent {

  yourNotificationFunction(): void {

  }
}
