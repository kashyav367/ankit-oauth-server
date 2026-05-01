<<<<<<< HEAD
# 🔐 OAuth 2.0 Authentication Server

A custom-built **OAuth 2.0 Authorization Server** implementing the **Authorization Code Flow**, designed to understand how real-world authentication systems (like Google Sign-In) actually work under the hood.

---

## ✨ Overview

This project is a fully functional authentication server built from scratch to simulate real-world OAuth flows.

Instead of relying on third-party providers, it implements the complete authentication lifecycle:

- 🔐 User Signup & Signin  
- 🔁 Redirect-based Authentication  
- 🎟 Authorization Code generation  
- 🔑 Access Token (JWT)  
- 🔄 Token exchange flow  
- 🛡 Protected API access  

---

## 🎯 Why I Built This

I wanted to go beyond tutorials and deeply understand how authentication systems actually work internally.

**Questions I explored:**

- How does authorization code flow work behind redirects?  
- How does client_id & client_secret validation happen?  
- How are tokens securely generated and verified?  
- How does backend handle authentication securely?  

---

## ⚙️ Features

### 🔐 Core Authentication
- Authorization Code Flow  
- User Signup & Signin  
- Secure password handling  
- Redirect-based login system  

### 🎟 Token System
- JWT-based Access Tokens  
- Authorization Code generation  
- Token exchange endpoint  

### 🧩 Client System
- Client Registration (client_id & client_secret)  
- Multi-client support  
- Redirect URI validation  

### 🛡 Security
- JWT verification middleware  
- Protected routes using Bearer token  

---

## 🔄 Authentication Flow

### Step-by-step:

1. Client registers and gets `client_id` & `client_secret`  
2. User is redirected to Auth Server  
3. User signs in / signs up  
4. Server generates authorization code  
5. Redirect back to client with `?code=`  
6. Client exchanges code for access token  
7. Token used to access protected APIs  

---

## 🏗️ Architecture

- **Backend:** Node.js + Express  
- **Database:** PostgreSQL  
- **ORM:** Drizzle ORM  
- **Authentication:** JWT  
- **Frontend:** HTML + TailwindCSS  

---

## 📦 API Endpoints

### 🔹 Register Client
```http
POST /api/auth/client/register

---

### 🔹 Signup
POST /api/auth/signup
=======
# 🔐 OAuth 2.0 Authorization Server

A minimal, educational OAuth 2.0 Authorization Server implementing the
Authorization Code Flow. This project demonstrates the internal mechanics of
redirect-based OAuth flows, authorization code issuance, and JWT access tokens.

Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Authentication Flow](#authentication-flow)
- [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Limitations & Future Work](#limitations--future-work)
- [Author](#author)

## Overview

This repository implements a simple authorization server (Node.js + Express)
with PostgreSQL (Drizzle ORM) and JWT-based access tokens. It's intended for
learning and experimentation rather than production use.

## Features

- Authorization Code Flow (redirect-based)
- User signup & signin with secure password handling
- Authorization code generation and single-use exchange
- JWT access tokens for protected APIs
- Client registration (client_id / client_secret)
- Redirect URI validation
- JWT verification middleware for protected routes

## Authentication Flow

1. Client registers and receives `client_id` and `client_secret`.
2. Client redirects user to the authorization endpoint on this server.
3. User signs in (or signs up) at the auth server.
4. Server issues an authorization code and redirects back to the client
	 with `?code=...`.
5. Client posts the code (and client credentials) to the token endpoint.
6. Server validates the code and client, then returns a JWT access token.
7. Client uses the access token to call protected APIs.

## API Endpoints

- Register client

```http
POST /api/auth/client/register
Content-Type: application/json

{
	"name": "example-client",
	"redirectUri": "https://example.com/callback"
}
```

- Signup

```http
POST /api/auth/signup
Content-Type: application/json

{
	"email": "user@example.com",
	"password": "s3cr3t"
}
```

- Signin

```http
POST /api/auth/signin
Content-Type: application/json

{
	"email": "user@example.com",
	"password": "s3cr3t",
	"redirectUri": "https://example.com/callback",
	"client_id": "<client_id>"
}
```

- Token exchange

```http
POST /api/auth/token
Content-Type: application/json

{
	"grant_type": "authorization_code",
	"code": "<authorization_code>",
	"client_id": "<client_id>",
	"client_secret": "<client_secret>",
	"redirect_uri": "https://example.com/callback"
}
```

## Getting Started

Clone and install:

```bash
git clone https://github.com/your-username/ankit-oauth-server.git
cd ankit-oauth-server
npm install
```

Start in development mode (uses `ts-node`/`nodemon` in this project):

```bash
npm run dev
```

Or build and run:

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env` file (example):

```
PORT=8000
JWT_SECRET=replace_this_with_a_strong_secret
```

## Project Structure

```
.
├── src/
│   ├── index.ts            # App entry
│   ├── app/                # Express app + middleware
│   ├── db/                 # Drizzle config & schema
│   └── module/auth/        # Auth controllers, services, routes
├── public/                 # Minimal client HTML pages
├── drizzle/                # SQL migrations / snapshots
├── cert/                   # Optional TLS certs for local testing
├── package.json
└── README.md
```

## Limitations & Future Work

- No refresh token support yet
- No PKCE implementation (important for public clients)
- No rate limiting or abuse protection
- Secrets are stored in `.env` (not secure for production)
- No automated key rotation

Planned improvements:
- Add PKCE support and refresh tokens
- Admin dashboard for client management
- Rate limiting and abuse detection
- Support for key rotation and JWKS

## Author

Ankit Kumar Singh

---

If this was helpful, please star the repository on GitHub.
>>>>>>> 1925189 (update readme)
