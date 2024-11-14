# DashboardJs - BETA

A light-weight Next + Material + Tailwind Template that is giving glimpses of what I do with React + NextJs + TS.
- Consisting two (2) index pages. The essence of this project can be seen on Dashboard.


### Table of Contents

- Features
- Project Structure
- Getting Started
- Usage
- Technologies Used


## Features

1. Home Page

  Main layout with:

  i. 4x6 design
  ii. button group
  iii. Footer component

  Styled using global.css and index.scss files.

2. Dashboard Page

  Contains a dashboard layout with:

  i. alert
  ii. header 
  iii. hero components: profile card, 2x info-card
  iv. main components: 2x1 - bar-chart, stack-chart
  v. feedback form

  Styled using Material UI components, global.css and dashboard.scss files.


## Project Structure

src/app/

├── page.tsx                     *Index Page
├
├── index/
├── ├── index.scss               *Main SCSS styling for Home page
├── ├── text-box.tsx             *Main body text component for Home
├── ├── image-box.tsx            *Image slider component for Home
├── ├── btn-group.tsx            *Button group component for Home
├── ├── footer.tsx               *Footer component for Home
├ 
├── dashboard/
├── ├── page.tsx                 *Dashboard index page
├── ├── alert.tsx                *Alert component used in header
├── ├── header.tsx               *Header component for Dashboard
├── ├── form.tsx                 *Feedback form on the dashboard
├── ├── dashboard.scss           *SCSS styling for Dashboard page
├── ├── 
├── ├── hero/                    *Hero components for Dashboard
├── ├── ├── utilities/
├── ├── ├── ├── badger.tsx       *hero component used across 1&2
├── ├
├── ├── hero.tsx                 *Main hero component
├── ├── hero-1.tsx               *Additional hero variants
├── └── hero-2.tsx  
├── ├ 
├── ├── main/
├── ├── utilities/
├── ├── ├──  bar-chart.tsx         *bar-chart component used in main
├── ├── ├──  tech-stack.tsx        *tech-stack component used in main
├── ├── ├──  main-switch.tsx       *switch component used between bc and ts
├── ├                              
├── ├── main.tsx                   *Main dashboard section
├── 
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

1. Home Page: The main entry page. Accessed via "/"

2. Dashboard Page: A more complex layout accessed via "/dashboard"

  Contains a header, hero sections, and main content sections.


## Technologies Used
  
  1. Next.js
  2. Typescript
  3. Material UI
  4. Tailwind CSS
  5. Sass (Scss)