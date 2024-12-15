import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="header">
        <h1>Saifullah Hafiz</h1>
      </header>

      <section className="section">
        <h2>Education</h2>
        <p>B.Sc. in Computer Science and Engineering</p>
        <p>Bangladesh University of Engineering and Technology (BUET)</p>
        <p>February 2020 - Running</p>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul>
          <li><strong>Languages</strong>: C, C++, Java, Python, JavaScript, SQL, C#, GDScript</li>
          <li><strong>Frontend</strong>: React, Next.js, Tailwind CSS, Bootstrap, HTML, CSS, JavaFX</li>
          <li><strong>Backend</strong>: Node.js, Express, Spring Boot, Django</li>
          <li><strong>Database</strong>: Oracle, MySQL, PostgreSQL, MongoDB</li>
          <li><strong>Development Tools</strong>: GitHub, GitHub Actions, Postman, Docker, Linux</li>
          <li><strong>Machine Learning</strong>: PyTorch, TensorFlow</li>
        </ul>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div>
          <h3>Tensor Insight Training System</h3>
          <p>A PyTorch-based web app for tensor puzzle practice and competition, featuring challenge modes, leaderboards, and interactive puzzles.</p>
        </div>

        <div>
          <h3>KHABO: Culinary Assistance System</h3>
          <p>An integrated platform for ingredient management and recipe exploration, including smart ingredient replacement and cheapest ingredient modules.</p>
        </div>

        <div>
          <h3>Playware: Video Game Shop Platform</h3>
          <p>A comprehensive video game shop platform with distinct roles for buyers, admins, publishers, and developers, featuring subscription systems and curated lists.</p>
        </div>
      </section>

      <footer className="footer">
        <p>Contact: 01766974498 | <a href="mailto:sksaifullahhafiz@gmail.com">sksaifullahhafiz@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/sksaifullahhafiz1099" target="_blank">github.com/sksaifullahhafiz1099</a></p>
      </footer>
    </>
  )
}

export default App
