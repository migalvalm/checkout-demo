# React Frontend App with Vite and Node, Rails API Checkout Demo

This monorepo contains a React frontend application built with Vite and Node 18.0.0, and a Rails API project built with Ruby 3.2.2 and Rails 7.1.2, using PostgreSQL 14 as the database.

## [Tech Doc](./docs/challenge-tech-doc.pdf)

## Built With

- React
- Vite
- Node 18.0.0
- Rails 7.1.2
- Ruby 3.2.2
- PostgreSQL 14
- TailwindCSS 3
- Lodash
- Formik

## Usage

The frontend application is a React application built with Vite. You can navigate to `http://localhost:5173/checkout` in your browser to see the application running. The checkout flow is handled on the client side. It involves form validation and submission. The form will deal with validation and submission to the API, and rendering of success or failure depending on the response of the backend.

The backend has one endpoint `orders/checkout` which processes the order checkout and returns whether it was successful or not.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have the following installed on your system:

- Node 18.0.0
- npm
- Ruby 3.2.2
- Rails 7.1.2
- PostgreSQL 14

### Installing

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required packages by running `npm install`.
4. Install the required gems by running `bundle install`.
5. Create a `.env` file in the root of your project and add the following line:
  - `REACT_APP_API_HOST=http://localhost:3000`
6. Set up the database by running `rake db:create`.
7. Start the development server by running `npm run dev`.
8. Start the Rails server by running `rails server`.

## PostgreSQL Setup

### For macOS

1. Install Homebrew if you haven't already. You can do this by running the following command in your terminal:

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

2. Update Homebrew to ensure you have the latest package information:

`brew update`

3. Install PostgreSQL 14 using Homebrew:

`brew install postgresql@14`

4. After the installation process is done, start the PostgreSQL service:

`brew services start postgresql@14`

5. To ensure you will be able to use PostgreSQL without any issues, create a new PostgreSQL user (also called a "role") named `postgres` with superuser privileges:

`createuser -s postgres`

## Demo Showcase

Frontend: https://github.com/migalvalm/bounce-challenge-fe/assets/59445459/9e9d6cbf-1b6f-416d-a3b2-1aeb3be9471a

Backend: https://github.com/migalvalm/bounce-challenge-be/assets/59445459/258b1efb-4ad1-4904-bfe5-b6974c5d5dda
