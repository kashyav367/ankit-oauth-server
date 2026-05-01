# 🔐 Custom OAuth 2.0 Authentication Server

This project is a custom implementation of OAuth 2.0 Authorization Code Flow.

## 🚀 Features

- Client Registration (client_id & client_secret)
- Signup / Signin system
- Authorization Code generation
- Redirect-based authentication flow
- Token exchange API
- JWT-based authentication

## 🔁 Flow

1. Client redirects user to Auth Server
2. User logs in
3. Auth server returns authorization code
4. Client exchanges code for token
5. Client uses token to access protected APIs

## 🛠 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- JWT

## 📦 Endpoints

### Register Client
POST /api/auth/client/register

### Signup
POST /api/auth/signup

### Signin
POST /api/auth/signin

### Token
POST /api/auth/token

## 📌 Future Improvements

- Refresh tokens
- PKCE support
- OIDC userinfo endpoint
