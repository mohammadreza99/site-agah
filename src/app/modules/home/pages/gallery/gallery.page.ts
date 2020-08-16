import { Component, OnInit } from '@angular/core';
import { IAlbum, LightboxEvent, Lightbox, LIGHTBOX_EVENT } from 'ngx-lightbox';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';
import { Subscription } from 'rxjs';
import { GalleryService } from '@app/core/http/gallery/gallery.service';

@Component({
  selector: 'ag-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  constructor(
    private lightboxEvent: LightboxEvent,
    private lightbox: Lightbox,
    private galleryService: GalleryService
  ) {}
  masonryItems = [
    { title: 'item 1' },
    { title: 'item 2' },
    { title: 'item 3' },
  ];
  images = [
    'https://via.placeholder.com/150x150',
    'http://via.placeholder.com/150x250',
    'https://via.placeholder.com/180x350',
    'https://via.placeholder.com/130x80',
    'http://via.placeholder.com/115x150',
  ];
  lightboxSubscription: Subscription;

  ngOnInit() {
    this.galleryService.get().subscribe((res) => {
      console.log(res);
      // for (const item of res) {
      // this.masonryImages.push({
      //   // imageUrl:item.
      // })
      // }
    });
  }

  get masonryImages(): IMasonryGalleryImage[] {
    return this.images.map(
      (image: string) => ({ imageUrl: image } as IMasonryGalleryImage)
    );
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
