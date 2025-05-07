import React from 'react'

const features = [
  {
    title: 'Solar Panel',
    image:
      'https://cdn.pixabay.com/photo/2017/01/31/13/14/solar-panel-2025867_1280.png',
    description:
      'High-efficiency solar panels for maximum energy production and savings.',
    link: '#solar-panel'
  },
  {
    title: 'Solar Battery',
    image: 'https://cdn.pixabay.com/photo/2013/07/12/13/58/sun-147882_1280.png',
    description:
      'Store solar energy for use at night or during outages with our advanced batteries.',
    link: '#solar-battery'
  },
  {
    title: 'Smart Inverter',
    image: 'https://cdn.pixabay.com/photo/2014/04/03/10/32/eco-312989_1280.png',
    description:
      'Seamlessly convert solar power for home use with intelligent inverters.',
    link: '#smart-inverter'
  }
]

export default function FeaturesSection () {
  return (
    <section style={{ background: '#f9fafb', padding: '4rem 1rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2.2rem',
            fontWeight: 800,
            marginBottom: '2.5rem'
          }}
        >
          Our Solar Products
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem'
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                borderRadius: '1.5rem',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                padding: '2rem',
                textAlign: 'center',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseOver={e =>
                (e.currentTarget.style.transform =
                  'translateY(-8px) scale(1.03)')
              }
              onMouseOut={e => (e.currentTarget.style.transform = 'none')}
            >
              <img
                src={f.image}
                alt={f.title}
                style={{ height: 80, marginBottom: 24 }}
              />
              <h3
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  marginBottom: 12
                }}
              >
                {f.title}
              </h3>
              <p style={{ color: '#555', marginBottom: 24 }}>{f.description}</p>
              <a
                href={f.link}
                style={{
                  background: '#facc15',
                  color: '#18181b',
                  borderRadius: 9999,
                  padding: '0.6rem 1.5rem',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  transition: 'background 0.2s'
                }}
                onMouseOver={e =>
                  (e.currentTarget.style.background = '#ffe066')
                }
                onMouseOut={e => (e.currentTarget.style.background = '#facc15')}
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
