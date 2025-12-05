# Portfolio Visual Design Guide

## Hero Section (Unchanged - Kept as-is)
```
┌──────────────────────────────────────────────┐
│ CCL  Home  About  Projects  Skills  Contact  │  <- Sticky Navbar
├──────────────────────────────────────────────┤
│                                              │
│     CRITICAL COMPUTATION LAB                 │  <- Large title, left-aligned
│     ╰→ (pink shadow) (yellow shadow)         │  <- Multi-colored drop shadows
│                                              │
│     Jichen Zhou                              │  <- Subtitle
│     [Get In Touch]                           │  <- CTA Button
│                                              │
│   ≈≈≈ Wave Graphics ≈≈≈                     │  <- Solid filled waves
│   (Pink/Yellow interweaving)                 │     with mouse tracking
│   ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈              │
│                                              │
│ (Aurora background: Yellow→Pink→Purple      │  <- Continuous color animation
│  shifting continuously)                      │
└──────────────────────────────────────────────┘

Height: ~700px
Background: Aurora gradient animation (8s cycle)
```

## About Section (Unchanged)
```
┌──────────────────────────────────────────────┐
│                                              │
│              About Me                        │
│                                              │
│   I'm a passionate developer...              │
│   ...                                        │
│   When I'm not coding...                    │
│                                              │
└──────────────────────────────────────────────┘
```

## Projects Section - NEW DESIGN ✨
```
┌──────────────────────────────────────────────┐
│          Featured Projects                   │  <- Section title
├──────────────────────────────────────────────┤
│                                              │
│                                              │  ┌─ Card 1 (350px tall)
│       LOST AND FOUND                         │  │ Aurora gradient background
│   (Aurora gradient background)               │  │ Massive 64px text
│                                              │  │ No other content shown
├──────────────────────────────────────────────┤  └─
│                                              │
│     EXQUISITE CORPSE                         │  ┌─ Card 2 (350px tall)
│  (Aurora gradient background)                │  │ Same aurora effect
│                                              │  │ Massive 64px text
├──────────────────────────────────────────────┤  └─
│                                              │
│       FACE GENERATOR                         │  ┌─ Card 3
│    (Aurora gradient background)              │  │ (Pattern continues...)
│                                              │  │
├──────────────────────────────────────────────┤  └─
│ ... (6 more project cards, same style) ...  │
│                                              │
└──────────────────────────────────────────────┘

Each card: 100% width, 350px height
Layout: Flexbox column (stacked vertically)
Gap between cards: 0px (seamless)
Background animation: Aurora (same as hero)
```

## Project Card - Hover Animation

### BEFORE HOVER (Default State)
```
┌──────────────────────────────────────────────┐
│                                              │
│                                              │
│                                              │
│       PROJECT NAME IN CAPS                   │  <- 64px, bold, dark text
│       (Aurora gradient background)           │
│                                              │
│                                              │
└──────────────────────────────────────────────┘
```

