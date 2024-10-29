# 💬 Real-Time Chat Service

## 🏆 Project Objective
Design and develop a **real-time chat service** focused on **performance, scalability, and security** for professional environments. This service includes an independent server and client, with security managed through an **IAM (Identity and Access Management)** service.

---

## 📋 Requirements

### 🔄 Real-Time Messaging
Use **WebRTC** and **WebSockets** for real-time message exchange.

### 🔐 Private Chats
Enable private messaging between friends or through accepted friend requests.

### 🤝 Friend System
Allow users to send, manage, and accept friend requests via an intuitive interface.

### 🌐 General Channel
Provide a shared channel for open communication among all users.

### 👫 Group Channels
Allow users to create and manage private or public channels.

### ✉️ Channel Invitations
Offer an invitation system for private channels, with real-time notifications.

### 🚨 Real-Time Notifications
Notify users of friend requests, private channel invites, and direct messages in real-time.

### 📃 List of Channels
Display a clear list of all channels, with distinctions between public and private channels.

### 🟢 Online/Offline Status
Show real-time status updates for users’ online or offline status.

### 👥 Member Panel
Display active or offline users in each channel, updated in real-time.

### ⏳ Temporary Rooms
Enable temporary channels with predefined duration and schedule.

### 💾 Data Backup
After each public session ends (or every 24 hours), save chat data with metrics like most-used words.

### 🚫 Moderation Tools (Bounce/Ban)
Allow moderators to temporarily exclude users or permanently ban them from specific channels.

### 🌟 Reward System
Implement a reward system for highly-rated users, granting privileges like pinning messages.

### 🛡️ Safe Channel Mode
Allow channel creators to enable "Safe Channel" mode to enforce respect, with flagged or banned words filtered out.

---

## 🛠️ Frontend Components

- **Parent Component**: `RoomVoice` (manages room data).
- **Child Component**: `RoomClient` (represents users within the room).

> *Tip:* Keep components focused on data management, without directly handling UI interactions.

### ⚙️ Technologies

- **Frontend**: React.js, TypeScript, Redux
- **Backend**: NestJS, WebRTC
- **Protocols**: WebSocket (real-time chat), REST API (integration with other microservices)
- **Testing**: Jest, Supertest
- **DevOps**: Docker, GitHub Actions for CI/CD

---

## 🧪 Testing

- **Unit Tests**: Each service should have at least one test on both the backend and frontend.
- **Integration Tests**: Test API endpoints thoroughly.
- **Functional Tests**: Use Selenium to automate end-to-end functionality tests.

---

## 🐳 Containerization with Docker

- **Dockerfile** and **docker-compose.yml** setup to isolate backend and enable independent testing environments.

## 🚀 CI/CD Pipeline with GitHub Actions

- **Build Pipeline**: Triggered on each commit to the repository.
- **Testing**: Run Jest tests, blocking code that doesn’t pass unit and integration tests.
- **Test Deployment**: Deploy each commit on the main branch to a test server for live feature testing.

---

## 👥 Team Work

- **Teamwork**: Assess collaboration, communication, and task division.
- **Project Management**: Evaluate the use of project tools (e.g., Jira) and Git workflows.

---

## 📝 Documentation

- **Technical Documentation**: Comprehensive code and feature documentation.
- **API Documentation**: List and explain all API endpoints.
- **Installation & Run Guide**: Clear instructions for project setup.

---

## 📊 Evaluation Criteria

1. **Technical Quality**: Completeness and reliability of features.
2. **Code & Architecture**: Quality, organization, and adherence to best practices.
3. **Testing**: Minimum 80% test coverage, including unit and integration tests.
4. **Collaboration**: Effective teamwork and task distribution.
5. **Documentation & Presentation**: Quality and clarity of the final project presentation.
