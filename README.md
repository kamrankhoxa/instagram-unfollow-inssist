# Instagram Unfollow Script

This script automates the process of unfollowing users on Instagram using Google Chrome. It is designed to be used with Tampermonkey.

## Features

- Automatically unfollows users on Instagram.
- Customizable unfollow limits, break durations, and intervals between unfollows to avoid rate limiting.
- Logs progress and actions in the console for easy tracking.

## Instructions

1. **Open Instagram in Google Chrome**:
   Navigate to [Instagram](https://www.instagram.com](https://www.instagram.com/kamrankhoxa/following/)) https://www.instagram.com/USERNAME/following/ and log in to your account.

2. **Navigate to Your Following List**:
   Click on "FOLLOWING" on your Instagram profile to open the list of accounts you are following.

3. **Install Tampermonkey**:
   If you haven't already, install the [Tampermonkey extension](https://www.tampermonkey.net/) for Google Chrome.

4. **Create a New Script in Tampermonkey**:
   - Click on the Tampermonkey icon in your Chrome toolbar.
   - Select "Create a new script".

5. **Copy and Paste the Script**:
   Copy the script from the instagram-unfollow `script.js` file in this repository and paste it into the Tampermonkey script editor.

6. **Run the Script**:
   - Save the script in Tampermonkey.
   - Make sure the Instagram tab remains focused and active (the script will run if the tab is navigated away from, minimized, or unfocused).
   - Open a new Chrome window or push the tab to the side to let the script run in the background.

## Customization

You can customize the following variables in the script to suit your needs:

- `UNFOLLOW_LIMIT`: Maximum number of users to unfollow per cycle.
- `BREAK_DURATION`: Duration of the break between cycles (in milliseconds).
- `TOTAL_DURATION`: Total duration for which the script will run (in milliseconds).
- `MIN_UNFOLLOW_INTERVAL`: Minimum interval between unfollow actions (in milliseconds).
- `MAX_UNFOLLOW_INTERVAL`: Maximum interval between unfollow actions (in milliseconds).

## Note

This script is designed to avoid rate limiting by Instagram, but there is still a risk of your account being temporarily locked if you unfollow too many users too quickly. Use at your own risk.

## Contributing

If you find that the script has stopped working, please open an issue or comment on the repository. Contributions and improvements are welcome!

## License

This project is licensed under the MIT License.
