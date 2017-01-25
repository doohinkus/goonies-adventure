/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MikeyComponent } from './mikey.component';

describe('MikeyComponent', () => {
  let component: MikeyComponent;
  let fixture: ComponentFixture<MikeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MikeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MikeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
