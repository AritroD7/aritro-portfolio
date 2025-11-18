# 🚀 Deployment Guide - GitHub Pages

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `aritro-portfolio` (or your preferred name)
4. Description: "Modern portfolio website showcasing my work in marketing, finance & tech"
5. Set to **Public**
6. **Do NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 2: Push Your Code to GitHub

Copy and run these commands in your terminal (replace YOUR_USERNAME with your GitHub username):

```powershell
cd f:\aritro-portfolio
git remote add origin https://github.com/YOUR_USERNAME/aritro-portfolio.git
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click "Save"

## Step 4: Wait for Deployment

- GitHub will start building your site (takes 1-3 minutes)
- Once complete, you'll see: "Your site is published at https://YOUR_USERNAME.github.io/aritro-portfolio/"
- Click the link to view your live portfolio!

## 🎉 Your Portfolio is Now Live!

Your website will be available at:
**https://YOUR_USERNAME.github.io/aritro-portfolio/**

## 📝 Making Updates

Whenever you want to update your portfolio:

```powershell
cd f:\aritro-portfolio
# Make your changes to the files
git add .
git commit -m "Describe your changes here"
git push
```

GitHub Pages will automatically rebuild and deploy your changes within a few minutes!

## 🔧 Optional: Custom Domain

If you want to use a custom domain (like aritrodhar.com):

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In your repository Settings → Pages → Custom domain
3. Enter your domain name
4. Follow GitHub's instructions to configure DNS records
5. Enable "Enforce HTTPS" once DNS is verified

## 💡 Pro Tips

- **Replace the placeholder image**: Update the profile image URL in `index.html` and `about.html`
- **Add your actual photo**: Upload your photo to the repository and update the image paths
- **Test locally**: Open `index.html` in your browser before pushing to ensure everything looks good
- **Check mobile**: Test your site on different devices to ensure responsiveness

## 🐛 Troubleshooting

**Site not loading?**
- Check that you selected the correct branch (main) and folder (root)
- Wait a few minutes for the initial deployment
- Clear your browser cache

**Images not showing?**
- Make sure image paths are relative (not absolute)
- Check that image files are committed to the repository

**Styles not loading?**
- Verify that `styles.css` is in the root directory
- Check the HTML file links to `styles.css` (should be `href="styles.css"`)

## 📧 Need Help?

If you encounter any issues, feel free to reach out or check GitHub's documentation:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Troubleshooting](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)

---

**Ready to go live?** Follow the steps above and your portfolio will be on the internet in minutes! 🚀
