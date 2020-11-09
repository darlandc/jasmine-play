import { PostComponent } from './../components/posts.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let fb: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test like method', () => {
    component.post = {
      myLike: false,
    };
    component.like();
    fixture.detectChanges();
    expect(component.post.myLike).toBeTruthy();
  });
});
