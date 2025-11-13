# Test Task - Component Replication

This project replicates the design components from the Figma prototype using React.js.

## Technologies Used

- React 18.2.0
- Vite (build tool)
- HTML, CSS (with className styling)

## Project Structure

```
src/
  ├── components/
  │   ├── PageSelector.jsx  # Page selection panel component
  │   ├── PageSelector.css  # Styles for PageSelector component
  │   └── checkImgae.svg    # Check icon SVG
  ├── App.jsx               # Main App component
  ├── App.css               # App styles
  ├── main.jsx              # Entry point
  └── index.css             # Global styles
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Components

### PageSelector Component

A page selection panel component with the following features:

- **Page List**: Displays a list of page options:
  - "All pages" (master checkbox)
  - "Page 1" through "Page 4"
- **Interactive Checkboxes**:
  - Custom-styled checkboxes with hover effects
  - "All pages" checkbox controls all individual page checkboxes
  - Individual page checkboxes automatically update "All pages" state
- **Done Button**: Yellow button at the bottom for completing the selection
- **Styling**:
  - White panel with rounded corners and shadow
  - Montserrat font family
  - Smooth transitions and hover effects
  - Border separators between items

## Typography

The page item text uses the following typography:

- Font family: Montserrat
- Font weight: 400
- Font size: 14px
- Line height: 130%
- Color: #1F2128
- Padding: 12px top and bottom

## Features

- Interactive checkboxes with custom styling
- Hover effects on checkboxes and items
- Master checkbox functionality ("All pages")
- Smooth transitions and animations
- Clean, organized code structure
- Responsive design
