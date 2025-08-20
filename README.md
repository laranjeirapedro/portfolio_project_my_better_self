📖 Blog Project – My Better Self

A modern blog built with Next.js and TypeScript, structured as a monorepo using Turborepo, and connected to Sanity CMS for content management.
The project aims to provide a platform for publishing articles about programming, technology, and industry updates.

🚀 Technologies Used

Next.js
 – React framework for the blog frontend

React 18
 – Main UI library

TypeScript
 – Static typing for more reliable code

JavaScript ES6+
 – Core language

Sanity.io
 – Headless CMS for content management

Turborepo
 – Monorepo to organize frontend, CMS, and shared packages

Prettier
 – Code formatting

ESLint
 – Code quality and best practices

dotenv-cli
 – Environment variable management

📂 Project Structure
portfolio_project_my_better_self/
├── apps/
│   ├── blog-fe/   # Next.js frontend
│   ├── blog-cms/  # Sanity CMS backend
│
├── packages/      # Shared packages (configs, types, hooks, etc.)
│   ├── eslint-config/
│   ├── typescript-config/
│
├── turbo.json     # Turborepo configuration
├── package.json   # Dependencies and global scripts

🛠️ Main Scripts
Command	Description
npm run build	Builds all apps with Turborepo
npm run blog:fe	Runs the frontend in development
npm run blog:cms	Runs the Sanity Studio in development
npm run blog:cms:deploy	Deploys the Sanity Studio
npm run clean	Cleans node_modules and build artifacts
npm run lint	Runs ESLint across packages
npm run format	Formats code with Prettier
🔧 Running Locally

Clone the repository

git clone https://github.com/laranjeirapedro/portfolio_project_my_better_self.git
cd portfolio_project_my_better_self


Install dependencies

npm install


Set up environment variables
Create a .env file in the root with your Sanity keys and any other required variables.

Start the frontend

npm run blog:fe


Start the CMS

npm run blog:cms

🌍 Deployment

The frontend (blog-fe) can be easily deployed on Vercel
.

The CMS (blog-cms) is deployed with:

npm run blog:cms:deploy

📌 Future Improvements

Author authentication

Integrated comments

Dark mode for the frontend

SEO optimization for articles
