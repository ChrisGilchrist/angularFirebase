import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LettingEditorComponent } from './property-editor.component';

describe('LettingEditorComponent', () => {
  let component: LettingEditorComponent;
  let fixture: ComponentFixture<LettingEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LettingEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LettingEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
