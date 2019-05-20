import { RolesMapInterface } from '../interfaces/roles-map.interface';
import { Injectable } from '@angular/core';

const defaultRoles: string[] = ['Scrum Master', 'Release Manager'];
const defaultTeamMembers: string[] = ['Name 1', 'Name 2', 'Name 3'];
const defaultRolesMap: RolesMapInterface[] = [
    {
        teamMember: 'Name 1',
        teamMemberRoles: ['Scrum Master', 'Release Manager'],
    },
    {
        teamMember: 'Name 2',
        teamMemberRoles: ['Scrum Master', 'Release Manager'],
    },
    {
        teamMember: 'Name 3',
        teamMemberRoles: ['Scrum Master', 'Release Manager'],
    },
];

@Injectable()
export class DataStorageService {
    private _rolesMap: RolesMapInterface[];
    private _teamMembers: string[];
    private _roles: string[];

    public get rolesMap(): RolesMapInterface[] {
        return this._rolesMap || defaultRolesMap;
    }

    public set rolesMap(rolesMap: RolesMapInterface[]) {
        this._rolesMap = rolesMap;
    }

    public get teamMembers(): string[] {
        return this._teamMembers || defaultTeamMembers;
    }

    public set teamMembers(teamMembers: string[]) {
        this._teamMembers = teamMembers;
    }

    public get roles(): string[] {
        return this._roles || defaultRoles;
    }

    public set roles(roles: string[]) {
        this._roles = roles;
    }
}
