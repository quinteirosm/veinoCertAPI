import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NfcScanPageRoutingModule } from './nfc-scan-routing.module';

import { NfcScanPage } from './nfc-scan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NfcScanPageRoutingModule
  ],
  declarations: [NfcScanPage]
})
export class NfcScanPageModule {}
