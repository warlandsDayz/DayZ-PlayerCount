# Discord DayZ Server Status Bot

This is a Discord bot that displays the current player count of a DayZ server using the CFTools Cloud API.

## Features
- Fetches player count from CFTools Cloud API.
- Updates Discord bot status every 5 minutes with the number of players currently online.
- Provides real-time player information from your DayZ server.

## Project Structure
- **Bot.js**: Main file containing the bot logic.

## How It Works
1. **Authentication with CFTools API:**
   - The bot obtains an authentication token using the `APP_ID` and `APP_SECRET`.
2. **Fetching Player Data:**
   - Fetches the list of active player sessions from the CFTools API endpoint.
3. **Updating Discord Status:**
   - Sets the bot's presence in Discord to display the current number of players online.
   - Runs every 5 minutes using `setInterval`.

## Environment Variables
Create a `.env` file with the following:
```env
SERVER_ID=your_discord_server_id
SERVER_API_ID=your_cftools_server_api_id
DISCORD_TOKEN=your_discord_bot_token
APP_ID=your_cftools_app_id
APP_SECRET=your_cftools_app_secret
```

## Creating an Application on CFTools Cloud
To use the CFTools API, you need to create an application:
1. Go to the [CFTools Cloud Developer Portal](https://data.cftools.cloud/developer).
2. Log in with your account.
3. Navigate to **Applications** and click **Create Application**.
4. Fill in the required details (name, description, etc.).
5. Once created, copy your `Application ID` and `Application Secret`.
6. Add them to your `.env` file as `APP_ID` and `APP_SECRET`.

## Installation
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
npm install
```

## Usage
```bash
node Bot.js
```

## Dependencies
- [discord.js](https://discord.js.org/)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [dotenv](https://www.npmjs.com/package/dotenv)

## License
This project is licensed under the MIT License.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## Author
- **Ember** - [GitHub Profile](https://github.com/warlandsDayz)

---

Happy coding! 🚀
