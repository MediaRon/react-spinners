# react-spinners

A collection of 30 semi-transparent SVG spinners for React applications.

## Features

- 🎨 Beautiful semi-transparent SVG spinners
- 📦 TypeScript support with full type definitions
- 🌲 Tree-shakeable (ESM + CJS)
- 🚀 Zero dependencies (React as peer dependency)
- ⚡ Optimized bundle size with `sideEffects: false`

## Installation

```bash
npm install @mediaronpkg/react-spinners
```

or

```bash
yarn add @mediaronpkg/react-spinners
```

## Usage

First, import the CSS file to enable spinner animations:

```tsx
import '@mediaronpkg/react-spinners/spinner.css';
```

Then use any spinner component:

```tsx
import { CircleSpinner } from '@mediaronpkg/react-spinners';

function App() {
  return (
    <div>
      <CircleSpinner />
    </div>
  );
}
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
<CircleSpinner speedMultiplier={0.5} /> {/* Half speed */}
<CircleSpinner speedMultiplier={2} /> {/* Double speed */}
```

## Available Spinners

- `CircleSpinner` - Animated circular spinner with pulsing effect

More spinners coming soon!

## Development

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

