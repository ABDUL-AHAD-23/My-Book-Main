import ChatbotWidget from '../components/Chat/ChatbotWidget'; // match the name
import React from 'react';
import Head from '@docusaurus/Head';

export default function Root({ children }) {
  const backendUrl = process.env.BACKEND_API_URL || 'http://localhost:3000';
  // Inject runtime config so client code can read window.__BACKEND_API_URL__
  const script = `window.__BACKEND_API_URL__ = "${backendUrl.replace(/"/g, '\\"')}";`;

  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </Head>
      {children}
      <ChatbotWidget />
    </>
  );
} 
