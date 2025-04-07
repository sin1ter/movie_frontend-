# Movie Project

This is a React project where I learned how to interact with APIs and implement various features like pagination with infinite scrolling and search functionality. The project fetches movie data from a public API and displays it in a paginated format. I also added search functionality to allow users to search for movies by title.

## Live Demo

Check out the live version of the project here: [Live Link](https://movie-frontend-mu.vercel.app/)


## Key Features

- **API Integration**: Learn how to fetch movie data from a public API (e.g., [The Movie Database API](https://www.themoviedb.org/documentation/api)).
- **Pagination**: Implemented pagination to load a limited number of movies at a time.
- **Infinite Scrolling**: Automatically loads more movies as the user scrolls down.
- **Search Functionality**: Allows users to search for movies by title. The list updates dynamically based on the user's input.

## Technologies Used

- React
- React Hooks (useState, useEffect)
- CSS for styling
- JavaScript ES6+

## Getting Started

To get started with this project on your local machine, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/movie-project.git
```


### 2. Navigate to the Project Directory

```bash
cd movie-project
```
### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Project Locally

```bash
npm start
```

## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

### API Calls

The app fetches movie data from a public API. The API call is made when the component mounts, and the data is stored in the component's state using React's useState hook.
## Pagination
Implemented pagination that loads a limited set of movies at once, reducing the load time for users. The pagination logic is handled using React's state and useEffect hook to update the data dynamically.


## Infinite Scrolling
Instead of traditional page numbers, implemented infinite scrolling that automatically loads more movies as the user scrolls to the bottom of the page. This was achieved by listening to the scroll event and checking when the user reaches the bottom of the page.
## Search Functionality
Added a search bar to allow users to search for movies by title. The list of movies updates dynamically based on the search query, providing a seamless user experience. The search feature is implemented by filtering the fetched data as the user types in the search input.