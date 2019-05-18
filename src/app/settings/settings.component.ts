import { Component } from '@angular/core';

const defaultRoles = ['Scrum Master', 'Release Manager'];
const defaultTeamMembers = ['Name 1', 'Name 2', 'Name 3'];

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
    public roles = defaultRoles;
    public teamMembers = defaultTeamMembers;
}
