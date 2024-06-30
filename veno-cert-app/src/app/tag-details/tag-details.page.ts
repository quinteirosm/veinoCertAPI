import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tag-details',
  templateUrl: './tag-details.page.html',
  styleUrls: ['./tag-details.page.scss'],
})
export class TagDetailsPage implements OnInit {
  data: any;

  goToSetup() {
    console.log('Redirecting to setup page...');
    this.router.navigate(['/nfc-scan']);
  }

  constructor(private storage: Storage, private router: Router) {}

  ngOnInit() {
    this.storage.get('nfcData').then((storedValue) => {
      if (storedValue) {
        this.data = Object.keys(storedValue);
        console.log('Retrieved value:', this.data);
      } else {
        console.log('Key not found in localStorage');
      }
    });
  }
}
