'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ViewerPage() {
  const searchParams = useSearchParams();
  const jsonUrl = searchParams.get('json');
  const [workflow, setWorkflow] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!jsonUrl) {
      setError('No JSON URL provided. Add ?json=YOUR_URL to the URL');
      setLoading(false);
      return;
    }

    // Fetch the workflow JSON
    fetch(jsonUrl)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        return res.json();
      })
      .then(data => {
        setWorkflow(data);
        setLoading(false);
      })
      .catch(err => {
        setError(`Failed to load workflow: ${err.message}`);
        setLoading(false);
      });
  }, [jsonUrl]);

  useEffect(() => {
    // Load n8n demo component script
    if (workflow && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@n8n_io/n8n-demo-component@latest/dist/n8n-demo-component.umd.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [workflow]);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        fontSize: '18px',
        color: '#666'
      }}>
        Loading workflow...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '20px'
      }}>
        <h1 style={{ color: '#e74c3c', marginBottom: '20px' }}>Error</h1>
        <p style={{ color: '#666', textAlign: 'center' }}>{error}</p>
        <div style={{ marginTop: '30px', padding: '20px', background: '#f8f9fa', borderRadius: '8px', maxWidth: '600px' }}>
          <h2 style={{ fontSize: '16px', marginBottom: '10px' }}>Usage:</h2>
          <code style={{ display: 'block', padding: '10px', background: '#fff', borderRadius: '4px', fontSize: '14px' }}>
            https://your-viewer.vercel.app?json=https://example.com/workflow.json
          </code>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <n8n-demo-component 
        workflow={JSON.stringify(workflow)}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
