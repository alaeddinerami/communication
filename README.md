# Project: Real-Time Chat Service

## Project Overview

This project aims to develop a **real-time chat service** designed for professional use, focusing on performance, security, and scalability. The goal is to create a reliable, secure, and scalable solution for messaging, video conferencing, instant discussions, and voice channels, using best practices in security and identity management with an IAM (Identity and Access Management) service.

## Context and Objectives

The chat service should include:

- **Real-Time Messaging** using WebRTC and WebSockets for fast exchanges.
- **Private Chats** and a friend management system.
- **Channel System**: public, private, and temporary channels, allowing users to create and manage their own groups.
- **User Status** updates (online/offline) in real-time.
- **Real-Time Notifications** for friend requests, channel invitations, and direct messages.
- **Reward System** for well-rated users, allowing features like message pinning.
- **Security Measures**: "Safe Channel" mode, where channel owners can set banned words or use language models for moderation.

## Project Details

- **Frontend**: React.js, TypeScript, Redux
- **Backend**: NestJS, WebRTC for real-time communication
- **Protocols**: WebSocket for chat and REST API for integration with other microservices
- **Testing Tools**: Jest, Supertest for backend, Selenium for automated functional tests
- **DevOps**: Docker for containerization, GitHub Actions for CI/CD

## Key Functionalities

1. **Real-Time Messaging**: Real-time message exchange with WebSockets.
2. **Private and Group Chats**: Allows users to chat privately or within created groups.
3. **Friend System**: Friend requests and management.
4. **Notifications**: Real-time notifications for friend requests and new messages.
5. **Member Panel**: Displays active and offline users in each channel.
6. **Temporary Rooms**: Option to create temporary channels with defined time slots.
7. **Data Backup**: Logs session data (e.g., commonly used words) after 24 hours or at the end of a public session.
8. **Moderation Tools**: Moderators can "bounce" (24-hour restriction) or "ban" (permanent restriction) users.

## Frontend Components

- **Parent Component**: `RoomVoice` (handles room data).
- **Child Component**: `RoomClient` (represents individual users).
- Components should focus on data management without directly interacting with the UI.

## Testing Strategy

- **Unit Tests**: At least one test per service (backend and frontend).
- **Integration Tests**: Endpoints should be tested for reliability.
- **Functional Tests**: Selenium-based tests to automate end-to-end scenarios.

## Containerization with Docker

- Create a `Dockerfile` and `docker-compose.yml` for backend environment isolation.
- Enables independent testing and simplifies deployment across environments.

## CI/CD Pipeline with GitHub Actions

1. **Build Pipeline**: Automatically triggered on each commit.
2. **Testing Stage**: Executes Jest and integration tests.
3. **Deployment**: Deploys to a test environment on each main branch commit.
4. **Notifications**: Sends notifications for pipeline status updates via Slack or other team communication tools.

## Project Management and Collaboration

- **Version Control**: Git for code management and clear commit messages.
- **Project Management**: Use tools like Jira for task allocation and workflow tracking.
- **Team Collaboration**: Effective communication and task distribution following Agile Scrum standards.

## Evaluation Criteria

1. **Technical Quality**: Completeness and functionality of features.
2. **Code and Architecture**: Code organization, clarity, and adherence to best practices.
3. **Testing**: Minimum 80% coverage for unit and integration tests.
4. **Teamwork**: Collaboration, task distribution, and adherence to deadlines.
5. **Documentation**: Detailed API documentation and setup instructions.

## Innovation and Creativity

Bonus points for innovative solutions or extra features beyond the project requirements, demonstrating a proactive and creative approach.

---

**Project Start Date**: October 28, 2024  
**Deadline**: November 17, 2024  
**Group Work**: Teams of 3 members
