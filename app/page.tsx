'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        // Also keep localStorage updated for client-side purely visual rendering if needed (like the dashboard sidebar),
        // but rely on cookie for actual security (middleware).
        localStorage.setItem('userRole', data.role);

        if (data.role === 'Super Admin') {
          router.push('/superadmin');
        } else {
          router.push('/dashboard');
        }
      } else {
        setError(data.error || 'Invalid email or password');
      }
    } catch {
      setError('An error occurred during login');
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
