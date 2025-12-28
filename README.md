# n8n Workflow Viewer

A simple viewer for n8n workflows using the official `@n8n_io/n8n-demo-component`.

## Features

- 📊 Display n8n workflows in read-only mode
- 🎨 Same visual appearance as n8n editor
- 🔗 Load workflows from any public JSON URL
- 📱 Responsive and embeddable

## Usage

```
https://your-viewer.vercel.app?json=https://example.com/workflow.json
```

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo)

1. Click the "Deploy" button above
2. Sign in to Vercel
3. Deploy!

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000?json=YOUR_JSON_URL

## Embed in Website

```html
<iframe 
  src="https://your-viewer.vercel.app?json=https://example.com/workflow.json"
  width="100%" 
  height="600px"
  frameborder="0">
</iframe>
```

## Example Workflow JSON

Your workflow JSON should follow the n8n format:

```json
{
  "name": "My Workflow",
  "nodes": [...],
  "connections": {...},
  "settings": {...}
}
```

## Built With

- [Next.js](https://nextjs.org/)
- [@n8n_io/n8n-demo-component](https://www.npmjs.com/package/@n8n_io/n8n-demo-component)
