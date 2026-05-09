# Magister Marcus — Via Latina

A classical Latin tutor for elementary students built with React + Cloudflare Pages.  
Teaches reading, translation, and pronunciation of authentic historical texts.

## Features

- **4 student profiles** — isolated history, level, and text per student
- **5 curriculum levels** — Gradus I (beginner) through Gradus V (Virgil, Horace, Ovid)
- **12 historical texts** — Caesar, Cicero, Virgil, Phaedrus, Vulgate, inscriptions, and more
- **Text-to-Speech** — every Latin passage has a ▶ RECITA button with classical pronunciation
- **Speech recognition** — students speak answers aloud (Chrome/Edge)
- **Pronunciation Drill** — graded listen-and-repeat mode with scoring
- **Speed control** — adjustable TTS rate from Lentissime to Celerrime

---

## Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + Vite |
| Hosting | Cloudflare Pages |
| API proxy | Cloudflare Pages Function (`functions/api/chat.js`) |
| AI | Anthropic Claude (`claude-sonnet-4-20250514`) |

---

## Deployment

### 1. Push to GitHub

```bash
# In this directory
git init
git add .
git commit -m "Initial commit — Magister Marcus"

# Create a new repo at github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/magister-marcus.git
git branch -M main
git push -u origin main
```

### 2. Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create**
2. Choose **Pages** → **Connect to Git**
3. Select your `magister-marcus` repository
4. Set build configuration:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**

### 3. Add the Anthropic API key as a secret

> This is the critical step — the key lives only in Cloudflare, never in your code.

1. In Cloudflare Dashboard → your Pages project → **Settings** → **Environment variables**
2. Click **Add variable** under **Production**
3. Set:
   - **Variable name:** `ANTHROPIC_API_KEY`
   - **Value:** your key from [console.anthropic.com](https://console.anthropic.com/settings/keys)
   - Check **Encrypt** ← important
4. Click **Save**
5. Go to **Deployments** → **Retry deployment** (so it picks up the new secret)

Your site will be live at `https://magister-marcus.pages.dev` (or your custom domain).

---

## Local Development

You need Node.js 18+ and a Cloudflare account.

```bash
# Install dependencies
npm install

# Install wrangler (Cloudflare CLI) globally if you haven't
npm install -g wrangler

# Copy the example secrets file
cp .dev.vars.example .dev.vars
# Edit .dev.vars and add your real ANTHROPIC_API_KEY

# Terminal 1 — run the Pages Functions (API proxy) on port 8788
npx wrangler pages dev dist --port 8788

# Terminal 2 — run Vite dev server (proxies /api/* to wrangler)
npm run dev
```

Then open http://localhost:5173

> **Note:** Wrangler needs the `dist` folder to exist for local Pages Functions dev.  
> Run `npm run build` once first if you haven't.

---

## Project Structure

```
magister-marcus/
├── src/
│   ├── pages/
│   │   ├── Home.jsx     # Landing page — subject picker
│   │   └── Latin.jsx    # Magister Marcus Latin tutor
│   └── main.jsx         # React Router entry point
├── functions/
│   └── api/
│       └── chat.js      # Cloudflare Pages Function (Anthropic proxy)
├── public/
│   ├── favicon.svg
│   └── _redirects       # SPA routing fallback for Cloudflare Pages
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── .dev.vars.example
```

## Adding a New Subject

1. Create `src/pages/YourSubject.jsx`
2. Add a route in `src/main.jsx`:
   ```jsx
   <Route path="/your-subject" element={<YourSubject />} />
   ```
3. Add a card in `src/pages/Home.jsx` in the `TOOLS` array:
   ```js
   { id:'your-subject', icon:'📚', title:'Your Tool', subtitle:'...', href:'/your-subject', status:'active', tag:'Active' }
   ```
4. Push to GitHub — Cloudflare deploys automatically.

---

## Updating the App

Any push to `main` on GitHub triggers an automatic redeploy on Cloudflare Pages.

```bash
# Make changes to src/App.jsx, then:
git add .
git commit -m "Your change description"
git push
```

Cloudflare builds and deploys in ~60 seconds.

---

## Adding a Custom Domain

1. Cloudflare Dashboard → your Pages project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (must be on Cloudflare DNS)
4. Cloudflare handles SSL automatically

---

## API Cost

Magister Marcus uses `claude-sonnet-4-20250514` at ~$3 per million input tokens and ~$15 per million output tokens. A typical lesson exchange is ~2,000 tokens total. Monitor usage at [console.anthropic.com](https://console.anthropic.com).
