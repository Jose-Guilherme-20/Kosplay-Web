import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSecoesContentComponent } from './menu-secoes-content.component';

describe('MenuSecoesContentComponent', () => {
  let component: MenuSecoesContentComponent;
  let fixture: ComponentFixture<MenuSecoesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSecoesContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSecoesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
