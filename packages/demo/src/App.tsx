import { createElement, useState } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import './App.css'
import '@mediaron/react-spinners/spinner.css'
import * as Spinners from '@mediaron/react-spinners'

function App() {
  const [size, setSize] = useState(50)
  const [speedMultiplier, setSpeedMultiplier] = useState(1)
  const [color, setColor] = useState('#2172EB')
  const [selectedSpinner, setSelectedSpinner] = useState('ReactSpinner1')

  // Get all spinner components.
  const spinnerComponents = Object.entries(Spinners).filter(([name]) =>
    name.startsWith('ReactSpinner')
  )

  const SelectedSpinnerComponent = Spinners[selectedSpinner as keyof typeof Spinners]

  function handleDownloadSelectedSvg() {
    const svgString = renderToStaticMarkup(
      createElement(SelectedSpinnerComponent, { size: 24, speedMultiplier: 1 })
    )
    const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' + svgString
    const blob = new Blob([xml], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${selectedSpinner}.svg`
    a.click()
    URL.revokeObjectURL(url)
  }

  const codeSnippet = `import { ${selectedSpinner} } from '@mediaron/react-spinners';
import '@mediaron/react-spinners/spinner.css';

<${selectedSpinner}
  size={${size}}
  speedMultiplier={${speedMultiplier}}
  color="${color}"
/>`

  return (
    <div className="app">
      <header>
        <h1>React Spinners Gallery</h1>
        <div className="header-badges">
          <a
            href="https://github.com/MediaRon/react-spinners/"
            className="header-badge"
          >
            <svg className="header-badge-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub Source
          </a>
          <a
            href="https://www.npmjs.com/package/@mediaron/react-spinners"
            className="header-badge"
          >
            <svg className="header-badge-icon" viewBox="0 0 24 24" aria-hidden>
              <path fill="currentColor" d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z" />
            </svg>
            NPM Package
          </a>
        </div>
        <p>A collection of 26 beautiful semi-transparent SVG spinners</p>
      </header>

      <div className="spinner-picker-section">
        <div className="spinner-picker-header">
          <h2>Choose a spinner</h2>
          <button
            type="button"
            className="download-svg-button"
            onClick={handleDownloadSelectedSvg}
          >
            Download Selected SVG
          </button>
        </div>
        <div className="spinner-picker-grid">
          {spinnerComponents.map(([name, Component]) => (
            <button
              key={name}
              type="button"
              className={`spinner-picker-cell ${selectedSpinner === name ? 'selected' : ''}`}
              onClick={() => setSelectedSpinner(name)}
              title={name}
              aria-label={`Select ${name}`}
              aria-pressed={selectedSpinner === name}
            >
              <Component
                size={36}
                speedMultiplier={1}
                color={selectedSpinner === name ? '#FFFFFF' : '#3D403D'}
                aria-hidden
                role="img"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="controls">
        <div className="control-group">
          <label>
            Size: {size}px
            <input
              type="range"
              min="20"
              max="200"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="control-group">
          <label>
            Speed: {speedMultiplier.toFixed(1)}x
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={speedMultiplier}
              onChange={(e) => setSpeedMultiplier(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="control-group">
          <label htmlFor="color-swatch">Color:</label>
          <div className="color-control-row">
            <input
              id="color-swatch"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="color-swatch"
              aria-label="Color"
            />
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="color-input"
              aria-label="Color hex code"
            />
          </div>
        </div>
      </div>

      <div className="preview-section">
        <h2>Preview</h2>
        <div className="preview-box">
          <SelectedSpinnerComponent
            size={size}
            speedMultiplier={speedMultiplier}
            color={color}
          />
        </div>
      </div>

      <div className="code-section">
        <h2>Code Snippet</h2>
        <pre className="code-block">
          <code>{codeSnippet}</code>
        </pre>
        <button
          onClick={() => navigator.clipboard.writeText(codeSnippet)}
          className="copy-button"
          type="button"
        >
          Copy Code
        </button>
      </div>
    </div>
  )
}

export default App
