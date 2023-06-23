import { Client, GatewayIntentBits } from "discord.js"
import Keys from "../keys";
import {registerEvents} from "../utils";
import events from "../events";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
    ],
})

registerEvents(client, events)

client.login(Keys.clientToken)
    .catch((err) => {
    console.error("Login Error", err)
    process.exit(1)
    })
