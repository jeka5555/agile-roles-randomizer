import { Injectable } from '@angular/core';
import { ChosenRoleInterface } from '../../interfaces/chosen-role.interface';
import { HttpClient } from '@angular/common/http';
import { LINE_BREAK_CHARACTER, SLACK_API_URL, SLACK_CHANNELS_SET_TOPIC, SLACK_PRIVATE_CHANNEL_SET_TOPIC } from './slack-api.config';
import { DataStorageService } from '../data-storage/data-storage.service';

@Injectable()
export class SlackApiService {
    constructor(protected http: HttpClient, private dataStorageService: DataStorageService) {}

    public setTopic(chosenRoles: ChosenRoleInterface[]) {
        const chosenRolesArray: string[] = [];

        chosenRoles.forEach((chosenRole: ChosenRoleInterface) => {
            chosenRolesArray.push(`${chosenRole.role}: <@${chosenRole.teamMember}>`);
        });

        const topic = `${LINE_BREAK_CHARACTER}${chosenRolesArray.join(LINE_BREAK_CHARACTER)}`;
        const params = {
            topic,
            token: this.dataStorageService.slackToken,
            channel: this.dataStorageService.slackChannel,
        };

        const SET_TOPIC = this.dataStorageService.isPrivateChannel ? SLACK_PRIVATE_CHANNEL_SET_TOPIC : SLACK_CHANNELS_SET_TOPIC

        this.http.get(`${SLACK_API_URL}${SET_TOPIC}`, { params }).subscribe();
    }
}
