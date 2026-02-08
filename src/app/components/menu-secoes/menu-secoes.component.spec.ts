import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSecoesComponent } from './menu-secoes.component';

describe('MenuSecoesComponent', () => {
  let component: MenuSecoesComponent;
  let fixture: ComponentFixture<MenuSecoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSecoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSecoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
