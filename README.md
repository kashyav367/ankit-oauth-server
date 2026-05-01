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

Questions I explored:

- How does authorization code flow work behind redirects?  
- How does client_id & client_secret validation happen?  
- How are tokens securely generated and verified?  
- How does backend handle authentication securely?  

This project is my hands-on implementation of those concepts.

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
- Basic validation for auth flow  

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
🔹 Signup
POST /api/auth/signup
🔹 Signin
POST /api/auth/signin
🔹 Token Exchange
POST /api/auth/token
🧠 Key Learnings
OAuth is not authentication — it’s authorization
Authorization Code Flow is redirect-based and state-driven
JWT must be securely signed and verified
Backend controls the entire auth lifecycle
Secure systems require flow design, not just tokens
⚠️ Limitations
No refresh token support yet
No PKCE implementation
No rate limiting / abuse protection
Secrets stored in .env
No key rotation (static JWT secret)
🔮 Future Improvements
🔁 Refresh Token Flow
🔐 PKCE support
👤 User profile endpoint (OIDC style)
🌍 Multi-client dashboard
📊 Admin panel
🛡 Rate limiting & security hardening
🧪 Demo

This project includes a simple client UI that:

Performs full OAuth flow
Handles redirect & code exchange
Displays authentication results
📂 Project Structure
auth-server/
├── src/
│   ├── modules/
│   ├── common/
│   ├── config/
├── public/
│   ├── signin.html
│   ├── signup.html
│   ├── client.html
🚀 Getting Started
git clone https://github.com/your-username/ankit-oauth-server.git
cd ankit-oauth-server
npm install
npm run dev
⚙️ Environment Variables
PORT=8000
JWT_SECRET=your_secret_key
❤️ Motivation

“I wanted to understand authentication by building it, not just using it.”

👨‍💻 Author

Ankit Kumar Singh 🚀

⭐ Support

Give a ⭐ if you like this project!
├── sr

