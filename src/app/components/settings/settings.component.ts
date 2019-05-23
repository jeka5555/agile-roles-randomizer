import { RandomizerModes } from '../../enums/randomizer-modes.enum';
import { DataStorageService } from '../../services/data-storage.service';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {
    public roles = this.dataStorageService.roles;
    public teamMembers = this.dataStorageService.teamMembers;
    public randomizerMode = this.dataStorageService.randomizerMode;
    public instantChoice = this.dataStorageService.instantChoice;
    public randomizerModes = RandomizerModes;
    public copyLink: string;

    constructor(private dataStorageService: DataStorageService, private snackBar: MatSnackBar) {}

    ngOnInit(): void {
        this.updateCopyLinkFromServiceData();
    }

    public trackByFn = number => number;

    public addFormControlForRole(): void {
        this.roles = [...this.roles, ''];
    }

    public onRoleValueChange(event: Event, index: number): void {
        const newValue = (event.target as HTMLInputElement).value;

        this.roles = [...this.roles.slice(0, index), newValue, ...this.roles.slice(index + 1, this.roles.length)];
    }

    public removeRole(roleIndex: number): void {
        this.roles = [...this.roles.slice(0, roleIndex), ...this.roles.slice(roleIndex + 1, this.roles.length)];
    }

    public addFormControlForTeamMember(): void {
        this.teamMembers = [...this.teamMembers, ''];
    }

    public onTeamMemberValueChange(event: Event, index: number): void {
        const newValue = (event.target as HTMLInputElement).value;

        this.teamMembers = [...this.teamMembers.slice(0, index), newValue, ...this.teamMembers.slice(index + 1, this.teamMembers.length)];
    }

    public removeTeamMember(teamMemberIndex: number): void {
        this.teamMembers = [
            ...this.teamMembers.slice(0, teamMemberIndex),
            ...this.teamMembers.slice(teamMemberIndex + 1, this.teamMembers.length),
        ];
    }

    public saveStateToService(): void {
        this.dataStorageService.randomizerMode = this.randomizerMode;
        this.dataStorageService.instantChoice = this.instantChoice;
    }

    public copyLinkToClipboard(): void {
        this.snackBar.open('Ссылка скопирована в буфер обмена', '', { duration: 1000 });
    }

    private updateCopyLinkFromServiceData(): void {
        this.copyLink = `${window.location.href.replace('settings', '')}?data=${this.getServiceData()}`;
    }

    private getServiceData(): string {
        return JSON.stringify({
            roles: this.dataStorageService.roles,
            rolesMap: this.dataStorageService.rolesMap,
            instantChoice: this.dataStorageService.instantChoice,
            randomizerMode: this.dataStorageService.randomizerMode,
            teamMembers: this.dataStorageService.teamMembers,
        });
    }
}
