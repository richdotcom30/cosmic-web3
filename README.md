# COSMIC - Web3 Meme Coin Landing Page

A high-end, immersive 3D landing page for a Web3 meme coin project featuring cosmic/space theme animations.

![Cosmic Landing Page](https://via.placeholder.com/1200x630/0a0a0f/7b2cbf?text=COSMIC+Landing)

## 🌟 Features

### 3D Galaxy Animation
- **Massive Central Planet** - Icosahedron geometry with glowing layers
- **Energy Rings** - 4 animated torus rings orbiting the central planet
- **Orbiting Moons** - 4 moons with unique colors and orbit paths
- **Star Field** - 4000+ twinkling particles with color variation
- **Nebula Background** - Multi-layered cosmic clouds
- **Geometric Crystals** - Floating 3D crystals
- **Asteroid Field** - Drifting space rocks
- **Post-Processing** - Bloom and vignette effects

### Animations
- Mouse parallax effect on 3D scene
- Smooth camera movement following cursor
- Continuous galaxy rotation
- Pulsing glow effects
- Floating/rotating crystals and asteroids

### Tokenomics Section
- Animated character that walks in when section scrolls into view
- Speech bubble interaction
- Progress ring animations on cards

### Design System
- **Colors**: Deep space purple, cosmic blue, neon pink, electric cyan
- **Typography**: Orbitron (headings), Space Mono (body)
- **Glassmorphism** cards with gradient borders
- **Responsive** design for all screen sizes
- **Mobile fallback** for reduced motion preference

## 🚀 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| 3D Graphics | Three.js + React Three Fiber + Animation | Framer Drei |
| Motion |
| Styling | Tailwind CSS |
| Post-Processing | @react-three/postprocessing |
| Language | TypeScript |

## 📁 Project Structure

```
web3-landingpage/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── ThreeScene.tsx    # 3D Galaxy animation
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Tokenomics.tsx    # Tokenomics with character
│   ├── Roadmap.tsx       # Roadmap timeline
│   ├── HowToBuy.tsx      # How to buy guide
│   ├── Community.tsx     # Community section
│   ├── Navbar.tsx        # Navigation
│   └── LoadingScreen.tsx # Loading animation
├── public/
│   └── 4e7059637debce55ca93be082d118cc9.webp  # Character image
├── plans/
│   └── galaxy-animation-plan.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   cd web3-landingpage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Start production server**
   ```bash
   npm run start
   ```

## 🎨 Customization

### Color Palette

Edit `tailwind.config.ts` to modify colors:

```typescript
colors: {
  "deep-space": "#0a0a0f",
  "cosmic-purple": "#1a0a2e",
  "nebula-pink": "#ff2d75",
  "electric-cyan": "#00f5ff",
  "cosmic-gold": "#ffd700",
  "starlight-gray": "#a0a0b0",
  "violet-glow": "#7b2cbf",
  "cyan-glow": "#00b4d8",
}
```

### 3D Scene Customization

Edit `components/ThreeScene.tsx`:

- **Planet size**: Modify `icosahedronGeometry args` values
- **Star count**: Change `count` prop on `<StarField count={4000} />`
- **Ring sizes**: Edit `torusGeometry args` in `<EnergyRings />`
- **Bloom intensity**: Adjust `intensity` prop on `<Bloom />`

### Character Image

Replace `public/4e7059637debce55ca93be082d118cc9.webp` with your own character image.

## 📱 Responsive Breakpoints

| Breakpoint | Width | Adjustments |
|------------|-------|-------------|
| Mobile | < 768px | Reduced 3D elements, static fallback |
| Tablet | 768-1024px | Medium 3D complexity |
| Desktop | > 1024px | Full 3D experience |

## 🔧 Troubleshooting

### Build Errors

If you encounter build errors:
```bash
rmdir /s /q .next
npm run build
```

### 500 Internal Server Error

1. Clear the `.next` folder
2. Rebuild the project
3. Ensure all dependencies are installed: `npm install`

### Image Not Loading

Ensure the character image is in the `public/` folder:
- Path: `public/4e7059637debce55ca93be082d118cc9.webp`
- Supported formats: .webp, .png, .jpg

## 📄 License

MIT License - See LICENSE file for details.

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) - 3D library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework

---

**To the moon! 🚀🌕**
