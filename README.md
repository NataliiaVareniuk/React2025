
# React 2025 - Homework 06 (HW06)

This branch, `HW06`, represents the sixth homework assignment completed as part of the React course in 2025. This assignment focuses on solidifying the understanding and practical application of advanced React Hooks, custom hooks for reusable logic, and efficient state management techniques.

## 🎯 Learning Objectives of HW06

The primary goals of this homework were to:

* Master the usage of `useState`, `useEffect`, `useMemo`, and `useCallback` for optimizing component performance and managing side effects.
* Develop and integrate **custom React Hooks** to encapsulate reusable logic (e.g., debouncing, window size tracking).
* Implement efficient data filtering and search functionalities.
* Practice conditional rendering and displaying dynamic content based on state and external data.
* Understand and correctly handle data from external JSON files.

## ✨ Key Features & Implemented Tasks

This homework includes several distinct tasks demonstrating various React concepts:

1.  **Interactive Number Calculator (`Task1`)**
    * **Purpose:** To practice basic state management with `useState` for input fields.
    * **Highlight:** Utilizes `useMemo` for efficient calculation of the sum of two numbers (`A` and `B`), ensuring the sum is only re-calculated when `A` or `B` changes, preventing unnecessary re-renders of the sum display.
    * **Location:** `src/components/Task1/` (and related `ResultDisplay.jsx`)

2.  **Dynamic Window Size Tracker & Device Type Identifier (`ShowWindowsType`, `ShowDesktopType`)**
    * **Purpose:** To demonstrate the creation and consumption of a custom React Hook for real-time window dimension tracking.
    * **Highlight:**
        * **`useWindowSize` custom hook**: Encapsulates logic for adding/removing window resize event listeners using `useEffect` and ensures a stable `handleResize` function with `useCallback`. It returns the current `width` and `height` of the browser window.
        * **Device Type Recognition**: Uses imported JSON data (`screens.json`) to dynamically identify and display the current device type (e.g., mobile, tablet, desktop) based on the `windowSize.width`.
    * **Location:** `src/components/ShowWindowsType.jsx`, `src/components/ShowDesktopType.jsx`, `src/hooks/useWindowSize.js`, `src/data/screens.json`

3.  **Product Search with Debounced Input (`SearchResult`)**
    * **Purpose:** To build a performance-optimized search bar for a list of products.
    * **Highlight:**
        * **`useDebounce` custom hook**: Delays the update of the search term by a specified duration (e.g., 1000ms). This prevents the filtering logic from running on every keystroke, significantly improving performance for large datasets and reducing unnecessary computations.
        * **Data Filtering**: Dynamically filters a list of products (from `newProducts.json`) based on the debounced search term.
    * **Location:** `src/components/SearchResult.jsx`, `src/hooks/useDebounce.js`, `src/data/newProducts.json`

## 🚀 Technologies Used

* **React.js**: Core library.
* **React Hooks**: `useState`, `useEffect`, `useMemo`, `useCallback`, Custom Hooks.
* **CSS Modules**: For component-scoped styling.
* **JSON Data Handling**: Importing and using local JSON files (`screens.json`, `newProducts.json`).

## 🛠️ Installation and Setup

To run this project locally on your machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/NataliiaVareniuk/React2025.git](https://github.com/NataliiaVareniuk/React2025.git)
    ```
2.  **Navigate into the project directory (and optionally the specific branch):**
    ```bash
    cd React2025
    git checkout HW06 # If you are not already on this branch
    ```
3.  **Install all necessary dependencies:**
    ```bash
    npm install
    # or if you use Yarn:
    # yarn install
    ```

## 🏃 Running the Application

After installing dependencies, you can start the application in development mode:

```bash
npm start
# or
# yarn start
````

The application will automatically open in your browser at: [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000). You can then navigate through the different tasks implemented in HW06.

## 📁 Relevant Project Structure for HW06

```
React2025/
├── src/
│   ├── components/
│   │   ├── Task1/              # Contains Task1 logic and ResultDisplay
│   │   │   ├── Task1.jsx
│   │   │   └── ResultDisplay.jsx
│   │   ├── ShowWindowsType.jsx # Component displaying window size
│   │   ├── ShowDesktopType.jsx # Component identifying device type
│   │   └── SearchResult.jsx    # Component for product search
│   ├── data/
│   │   ├── screens.json        # Data for device types
│   │   └── newProducts.json    # Data for product search
│   ├── hooks/
│   │   ├── useWindowSize.js    # Custom hook for window size tracking
│   │   └── useDebounce.js      # Custom hook for debouncing input
│   ├── App.jsx                 # Main application component (likely routes to these tasks)
│   └── ...
├── package.json
└── README.md                   # This file
```



## 🙋‍♀️ Author

  * **Nataliia Vareniuk**
  * [GitHub Profile](https://www.google.com/search?q=https://github.com/NataliiaVareniuk)

