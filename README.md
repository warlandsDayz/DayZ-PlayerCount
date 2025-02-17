# Discord DayZ Server Status Bot

This is a Discord bot that displays the current player count of a DayZ server using the CFTools Cloud API.

Some Preview : 

![{Preview 1](https://github.com/user-attachments/assets/832524f6-433d-4ddc-8c64-f82b832780e3)
![Preview 2](https://github.com/user-attachments/assets/aff811b7-700b-4ccc-8319-13fc18ca3c66)
Quick Message : At the moment Queue is not working. need to be Fixed.


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

## Installation Guide
### For Windows Users:
1. Download the project ZIP from GitHub by clicking **Code > Download ZIP**.
2. Extract the ZIP file to your desired location.
3. Install [Node.js](https://nodejs.org/).
4. Open a Command Prompt in the project folder.
5. Run `npm install` to install dependencies.
6. Create a `.env` file in the folder with the required environment variables.
7. Run `node Bot.js` to start the bot.

### For Linux Users:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```
2. Install Node.js using your package manager.
3. Run `npm install` to install dependencies.
4. Create a `.env` file with the necessary variables.
5. Start the bot with:
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
- **Arnaud** - [GitHub Profile](https://github.com/yourusername)

---

## Help
If you need help or have questions, feel free to add me on Discord: **ember_design**

Happy coding! 🚀

