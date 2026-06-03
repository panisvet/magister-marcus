import { useState, useRef, useEffect } from 'react';

const SYSTEM_PROMPT = `You are Magister Artis, a warm and learned art history tutor for a classical homeschool. You guide students ages 9–12 through Western art history from 1492–1900. You are steeped in the classical and Charlotte Mason traditions, with an Eastern Orthodox sensibility. Help students observe paintings carefully, discuss artists and periods, answer vocabulary questions, and encourage wonder at human creativity as a reflection of the divine. Be encouraging, precise, and age-appropriate. Never lecture — ask questions back.`;

export default function MagisterArtis() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Salve! I am Magister Artis — your guide through five centuries of Western art, from Columbus sailing west to the age of the Impressionists. What shall we look at today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: 'user', content: input.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ system: SYSTEM_PROMPT, messages: updated })
      });
      const data = await res.json();
      const reply = data?.content?.[0]?.text ?? 'I could not respond just now.';
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Connection lost. Try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight:'100vh', background:'#0a0804', color:'#f7edcc', fontFamily:"'Crimson Pro',Georgia,serif", padding:'2rem' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Crimson+Pro:ital,wght@0,400;1,400&family=IM+Fell+English:ital@1&display=swap');`}</style>
      <div style={{ maxWidth:760, margin:'0 auto' }}>
        <h1 style={{ fontFamily:"'Cinzel',serif", color:'#e8b84b', fontSize:'2rem', marginBottom:4 }}>🎨 Magister Artis</h1>
        <p style={{ fontFamily:"'IM Fell English',serif", fontStyle:'italic', color:'#9e8c72', marginBottom:'2rem' }}>Art History · 1492–1900 · The Western Tradition</p>
        <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(201,144,42,0.3)', borderRadius:8, padding:'1.25rem', minHeight:420, maxHeight:520, overflowY:'auto', marginBottom:'1rem', display:'flex', flexDirection:'column', gap:'1rem' }}>
          {messages.map((m, i) => (
            <div key={i} style={{ alignSelf: m.role==='user'?'flex-end':'flex-start', maxWidth:'82%', background: m.role==='user'?'rgba(201,144,42,0.18)':'rgba(255,255,255,0.06)', border:`1px solid ${m.role==='user'?'rgba(201,144,42,0.4)':'rgba(255,255,255,0.1)'}`, borderRadius:8, padding:'0.75rem 1rem', fontSize:'0.97rem', lineHeight:1.6 }}>
              {m.content}
            </div>
          ))}
          {loading && <div style={{ alignSelf:'flex-start', color:'#e8b84b', fontStyle:'italic', fontSize:'0.9rem' }}>Magister Artis is considering…</div>}
          <div ref={bottomRef}/>
        </div>
        <div style={{ display:'flex', gap:'0.5rem' }}>
          <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key==='Enter' && send()} placeholder="Ask about an artist, period, or painting…" style={{ flex:1, background:'rgba(255,255,255,0.05)', border:'1px solid rgba(201,144,42,0.35)', borderRadius:6, padding:'0.65rem 1rem', color:'#f7edcc', fontFamily:"'Crimson Pro',serif", fontSize:'1rem', outline:'none' }}/>
          <button onClick={send} disabled={loading||!input.trim()} style={{ background: loading?'rgba(201,144,42,0.3)':'#c9902a', color:'#1a1000', border:'none', borderRadius:6, padding:'0.65rem 1.4rem', fontFamily:"'Cinzel',serif", fontWeight:700, cursor: loading?'default':'pointer', fontSize:'0.9rem' }}>Send</button>
        </div>
      </div>
    </div>
  );
}
