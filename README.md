# DashboardJs - BETA

This is a simple Next.js application with two main routes: Home and Dashboard. Each route has distinct content and styles, offering different functionality and layout components.


### Table of Contents

- Features
- Project Structure
- Getting Started
- Usage
- Technologies Used


## Features

1. Home Page

Main layout with:

i. introductory text
ii. image slider
iii. button group
iv. Footer component

Styled using global.css and index.scss files.

2. Dashboard Page

Contains a dashboard layout with 
i. header 
ii. hero components
iii. main content sections

Styled using Material UI components, global.css and dashboard.scss files.


## Project Structure

/pages
├── index/mainindex.scss           # Main SCSS styling for Home page
├── index/mainindex-1.tsx          # Main body text component for Home
├── index/mainindex-2.tsx          # Image slider component for Home
├── index/mainindex-3.tsx          # Button group component for Home
├── index/footer.tsx               # Footer component for Home
├── dashboard/dashboard.scss       # SCSS styling for Dashboard page
├── dashboard/header.tsx           # Header component for Dashboard
├── dashboard/hero                 # Hero components for Dashboard
│   ├── hero.tsx                   # Main hero component
│   ├── hero-1.tsx                 # Additional hero variant
│   └── hero-2.tsx                 # Second additional hero variant
├── dashboard/main                 # Main components for Dashboard
│   ├── main.tsx                   # Main dashboard section
│   └── main-2.tsx                 # Secondary main dashboard section
----


### Getting Started

To set up and run this project locally:

1. Clone the repository - run
                `git clone https://github.com/gicodes/dashboardJs.git`
                `cd dashboardJs`
2. Install Dependencies - run
                `npm install`
3. Start the Development server - run
                `npm run dev`
4. Visit the application on `https://localhost:3000`


## Usage

1. Home Page: The main entry page. Accessed via /.

2. Dashboard Page: A more complex layout accessed via /dashboard.

  Contains a header, hero sections, and main content sections.


## Technologies Used
  
  1. Next.js
  2. Typescript
  3. Material UI
  4. Tailwind CSS
  5. Sass (Scss)