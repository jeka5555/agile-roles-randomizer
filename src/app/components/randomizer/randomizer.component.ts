import { ChosenRoleInterface } from '../../interfaces/chosen-role.interface';
import { RolesMapInterface } from '../../interfaces/roles-map.interface';
import { DataStorageService } from '../../services/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material';

const RANDOMIZE_ITERATIONS_COUNT = 50;
const RANDOMIZE_MILLISECONDS_COUNT = 2;

@Component({
    selector: 'app-randomizer',
    templateUrl: './randomizer.component.html',
    styleUrls: ['./randomizer.component.scss'],
})
export class RandomizerComponent implements OnInit {
    public allTeamMembers: string[] = this.dataStorageService.teamMembers;
    public roles: string[] = this.dataStorageService.roles;
    public rolesMap: RolesMapInterface[] = this.dataStorageService.rolesMap;

    public checked: Record<string, boolean> = {};
    public lastIterationRoles: Record<string, string> = {};
    public chosenRoles: ChosenRoleInterface[];

    public randomizeCount = 0;
    public randomInProgress = false;

    constructor(private dataStorageService: DataStorageService) {}

    ngOnInit(): void {
        this.allTeamMembers.forEach(teamMember => (this.checked[teamMember] = true));
    }

    public get checkedTeamMembers(): RolesMapInterface[] {
        return this.rolesMap.filter(({ teamMember }: RolesMapInterface) => this.checked[teamMember]);
    }

    public getTeamMembersForRole(targetRole: string): string[] {
        return this.checkedTeamMembers
            .filter(({ teamMemberRoles }: RolesMapInterface) => teamMemberRoles.some((role: string) => role === targetRole))
            .map(({ teamMember }: RolesMapInterface) => teamMember);
    }

    public onSelectChange({ value }: MatSelectChange, role: string): void {
        this.lastIterationRoles[role] = value;
    }

    public randomize(): void {
        this.randomInProgress = true;

        setTimeout(() => {
            this.chosenRoles = [];
            this.roles.forEach((role: string) => {
                this.chosenRoles.push({
                    role,
                    teamMember: this.getRandomMember(
                        this.getTeamMembersForRole(role)
                            .filter(
                                (teamMember: string) =>
                                    !this.chosenRoles.some((chosenRole: ChosenRoleInterface) => chosenRole.teamMember === teamMember),
                            )
                            .filter((teamMember: string) => !this.wasAlreadySelectedLastIteration(teamMember)),
                    ),
                });
            });

            this.randomizeCount++;

            if (this.randomizeCount < RANDOMIZE_ITERATIONS_COUNT) {
                this.randomize();
            } else {
                this.randomizeCount = 0;
                this.randomInProgress = false;
            }
        }, RANDOMIZE_MILLISECONDS_COUNT * this.randomizeCount);
    }

    public getRandomMember<T>(teamMembers: T[]): T {
        return teamMembers[Math.floor(Math.random() * teamMembers.length)];
    }

    private wasAlreadySelectedLastIteration(teamMember: string): boolean {
        return Object.keys(this.lastIterationRoles)
            .map((key: string) => this.lastIterationRoles[key])
            .includes(teamMember);
    }
}
