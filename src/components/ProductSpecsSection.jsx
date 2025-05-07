import React from 'react'

const specs = [
  { icon: '🌦️', label: 'Weather-resistant', value: 'IPX8 Rated' },
  { icon: '⚡', label: 'Power Output', value: '50W' },
  { icon: '🔋', label: 'Battery Capacity', value: '10kWh' },
  { icon: '🌞', label: 'Efficiency', value: '100% Solar Efficiency' },
  { icon: '🛡️', label: 'Warranty', value: '25 Years' }
]

export default function ProductSpecsSection () {
  return (
    <section style={{ background: '#fff', padding: '4rem 1rem' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: 800,
            marginBottom: '2rem'
          }}
        >
          Product Specifications
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}
        >
          {specs.map((s, i) => (
            <div
              key={i}
              style={{
                background: '#f9fafb',
                borderRadius: '1rem',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: 8 }}>
                {s.icon}
              </div>
              <div
                style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 4 }}
              >
                {s.label}
              </div>
              <div style={{ color: '#2563eb', fontWeight: 600 }}>{s.value}</div>
            </div>
          ))}
        </div>
        <ul
          style={{
            listStyle: 'disc',
            paddingLeft: 24,
            color: '#333',
            fontSize: '1.1rem',
            maxWidth: 600,
            margin: '0 auto'
          }}
        >
          <li>Engineered for all weather conditions</li>
          <li>Seamless integration with home energy systems</li>
          <li>Remote monitoring and smart controls</li>
          <li>Certified for safety and reliability</li>
        </ul>
      </div>
    </section>
  )
}
