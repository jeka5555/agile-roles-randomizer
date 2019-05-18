import { Component, OnInit } from '@angular/core';

enum Roles {
    SM = 'Scrum Master',
    RM = 'Release Manager',
    SSM = 'Sentry & SD Master',
}

interface TeamMember {
    tag: string;
    availableRoles: Roles[];
}

interface ChosenRoleInterface {
    tag: string;
    roleName: string;
}

const tcrmfCCTeam: TeamMember[] = [
    {
        tag: 'p.dedov',
        availableRoles: [Roles.SM, Roles.RM, Roles.SSM],
    },
    {
        tag: 'a.senyukov',
        availableRoles: [Roles.SM, Roles.RM, Roles.SSM],
    },
    {
        tag: 'd.zevalev',
        availableRoles: [Roles.SM, Roles.RM, Roles.SSM],
    },
    {
        tag: 'e.kalibrov',
        availableRoles: [Roles.SM, Roles.RM, Roles.SSM],
    },
    {
        tag: 'g.dzesov',
        availableRoles: [Roles.SM, Roles.RM, Roles.SSM],
    },
    {
        tag: 'd.kondarattsev',
        availableRoles: [Roles.SM, Roles.RM, Roles.SSM],
    },
    {
        tag: 'a.sultonov',
        availableRoles: [Roles.SM],
    },
    {
        tag: 'a.ognev',
        availableRoles: [Roles.SM],
    },
    {
        tag: 'd.prokopuk',
        availableRoles: [Roles.SM],
    },
    {
        tag: 'n.bachurina',
        availableRoles: [Roles.SM],
    },
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public allTeamMembers = tcrmfCCTeam;
    public roles: string[] = Object.keys(Roles);
    public takenRoles = {
        SM: '',
        RM: '',
        SSM: '',
    };

    public checked = {};
    public chosenRoles: ChosenRoleInterface[] = [];

    ngOnInit(): void {
        tcrmfCCTeam.forEach(teamMember => (this.checked[teamMember.tag] = true));
    }

    public get checkedTeamMembers(): TeamMember[] {
        return tcrmfCCTeam.filter(teamMember => this.checked[teamMember.tag]);
    }

    public getTeamMembersForRole(targetRole: Roles): TeamMember[] {
        return this.checkedTeamMembers.filter(({ availableRoles }: TeamMember) => !!availableRoles.some((role: Roles) => role === Roles[targetRole]));
    }

    public randomize(): void {
        const teamForSM = this.checkedTeamMembers
            .filter(member => member.availableRoles.some(role => role === Roles.SM))
            .filter(member => !this.wasAlreadySelectedLastWeek(member));
        const chosenSM = teamForSM[this.getRandomMember(teamForSM.length)].tag;

        const teamForRM = this.checkedTeamMembers
            .filter(member => member.availableRoles.some(role => role === Roles.RM))
            .filter(member => member.tag !== chosenSM)
            .filter(member => !this.wasAlreadySelectedLastWeek(member));
        const chosenRM = teamForRM[this.getRandomMember(teamForRM.length)].tag;

        const teamForSSM = this.checkedTeamMembers
            .filter(member => member.availableRoles.some(role => role === Roles.SSM))
            .filter(member => member.tag !== chosenSM)
            .filter(member => member.tag !== chosenRM)
            .filter(member => !this.wasAlreadySelectedLastWeek(member));
        const chosenSSM = teamForSSM[this.getRandomMember(teamForSSM.length)].tag;

        this.chosenRoles = [
            {
                tag: chosenSM,
                roleName: 'Scrum Master',
            },
            {
                tag: chosenRM,
                roleName: 'Release Manager',
            },
            {
                tag: chosenSSM,
                roleName: 'Sentry and SD Master',
            },
        ];
    }

    public getRandomMember(length: number): number {
        return Math.floor(Math.random() * length);
    }

    private wasAlreadySelectedLastWeek({ tag }: TeamMember): boolean {
        return Object.keys(this.takenRoles)
            .map((key: string) => this.takenRoles[key])
            .includes(tag);
    }
}
