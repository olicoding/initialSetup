# Initial Setup for Full Stack projects

This repository is the result of my practice in setting up new projects from scratch. It provides a straightforward and modern initial setup for full-stack projects, utilizing the capabilities of JavaScript, React, Node.js, Firebase, PHP, Symfony, and machine learning with Tensorflow.js.

<div align="center">
  <img src="_frontend/src/media/home.jpg" alt="login" width="350" style="max-width: 45%">
  <img src="_frontend/src/media/protected-route.jpg" alt="logout" width="350" style="max-width: 45%">
</div>

<div align="center">
  <img src="_frontend/src/media/symfony-profiler.png" alt="profiler" width="400" style="max-width: 80%">
</div>

## Table of Contents

- [Tech-stack Overview](#tech-stack-overview)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Clone the Repository](#clone-the-repository)
- [Set Your Environment Variables](#set-your-environment-variables)
- [One command to set it all up](#one-command-to-set-it-all-up)
- [Accessing the App](#accessing-the-app)
- [Refresh the App](#refresh-the-app)
- [That's it!](#thats-it)

<br />

## Tech-stack overview

- **Backend**: Symfony, Composer and Node.js
- **Frontend**: React, JavaScript and Sass
- **Auth**: Firebase Authentication
- **Database**: Firebase Firestore
- **WebML**: Tensorflow.js

<br />

## Getting Started

Follow the steps bellow to set up and run the project on your machine.

<br />

## Prerequisites

Before you begin, ensure you have the following software installed globally on your system, with the recommended minimum versions. The installation process may differ depending on your OS (macOS, Windows, or Linux):

- **Node.js 14 and npm 6**

  - [Download Node.js](https://nodejs.org/)
  - _npm is bundled with Node.js, so no separate installation is required._

- **Composer 2.2**

  - [Instal Composer](https://getcomposer.org/download/)

- **Symfony CLI 5.5**

  - [Symfony CLI GitHub](https://github.com/symfony/cli)

- **PHP 8.1**

  - [Download PHP](https://www.php.net/downloads)

  - Enable gRPC support (Google Remote Procedure Call) by following these steps in your terminal:

    - Open the PHP configuration file for PHP 8.1 using the `nano` text editor:

      ```
      sudo nano /etc/php/8.1/cli/php.ini
      ```

    - Within the configuration file, locate the section where PHP extensions are configured. This section typically contains lines starting with "extension=".

    - Add the following line to enable the `grpc` extension. Make sure there's no semicolon `;` at the beginning of the line:

      ```
      extension=grpc.so
      ```

    - Save your changes in `nano`. You can typically save by pressing `Ctrl + O`, confirm the file name with `Enter`, and exit with `Ctrl + X`.

<br />

---

### Clone the Repository

<br />

Clone the project repository to your local machine using one of the following commands:

via SSH key:  
`git clone git@github.com:olicoding/initialSetup.git`

via HTTPS:  
`git clone https://github.com/olicoding/initialSetup.git`

<br />

---

### Set Your Environment Variables

<br />

You will need to create two `.env` files:

- One for Symfony in the project's **`root` directory**
- One for React inside the **`_frontend` directory**

First, generate your own Symfony app secret by running the following command in the terminal:

```
openssl rand -hex 16
```

If you dont have one already, create your own [Google Firebase](https://firebase.google.com/) account. It's free and straightforward, and you will need it for the credentials bellow.

Now, create a `.env` file in the project's **`root` directory** with the following template:

```
APP_ENV=dev
APP_DEBUG=true
APP_RUNTIME_ENV=dev
APP_SECRET=place_your_generated_secret_here

FIREBASE_API_KEY="API_KEY"
FIREBASE_AUTH_DOMAIN="AUTH_DOMAIN"
FIREBASE_PROJECT_ID="PROJECT_ID"
```

Next, navigate to the **`_frontend` directory**, and create a new `.env` file with the following template:

```
REACT_APP_FIREBASE_API_KEY="API_KEY"
REACT_APP_FIREBASE_AUTH_DOMAIN="AUTH_DOMAIN"
REACT_APP_FIREBASE_PROJECT_ID="PROJECT_ID"
```

Be sure to replace the placeholder values in both files with your actual Firebase credentials and generated secret.

<br />

---

### One command to set it all up

<br />

From the project's **`root` directory**, run:

```
npm run init
```

This single command automates your setup for the initial project installation with all dependencies, making the process convenient, even though it may take a few minutes. (Make sure you have completed the [Prerequisites](#prerequisites) before running this command)

<br />

---

### Accessing the app

<br />

Open your browser and navigate to `http://localhost:3000`. The app automatically proxies requests to the backend.

You can also access the app via the backend at `http://localhost:8000`.

The profiler is available at `http://localhost:8000/_profiler`.

To start the project servers for development next time, execute the following command from the **`root` directory**:

```
npm run dev
```

 <br />

---

### Refresh the App

<br />

To synchronize/update changes between React and Symfony during development, run the following command from the **`root` directory**:

```
npm run refresh
```

<br />

---

### That's it!

Enjoy, have fun, and git this repo a ⭐ if you like it. 😎

```
    ('-^-/')
    `o__o' ]
    (_Y_) _/
  _..`--'-.`,
 (__)_,--(__)
     7:   ; 1
   _/,`-.-' :
  (_,)-~~(_,)

 Thank you !!!
```

And of course, if you create something cool with it, I'd be thrilled to have a look!
