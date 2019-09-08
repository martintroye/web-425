/*
============================================
; Title: Assignment 1.5
; Author: Troy Martin
; Date: 09/08/2019
; Modified By: Troy Martin
; Description: Modules
;===========================================
*/
// import the core testing module
import { TestBed, async } from '@angular/core/testing';
// import the app component for testing
import { AppComponent } from './app.component';

// create the collection of tests
describe('AppComponent', () => {
  // asynchronous logic to run before each of the tests
  beforeEach(async(() => {
    // create and compile html for the tests
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  // test to see if the component can be created
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // test the title property of the app component
  it(`should have as title 'martin-hello-modules'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('martin-hello-modules');
  });

  // test that the template renders the title
  it('should render Welcome from the AppComponent!', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome from the AppComponent!');
  });
});
