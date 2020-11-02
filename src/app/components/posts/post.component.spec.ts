// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { PostComponent } from './post.component';
// describe('PostComponent', () => {
//   let component: PostComponent;
//   let fixture: ComponentFixture<PostComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [PostComponent]
//     }).compileComponents();
//   })

//   beforeEach(() => {
//     // component = new PostComponent();
//     fixture = TestBed.createComponent(PostComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should increase total', () => {
//     component.total = 3;
//     component['like']();
//     expect(component.total).toBe(4);
//   });

//   it('should decrease total', () => {
//     component.total = 2;
//     component['dislike']();
//     expect(component.total).toBe(1);
//   });

//   it('should decrease total if the total is not 0', () => {
//     // let component = new PostComponent();
//     component.total = 0;
//     component['dislike']();
//     expect(component.total).toBe(0);
//   });

//   it('should display global likes', () => {
//     component.total = 4;
//     fixture.detectChanges();
//     let debugElement = fixture.debugElement.query(By.css('.global-likes'));
//     let el:HTMLElement = debugElement.nativeElement;
//     console.log()
//     expect(el.innerText).toContain('4');
//   })
// });
