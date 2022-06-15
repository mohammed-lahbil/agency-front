import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInterfaceComponent } from './add-interface.component';

describe('AddInterfaceComponent', () => {
  let component: AddInterfaceComponent;
  let fixture: ComponentFixture<AddInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
