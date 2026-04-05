import { useState, useRef, useEffect, useCallback } from 'react';

// SVG Icons as components
const IconImage = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
  </svg>
);

const IconSelect = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4V2z"/>
  </svg>
);

const IconCrop = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"/>
  </svg>
);

const IconBrush = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M20.71 5.63l-2.34-2.34a1 1 0 00-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12a1 1 0 000-1.42z"/>
  </svg>
);

const IconEraser = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M15.14 3c-.51 0-1.02.2-1.41.59L2.59 14.73c-.78.77-.78 2.04 0 2.83L5.17 20.1c.39.39.9.59 1.41.59h10.83c.51 0 1.02-.2 1.41-.59l2.59-2.59c.78-.77.78-2.04 0-2.83L16.56 3.59c-.39-.39-.9-.59-1.42-.59zM6.58 18L4 15.42 13.73 5.7 16.31 8.28 6.58 18z"/>
  </svg>
);

const IconText = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M5 4v3h5v12h3V7h5V4H5zm0 14h14v2H5v-2z"/>
  </svg>
);

const IconSquare = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
  </svg>
);

const IconCircle = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <circle cx="12" cy="12" r="10"/>
  </svg>
);

const IconMagic = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M7.5 5.6L10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7l2.5-1.4zM19.5 15.4L22 16.8 20.6 14.3 22 11.8 19.5 13.2 17 11.8l1.4 2.5-1.4 2.5 2.5-1.4zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5L22 2zm-8.8 3.8L2.9 16.1c-.4.4-.4 1 0 1.4l3.6 3.6c.4.4 1 .4 1.4 0L18.2 10.8c.4-.4.4-1 0-1.4l-3.6-3.6c-.4-.4-1-.4-1.4 0z"/>
  </svg>
);

const IconUpload = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z"/>
  </svg>
);

const IconDownload = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
  </svg>
);

const IconUndo = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/>
  </svg>
);

const IconRedo = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M18.4 10.6C16.55 9 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/>
  </svg>
);

const IconRotate = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
  </svg>
);

const IconLayers = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/>
  </svg>
);

const IconTrash = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
  </svg>
);

const IconPlus = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
  </svg>
);

const IconMinus = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M19 13H5v-2h14v2z"/>
  </svg>
);

const IconPalette = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

const IconStar = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

const IconAdjust = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93V4.07z"/>
  </svg>
);

const TOOLS = {
  SELECT: 'select',
  CROP: 'crop',
  ROTATE: 'rotate',
  BRUSH: 'brush',
  ERASER: 'eraser',
  TEXT: 'text',
  RECTANGLE: 'rectangle',
  ELLIPSE: 'ellipse',
  FILTER: 'filter'
};

const FILTERS = {
  none: { brightness: 100, contrast: 100, saturation: 100, blur: 0, hue: 0 },
  grayscale: { brightness: 100, contrast: 120, saturation: 0, blur: 0, hue: 0 },
  sepia: { brightness: 100, contrast: 100, saturation: 80, blur: 0, hue: 30 },
  vintage: { brightness: 110, contrast: 90, saturation: 70, blur: 0.5, hue: 20 },
  cool: { brightness: 100, contrast: 110, saturation: 90, blur: 0, hue: -20 },
  warm: { brightness: 105, contrast: 105, saturation: 110, blur: 0, hue: 15 },
  dramatic: { brightness: 90, contrast: 150, saturation: 120, blur: 0, hue: 0 },
  fade: { brightness: 120, contrast: 80, saturation: 60, blur: 1, hue: 10 },
  invert: { brightness: 100, contrast: 100, saturation: 100, blur: 0, hue: 180 }
};

