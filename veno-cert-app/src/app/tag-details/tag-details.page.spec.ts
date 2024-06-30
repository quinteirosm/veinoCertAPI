import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagDetailsPage } from './tag-details.page';

describe('TagDetailsPage', () => {
  let component: TagDetailsPage;
  let fixture: ComponentFixture<TagDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TagDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
