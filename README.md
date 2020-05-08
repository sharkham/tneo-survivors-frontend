# Novel Tracker App (front end)

Ever wanted to run your own novel writing contest, or just keep track of your novel writing progress?

Novel Tracker is a single page React app (with a [Rails API](https://github.com/sharkham/novel-tracker-api) as a back-end) where users can create a novel project for each year of a novel writing contest, edit it, update their wordcount (which displays in a progress bar) and earn badges for achievements. Users can also view basic information about other contest participants like novel title, summary, progress and badges.

A demo of this app can be viewed here: https://novel-tracker-app.netlify.app/


## Installation

1. Fork the repository
2. Clone the files to your computer
3. Create an `.env.development` file and add this line of code to it: `REACT_APP_BASE_API_URL='http://localhost:3000/api/v1'`
4. Navigate to `/novel-tracker-frontend` in your terminal
5. Run `npm install`
6. Run `npm start`. This will open the app in your browser of choice! Make sure to have the Rails api downloaded and running at the same time so the front end is able to interface with it.


## Usage Example

![Screenshot of the app's novel index page](public/screencap1.png)

![Screenshot of the app's user novel page](public/screencap2.png)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
