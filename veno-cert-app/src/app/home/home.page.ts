import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nfcScan() {
    //scans the NFC tag
    console.log('Scanning NFC tag...');

    //fetches data

    // nfcScanData on JSON format
    const nfcScanData: { [key: string]: number } = {
      id: 1,
      name: 2,
      description: 3,
    };

    // stores nfcScanData in storage as a JSON object
    this.storage.set('nfcData', nfcScanData);
    console.log(nfcScanData);

    //redirects to tag-details page
    this.router.navigate(['/tag-details']);
  }

  constructor(private storage: Storage, private router: Router) {}

  async ngOnInit() {
    // initialize storage
    await this.storage.create();
  }
}
