import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    if (window.Office) {
      Office.onReady(() => {
        // Office is ready
      });
    }
  }, []);

  const insertSampleText = async () => {
    try {
      await Word.run(async (context) => {
        const body = context.document.body;
        body.insertText("Hello from the React Word Add-in!", "End");
        await context.sync();
      });
    } catch (e) {
      console.error(e);
      alert("Error: " + (e && e.message ? e.message : e));
    }
  };

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", padding: 20 }}>
      <h1>Word Add-in (React)</h1>
      <p>Simple taskpane scaffold for a Word add-in built with React + Vite.</p>
      <button onClick={insertSampleText}>Insert sample text</button>
    </div>
  );
}
