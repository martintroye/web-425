/*
============================================
; Title: Exercise 1.3
; Author: Troy Martin
; Date: 09/05/2019
; Modified By: Troy Martin
; Description: Angular CLI
;===========================================
*/

// import core testing
import { TestBed, async } from '@angular/core/testing';
// import the app component
import { AppComponent } from './app.component';

// create a group of tests for the component
describe('AppComponent', () => {
  beforeEach(async(() => {
    // before each test declare the app component and compile it
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  // define a test that creates an instance of the component
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // define a test to check the initial value of the title property
  it(`should have as title 'Hello World!'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Hello World!');
  });

  // define a test to validate that the title is rendered on the screen
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hello World!');
  });
});
