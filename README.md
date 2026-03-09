# Content Writer

A React app for content writing with a rich text editor, word count, and countdown timer.

## Features

- Rich text editor for typing content
- Real-time word count
- Setable countdown timer
- Timer blinks when less than 1 minute left
- Pause and stop timer functionality
- Text area enabled only when timer is active

## Setup

1. Install Node.js from https://nodejs.org/
2. Run `npm install` in the project directory
3. Run `npm run dev` to start the development server

## Deployment to GitHub Pages

1. Create a new repository on GitHub (e.g., `content-writer`)
2. Push this project to the repository
3. Update `package.json`:
   - Change `"homepage"` to `"https://yourusername.github.io/content-writer"`
4. Update `vite.config.js`:
   - Change `base` to `'/content-writer/'`
5. Run `npm run deploy` to build and deploy
6. In GitHub repository settings, enable Pages and set source to "gh-pages" branch

## Usage

- Type in the "Your Typing" rich text editor (enabled only when timer is started)
- View the word count displayed below the editor
- Enter the desired timer duration in minutes and click "Start Timer"
- Use "Pause Timer" to pause/resume, "Stop Timer" to reset
- The timer will count down and blink when there is 1 minute or less remaining