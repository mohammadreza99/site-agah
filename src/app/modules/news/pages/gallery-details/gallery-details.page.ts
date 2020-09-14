import { Component, OnInit } from '@angular/core';
import { IAlbum, LightboxEvent, Lightbox, LIGHTBOX_EVENT } from 'ngx-lightbox';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';
import { Subscription } from 'rxjs';
import { GalleryService } from '@app/core/http/gallery/gallery.service';
import { ActivatedRoute } from '@angular/router';
import { GalleryItem } from '@app/shared/models/gallery.model';

@Component({
  selector: 'ag-gallery-details',
  templateUrl: './gallery-details.page.html',
  styleUrls: ['./gallery-details.page.scss'],
})
export class GalleryDetailsPage implements OnInit {
  constructor(
    private lightboxEvent: LightboxEvent,
    private lightbox: Lightbox,
    private galleryService: GalleryService,
    private route: ActivatedRoute
  ) {}

  images: string[] = [];
  lightboxSubscription: Subscription;
  masonryImages: IMasonryGalleryImage[];

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.galleryService.get().subscribe((res) => {
      this.images = res.find((item) => item.id == id).images;
      this.masonryImages = this.images.map(
        (image: string) => ({ imageUrl: image } as IMasonryGalleryImage)
      );
    });
  }

  get lightboxImages(): IAlbum[] {
    return this.images.map(
      (image: string) => ({ src: image, thumb: image } as IAlbum)
    );
  }

  onClickImage(image: IMasonryGalleryImage) {
    const index = this.masonryImages
      .map((img) => img.imageUrl)
      .indexOf(image.imageUrl);
    document.querySelector('body').setAttribute('style', 'overflow:hidden');
    this.lightbox.open(this.lightboxImages, index);
    this.lightboxSubscription = this.lightboxEvent.lightboxEvent$.subscribe(
      (event) => this.receiveEvent(event)
    );
  }

  receiveEvent(event: any) {
    if (event.id === LIGHTBOX_EVENT.CLOSE) {
      document.querySelector('body').setAttribute('style', 'overflow:visible');
      this.lightboxSubscription.unsubscribe();
    }
  }
}
