import { Component, OnInit } from '@angular/core';
import { GalleryService } from '@app/core/http/gallery/gallery.service';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';
import { GalleryItem } from '@app/shared/models/gallery.model';
import { Router } from '@angular/router';

@Component({
  selector: 'ag-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  constructor(private galleryService: GalleryService, private router: Router) {}

  masonryImages: IMasonryGalleryImage[];

  ngOnInit(): void {
    this.galleryService.get().subscribe((res) => {
      this.masonryImages = res.map(
        (item: GalleryItem) =>
          ({ imageUrl: item.images[0], alt: item.id } as IMasonryGalleryImage)
      );
    });
  }

  onClickImage(image: IMasonryGalleryImage) {
    this.router.navigate(['/news/gallery', image.alt]);
  }
}
