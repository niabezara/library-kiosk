# Library Kiosk

Library Kiosk is a React and TypeScript-based web application, aiming to simplify the book borrowing and return process.
The user interface is intentionally kept simple for a straightforward user experience.
Live Link https://master--snazzy-creponne-af54df.netlify.app/

## Technologies Used

- **React with TypeScript**
- **React Query**
- **React Router Dom**
- **Styled Components**
- **Framer Motion**
- **Axios**
- **React Toastify**
- **React Lottie**

## Features

### 1. Main Services Page

A visually appealing page highlighting two main services:

- Borrow a Book
- Return a Book

### 2. Borrow a Book

The borrowing process involves:

1. Selecting a Book Category
2. Choosing a Book
3. User Authentication
4. Borrow Confirmation

### 3. Return a Book

The return process includes:

1. Entering Book ID
2. User Authentication
3. Return Confirmation

## Project Structure

- **src:** Source code for the application.
- **components:** Reusable UI components.
- **api:** Services for data fetching.
- **assets:** Resources.
- **interfaces:** TypeScript or data structure interfaces.
- **contexts:** State management and data provision.
- **router:** Pages for navigation.
- **styles:** Theme and styling-related files.
- **utils:** Small Functions and helper code.

### Configuration

Create a `.env` file in the project root with the following content:
```env
VITE_KEY=AIzaSyD967wOPJd2g_ZY9qwKgYnSlr4I9nF395k 

### Backend
For this project i needed to use Google Books API for fetching book data and DummyJSON for simulating user login.

DummyJSON
For login in the library i used the  DummyJSON service 

``User Credentials are following:
Username: Leanne Graham
Password: kioskbook

You can use these credentials for accessing the data of books.

