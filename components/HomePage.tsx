import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <p className="hero-tagline">
          Sharing new ideas, Inspiring innovative founders, Building something useful
        </p>
        
        <div className="hero-profile">
          <div className="hero-avatar">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <rect width="120" height="120" rx="12" fill="#f0f0f0"/>
              <circle cx="60" cy="45" r="15" fill="#666"/>
              <path d="M60 65C75 65 90 75 90 90V100H30V90C30 75 45 65 60 65Z" fill="#666"/>
            </svg>
          </div>
          
          <div className="hero-content">
            <h1>임정민</h1>
            <p className="hero-description">
              25년이 넘는 기간동안 실리콘밸리와 서울에서 창업가, 벤처투자자, 베스트셀러 작가로 활동하고 있습니다. 
              주로 패션, 뷰티, 푸드 등 라이프스타일, 인터넷, 미디어 및 콘텐츠, 엔터테인먼트, 건강자동, 
              블록체인 등에 관심을 가지고 있으며, 역사와 문화, 데이터분석, 물리학, 화학, 수학과 법률지식을 
              접목한 나만의 관점으로 세상을 이해하려고 노력하고 있습니다.
            </p>
            <Link href="/about" className="hero-cta">
              More about me →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <h2>뉴스레터 구독하기</h2>
        <p className="newsletter-subtitle">새로운 소식을 가장 빠르게 받아보기</p>
        
        <form className="newsletter-form">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>PRORATA</h2>
        <p className="projects-subtitle">벤처투자에 관한 인기글</p>
        
        <div className="projects-grid">
          <div className="project-card">
            <h3>머리말</h3>
            <p>머리말 - 머리말</p>
          </div>
          
          <div className="project-card">
            <h3>Designing for User Experience: Key Considerations</h3>
            <p>Designing for User Experience: Key Considerations - 머리말</p>
          </div>
          
          <div className="project-card">
            <h3>이메일로 일 잘 하는 법</h3>
            <p>이메일로 일 잘 하는 법 - 이메일로 일 잘 하는</p>
          </div>
        </div>
        
        <Link href="/prorata" className="more-link">
          글 더 보기 →
        </Link>
      </section>

      {/* Joy of Work Section */}
      <section className="joy-section">
        <h2>Joy of Work</h2>
        <p>어차피 하는 거, 재밌기라도 해야지.</p>
      </section>
    </>
  );
};

export default HomePage;