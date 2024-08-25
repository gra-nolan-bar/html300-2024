# Activity 08 - Vue Components & Props

We will build out a Post component to loop through some data and print out Posts filled with dynamic data.

### Vue References

- [Vue Docs](https://vuejs.org/guide/introduction.html) (for Vue v3)
- [Vue DevTools - Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
- [Vue DevTools - Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

### Install the NPM packages and run the dev environment:

- Create a new vue project named 'lesson-activity'
- CD in to the project and run 'npm install'.
- Make sure your packages installed successfully, flag if you need assistance.
- Now run 'npm run dev' in your terminal to launch the dev server.
- Begin editing files within the `src` directory of the project

### Build a blog home page:

- Have a parent component (App.vue) with data in the form of an array of blog post objects (copy over the data from the data.js file in this directory)
- Create a `<Post>` component (in its own file) with props for `title`, `excerpt`, `likes`, and `category`. (hint: Make sure to import the component to `App.vue`)
- Display all the blog posts as `<Post>` components on the home page, passing and displaying props correctly (hint: You'll need to use `v-for` and `v-bind`)
- Give the `<Post>` component a button with a click handler. On click of button, the post's `likes` value should increase by 1. (hint: It's expected that this value change won't persist on page refresh)
