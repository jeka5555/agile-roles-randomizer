import { DataStorageService } from '../../services/data-storage.service';
import { CdkTableModule } from '@angular/cdk/table';
import { AppMaterialModule } from '../../app.material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsComponent } from './settings.component';
import { RolesTableComponent } from '../roles-table/roles-table.component';

describe('SettingsComponent', () => {
    let component: SettingsComponent;
    let fixture: ComponentFixture<SettingsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppMaterialModule, CdkTableModule],
            declarations: [SettingsComponent, RolesTableComponent],
            providers: [DataStorageService],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
