import React from 'react'

export default function HeroSection () {
  return (
    <section
      style={{
        width: '100%',
        minHeight: '70vh',
        background: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: '#fff',
        textAlign: 'center',
        padding: '4rem 1rem'
      }}
    >
      <div
        style={{
          background: 'rgba(24,24,27,0.7)',
          borderRadius: '2rem',
          padding: '3rem 2rem',
          maxWidth: 600,
          margin: '0 auto',
          boxShadow: '0 4px 32px rgba(0,0,0,0.18)'
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 900,
            marginBottom: '1.5rem',
            letterSpacing: '-2px',
            transition: 'color 0.2s'
          }}
          className='hero-headline'
        >
          Solar Power
        </h1>
        <p
          style={{
            fontSize: '1.5rem',
            marginBottom: '2.5rem',
            fontWeight: 400
          }}
        >
          Have electricity ready for emergencies with ☀️ sun
        </p>
        <a
          href='#get-started'
          style={{
            background: '#facc15',
            color: '#18181b',
            borderRadius: 9999,
            padding: '1rem 2.5rem',
            fontWeight: 700,
            fontSize: '1.3rem',
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            transition: 'transform 0.2s, background 0.2s',
            display: 'inline-block'
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'scale(1.07)'
            e.currentTarget.style.background = '#ffe066'
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.background = '#facc15'
          }}
        >
          Get Started ⚡
        </a>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .hero-headline { font-size: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
