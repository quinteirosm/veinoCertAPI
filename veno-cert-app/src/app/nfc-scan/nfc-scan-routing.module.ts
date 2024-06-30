import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NfcScanPage } from './nfc-scan.page';

const routes: Routes = [
  {
    path: '',
    component: NfcScanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NfcScanPageRoutingModule {}
