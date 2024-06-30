import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'tag-details',
    loadChildren: () =>
      import('./tag-details/tag-details.module').then(
        (m) => m.TagDetailsPageModule
      ),
  },
  {
    path: 'nfc-scan',
    loadChildren: () =>
      import('./nfc-scan/nfc-scan.module').then((m) => m.NfcScanPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
