export const metadata = {
  title: 'n8n Workflow Viewer',
  description: 'View n8n workflows in read-only mode',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.8.0/webcomponents-loader.js"></script>
        <script src="https://unpkg.com/lit@2.8.0/polyfill-support.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/@n8n_io/n8n-demo-component@latest/dist/style.css" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
