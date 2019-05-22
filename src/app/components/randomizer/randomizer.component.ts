import { RandomizerModes } from '../../enums/randomizer-modes.enum';
import { ChosenRoleInterface } from '../../interfaces/chosen-role.interface';
import { RolesMapInterface } from '../../interfaces/roles-map.interface';
import { DataStorageService } from '../../services/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { MatSelectChange, MatSnackBar } from '@angular/material';

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
    public randomizerMode = this.dataStorageService.randomizerMode;
    public instantChoice = this.dataStorageService.instantChoice;

    public checked: Record<string, boolean> = {};
    public lastIterationRoles: Record<string, string> = {};
    public chosenRoles: ChosenRoleInterface[];

    public randomizeCount = 0;
    public randomInProgress = false;

    constructor(private dataStorageService: DataStorageService, private snackBar: MatSnackBar) {}

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
                const teamMembersForRole = this.getTeamMembersForRole(role);
                const notChosenTeamMembers = this.filterByNotChosen(teamMembersForRole);
                const membersFilteredByRandomizerMode = this.filterByRandomizerMode(role, notChosenTeamMembers, this.randomizerMode);
                const chosenTeamMember = this.getRandomMember(membersFilteredByRandomizerMode);

                if (chosenTeamMember) {
                    this.chosenRoles.push({
                        role,
                        teamMember: chosenTeamMember,
                    });
                }
            });

            this.randomizeCount++;

            if (!this.instantChoice && this.randomizeCount < RANDOMIZE_ITERATIONS_COUNT) {
                this.randomize();
            } else {
                this.randomizeCount = 0;
                this.randomInProgress = false;

                if (this.chosenRoles.length !== this.roles.length) {
                    this.snackBar.open('Невозможно выбрать все роли', 'Недостаточно участников', { duration: 4000 });
                }
            }
        }, RANDOMIZE_MILLISECONDS_COUNT * this.randomizeCount);
    }

    private getRandomMember<T>(teamMembers: T[]): T {
        return teamMembers[Math.floor(Math.random() * teamMembers.length)];
    }

    private filterByRandomizerMode(role: string, teamMembers: string[], randomizerMode: RandomizerModes): string[] {
        switch (randomizerMode) {
            case RandomizerModes.NEW_MEMBERS_FOR_ITERATION:
                return teamMembers.filter((teamMember: string) => !this.wasAlreadySelectedLastIteration(teamMember));
            case RandomizerModes.NEW_MEMBERS_FOR_ROLE:
                return teamMembers.filter((teamMember: string) => this.lastIterationRoles[role] !== teamMember);
            default:
                return teamMembers;
        }
    }

    private filterByNotChosen(teamMembers: string[]): string[] {
        return teamMembers.filter(
            (teamMember: string) => !this.chosenRoles.some((chosenRole: ChosenRoleInterface) => chosenRole.teamMember === teamMember),
        );
    }

    private wasAlreadySelectedLastIteration(teamMember: string): boolean {
        return Object.keys(this.lastIterationRoles)
            .map((key: string) => this.lastIterationRoles[key])
            .includes(teamMember);
    }
}
