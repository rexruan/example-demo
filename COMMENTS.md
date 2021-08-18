# Target Description:

- The given task is to implement a web application from the frontend to meet the following requirements:
  - listing all the categories
  - navigating into category and showing a random joke in that category
  - searching through all the jokes using free text search;

# Solution and solving procedure:
- project structure:
  1. components: containing component used as a part of page
  2. app: containg page navigated by the router
  3. reducers: a collection of functions to be dispatched in the framework of redux
  4. services: data fetching from API endpoints
  5. store.js: where we register the reducers
- procedure:
  1. make an analysis of fundmental states (done)
  2. accomplish the logics according to the basic requirements (done)
  3. style with material ui (done)
  4. write test set with jest (uncompleted)

# Motivation for some decisions I made for this assignment
- The project structure 
  
  I keep all pages under folder `app` and leave all components that can be used as a part of the page in `component`. If a component has its own children, I make a folder to contain it. Folder `services` takes care of interaction with backend APIs through axios. States and functions that we use to dispatch actions to 'mutate' states locate under `reducers`. The file `store.js` registers all reducers with proper names.
  
- Why category reducer and joke reducer?
  
  These two reducers are created to dispatch actions to handle the events, e.g. initilizing the category list, making a joke query search. I split the reducers into `category` and `joke` with the assumption that joke and category are two different elements. Each reducer stands on its own to make us better maintain in the future. 

- Hooks
  
  A lot of hooks are used for the project. These hooks simplify the processing of reusing identical functions, e.g. `useSelect`, `useState`. These hook functions are built-in and easy to reach.
  
- Material UI
  
  `material-ui` is a popular library to rende page with a nice style. With `material-ui`, I used `Grid` for the layout of the page.

# Feature description

- Search form

  In my case, the search form is displayed in the header, which means that it is available in each single page. For now, it searches in all categories no matter in which page the search is launched. A better user experience is perhaps that the search result can be associated with which page is displayed for the user. To reach that goal, I can filter out the joke items that do not belong to the current page category. A better solution is that filtering can be done when we request backend API. I declare a state to store the current search query. This state will be reset after each search click. From the beginning, I thought I could make a dynamical research each time the search query value changes. I end with the current solution since requesting the data very frequently could cause loading problem, especially when there is a big amout of data. 

- Router

  I use the package `react-router-dom` to reach endpoint with its page. The advantage of using this is to treat `Router` as a component in react.js, just like any other components and we do not need to configure it in a special setting file. `useParams` is used for dynamical url change.

- Some other words:
 
  Due to time limitation, I skip the test session, which is also my weak point. I enjoy the process of detecting problems, solving problems and thinking of potentical possibilities. Thank you for having me here to take this assignment. 
