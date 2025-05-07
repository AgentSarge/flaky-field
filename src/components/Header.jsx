import React, { useState } from 'react'

const navLinks = [
  { text: 'About', href: '#about' },
  { text: 'Solar', href: '#solar' },
  { text: 'Efficiency', href: '#efficiency' },
  { text: 'Reviews', href: '#reviews' }
]

export default function Header () {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#18181b',
        color: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '1rem 2rem'
        }}
      >
        {/* Logo */}
        <a
          href='#'
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#fff',
            fontWeight: 700,
            fontSize: '1.5rem'
          }}
        >
          <img
            src='https://cdn.pixabay.com/photo/2017/01/31/13/14/solar-panel-2025867_1280.png'
            alt='Sagasystem Logo'
            style={{ height: 40, marginRight: 12 }}
          />
          Sagasystem
        </a>
        {/* Desktop Nav */}
        <nav
          className='desktop-nav'
          style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
        >
          {navLinks.map(link => (
            <a
              key={link.text}
              href={link.href}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1rem',
                position: 'relative'
              }}
            >
              {link.text}
            </a>
          ))}
        </nav>
        {/* Contact Info & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a
            href='mailto:info@sagasystem.com'
            style={{
              color: '#facc15',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '1rem'
            }}
          >
            info@sagasystem.com
          </a>
          <a
            href='#get-started'
            style={{
              background: '#facc15',
              color: '#18181b',
              borderRadius: 9999,
              padding: '0.75rem 1.5rem',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'transform 0.2s',
              display: 'inline-block'
            }}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Get Started ⚡
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button
          className='mobile-menu-btn'
          aria-label='Open menu'
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: 28,
            marginLeft: 16
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav
          className='mobile-nav'
          style={{
            background: '#18181b',
            padding: '1rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {navLinks.map(link => (
            <a
              key={link.text}
              href={link.href}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1.2rem'
              }}
            >
              {link.text}
            </a>
          ))}
          <a
            href='mailto:info@sagasystem.com'
            style={{
              color: '#facc15',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '1.1rem'
            }}
          >
            info@sagasystem.com
          </a>
          <a
            href='#get-started'
            style={{
              background: '#facc15',
              color: '#18181b',
              borderRadius: 9999,
              padding: '0.75rem 1.5rem',
              fontWeight: 700,
              fontSize: '1.1rem',
              textDecoration: 'none',
              marginTop: 8
            }}
          >
            Get Started ⚡
          </a>
        </nav>
      )}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 901px) {
          .mobile-nav { display: none !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  )
}
