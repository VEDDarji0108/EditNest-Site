# EditNest Deployment Guide

This guide will help you deploy your EditNest site to various hosting platforms.

## 🚀 Quick Deployment Options

### Option 1: Railway (Recommended - Easiest)
Railway can host both frontend and backend together.

1. **Sign up** at [railway.app](https://railway.app)
2. **Create a new project** and connect your GitHub repository
3. **Add a service** for the backend:
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
4. **Add another service** for the frontend:
   - Root Directory: `client`
   - Build Command: `npm install && npm run build`
   - Start Command: `npx serve -s dist -l 3000`
   - Add environment variable: `VITE_API_URL=https://your-backend-service.railway.app`
5. **Deploy!** Railway will automatically deploy on every push.

### Option 2: Render (Free Tier Available)

#### Backend Deployment:
1. Go to [render.com](https://render.com) and sign up
2. Create a new **Web Service**
3. Connect your GitHub repository
4. Configure:
   - **Name**: `editnest-api`
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Click **Create Web Service**

#### Frontend Deployment:
1. Create a new **Static Site** on Render
2. Connect your GitHub repository
3. Configure:
   - **Root Directory**: `client`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. Add environment variable:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://editnest-api.onrender.com` (your backend URL)
5. Click **Create Static Site**

### Option 3: Vercel (Frontend) + Railway/Render (Backend)

#### Backend:
Deploy backend using Railway or Render (see above).

#### Frontend on Vercel:
1. Go to [vercel.com](https://vercel.com) and sign up
2. Import your GitHub repository
3. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add environment variable:
   - **Key**: `VITE_API_URL`
   - **Value**: Your backend URL (e.g., `https://your-backend.railway.app`)
5. Deploy!

### Option 4: Netlify (Frontend) + Railway/Render (Backend)

#### Backend:
Deploy backend using Railway or Render (see above).

#### Frontend on Netlify:
1. Go to [netlify.com](https://netlify.com) and sign up
2. Add new site from Git
3. Configure:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `client/dist`
4. Add environment variable:
   - **Key**: `VITE_API_URL`
   - **Value**: Your backend URL
5. Deploy!

## 📝 Environment Variables

### Frontend (.env file in `client/` directory):
```env
VITE_API_URL=https://your-backend-url.railway.app
```

**Important**: 
- In development, leave this empty (Vite proxy handles it)
- In production, set it to your deployed backend URL

### Backend:
The backend uses `PORT` environment variable (automatically set by most hosting platforms).

## 🔧 Manual Deployment Steps

### 1. Build the Frontend
```bash
cd client
npm install
npm run build
```

This creates a `dist` folder with production-ready files.

### 2. Deploy Backend
```bash
cd server
npm install
# Set PORT environment variable
PORT=5000 npm start
```

### 3. Configure CORS (if needed)
The backend already has CORS enabled. If you need to restrict it to your frontend domain:
```javascript
app.use(cors({
  origin: 'https://your-frontend-domain.com'
}));
```

## 🌐 Custom Domain Setup

### Railway:
1. Go to your service settings
2. Click **Generate Domain** or add a custom domain
3. Update your frontend `VITE_API_URL` if needed

### Render:
1. Go to your service settings
2. Add a custom domain
3. Update DNS records as instructed

### Vercel/Netlify:
1. Go to domain settings
2. Add your custom domain
3. Follow DNS configuration instructions

## 🔍 Testing Your Deployment

1. **Test Backend API**:
   - Visit: `https://your-backend-url.com/api/portfolio`
   - Should return JSON with portfolio items

2. **Test Frontend**:
   - Visit your frontend URL
   - Check browser console for errors
   - Test the contact form
   - Verify portfolio loads

## 🐛 Troubleshooting

### Frontend can't reach backend:
- Check `VITE_API_URL` is set correctly
- Ensure backend CORS allows your frontend domain
- Verify backend is running and accessible

### Build fails:
- Check Node.js version (should be 18+)
- Ensure all dependencies are in `package.json`
- Check build logs for specific errors

### API calls return 404:
- Verify backend routes are `/api/portfolio` and `/api/contact`
- Check backend is deployed and running
- Verify `VITE_API_URL` includes the full URL (with https://)

## 📦 Production Checklist

- [ ] Backend deployed and accessible
- [ ] Frontend `VITE_API_URL` environment variable set
- [ ] Frontend built successfully (`npm run build`)
- [ ] CORS configured correctly
- [ ] Custom domain configured (optional)
- [ ] SSL/HTTPS enabled (automatic on most platforms)
- [ ] Test all features (portfolio, contact form)

## 💡 Recommended Setup

For the easiest deployment experience:
1. **Backend**: Railway (free tier, easy setup)
2. **Frontend**: Vercel (free tier, automatic deployments, great performance)

Both platforms offer:
- Free tiers
- Automatic deployments from GitHub
- SSL certificates
- Easy environment variable management

Good luck with your deployment! 🎉

