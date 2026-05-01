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
├── drizzle/                # SQL migrations 


```

## Quick Start

Clone and install:

```bash
git clone https://github.com/your-username/ankit-oauth-server.git
cd ankit-oauth-server
npm install
```

Copy environment variables and run:

```bash
cp .env.example .env
npm run dev
```

Or run with Docker Compose (local DB + app):

```bash
docker compose up --build
```

## Environment Variables

Create a `.env` file (example `.env.example` should be present):

```
PORT=8000
DATABASE_URL=postgres://user:pass@localhost:5432/authdb
JWT_SECRET=replace_this_with_a_strong_secret
```

## Docker

This project includes a `docker-compose.yml` for quick local testing. It can
bring up a PostgreSQL instance and the auth server.

```bash
docker compose up --build
```

## Project Structure

```
.
├── src/                   # TypeScript source
│   ├── index.ts           # App entry
│   ├── app/               # Express app + middleware
│   ├── db/                # Drizzle config & schema
│   └── module/auth/       # Auth controllers, services, routes
├── public/                # Minimal client HTML pages
├── drizzle/               # SQL migrations / snapshots
├── cert/                  # Optional TLS certs for local testing
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

## Contributing

Contributions are welcome. For small fixes, open a PR with a clear title and
description. For larger changes, open an issue first to discuss the plan.

## License

This project is provided under the MIT License. See the `LICENSE` file.

---

If this was helpful, please star the repository on GitHub.
