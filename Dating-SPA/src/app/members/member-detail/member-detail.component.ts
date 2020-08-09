import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/User';
import { UserService } from 'src/app/_services/User.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryImage, NgxGalleryOptions, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { NgxGalleryActionComponent } from '@kolkov/ngx-gallery/lib/ngx-gallery-action/ngx-gallery-action.component';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
user: User;
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];
  constructor(private userservice: UserService, private alertify: AlertifyService,
    // tslint:disable-next-line: align
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });

    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }

    ];
    this.galleryImages = this.getImages();
  }
  getImages(){
    const imageurls = [];
    for (const photos of this.user.photos) {
      imageurls.push({
        small: photos.url,
        medium: photos.url,
        big: photos.url
      });
    }
    return imageurls;
  }
  loadUser() {
    this.userservice.getUser(+this.route.snapshot.params.id).subscribe((user: User) => {
      this.user = user;
    }, error => {
      this.alertify.error(error);
    });
  }
}
