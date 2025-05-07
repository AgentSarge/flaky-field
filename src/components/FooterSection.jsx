import React from 'react'

const socialLinks = [
  { icon: '🐦', label: 'Twitter', url: 'https://twitter.com/' },
  { icon: '📘', label: 'Facebook', url: 'https://facebook.com/' },
  { icon: '📸', label: 'Instagram', url: 'https://instagram.com/' }
]

const navLinks = [
  { text: 'Terms of Service', url: '/terms' },
  { text: 'Privacy Policy', url: '/privacy' }
]

export default function FooterSection () {
  return (
    <footer
      style={{
        background: '#18181b',
        color: '#f3f4f6',
        padding: '3rem 1rem',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '1.5rem'
          }}
        >
          <div>
            <div
              style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}
            >
              Contact
            </div>
            <a
              href='mailto:info@sagasystem.com'
              style={{
                color: '#facc15',
                textDecoration: 'none',
                fontWeight: 500,
                display: 'block',
                marginBottom: 4
              }}
            >
              info@sagasystem.com
            </a>
            <a
              href='tel:+1234567890'
              style={{
                color: '#facc15',
                textDecoration: 'none',
                fontWeight: 500
              }}
            >
              +1 (234) 567-890
            </a>
          </div>
          <div>
            <div
              style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}
            >
              Follow Us
            </div>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    color: '#facc15',
                    fontSize: '1.5rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                  onMouseOut={e => (e.currentTarget.style.color = '#facc15')}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div
              style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}
            >
              Links
            </div>
            {navLinks.map((n, i) => (
              <a
                key={i}
                href={n.url}
                style={{
                  color: '#f3f4f6',
                  textDecoration: 'none',
                  display: 'block',
                  marginBottom: 4,
                  transition: 'color 0.2s'
                }}
                onMouseOver={e => (e.currentTarget.style.color = '#facc15')}
                onMouseOut={e => (e.currentTarget.style.color = '#f3f4f6')}
              >
                {n.text}
              </a>
            ))}
          </div>
        </div>
        <div style={{ color: '#a1a1aa', fontSize: '0.95rem', marginTop: 24 }}>
          © 2024 Sagasystem Solar. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
