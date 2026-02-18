# react-spinners

A collection of 26 semi-transparent SVG spinners for React applications.

<a href="https://mediaron.github.io/react-spinners/">View a Live Demo</a>

## Features

- 🎨 Beautiful semi-transparent SVG spinners
- 📦 TypeScript support with full type definitions
- 🌲 Tree-shakeable (ESM + CJS)
- 🚀 Zero dependencies (React as peer dependency)
- ⚡ Optimized bundle size with `sideEffects: false`

## Installation

```bash
npm install @mediaron/react-spinners
```

or

```bash
yarn add @mediaron/react-spinners
```

## Usage

First, import the CSS file to enable spinner animations:

```tsx
import '@mediaron/react-spinners/spinner.css';
```

Then use any spinner component:

```tsx
import { ReactSpinner1 } from '@mediaron/react-spinners';

function App() {
  return (
    <div>
      <ReactSpinner1 />
    </div>
  );
}
```

### Props

The spinners use the following props:

* `size` in pixels (default `24`).
* `color` - The color of the loader.
* `speedMultiplier` - How fast the loader should spin (default `1`).

Example:

```tsx
<ReactSpinner2
	size={ 50 }
	speedMultiplier={ 1.1 }
	color="#873F49"
	aria-label="Loading..."
	role="img"
/>
```

### Custom Styling

The spinners use the `dlx-spinner` CSS class for animations. You can customize the animation by overriding the CSS:

```css
.dlx-spinner {
  animation-duration: 2s; /* Slower rotation */
}
```

Or use the `speedMultiplier` prop to control animation speed:

```tsx
<ReactSpinner1 speedMultiplier={0.5} /> {/* Half speed */}
<ReactSpinner1 speedMultiplier={2} /> {/* Double speed */}
```

### Available Spinners

All spinners in `src/svg/` are available as React components:

| Component     | Source file           |
| ------------ | --------------------- |
| ReactSpinner1  | react-spinner-1.svg   |
| ReactSpinner2  | react-spinner-2.svg   |
| ReactSpinner3  | react-spinner-3.svg   |
| ReactSpinner4  | react-spinner-4.svg   |
| ReactSpinner5  | react-spinner-5.svg   |
| ReactSpinner6  | react-spinner-6.svg   |
| ReactSpinner7  | react-spinner-7.svg   |
| ReactSpinner8  | react-spinner-8.svg   |
| ReactSpinner9  | react-spinner-9.svg   |
| ReactSpinner10 | react-spinner-10.svg  |
| ReactSpinner11 | react-spinner-11.svg  |
| ReactSpinner12 | react-spinner-12.svg  |
| ReactSpinner13 | react-spinner-13.svg  |
| ReactSpinner14 | react-spinner-14.svg  |
| ReactSpinner15 | react-spinner-15.svg  |
| ReactSpinner16 | react-spinner-16.svg  |
| ReactSpinner17 | react-spinner-17.svg  |
| ReactSpinner18 | react-spinner-18.svg  |
| ReactSpinner19 | react-spinner-19.svg  |
| ReactSpinner20 | react-spinner-20.svg  |
| ReactSpinner21 | react-spinner-21.svg  |
| ReactSpinner22 | react-spinner-22.svg  |
| ReactSpinner23 | react-spinner-23.svg  |
| ReactSpinner24 | react-spinner-24.svg  |
| ReactSpinner25 | react-spinner-25.svg  |
| ReactSpinner26 | react-spinner-26.svg  |

Import by name: `import { ReactSpinner1, ReactSpinner5 } from '@mediaron/react-spinners';`

## Development

Source is available at: <a href="https://github.com/MediaRon/react-spinners/">React Spinners (GitHub)</a>.
### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Generate React components from SVGs and build
npm run build

# Clean generated files
npm run clean
```

### Project Structure

```
src/
├── svg/          # Raw SVG files (source of truth)
├── react/        # Generated React components (auto-generated)
└── index.ts      # Main export file (auto-generated)
```

### Build Process

1. **prebuild**: Automatically runs before build
   - `generate:components` - Converts SVGs to React components using @svgr/cli
   - `generate:index` - Auto-generates src/index.ts with all exports
2. **build**: Compiles TypeScript with tsup (ESM + CJS + d.ts)

### Adding New Spinners

1. Add your SVG file to `src/svg/` (e.g., `MySpinner.svg`)
2. Run `npm run build`
3. The component will be automatically generated and exported

## License

MIT

