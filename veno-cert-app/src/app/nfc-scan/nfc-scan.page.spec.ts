import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NfcScanPage } from './nfc-scan.page';

describe('NfcScanPage', () => {
  let component: NfcScanPage;
  let fixture: ComponentFixture<NfcScanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NfcScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
