# Portfolio Redesign - New Projects Section

## ✨ New Projects Section Design

### Layout Changes
- **Previous**: 3-column grid layout with cards
- **New**: Full-width horizontal cards stacked in a column (9 rows, each spanning full width)
- **Height**: Each card is 350px (approximately half the hero section height)
- **Spacing**: No gaps between cards (seamless stacking)

### Visual Design

#### Default State (No Hover)
- **Background**: Aurora gradient animation (same as hero section)
  - Continuous 8-second color shift cycle
  - Blends between pale yellow, pink, and purple tones
- **Content**: Project name in MASSIVE UPPERCASE text (64px)
  - Centered both horizontally and vertically
  - Bold font weight (900)
  - Dark text (#1A1A1A) for contrast
  - **Shocking visual impact** - just the name, nothing else

#### Hover State
- **Animation**: Project info section slides UP from bottom
  - Smooth cubic-bezier(0.4, 0, 0.2, 1) easing
  - 0.5s transition duration
  - Title section moves up and out of view
  - Info section comes into full view

- **Info Section Background**: Linear gradient from pink to yellow
  - Gradient: `linear-gradient(135deg, #FF1B7D 0%, #FFED4E 100%)`
  - High contrast against white text

- **Info Section Content**:
  - Project name (smaller, 18px, white text)
  - Description (14px, white text, centered)
  - Project tags (white background, small pills)
  - "View Project" button (white, rounded, dark text on hover effects)

### Projects Included

1. **LOST AND FOUND** - Interactive p5.js experiment exploring memory and discovery
2. **EXQUISITE CORPSE** - Collaborative generative drawing using sequential composition
3. **FACE GENERATOR** - Procedural face synthesis with randomized features
4. **HEARTBEAT** - Audio-reactive visualization simulating a heartbeat signal
5. **RAIN DROP** - Interactive raindrop simulation with kinetic interactions
6. **OPTICAL ILLUSION** - Visual illusions study using geometry and contrast
7. **DATA PORTRAIT** - Visualizing personal data as abstract portraiture
8. **AUTOBIOGRAPHICAL GAME** - A personal narrative game exploring memory and place
9. **PARTICLE SYSTEM** - Dynamic particle effects with physics interactions

## 🎨 Technical Implementation

### CSS Features
- **Flexbox Column Layout**: Vertical stacking without grid
- **Aurora Animation**: Uses same @keyframes as hero (auroraGlowProject)
- **Positioning**: Absolute positioning for title and info sections
- **Transitions**: Cubic-bezier easing for smooth slide-up effect
- **Z-Index Stacking**: Proper layering for hover effects

### HTML Structure
```html
<div class="project-card">
    <div class="project-title-section">
        <div class="project-title-large">PROJECT NAME</div>
    </div>
    <div class="project-info-section">
        <h3>Project Name</h3>
        <p>Project description</p>
        <div class="project-tags">
            <span class="tag">Tag1</span>
            <span class="tag">Tag2</span>
        </div>
        <a href="..." class="project-link">View Project</a>
    </div>
</div>
```

### Responsive Behavior
- **Desktop (1024px+)**: Full-width cards, 64px title
- **Tablet (768px-1023px)**: Full-width cards, 48px title
- **Mobile (480px and below)**: Full-width cards, 28px title
- Card height remains 350px on all devices

## 🔄 Interaction Flow

1. **Default View**: User sees a full-width card with MASSIVE project name and aurora background
2. **Hover**: 
   - Title section smoothly slides up (out of view)
   - Info section slides up into view
   - Background color of info section (pink-to-yellow gradient) fills the card
3. **Unhover**: 
   - Info section slides back down
   - Title section slides back into view
   - Aurora animation continues

## 📝 CSS Key Selectors

- `.projects-grid`: Flexbox column, no gaps
- `.project-card`: 350px height, aurora animation background
- `.project-title-section`: Absolute positioned, transforms on hover
- `.project-info-section`: Absolute positioned at top 100%, slides to top 0 on hover
- `.project-title-large`: 64px, uppercase, shocking impact
- `.project-link`: White button with hover effects

## ✅ Design Goals Achieved

✅ Full-screen width rectangles
✅ One project per row, 9 rows total
✅ No gaps between cards
✅ Height approximately half of hero section
✅ Aurora-like background with continuous animation
✅ Massive uppercase project names (shocking visual)
✅ Only name shown by default (no other description)
✅ Hover reveals info section with slide-up animation
✅ Info section has contrasting color (pink-to-yellow gradient)
✅ Smooth, sophisticated interactions

## 🚀 Status

**READY FOR DEPLOYMENT** - All changes implemented and files updated.