### AFTER HOVER (Animated Reveal)
```
┌──────────────────────────────────────────────┐
│ Pink→Yellow Gradient Background              │  <- Animated gradient
│                                              │
│        Project Name (18px)                   │  <- White text
│   Project description goes here...           │  <- 14px white text
│                                              │
│   [p5.js] [Creative Coding]                 │  <- White tags with borders
│                                              │
│        [View Project]                        │  <- White button
│                                              │
└──────────────────────────────────────────────┘

Transition: 0.5s smooth slide-up animation
Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

## Skills Section (Unchanged)
```
┌──────────────────────────────────────────────┐
│                                              │
│      Skills & Technologies                   │
│                                              │
│ ┌─────────┐  ┌─────────┐  ┌─────────┐      │
│ │Frontend │  │Backend  │  │  Tools  │      │
│ │ HTML5   │  │ Node.js │  │   Git   │      │
│ │ CSS3    │  │Express  │  │MongoDB  │      │
│ │  JS     │  │ Python  │  │  Code   │      │
│ └─────────┘  └─────────┘  └─────────┘      │
│                                              │
└──────────────────────────────────────────────┘
```

## Contact Section (Unchanged)
```
┌──────────────────────────────────────────────┐
│                                              │
│    Let's Work Together                       │
│                                              │
│   [Email] [Instagram @achenn_1231]          │
│                                              │
│ (Yellow→Pink gradient background)            │
│                                              │
└──────────────────────────────────────────────┘
```

## Color Palette

### Primary Colors (High Saturation Neon)
- **Neon Pink**: #FF1B7D
- **Hot Pink**: #FF0066
- **Bright Yellow**: #FFED4E
- **Pure Yellow**: #FFFF00

### Hero & Project Backgrounds (Aurora Blend)
- Pale Yellow: #FFF9E0
- Light Pink: #FFE0E8
- Light Purple: #F0D0FF
- Soft Purple: #E0D0FF

### Text
- Dark: #1A1A1A
- Light Gray: #4A4A4A
- White: #FFFFFF

### Gradients
- **Project Info Hover**: linear-gradient(135deg, #FF1B7D 0%, #FFED4E 100%)
- **Aurora Animation**: 4-keyframe cycle with light pink/yellow/purple tones

## Typography Scale

| Element | Size | Weight | Color | Transform |
|---------|------|--------|-------|-----------|
| Project Name (default) | 64px | 900 | #1A1A1A | uppercase |
| Project Name (hover) | 18px | 800 | white | normal |
| Hero Title | 120px | 900 | #1A1A1A | uppercase |
| Section Headings | 38px | 900 | #1A1A1A | normal |
| Body Text | 16px | 400 | #4A4A4A | normal |
| Tags | 12px | 700 | white | uppercase |
| Button Text | 14px | 800 | varies | normal |

## Animation Details

### Aurora Background (Hero & Project Cards)
- **Duration**: 8 seconds
- **Iteration**: Infinite loop
- **Easing**: ease-in-out
- **Cycle**: 4 keyframes creating smooth color transitions

### Project Card Hover
- **Title Slide Out**: transform translateY(-100%), 0.5s
- **Info Slide In**: top 0 (from top 100%), 0.5s
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)
- **Reversible**: Smooth reverse on unhover

### Button Hover
- **Transform**: translateY(-2px)
- **Shadow**: 0 8px 16px rgba(0, 0, 0, 0.2)
- **Duration**: 0.2s

## Responsive Breakpoints

### Desktop (1024px+)
- Project title: 64px
- Normal padding and spacing
- Full effects enabled

### Tablet (768px - 1023px)
- Project title: 48px
- Slightly reduced padding
- All effects enabled

### Mobile (480px - 767px)
- Project title: 36px
- Minimal padding
- All effects enabled

### Very Small (<480px)
- Project title: 28px
- Minimal padding on all sides
- All effects enabled

## Interaction States

| Element | State | Effect |
|---------|-------|--------|
| Project Card | Default | Aurora background, title visible |
| Project Card | Hover | Info section slides up, gradient background |
| Project Card | Active | Same as hover (maintained state) |
| Button | Default | White background, dark text |
| Button | Hover | Slight lift (translateY -2px), shadow increase |
| Nav Link | Hover | Color changes to pink (#FF1B7D) |

## Visual Impact Goals

✅ **Shocking First Impression**: Massive project names dominate
✅ **Continuity**: Aurora animation ties projects to hero
✅ **Mystery**: Only title visible until hover (encourages interaction)
✅ **Energy**: Pink and yellow gradients create excitement
✅ **Sophistication**: Smooth animations, proper easing
✅ **Clarity**: High contrast white text on gradients
✅ **Hierarchy**: Projects given maximum visual real estate
✅ **Responsiveness**: Seamless adaptation to all screen sizes
