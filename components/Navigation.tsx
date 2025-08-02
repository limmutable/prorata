import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation: React.FC = () => {
  const router = useRouter();

  const navItems = [
    { href: '/', label: 'START', icon: '🏠' },
    { href: '/cv', label: 'CV', icon: '📄' },
    { href: '/prorata', label: 'PRORATA', icon: '🎯' },
    { href: '/joy-of-work', label: 'JOY OF WORK', icon: '💼' },
    { href: '/entrepreneurship', label: '창업가의길', icon: '🚀' },
  ];

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <div className="profile-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="19" stroke="#333" strokeWidth="2"/>
            <path d="M20 8C22.761 8 25 10.239 25 13C25 15.761 22.761 18 20 18C17.239 18 15 15.761 15 13C15 10.239 17.239 8 20 8ZM20 22C26.627 22 32 24.686 32 28V32H8V28C8 24.686 13.373 22 20 22Z" fill="#333"/>
          </svg>
        </div>
        <div className="profile-info">
          <h3>임정민</h3>
          <p>Founder, PRORATA</p>
        </div>
      </div>

      <div className="search-container">
        <input type="search" placeholder="Search" className="search-input" />
        <button className="search-button">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="6" stroke="white" strokeWidth="2"/>
            <path d="M11 11L14 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={router.pathname === item.href ? 'active' : ''}>
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              <svg className="nav-arrow" width="16" height="16" viewBox="0 0 16 16">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </Link>
          </li>
        ))}
      </ul>

      <div className="location-badge">
        <span className="location-icon">📍</span>
        <span>공지사항</span>
      </div>
    </nav>
  );
};

export default Navigation;