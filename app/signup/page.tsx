'use client';
import React, { useState } from 'react';

// Metadata handled via Next.js — this is a client component

const IconUser = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const IconLock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
  </svg>
);

export default function SignUpPage() {
  const [password, setPassword] = useState('');
  const [activeRole, setActiveRole] = useState<'dentist' | 'staff'>('dentist');

  const getStrength = () => {
    if (!password) return { pct: 0, label: '', color: 'transparent', glow: 'transparent' };
    let s = 0;
    if (password.length > 5) s += 25;
    if (password.match(/[A-Z]/)) s += 25;
    if (password.match(/[0-9]/)) s += 25;
    if (password.match(/[^A-Za-z0-9]/)) s += 25;
    if (s < 30)  return { pct: s, label: 'Weak',   color: 'rgba(239, 68, 68, 0.9)',   glow: 'rgba(239, 68, 68, 0.4)' };
    if (s < 60)  return { pct: s, label: 'Fair',   color: 'rgba(234, 179, 8, 0.9)',   glow: 'rgba(234, 179, 8, 0.4)' };
    if (s < 90)  return { pct: s, label: 'Good',   color: 'rgba(56, 189, 248, 0.9)',  glow: 'rgba(56, 189, 248, 0.4)' };
    return { pct: 100, label: 'Strong', color: 'rgba(34, 197, 94, 0.9)', glow: 'rgba(34, 197, 94, 0.4)' };
  };

  const strength = getStrength();

  return (
    <>
      <main className="login-container">
        <div className="login-overlay"></div>

        {/* Signup-unique orb layout: rotated positions & pink/purple palette */}
        <div className="floating-orb orb-1" style={{ top: '65%', left: '-60px', background: 'rgba(236, 72, 153, 0.35)', animationDirection: 'reverse' }}></div>
        <div className="floating-orb orb-2" style={{ top: '-80px', right: '15%', background: 'rgba(56, 189, 248, 0.3)', animationDelay: '-8s' }}></div>
        <div className="floating-orb orb-3" style={{ bottom: '5%', left: '55%', background: 'rgba(167, 139, 250, 0.45)', animationDelay: '-4s' }}></div>

        <div className="glass-panel-wrapper">
          <div className="glass-panel signup-panel">
            {/* Header */}
            <div className="login-header">
              <h1 className="login-title">Create Account</h1>
              <p className="login-subtitle">Join the Dental CRM ecosystem today.</p>
            </div>

            {/* Role Selector */}
            <div className="field-row-1">
              <p className="form-label" style={{ marginBottom: '0.5rem' }}>I am a</p>
              <div className="role-selector">
                {(['dentist', 'staff'] as const).map((role) => (
                  <button
                    key={role}
                    type="button"
                    className={`role-pill${activeRole === role ? ' active' : ''}`}
                    onClick={() => setActiveRole(role)}
                  >
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-divider field-row-2"><span>Account details</span></div>

            {/* Name Row */}
            <div className="field-row-2" style={{ display: 'flex', gap: '0.875rem' }}>
              <div className="form-group" style={{ flex: 1 }}>
                <label htmlFor="firstName" className="form-label">First Name</label>
                <div className="input-wrapper">
                  <span className="input-icon"><IconUser /></span>
                  <input type="text" id="firstName" className="form-input has-icon" placeholder="John" required />
                </div>
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <div className="input-wrapper">
                  <span className="input-icon"><IconUser /></span>
                  <input type="text" id="lastName" className="form-input has-icon" placeholder="Doe" required />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="form-group field-row-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <div className="input-wrapper">
                <span className="input-icon"><IconMail /></span>
                <input type="email" id="email" className="form-input has-icon" placeholder="john.doe@clinic.com" required />
              </div>
            </div>

            {/* Phone */}
            <div className="form-group field-row-4">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <div className="input-wrapper">
                <span className="input-icon"><IconPhone /></span>
                <input type="tel" id="phone" className="form-input has-icon" placeholder="+91 00000 00000" />
              </div>
            </div>

            <div className="form-divider field-row-4"><span>Security</span></div>

            {/* Password */}
            <div className="form-group field-row-5">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-wrapper">
                <span className="input-icon"><IconLock /></span>
                <input
                  type="password"
                  id="password"
                  className="form-input has-icon"
                  placeholder="Create a strong password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* Strength bar */}
              <div className="strength-track">
                <div
                  className="strength-fill"
                  style={{
                    width: `${strength.pct}%`,
                    background: strength.color,
                    boxShadow: strength.pct > 0 ? `0 0 10px ${strength.glow}` : 'none'
                  }}
                />
              </div>
              {strength.label && (
                <p className="strength-label" style={{ color: strength.color }}>
                  {strength.label} password
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="form-group field-row-6">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <div className="input-wrapper">
                <span className="input-icon"><IconLock /></span>
                <input type="password" id="confirmPassword" className="form-input has-icon" placeholder="Repeat your password" required />
              </div>
            </div>

            {/* Terms */}
            <div className="login-options field-row-6">
              <label className="remember-me">
                <input type="checkbox" className="remember-checkbox" required />
                <span>
                  I agree to the{' '}
                  <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>Terms & Conditions</a>
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="button"
              className="signup-btn field-row-7"
            >
              Create Account
            </button>

            <div className="register-prompt field-row-7">
              Already have an account?{' '}
              <a href="/" className="register-link">Sign in</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
