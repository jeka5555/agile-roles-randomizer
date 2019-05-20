import { AppMaterialModule } from '../../app.material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomizerComponent } from './randomizer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataStorageService } from '../../services/data-storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RandomizerComponent', () => {
    let component: RandomizerComponent;
    let fixture: ComponentFixture<RandomizerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppMaterialModule, CommonModule, FormsModule, BrowserAnimationsModule],
            declarations: [RandomizerComponent],
            providers: [DataStorageService],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RandomizerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
