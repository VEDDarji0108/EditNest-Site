# Netlify "Page Not Found" Fix

## Problem
You're getting a "Page Not Found" error on Netlify after deploying your site.

## Solution
I've created the necessary configuration files to fix this issue:

### Files Created:
1. **`netlify.toml`** - Main Netlify configuration file
2. **`client/public/_redirects`** - Redirect rules for SPA routing

## What to Do:

### Step 1: Commit and Push the New Files
```bash
git add netlify.toml client/public/_redirects
git commit -m "Fix Netlify SPA routing configuration"
git push
```

### Step 2: Update Netlify Build Settings
1. Go to your Netlify dashboard
2. Click on your site → **Site settings** → **Build & deploy**
3. Under **Build settings**, make sure:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist` (NOT `client/dist`)
4. Click **Save**

### Step 3: Set Environment Variable
1. Go to **Site settings** → **Environment variables**
2. Add:
   - **Key**: `VITE_API_URL`
   - **Value**: Your backend URL (e.g., `https://your-backend.railway.app`)
3. Click **Save**

### Step 4: Trigger a New Deploy
1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Clear cache and deploy site**

## Why This Happens:
- Netlify tries to find actual files for each route
- Single Page Applications (SPAs) need all routes to redirect to `index.html`
- The `_redirects` file and `netlify.toml` tell Netlify to serve `index.html` for all routes

## Verify It's Working:
After redeploying, your site should:
- ✅ Load the homepage correctly
- ✅ Handle hash-based navigation (#home, #services, etc.)
- ✅ Not show "Page Not Found" errors
- ✅ Work when refreshing the page

## Still Having Issues?
1. Check the Netlify build logs for errors
2. Verify the `dist` folder is being created correctly
3. Make sure `VITE_API_URL` is set correctly
4. Clear Netlify cache and redeploy

