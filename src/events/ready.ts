import { event } from "../utils";

export default event("ready", ({ client, log }) => {
    log(`Logged in as ${client.user?.tag}!`);
})
