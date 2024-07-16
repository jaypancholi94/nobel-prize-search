This is a [Next.js](https://nextjs.org/) project that utilizes several technologies and libraries to enhance functionality and user experience. Below is a brief overview of the main tools and APIs used in this project:

## Technologies Used

- **[Next.js](https://nextjs.org/):** A React framework for building fast and user-friendly web applications. It supports server-side rendering and static site generation.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for creating custom designs without leaving your HTML. It provides a set of predefined classes to build responsive and modern interfaces quickly.
- **[Fuse.js](https://www.fusejs.io/):** A lightweight library for fuzzy search. It helps in implementing search functionalities that are more flexible and tolerant to errors or typos in the search queries.
- **[Shadcn.ui](https://ui.shadcn.com):** A collection of accessible and reusable UI components. It ensures that your application is inclusive and easy to navigate for all users.
- **[Nobel Prize API](https://api.nobelprize.org/v1/prize.json):** An API that provides information about Nobel Prize laureates and their achievements. It is used to fetch and display relevant data within the application.

## Getting Started

To get started with this project, follow the steps below:

1. **Clone the repository**

```bash
git clone https://github.com/jaypancholi94/nobel-prize-search.git
cd nobel-prize-search
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open <http://localhost:3000> with your browser to see the result.

## Features

- **Real-Time Updates:** The application updates data in real-time upon text field changes. This ensures that users see the most current information as they type.
- **Quality Search Ranking:** The search functionality includes quality ranking to ensure that the most relevant results are displayed at the top.
- **Debounced API Call:** Utilizes `useEffect` for debouncing input in the text field, ensuring that multiple requests to the API are not made in a short amount of time. This enhances performance and reduces unnecessary load on the server.
- **Pagination:** Implements pagination to manage and display search results efficiently, allowing users to navigate through large sets of data without overwhelming the interface.
- **Shareable URLs:** Search and pagination details are appended to the URL, making it easy to share specific queries with friends. This allows others to see exactly what you are looking at.
- **Fuzzy Search:** Implemented using Fuse.js, allowing users to search for Nobel Prize laureates efficiently. The default search parameters are set as follows:
  - **Score:** Used to get match score
  - **Sort:** Used to sort the search results.
  - **Include Matches:** Enables highlighting of matches.
  - **Threshold:** Set to 0.5 (0 is an exact match, 1 is for inaccurate searches).
  - **Minimum Match Character Length:** Set to `2`.
  - **Search Keys:** The search will look into the following fields:
    - `year`
    - `category`
    - `laureates.firstname`
    - `laureates.surname`
    - `laureates.motivation`
- **Accessible UI Components:** Shadcn.ui ensures that the components are accessible and provide a great user experience.
- **Nobel Prize Data:** Fetches and displays data from the Nobel Prize API, providing users with up-to-date information on laureates.
- **Responsive Design:** Thanks to Tailwind CSS, the application is fully responsive and works well on various screen sizes.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request.
