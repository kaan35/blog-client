import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticlesLatestComponent } from './articles-latest.component';

describe('ArticlesLatestComponent', () => {
  let component: ArticlesLatestComponent;
  let fixture: ComponentFixture<ArticlesLatestComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlesLatestComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ArticlesLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
