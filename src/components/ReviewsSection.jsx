import React from 'react'

export default function ReviewsSection () {
  return (
    <section style={{ background: '#f3f4f6', padding: '4rem 1rem' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '2rem',
              color: '#facc15',
              fontWeight: 700
            }}
          >
            <span>4.8</span>
            <span style={{ fontSize: '2.2rem' }}>★</span>
            <span
              style={{ color: '#18181b', fontSize: '1.1rem', fontWeight: 500 }}
            >
              (1,200+ reviews)
            </span>
          </div>
          <img
            src='https://randomuser.me/api/portraits/women/44.jpg'
            alt='Happy Customer'
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              objectFit: 'cover',
              margin: '1rem 0'
            }}
          />
          <div
            style={{
              background: '#fff',
              borderRadius: '1.5rem',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              padding: '2rem',
              maxWidth: 500,
              margin: '0 auto'
            }}
          >
            <p
              style={{
                fontSize: '1.2rem',
                color: '#333',
                fontStyle: 'italic',
                marginBottom: 12
              }}
            >
              "Sagasystem made the switch to solar so easy! My bills are lower
              and I feel great about helping the planet."
            </p>
            <span style={{ fontWeight: 700, color: '#2563eb' }}>Sarah T.</span>
          </div>
          <a
            href='#reviews'
            style={{
              background: '#facc15',
              color: '#18181b',
              borderRadius: 9999,
              padding: '0.8rem 2rem',
              fontWeight: 700,
              fontSize: '1.1rem',
              textDecoration: 'none',
              marginTop: 24,
              transition: 'background 0.2s'
            }}
            onMouseOver={e => (e.currentTarget.style.background = '#ffe066')}
            onMouseOut={e => (e.currentTarget.style.background = '#facc15')}
          >
            Explore Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
