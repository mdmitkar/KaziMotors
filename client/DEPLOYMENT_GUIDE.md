# Deployment Guide for Vercel

This project is configured to be deployment-ready on Vercel. Follow these steps to deploy your `client` application.

## Prerequisites
- A Vercel account (can be created at [vercel.com](https://vercel.com)).
- Your project pushed to a Git provider (GitHub, GitLab, or Bitbucket).

## Steps to Deploy

1.  **Import Project in Vercel**
    - Go to your Vercel Dashboard and click **"Add New..."** -> **"Project"**.
    - Select your Git repository `KaziMotors`.

2.  **Configure Project Settings** (Crucial Step!)
    - Vercel will attempt to auto-detect settings. However, since your app is in a subfolder, you **must** configure the **Root Directory**.
    - In the "Import Project" screen, look for **"Root Directory"**.
    - Click **Edit** and select the folder `KaziMotors/client` (or simply `client` if that's how it appears in the tree).
    - **Note:** Vercel should automatically detect `Vite` as the framework once the root directory is set correctly.

3.  **Verify Build Settings**
    - **Framework Preset:** Vite
    - **Build Command:** `npm run build` (or `vite build`)
    - **Output Directory:** `dist`
    - **Install Command:** `npm install`

4.  **Deploy**
    - Click **Deploy**. Vercel will install dependencies, build your site, and deploy it.

5.  **Environment Variables**
    - If you add any backend API URLs in the future, add them in the **Settings** -> **Environment Variables** section of your Vercel project dashboard.

## Future: Resetting to Hostinger
When you are ready to move to Hostinger:
1.  Run `npm run build` locally.
2.  The `dist` folder will be created.
3.  Upload the contents of the `dist` folder to your Hostinger `public_html` directory via File Manager or FTP.
