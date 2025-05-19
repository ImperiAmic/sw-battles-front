# 🌌 Star Wars Battles – Frontend

This is the frontend application for the Star Wars Battles project. Built with Typescript, React and Redux Toolkit, this single-page app allows users to interact with Star Wars battle data in a mobile interface.

May the Force be with you.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Core Stack](#️-core-stack)
- [Functional Requirements](#-functional-requirements)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Author](#-author)
- [License](#-license)

---

## 📖 Overview

This project provides a frontend interface to visualize and manage battles from the Star Wars universe. Users can view, add, edit, and delete battles, as well as see detailed information on each. The app is optimized for mobile use and provides visual feedback on loading states, errors, and successful actions.

---

## ⚙️ Core Stack

- Vite for build tooling
- TypeScript for type safety
- React for building the UI
- Redux Toolkit for state management
- Vitest and React Testing Library for testing
- Netlify for deployment

---

## 📌 Functionalities

- ✅ Page to list all battles
- ~~✅ Page to view battle details~~
- ~~✅ Page to add a new battle~~
- ~~✅ Page to edit an existing battle~~
- ✅ Edit winner of the battle
- ✅ Delete a battle
- ✅ Feedback for loading, errors, and success states

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 14
- npm

### Setup

```bash
git clone https://github.com/ImperiAmic/sw-battles-front.git
code sw-battles-front
# At this point, open a bash terminal in your code editor
npm install
cp .env.sample .env
# Configure your Local Host address, with port, in the .env file
npm run dev
```

---

## 📜 Available Scripts

```bash
npm run dev            # Start the development server
npm run build          # Create production build
npm run preview        # Preview the production build
npm test               # Run tests
npm run test:dev       # Run tests on watch mode
npm run test:coverage  # Run tests coverage
npm run lint           # Lint the code
```

---

## ☁️ Deployment

The app is deployed and available at 🔗 [Netlify](https://raimon-sola-202502-front.netlify.app/)

---

## 🤓 Author

This project was made with love by [Imperi Amic](https://www.imperiamic.com/).

---

## 📄 License

This project is licensed under the [CC BY-NC-SA 4.0 License](./LICENSE).
