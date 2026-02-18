import { useState } from 'react'
import './App.css'
import '@mediaron/react-spinners/spinner.css'
import * as Spinners from '@mediaron/react-spinners'

function App() {
  const [size, setSize] = useState(50)
  const [speedMultiplier, setSpeedMultiplier] = useState(1)
  const [color, setColor] = useState('#873F49')
  const [selectedSpinner, setSelectedSpinner] = useState('ReactSpinner1')

  // Get all spinner components
  const spinnerComponents = Object.entries(Spinners).filter(([name]) => 
    name.startsWith('ReactSpinner')
  )

  const SelectedSpinnerComponent = Spinners[selectedSpinner as keyof typeof Spinners]

  const codeSnippet = `import { ${selectedSpinner} } from '@mediaron/react-spinners';
import '@mediaron/react-spinners/spinner.css';

<${selectedSpinner}
  size={${size}}
  speedMultiplier={${speedMultiplier}}
  color="${color}"
  aria-label="Loading..."
  role="img"
/>`

  return (
    <div className="app">
      <header>
        <h1>React Spinners Gallery</h1>
        <p>A collection of 26 beautiful semi-transparent SVG spinners</p>
      </header>

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
          <label>
            Color:
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="color-input"
            />
          </label>
        </div>

        <div className="control-group">
          <label>
            Selected Spinner:
            <select
              value={selectedSpinner}
              onChange={(e) => setSelectedSpinner(e.target.value)}
            >
              {spinnerComponents.map(([name]) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="preview-section">
        <h2>Preview</h2>
        <div className="preview-box">
          <SelectedSpinnerComponent
            size={size}
            speedMultiplier={speedMultiplier}
            color={color}
            aria-label="Loading..."
            role="img"
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
        >
          Copy Code
        </button>
      </div>

      <div className="gallery-section">
        <h2>All Spinners</h2>
        <div className="spinner-grid">
          {spinnerComponents.map(([name, Component]) => (
            <div
              key={name}
              className={`spinner-card ${selectedSpinner === name ? 'selected' : ''}`}
              onClick={() => setSelectedSpinner(name)}
            >
              <div className="spinner-container">
                <Component
                  size={40}
                  speedMultiplier={1}
                  color="#873F49"
                  aria-label={`${name} loading`}
                  role="img"
                />
              </div>
              <div className="spinner-name">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
