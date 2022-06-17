import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticlesArchiveComponent } from './articles-archive.component';

describe('ArticlesArchiveComponent', () => {
  let component: ArticlesArchiveComponent;
  let fixture: ComponentFixture<ArticlesArchiveComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlesArchiveComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ArticlesArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
