
# React 2025 - Projects & Exercises

This repository contains practical tasks and small projects completed as part of a React course in 2025. It serves as a learning and application hub for key React concepts, as well as demonstrating acquired skills in building interactive web applications.

## 🚀 Features and Technologies Used

In this repository, you will find examples of using:

* **React.js**: The core library for building user interfaces.
* **React Hooks**:
    * `useState` for managing component state.
    * `useEffect` for side effects (e.g., event listeners, data fetching).
    * `useMemo` for memoizing computationally expensive values.
    * `useCallback` for memoizing functions.
    * `useRef` for accessing DOM elements or persisting values across renders.
    * **Custom Hooks**: Creating reusable logic (e.g., `useWindowSize`, `useDebounce`).
* **React Router**: For navigation within the application.
* **CSS Modules**: For localizing component styles and avoiding conflicts.
* **JSON Data Handling**: Importing and using data from local JSON files.
* **Conditional Rendering**: Displaying components or parts of them based on state.
* **Filtering and Searching**: Implementing search functionality with a debounce delay.

## 🛠️ Installation and Setup

To run this project locally on your computer, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/NataliiaVareniuk/React2025.git](https://github.com/NataliiaVareniuk/React2025.git)
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd React2025
    ```
3.  **Install all necessary dependencies:**
    ```bash
    npm install
    # or if you use Yarn:
    # yarn install
    ```

## 🏃 Running the Application

After installing the dependencies, you can start the application in development mode:

```bash
npm start
# or
# yarn start
The application will automatically open in your browser at: http://localhost:3000. Changes to the code will be automatically reloaded.

📁 Project Structure
Approximate directory structure of the project:

React2025/
├── public/                 # Public assets (e.g., index.html)
├── src/
│   ├── components/         # Components, grouped by functionality (e.g., Task1/, Task2/, Layout/)
│   │   ├── Task1/
│   │   ├── Task2/
│   │   ├── Layout/
│   │   └── ...
│   ├── data/               # Local JSON data
│   │   ├── screens.json
│   │   └── newProducts.json
│   ├── hooks/              # Custom hooks
│   │   ├── useWindowSize.js
│   │   └── useDebounce.js
│   ├── App.jsx             # Main application component with routing
│   ├── main.jsx            # Application entry point (root component rendering)
│   └── App.css             # Global styles
├── .gitignore              # Files and folders ignored by Git
├── package.json            # Project manifest and dependency list
└── README.md               # This file
📧 Contact
Author: Nataliia Vareniuk

GitHub: NataliiaVareniuk
