import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoEditarPage } from './contato-editar.page';

describe('ContatoEditarPage', () => {
  let component: ContatoEditarPage;
  let fixture: ComponentFixture<ContatoEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoEditarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
