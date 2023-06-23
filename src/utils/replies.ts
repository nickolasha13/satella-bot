import { InteractionReplyOptions, InteractionEditReplyOptions } from 'discord.js';

export const Colors = {
    error: 0xff0000,
}

export const Reply = {
    error(msg: string): InteractionReplyOptions {
        return {
            ephemeral: true,
            embeds: [{
                description: msg,
                color: Colors.error,
            }],
        }
    }
}

export const EditReply = {
    error(msg: string): InteractionEditReplyOptions {
        return {
            embeds: [{
                description: msg,
                color: Colors.error,
            }],
        }
    }
}