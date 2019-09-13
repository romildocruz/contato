import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoListaComponent } from './contato-lista.component';

describe('ContatoListaComponent', () => {
  let component: ContatoListaComponent;
  let fixture: ComponentFixture<ContatoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoListaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
