# 🚀 Quick Deployment Guide

## Easiest Option: Railway (Recommended)

Railway makes it super easy to deploy both frontend and backend together.

### Step 1: Deploy Backend
1. Go to [railway.app](https://railway.app) and sign up/login
2. Click **"New Project"** → **"Deploy from GitHub repo"**
3. Select your repository
4. Railway will auto-detect it's a Node.js project
5. Configure the service:
   - **Root Directory**: `server`
   - **Start Command**: `npm start`
6. Railway will automatically deploy!

### Step 2: Deploy Frontend
1. In the same Railway project, click **"New Service"** → **"GitHub Repo"**
2. Select the same repository
3. Configure:
   - **Root Directory**: `client`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npx serve -s dist -l $PORT`
4. Add environment variable:
   - **Name**: `VITE_API_URL`
   - **Value**: Copy the URL from your backend service (e.g., `https://your-backend.railway.app`)
5. Deploy!

### Step 3: Get Your URLs
- Backend URL: Found in your backend service settings
- Frontend URL: Found in your frontend service settings

That's it! Your site is live! 🎉

---

## Alternative: Render (Free Tier)

### Backend:
1. Go to [render.com](https://render.com)
2. **New** → **Web Service**
3. Connect GitHub repo
4. Settings:
   - **Root Directory**: `server`
   - **Build**: `npm install`
   - **Start**: `npm start`
5. Deploy!

### Frontend:
1. **New** → **Static Site**
2. Connect same GitHub repo
3. Settings:
   - **Root Directory**: `client`
   - **Build**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. Add environment variable:
   - `VITE_API_URL` = your backend URL (e.g., `https://editnest-api.onrender.com`)
5. Deploy!

---

## Need Help?

Check the full [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions and troubleshooting.

