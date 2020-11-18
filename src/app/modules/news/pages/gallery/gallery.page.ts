import { Component, OnInit } from '@angular/core';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';
import { Router } from '@angular/router';

import { GalleryItem } from '@shared/models';
import { AgahService } from '@core/http';

@Component({
  selector: 'ag-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  constructor(private agahService: AgahService, private router: Router) {}

  masonryImages: IMasonryGalleryImage[];

  ngOnInit(): void {
    this.agahService.getGalleries().subscribe((res) => {
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
