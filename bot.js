import { Client, GatewayIntentBits, ActivityType } from 'discord.js';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const serverId = process.env.SERVER_ID;
const SERVER_API_ID = process.env.SERVER_API_ID
const API_URL = `https://data.cftools.cloud/v1/server/${SERVER_API_ID}/GSM/list`;
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const APP_ID = process.env.APP_ID;
const APP_SECRET = process.env.APP_SECRET;

async function getAuthToken() {
    try {
        const response = await fetch('https://data.cftools.cloud/v1/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': APP_ID },
            body: new URLSearchParams({ application_id: APP_ID, secret: APP_SECRET })
        });
        if (!response.ok) {
            const error = await response.text();
            throw new Error(`Failed to get auth token: ${error}`);
        }
        const data = await response.json();
        return data.token;
    } catch (error) {
        console.error('Authentication failed:', error);
        return null;
    }
}

async function updateStatus() {
    const token = await getAuthToken();
    if (!token) return;

    const headers = { "Authorization": `Bearer ${token}`, 'User-Agent': APP_ID };

    try {
        const response = await fetch(API_URL, { headers });
        if (!response.ok) {
            console.error(`API request failed with status code: ${response.status}`);
            return;
        }

        const data = await response.json();
        if (data.sessions && Array.isArray(data.sessions)) {
            const playerCount = data.sessions.length;
            const activityText = `${playerCount}/100 Q:0`;

            client.user.setPresence({
                activities: [{ name: activityText, type: ActivityType.Playing }],
                status: 'online'
            });
        } else {
            console.log("No player data found.");
            client.user.setPresence({
                activities: [{ name: "0 players online", type: ActivityType.Playing }],
                status: 'online'
            });
        }

    } catch (error) {
        console.error(`Error updating status: ${error}`);
    }
}

setInterval(updateStatus, 5 * 60 * 1000);

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    updateStatus();
});

client.login(DISCORD_TOKEN);
