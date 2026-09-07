'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import dummyCredentials from '../dummy-credentials.json';

export default function LoginPage() {
  const [isClient, setIsClient] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const user = dummyCredentials.users.find(
      (u) => u.username === email && u.password === password
    );
    
    if (user) {
      localStorage.setItem('userRole', user.role);
      
      if (user.role === 'Super Admin') {
        router.push('/superadmin');
      } else {
        router.push('/dashboard');
      }
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <Head>
        <title>Login | Dental CRM</title>
        <meta name="description" content="Login to Dental CRM" />
      </Head>
      <main className="login-container">
        <div className="login-overlay"></div>
        
        {/* Dynamic Floating Orbs */}
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        
        <div className="glass-panel-wrapper">
             
          <div className="glass-panel">
            <div className="login-header">
              <h1 className="login-title">Dental CRM</h1>
              <p className="login-subtitle">Welcome back! Please login to your account.</p>
            </div>

            <form className="form-group" style={{ gap: '1.25rem' }} onSubmit={handleLogin}>
              {error && <div style={{ color: '#ff4444', fontSize: '0.9rem', textAlign: 'center', marginBottom: '-0.5rem' }}>{error}</div>}
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form-input" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  className="form-input" 
                  placeholder="Enter your password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>

              <div className="login-options">
                <label className="remember-me">
                  <input type="checkbox" className="remember-checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>

              <button type="submit" className="login-button">
                Sign In
              </button>
            </form>

            <div className="register-prompt">
              Don't have an account? 
              <a href="/signup" className="register-link">Sign up</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
