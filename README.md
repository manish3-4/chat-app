# Chat App

A simple and scalable chat application built for real-time communication. This repository contains the source code for a chat app that supports multiple users, live messaging, and modern UI features.

## Features

- **Real-time Messaging**: Instantly send and receive messages.
- **User Authentication**: Secure login/signup for users.
- **Group Chats**: Create and manage chat rooms for groups.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **Online Status**: See who is online in real-time.
- **Message Notifications**: Get notified when new messages arrive.

## Technologies Used

- **Frontend**: React, HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **WebSocket**: Socket.IO for real-time communication

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/manish3-4/chat-app.git
    cd chat-app
    ```

2. **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Configure Environment Variables**
    - Create a `.env` file in the root directory.
    - Add your MongoDB URI and any other required keys:
        ```
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        ```

4. **Run the Application**
    ```bash
    npm start
    # or
    yarn start
    ```

5. **Access the App**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
