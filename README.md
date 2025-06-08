# YouTube Clone

A feature-rich clone of the popular video-sharing platform, YouTube, built using modern web development technologies. This application allows users to browse, search, and watch videos fetched dynamically from the YouTube v3 API.

## Live Demo

You can view the live application here: [https://youtubeclonefkg.netlify.app/](https://youtubeclonefkg.netlify.app/)

## Features

* **Dynamic Video Feeds:** The homepage displays the latest trending videos upon loading.
* **Category-based Browse:** Users can explore videos from different categories like Music, Gaming, Sports, and more.
* **Search Functionality:** A robust search bar allows users to find specific videos or channels.
* **Video Playback:** A dedicated page for watching videos with a primary video player.
* **Suggested Videos:** A list of related or suggested videos is displayed alongside the main video player.
* **Responsive Design:** The application is fully responsive and provides an optimal viewing experience on all devices.

## Tech Stack

* **React.js:** A JavaScript library for building user interfaces.
* **Material-UI (MUI):** A popular React UI framework for faster and easier web development.
* **React Router:** For handling client-side routing and navigation within the application.
* **Axios:** A promise-based HTTP client for making API requests.
* **RapidAPI:** Used to manage and consume the YouTube v3 API.

## Setup and Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/youtube-clone.git](https://github.com/your-username/youtube-clone.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd youtube-clone
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Get an API key:**
    * Sign up on [RapidAPI](https://rapidapi.com/).
    * Subscribe to the [YouTube v3 API](https://rapidapi.com/ytdlfree/api/youtube-v31/).
    * Create a `.env` file in the root of your project.
    * Add your API key to the `.env` file:
        ```
        REACT_APP_RAPID_API_KEY=YOUR_API_KEY
        ```
5.  **Start the development server:**
    ```sh
    npm start
    ```

The application will be available at `http://localhost:3000`.
