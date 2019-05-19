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

    ngOnInit(): void {
        this.rolesTableCheckboxesState = [[]];

        for (let i = 0; i < this.filteredTeamMembers.length; i++) {
            const a = [];

            for (let j = 0; j < this.filteredRoles.length; j++) {
                a.push(false);
            }

            this.rolesTableCheckboxesState.push(a);
        }
    }

    ngOnChanges({ teamMembers, roles }: SimpleChanges): void {
        if (teamMembers) {
            this.filteredTeamMembers = teamMembers.currentValue.filter(member => !!member);
            this.saveStateToService();
        }

        if (roles) {
            this.filteredRoles = roles.currentValue.filter(role => !!role);
            this.columns = ['name', ...this.filteredRoles];
            this.saveStateToService();
        }
    }

    public onCheckBoxChange(i: number, j: number): void {
        this.rolesTableCheckboxesState[i][j] = !this.rolesTableCheckboxesState[i][j];
        this.saveStateToService();
    }

    private saveStateToService(): void {}
}
