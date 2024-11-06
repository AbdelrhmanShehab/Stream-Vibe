# StreamVibe

StreamVibe is a movie streaming website built with React, designed to offer an intuitive and seamless user experience. It allows users to explore movies across different categories, filter movies by category, search for specific titles, and view featured movies through a slider. The application also facilitates easy navigation between pages, passing movie data efficiently from one page to another.

## User Features

- **Responsive Design**: The layout adapts to different screen sizes, providing a mobile-friendly experience for users on tablets or smartphones.
- **Movie Categories**: Browse movies by selecting from various categories.
- **Movie Filtering**: Filter movies by clicking on a category.
- **Search Functionality**: Quickly search for movies by title or keyword.
- **Movies Slider**: View featured movies on a responsive slider.
- **Interactive Movie Cards**: Each movie is displayed on a card with its title, image, release date, duration, and category. When clicked, users can view more details about the movie.
- **Trending Movies Section:**: A dedicated section showcases trending movies, highlighting popular content for users.
- **Dropdown Menu for Sorting/Filtering**: Users have access to dropdown menus for sorting or filtering movie lists, enhancing their browsing experience..

## React Capabilities Used

- **React Components**: Built reusable functional components like Banner, MovieList, ResultCard, TrendingMovies, CardCatigores and so on
- **Props and State**: Passed data between components using props and managed component states for dynamic rendering.
- **Data Passing Across Components**: Used React’s props system, **useNavigate** and **useLocation** to share filtered movie data and other state values between components.
- **React Router (Navigation)**: Implemented navigation between pages using React Router, creating a multi-page feel.
- **Event Handling**: Created interactive features with onClick handlers, especially in components like ResultCardMovie.
- **React Hooks**: Used essential hooks like **useState**, **useEffect**, **useContext**, **useLocation**, **useNavigate** and **useRef** for managing local states and side effects.
- **JSON Data Handling**: Imported and displayed local JSON data, managing details like title, image, description, category, duration, and release date.
- **Lazy Loading**: Optimize loading times by deferring the loading of components.
- **Conditional Rendering**: Displayed different components or styles based on conditions, e.g., for selected categories or movie cards.
- **Filtering**: Implemented filtering by category and dynamic ordering based on active selections in components like TrendingMovies.

## Application Run
[StreamVibe](https://abdelrhmanshehab.github.io/Stream-Vibe/#/)
