import { RolesMapInterface } from '../../interfaces/roles-map.interface';
import { DataStorageService } from '../../services/data-storage.service';
import { Component, OnInit } from '@angular/core';

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
    public chosenRoles: Record<string, string> = {};

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

    public randomize(): void {
        this.randomInProgress = true;

        setTimeout(() => {
            // const teamForSM = this.checkedTeamMembers
            //     .filter(member => member.availableRoles.some(role => role === Roles.SM))
            //     .filter(member => !this.wasAlreadySelectedLastWeek(member));
            // const chosenSM = teamForSM[this.getRandomMember(teamForSM.length)].tag;

            // const teamForRM = this.checkedTeamMembers
            //     .filter(member => member.availableRoles.some(role => role === Roles.RM))
            //     .filter(member => member.tag !== chosenSM)
            //     .filter(member => !this.wasAlreadySelectedLastWeek(member));
            // const chosenRM = teamForRM[this.getRandomMember(teamForRM.length)].tag;

            // const teamForSSM = this.checkedTeamMembers
            //     .filter(member => member.availableRoles.some(role => role === Roles.SSM))
            //     .filter(member => member.tag !== chosenSM)
            //     .filter(member => member.tag !== chosenRM)
            //     .filter(member => !this.wasAlreadySelectedLastWeek(member));
            // const chosenSSM = teamForSSM[this.getRandomMember(teamForSSM.length)].tag;

            // this.chosenRoles = [
            //     {
            //         tag: chosenSM,
            //         roleName: 'Scrum Master',
            //     },
            //     {
            //         tag: chosenRM,
            //         roleName: 'Release Manager',
            //     },
            //     {
            //         tag: chosenSSM,
            //         roleName: 'Sentry and SD Master',
            //     },
            // ];

            this.randomizeCount++;

            if (this.randomizeCount < 50) {
                this.randomize();
            } else {
                this.randomizeCount = 0;
                this.randomInProgress = false;
            }
        }, 2 * this.randomizeCount);
    }

    public getRandomMember(length: number): number {
        return Math.floor(Math.random() * length);
    }

    // private wasAlreadySelectedLastWeek(teamMember: string): boolean {
    //     // return Object.keys(this.takenRoles)
    //     //     .map((key: string) => this.takenRoles[key])
    //     //     .includes(tag);
    // }
}
