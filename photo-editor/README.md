# 🎨 Photo Editor Pro - Advanced React Photo Editor

A fully functional, feature-rich photo editor built with React, similar to Photoshop with advanced editing capabilities.

## ✨ Features

### 🛠️ Tools
- **Select Tool** - Select and manipulate elements
- **Crop Tool** - Crop images with visual preview
- **Brush Tool** - Freehand drawing with customizable size and color
- **Eraser Tool** - Remove parts of your image
- **Text Tool** - Add custom text to your images
- **Rectangle Tool** - Draw rectangular shapes
- **Circle/Ellipse Tool** - Draw circular shapes
- **Filter Tool** - Apply various image filters

### 🎭 Image Adjustments
- **Brightness** - Adjust image brightness (0-200%)
- **Contrast** - Modify contrast levels (0-200%)
- **Saturation** - Control color saturation (0-200%)
- **Blur** - Apply Gaussian blur effect (0-20px)
- **Hue Rotate** - Rotate color hues (0-360°)

### 🌈 Filter Presets
- None (Original)
- Grayscale
- Sepia
- Vintage
- Cool
- Warm
- Dramatic
- Fade
- Invert

### 🔄 Transform Operations
- Rotate 90° Clockwise
- Rotate 90° Counter-Clockwise
- Zoom In/Out (10%-200%)

### 📚 Layer Management
- View and manage image layers
- Layer visibility toggle
- Delete layers
- Layer selection

### ⏱️ History & Undo/Redo
- Full undo/redo functionality
- Track all editing history
- Revert to any previous state

### 🎨 Drawing & Shapes
- Customizable brush size (1-50px)
- Color picker for brush and shapes
- Draw rectangles, circles, and stars
- Real-time drawing preview

### 💾 File Operations
- Open/Upload images (supports all major formats)
- Export edited images as PNG
- Clear canvas functionality

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd photo-editor
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📖 How to Use

### Basic Editing Workflow

1. **Load an Image**: Click the "Open" button in the header to upload an image from your computer.

2. **Apply Filters**: 
   - Use the adjustment sliders for fine-tuned control
   - Or click on filter presets for quick effects

3. **Draw or Add Elements**:
   - Select the Brush tool to draw freehand
   - Choose Text tool to add text overlays
   - Use shape tools to add geometric elements

4. **Transform**:
   - Rotate your image using the transform panel
   - Zoom in/out for detailed editing

5. **Undo/Redo**: Made a mistake? Use the undo/redo buttons to step through your history.

6. **Export**: When satisfied, click "Export" to download your edited image.

### Tips & Tricks

- **Layer Management**: Each uploaded image creates a new layer. Use the Layers panel to manage them.
- **Brush Customization**: Adjust brush size and color before drawing for best results.
- **Filter Combinations**: Combine multiple adjustments for unique effects.
- **Zoom**: Use zoom for detailed work on specific areas.

## 🏗️ Technical Architecture

### Component Structure
- **App** - Main application component
- **Header** - Top navigation and file operations
- **Toolbar** - Left-side tool selection
- **Canvas Area** - Central editing workspace
- **Sidebar** - Right-side controls and panels

### State Management
- React Hooks (useState, useRef, useEffect, useCallback)
- Canvas API for image manipulation
- CSS filters for real-time preview

### Technologies Used
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Canvas API** - Image manipulation
- **CSS3** - Styling and animations

## 🎯 Key Features Explained

### Canvas-Based Editing
The editor uses HTML5 Canvas for all image manipulations, providing:
- Real-time preview
- High-performance rendering
- Pixel-perfect editing

### Non-Destructive Editing
- All adjustments are applied as filters
- Original image data is preserved
- Easy to revert changes

### Responsive Design
- Adapts to different screen sizes
- Mobile-friendly interface
- Touch-supported canvas interactions

## 🔧 Customization

### Adding New Filters
Add new filter presets in the `FILTERS` object:
```javascript
const FILTERS = {
  // ... existing filters
  custom: { 
    brightness: 110, 
    contrast: 100, 
    saturation: 90, 
    blur: 0, 
    hue: 10 
  }
};
```

### Adding New Tools
Extend the `TOOLS` object and add corresponding handlers:
```javascript
const TOOLS = {
  // ... existing tools
  NEW_TOOL: 'new_tool'
};
```

### Styling
All styles are in `src/index.css`. The editor uses a dark theme with customizable colors.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 🙏 Acknowledgments

Built with ❤️ using React and modern web technologies.

---

**Happy Editing! 🎨✨**
