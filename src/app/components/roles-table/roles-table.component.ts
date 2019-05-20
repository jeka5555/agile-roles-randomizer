import { DataStorageService } from './../../services/data-storage.service';
import { Component, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'app-roles-table',
    templateUrl: './roles-table.component.html',
    styleUrls: ['./roles-table.component.scss'],
})
export class RolesTableComponent implements OnInit, OnChanges {
    @Input()
    teamMembers: string[];
    @Input()
    roles: string[];

    public filteredTeamMembers: string[];
    public filteredRoles: string[];
    public columns: string[];
    public rolesTableCheckboxesState: boolean[][];

    constructor(private dataService: DataStorageService) {}

    ngOnInit(): void {
        this.rolesTableCheckboxesState = [[]];

        this.filteredTeamMembers.forEach(() => {
            const a = [];

            this.filteredRoles.forEach(() => {
                a.push(true);
            });

            this.rolesTableCheckboxesState.push(a);
        });
    }

    ngOnChanges({ teamMembers, roles }: SimpleChanges): void {
        if (teamMembers && teamMembers.currentValue) {
            this.filteredTeamMembers = teamMembers.currentValue.filter(member => !!member);
            this.saveStateToService();
        }

        if (roles && roles.currentValue) {
            this.filteredRoles = roles.currentValue.filter(role => !!role);
            this.columns = ['name', ...this.filteredRoles];
            this.saveStateToService();
        }
    }

    public onCheckBoxChange(i: number, j: number): void {
        this.rolesTableCheckboxesState[i][j] = !this.rolesTableCheckboxesState[i][j];
        this.saveStateToService();
    }

    private saveStateToService(): void {
        if (!this.filteredTeamMembers || !this.filteredRoles || !this.rolesTableCheckboxesState) {
            return;
        }

        const rolesMap = this.teamMembers.map((teamMember: string, memberIndex: number) => {
            const teamMemberRoles = this.roles.filter(
                (role: string, roleIndex: number) => this.rolesTableCheckboxesState[memberIndex][roleIndex],
            );

            return {
                teamMember,
                teamMemberRoles,
            };
        });

        this.dataService.rolesMap = rolesMap;
        this.dataService.roles = this.filteredRoles;
        this.dataService.teamMembers = this.filteredTeamMembers;
    }
}
