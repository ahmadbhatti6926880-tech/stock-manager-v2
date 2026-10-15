import { useState } from 'react';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hello! Main aapka Stock AI Assistant hoon. Kya madad karoon?", bot: true }
  ]);

  const sendMsg = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { text: input, bot: false }]);
    const userText = input;
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: `Aapke stock mein Laptop Table ka level kam (5) hai. Restock order bana lein!`, 
        bot: true 
      }]);
    }, 500);
  };

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', pb: '10px' }}>
        <h1 style={{ color: '#38bdf8' }}>📦 Stock Manager AI Pro</h1>
        <button 
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          style={{ background: isLoggedIn ? '#e11d48' : '#2563eb', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </header>

      <main style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginTop: '20px' }}>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <h2>Live Inventory Items</h2>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <th style={{ padding: '8px' }}>Item</th>
                <th style={{ padding: '8px' }}>SKU</th>
                <th style={{ padding: '8px' }}>Qty</th>
                <th style={{ padding: '8px' }}>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px' }}>Multifunctional Laptop Table</td>
                <td style={{ padding: '8px' }}>LT-102</td>
                <td style={{ padding: '8px', color: '#f59e0b' }}>5 (Low)</td>
                <td style={{ padding: '8px' }}>$25.00</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>1080P Wifi Smart CCTV Camera</td>
                <td style={{ padding: '8px' }}>CAM-99</td>
                <td style={{ padding: '8px', color: '#10b981' }}>18</td>
                <td style={{ padding: '8px' }}>$45.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
          <h3>🤖 AI Chatbot Assistant</h3>
          <div style={{ height: '250px', overflowY: 'auto', background: '#0f172a', padding: '10px', borderRadius: '8px' }}>
            {messages.map((m, i) => (
              <p key={i} style={{ textAlign: m.bot ? 'left' : 'right', color: m.bot ? '#38bdf8' : '#fff', margin: '5px 0' }}>
                {m.text}
              </p>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
            <input 
              value={input} 
              onChange={e => setInput(e.target.value)} 
              placeholder="Ask AI..." 
              style={{ flex: 1, padding: '8px', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#fff' }}
            />
            <button onClick={sendMsg} style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer' }}>Send</button>
          </div>
        </div>
      </main>
    </div>
  );
}