export default function App() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [activeTool, setActiveTool] = useState(TOOLS.SELECT);
  const [image, setImage] = useState(null);
  const [filters, setFilters] = useState(FILTERS.none);
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState('#e94560');
  const [isDrawing, setIsDrawing] = useState(false);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [layers, setLayers] = useState([]);
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(100);
  const [textInput, setTextInput] = useState('Sample Text');
  const [showTextPanel, setShowTextPanel] = useState(false);
  const [cropMode, setCropMode] = useState(false);
  const [cropArea, setCropArea] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const saveToHistory = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const imageData = canvas.toDataURL();
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(imageData);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [history, historyIndex]);

  const applyFilters = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !image) return;

    ctx.filter = `
      brightness(${filters.brightness}%)
      contrast(${filters.contrast}%)
      saturate(${filters.saturation}%)
      blur(${filters.blur}px)
      hue-rotate(${filters.hue}deg)
    `;
    
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    ctx.filter = 'none';
  }, [image, filters]);

  useEffect(() => {
    if (image) {
      applyFilters();
    }
  }, [image, filters, applyFilters]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        canvas.width = img.width;
        canvas.height = img.height;
        
        ctx.drawImage(img, 0, 0);
        setImage(img);
        setFilters(FILTERS.none);
        setRotation(0);
        saveToHistory();
        
        setLayers([{
          id: Date.now(),
          name: file.name,
          type: 'image',
          visible: true
        }]);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleMouseDown = (e) => {
    if (!canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvasRef.current.width / rect.width);
    const y = (e.clientY - rect.top) * (canvasRef.current.height / rect.height);
    
    setDragStart({ x, y });
    setIsDragging(true);

    if (activeTool === TOOLS.BRUSH) {
      setIsDrawing(true);
      const ctx = canvasRef.current.getContext('2d');
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.strokeStyle = brushColor;
      ctx.lineWidth = brushSize;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    } else if (activeTool === TOOLS.ERASER) {
      setIsDrawing(true);
      const ctx = canvasRef.current.getContext('2d');
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineWidth = brushSize * 2;
    } else if (activeTool === TOOLS.CROP) {
      setCropMode(true);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvasRef.current.width / rect.width);
    const y = (e.clientY - rect.top) * (canvasRef.current.height / rect.height);

    if (activeTool === TOOLS.BRUSH && isDrawing) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.lineTo(x, y);
      ctx.stroke();
    } else if (activeTool === TOOLS.ERASER && isDrawing) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.lineTo(x, y);
      ctx.stroke();
    } else if (activeTool === TOOLS.CROP && cropMode) {
      setCropArea({
        startX: dragStart.x,
        startY: dragStart.y,
        endX: x,
        endY: y
      });
    }
  };

  const handleMouseUp = () => {
    if (isDrawing) {
      const ctx = canvasRef.current?.getContext('2d');
      if (ctx) {
        ctx.globalCompositeOperation = 'source-over';
      }
      setIsDrawing(false);
      saveToHistory();
    }
    setIsDragging(false);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      };
      img.src = history[historyIndex - 1];
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      };
      img.src = history[historyIndex + 1];
    }
  };

  const handleRotate = (degrees) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const newRotation = rotation + degrees;
    setRotation(newRotation);
    
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    
    if (Math.abs(newRotation % 180) === 90) {
      tempCanvas.width = canvas.height;
      tempCanvas.height = canvas.width;
    } else {
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
    }
    
    tempCtx.translate(tempCanvas.width / 2, tempCanvas.height / 2);
    tempCtx.rotate((degrees * Math.PI) / 180);
    tempCtx.translate(-canvas.width / 2, -canvas.height / 2);
    tempCtx.drawImage(canvas, 0, 0);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(tempCanvas, 0, 0);
    saveToHistory();
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'edited-image.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const applyFilterPreset = (presetName) => {
    setFilters(FILTERS[presetName]);
  };

  const resetFilters = () => {
    setFilters(FILTERS.none);
  };

  const addText = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.font = '30px Arial';
    ctx.fillStyle = brushColor;
    ctx.fillText(textInput, 50, 50);
    saveToHistory();
    setShowTextPanel(false);
  };

  const drawShape = (shapeType) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = brushColor;
    
    if (shapeType === 'rect') {
      ctx.fillRect(50, 50, 100, 100);
    } else if (shapeType === 'circle') {
      ctx.beginPath();
      ctx.arc(100, 100, 50, 0, Math.PI * 2);
      ctx.fill();
    } else if (shapeType === 'star') {
      drawStar(ctx, 100, 100, 5, 50, 25);
    }
    saveToHistory();
  };

  const drawStar = (ctx, cx, cy, spikes, outerRadius, innerRadius) => {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fill();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setImage(null);
    saveToHistory();
  };

  const handleZoom = (delta) => {
    const newZoom = Math.max(10, Math.min(200, zoom + delta));
    setZoom(newZoom);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>🎨 Photo Editor Pro</h1>
        <div className="header-actions">
          <button className="btn btn-secondary" onClick={() => document.getElementById('fileInput').click()}>
            <IconUpload /> Open
          </button>
          <input
            type="file"
            id="fileInput"
            className="file-input"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <button className="btn btn-primary" onClick={handleDownload} disabled={!image}>
            <IconDownload /> Export
          </button>
        </div>
      </header>

      <div className="main-container">
        <aside className="toolbar">
          <button
            className={`tool-btn ${activeTool === TOOLS.SELECT ? 'active' : ''}`}
            onClick={() => setActiveTool(TOOLS.SELECT)}
          >
            <IconSelect />
            Select
          </button>
          <button
            className={`tool-btn ${activeTool === TOOLS.CROP ? 'active' : ''}`}
            onClick={() => setActiveTool(TOOLS.CROP)}
          >
            <IconCrop />
            Crop
          </button>
          <button
            className={`tool-btn ${activeTool === TOOLS.BRUSH ? 'active' : ''}`}
            onClick={() => { setActiveTool(TOOLS.BRUSH); setShowTextPanel(false); }}
          >
            <IconBrush />
            Brush
          </button>
          <button
            className={`tool-btn ${activeTool === TOOLS.ERASER ? 'active' : ''}`}
            onClick={() => setActiveTool(TOOLS.ERASER)}
          >
            <IconEraser />
            Eraser
          </button>
          <button
            className={`tool-btn ${activeTool === TOOLS.TEXT ? 'active' : ''}`}
            onClick={() => { setActiveTool(TOOLS.TEXT); setShowTextPanel(true); }}
          >
            <IconText />
            Text
          </button>
          <button
            className={`tool-btn ${activeTool === TOOLS.RECTANGLE ? 'active' : ''}`}
            onClick={() => setActiveTool(TOOLS.RECTANGLE)}
          >
            <IconSquare />
            Rect
          </button>
          <button
            className={`tool-btn ${activeTool === TOOLS.ELLIPSE ? 'active' : ''}`}
            onClick={() => setActiveTool(TOOLS.ELLIPSE)}
          >
            <IconCircle />
            Circle
          </button>
          <button
            className={`tool-btn ${activeTool === TOOLS.FILTER ? 'active' : ''}`}
            onClick={() => setActiveTool(TOOLS.FILTER)}
          >
            <IconMagic />
            Filter
          </button>
        </aside>

        <main className="canvas-area" ref={containerRef}>
          {!image ? (
            <div className="empty-state">
              <IconImage />
              <h2>No Image Loaded</h2>
              <p>Click "Open" to load an image or start drawing</p>
            </div>
          ) : (
            <div className="canvas-wrapper" style={{ transform: `scale(${zoom / 100})` }}>
              <canvas
                ref={canvasRef}
                width={800}
                height={600}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              />
              {cropMode && cropArea && (
                <div
                  style={{
                    position: 'absolute',
                    left: Math.min(cropArea.startX, cropArea.endX),
                    top: Math.min(cropArea.startY, cropArea.endY),
                    width: Math.abs(cropArea.endX - cropArea.startX),
                    height: Math.abs(cropArea.endY - cropArea.startY),
                    border: '2px dashed #e94560',
                    backgroundColor: 'rgba(233, 69, 96, 0.2)',
                    pointerEvents: 'none'
                  }}
                />
              )}
            </div>
          )}
        </main>

        <aside className="sidebar">
          <div className="panel">
            <h3 className="panel-title"><IconAdjust /> Adjustments</h3>
            <div className="control-group">
              <label className="control-label">Brightness</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={filters.brightness}
                  onChange={(e) => setFilters({ ...filters, brightness: Number(e.target.value) })}
                  className="slider"
                />
                <span className="slider-value">{filters.brightness}%</span>
              </div>
            </div>
            <div className="control-group">
              <label className="control-label">Contrast</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={filters.contrast}
                  onChange={(e) => setFilters({ ...filters, contrast: Number(e.target.value) })}
                  className="slider"
                />
                <span className="slider-value">{filters.contrast}%</span>
              </div>
            </div>
            <div className="control-group">
              <label className="control-label">Saturation</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={filters.saturation}
                  onChange={(e) => setFilters({ ...filters, saturation: Number(e.target.value) })}
                  className="slider"
                />
                <span className="slider-value">{filters.saturation}%</span>
              </div>
            </div>
            <div className="control-group">
              <label className="control-label">Blur</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={filters.blur}
                  onChange={(e) => setFilters({ ...filters, blur: Number(e.target.value) })}
                  className="slider"
                />
                <span className="slider-value">{filters.blur}px</span>
              </div>
            </div>
            <div className="control-group">
              <label className="control-label">Hue Rotate</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={filters.hue}
                  onChange={(e) => setFilters({ ...filters, hue: Number(e.target.value) })}
                  className="slider"
                />
                <span className="slider-value">{filters.hue}°</span>
              </div>
            </div>
            <button className="btn" onClick={resetFilters}>Reset Filters</button>
          </div>

          {showTextPanel && (
            <div className="panel">
              <h3 className="panel-title"><IconText /> Text Options</h3>
              <div className="text-options">
                <input
                  type="text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  className="text-input"
                  placeholder="Enter text..."
                />
                <button className="btn btn-primary" onClick={addText}>Add Text</button>
              </div>
            </div>
          )}

          {(activeTool === TOOLS.BRUSH || activeTool === TOOLS.ERASER || activeTool === TOOLS.TEXT) && (
            <div className="panel">
              <h3 className="panel-title"><IconPalette /> Color & Size</h3>
              <div className="control-group">
                <label className="control-label">Brush Size</label>
                <div className="slider-container">
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={brushSize}
                    onChange={(e) => setBrushSize(Number(e.target.value))}
                    className="slider"
                  />
                  <span className="slider-value">{brushSize}px</span>
                </div>
              </div>
              <div className="control-group">
                <label className="control-label">Color</label>
                <div className="color-picker-wrapper">
                  <input
                    type="color"
                    value={brushColor}
                    onChange={(e) => setBrushColor(e.target.value)}
                    className="color-picker"
                  />
                  <span>{brushColor}</span>
                </div>
              </div>
            </div>
          )}

          <div className="panel">
            <h3 className="panel-title"><IconMagic /> Filter Presets</h3>
            <div className="filter-presets">
              {Object.keys(FILTERS).map((filter) => (
                <button
                  key={filter}
                  className="filter-preset"
                  onClick={() => applyFilterPreset(filter)}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="panel">
            <h3 className="panel-title"><IconRotate /> Transform</h3>
            <button className="btn" onClick={() => handleRotate(90)}>Rotate 90° CW</button>
            <button className="btn" onClick={() => handleRotate(-90)}>Rotate 90° CCW</button>
            <div className="control-group">
              <label className="control-label">Zoom: {zoom}%</label>
              <div className="slider-container">
                <button className="btn" style={{ width: 'auto', padding: '0.5rem' }} onClick={() => handleZoom(-10)}>
                  <IconMinus />
                </button>
                <button className="btn" style={{ width: 'auto', padding: '0.5rem' }} onClick={() => handleZoom(10)}>
                  <IconPlus />
                </button>
              </div>
            </div>
          </div>

          <div className="panel">
            <h3 className="panel-title"><IconUndo /> History</h3>
            <div className="slider-container">
              <button className="btn" onClick={handleUndo} disabled={historyIndex <= 0}>
                <IconUndo /> Undo
              </button>
              <button className="btn" onClick={handleRedo} disabled={historyIndex >= history.length - 1}>
                <IconRedo /> Redo
              </button>
            </div>
          </div>

          <div className="panel">
            <h3 className="panel-title"><IconLayers /> Layers</h3>
            <div className="layers-list">
              {layers.map((layer) => (
                <div
                  key={layer.id}
                  className={`layer-item ${selectedLayer === layer.id ? 'active' : ''}`}
                  onClick={() => setSelectedLayer(layer.id)}
                >
                  <div className="layer-thumbnail" />
                  <span className="layer-name">{layer.name}</span>
                  <button className="btn" style={{ width: 'auto', padding: '0.25rem' }}>
                    <IconTrash />
                  </button>
                </div>
              ))}
            </div>
            <button className="btn btn-secondary" onClick={clearCanvas}>
              <IconTrash /> Clear Canvas
            </button>
          </div>

          <div className="panel">
            <h3 className="panel-title"><IconStar /> Shapes</h3>
            <div className="shape-options">
              <button className="shape-btn" onClick={() => drawShape('rect')}>
                <IconSquare />
              </button>
              <button className="shape-btn" onClick={() => drawShape('circle')}>
                <IconCircle />
              </button>
              <button className="shape-btn" onClick={() => drawShape('star')}>
                <IconStar />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
