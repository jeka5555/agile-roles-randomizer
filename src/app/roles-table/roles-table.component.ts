import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
    selector: 'app-roles-table',
    templateUrl: './roles-table.component.html',
    styleUrls: ['./roles-table.component.scss'],
})
export class RolesTableComponent implements OnChanges {
    @Input()
    teamMembers: string[];
    @Input()
    roles: string[];

    public filteredTeamMembers: string[];
    public filteredRoles: string[];

    ngOnChanges({ teamMembers, roles }: SimpleChanges): void {
        if (teamMembers) {
            this.filteredTeamMembers = teamMembers.currentValue.filter(member => !!member);
        }

        if (roles) {
            this.filteredRoles = roles.currentValue.filter(role => !!role);
        }
    }
}
