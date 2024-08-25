# Assignment 09 - APIs and Course Project

We'll spend our final couple weeks working on the final project, so this will act as the final project rubric. We'll be using Nuxt, so please watch the video on Nuxt for a walkthrough of starting up a new project.

### References

- [Nuxt](https://nuxt.com/docs/getting-started/introduction)
- [Vue Docs](https://vuejs.org/guide)
- [Bootstrap for Nuxt](<https://nuxt.com/modules/bootstrap)
- [Netlify](https://www.netlify.com/)

### Build the Nuxt app

- Watch the video on Nuxt to learn more about the framework
- **Create a new repository for this assignment.** Do not build it here.
  - In that repo, run `npx nuxi@latest init <project-name>` (replace <project-name> with your project's title), and choose the following settings:
    - Name: anything you like
    - Package manager: npm or yarn, your preference
    - Initialize Git Repository?: YES
  
  - `cd` into your newly created project directory
    - Follow instructions in the generated project's README to start the local server
- Migrate over your Vue template files and assets from the earlier Vue project to their respective spots in the Nuxt app.
  - Migrate content related to layout from the 'App.vue' file to `layouts/default.vue`. Migrate page templates to the `pages` directory and component templates to the `components` directory. 
  - For internal links, now use `<NuxtLink>` components. More information on Nuxt routing: [Nuxt Link](https://nuxt.com/docs/api/components/nuxt-link)

### Additional items

- The site should have at least 4 pages (including the home) with `<NuxtLink>` used to navigate between them in the nav
- Feel free to reuse as much content as you'd like from what you created in previous assignments
- Incorporate data from an API. (See below for API suggestions)
  - 1 instance of retrieving data from an API
  - Build a custom component to display the data returned from the API
  - That component should have props validation and use at least 4 pieces of data from the API (if possible). For example, if the returned data is of the format `{image: 'http://path.com/123', name: 'stingray', created: '10-12-2019', author: 'Claude'}`, the component should display the image, name, created date, and author information
- Deploy to Netlify <https://app.netlify.com/start>
- **Bonus:**  Create UI interactions to interact with your API data
- **Extra Bonus:**  Create dynamic routing with your data through components with single pages
- **Super Extra Bonus:** Point a custom domain to your site

### API Notes

These are some options for fun, free, publicly available APIs. Most require registration, but no payment.

1. Movies: <https://www.omdbapi.com/>
2. Football (soccer): <https://apifootball.com/>
3. Almost anything- library: <https://pro.dp.la/developers>
4. Weather: <https://openweathermap.org/api>
5. Meetup: <https://www.meetup.com/meetup_api/>
6. And a list of hundreds more: <https://apilist.fun/>

Many APIs require you to use a key, or unique identifier, to access them. This key is a *secret*, and professional best practice is not to commit them to version control. However, secret management is outside the scope of this course, and so we are going to recommend you just use the key in your code and commit to Github. If for any reason you're using an API that isn't free, or has restrictions, don't do this! Bots crawl Github looking for keys and passwords, and will probably get yours and use it. As long as the API you're using is free and unrestricted though, it shouldn't impact you.

### To Submit

- Submit the link to your course project repo as well as the live site's Netlify link
