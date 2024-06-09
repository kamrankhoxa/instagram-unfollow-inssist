// ==UserScript==
// @name         INSTA-UNFOLLOW-KAMRANKHOXA
// @namespace    http://tampermonkey.net/
// @version      2024-06-08
// @description  INSTA-UNFOLLOW-KAMRANKHOXA https://github.com/kamrankhoxa/instagram-unfollow-tampermonkey/
// @author       You
// @match        https://www.instagram.com/kamrankhoxa/following/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @grant        none
// ==/UserScript==

// Instagram Unfollow Script - Last updated: June 08, 2024
// If the script stops working, please notify me in the comments, and I will attempt to fix it within the month.

// INSTRUCTIONS
// 1. Open Instagram in Google Chrome.
// 2. Click on "FOLLOWING" on your Instagram profile.
// 3. Install Tampermonkey and create a new script.
// 4. Copy the code below and paste it into the Tampermonkey script editor.
// 5. The script will run if the tab is navigated away from, minimized, or unfocused.
// It is recommended to open a new Chrome window or push the tab to the side and let the script run in the background.

(async () => {
  // Customize these variables as needed
  const UNFOLLOW_LIMIT = 5000;
  const BREAK_DURATION = 1 * 60 * 1000; // 1 minute break
  const TOTAL_DURATION = 2 * 60 * 1000; // 2 minutes total duration
  const MIN_UNFOLLOW_INTERVAL = 5000; // Minimum interval of 5 seconds
  const MAX_UNFOLLOW_INTERVAL = 7000; // Maximum interval of 7 seconds

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Find target button by text
  const findButton = (txt) =>
    [...document.querySelectorAll("button")].find(btn => btn.innerText === txt);

  console.log("Starting unfollow script...");
  console.log("Click this following tab! it will start working....");
  const startTime = Date.now();

  while (Date.now() - startTime < TOTAL_DURATION) {
    for (let i = 0; i < UNFOLLOW_LIMIT; i++) {
      const followingButton = findButton("Following");
      if (!followingButton) {
        continue;
      }
      followingButton.scrollIntoViewIfNeeded();
      followingButton.click();
      await delay(100);

      const confirmUnfollowButton = findButton("Unfollow");
      if (confirmUnfollowButton) {
        await confirmUnfollowButton.click();
      }

      // Random unfollow interval to avoid rate limiting
      const UNFOLLOW_INTERVAL = Math.random() * (MAX_UNFOLLOW_INTERVAL - MIN_UNFOLLOW_INTERVAL) + MIN_UNFOLLOW_INTERVAL;

      console.log(`Waiting ${UNFOLLOW_INTERVAL.toFixed(0)} milliseconds`);
      await delay(UNFOLLOW_INTERVAL);
      console.log(`Unfollowed #${i + 1}`);
    }

    console.log(`Taking a break for ${BREAK_DURATION / 1000} seconds...`);
    await delay(BREAK_DURATION); // Take a break to avoid rate limiting
  }

  console.log("Unfollow script complete!");
})();
