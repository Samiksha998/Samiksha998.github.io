import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <h1>Samiksha Gurav</h1>
        <p className="subtitle">DevOps Engineer</p>
      </div>
      <nav className="nav">
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="https://github.com/Samiksha998" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/samiksha-gurav" target="_blank" rel="noreferrer">LinkedIn</a>
      </nav>
    </header>
  )
}
