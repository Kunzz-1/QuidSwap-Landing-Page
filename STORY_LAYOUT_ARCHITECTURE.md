# Story Section - Three-Way Triangle Layout Architecture

## Visual Layout Structure

```
                    ┌─────────────┐
                    │             │
                    │   QDX Coin  │  ← Top Center (Largest)
                    │   (190px)   │     z-index: 3
                    │             │
                    └─────────────┘
                          │
                          │
            ┌─────────────┴─────────────┐
            │                           │
    ┌───────┴───────┐         ┌─────────┴────────┐
    │               │         │                  │
    │  USDT Coin    │         │    BTC Coin      │
    │   (190px)     │         │     (195px)      │
    │               │         │                  │
    └───────────────┘         └──────────────────┘
    Bottom Left               Bottom Right
    z-index: 2                z-index: 1
```

## Positioning Details

### Desktop (lg: 1024px+)

- **Container**: `relative`, `h-[395px]`, centered with flexbox
- **QDX Coin** (Top):

  - Position: `left: 50%`, `top: 10%`
  - Size: `w-[190px]` (largest)
  - Transform: `translate(-50%, 0)` (centered horizontally)
  - z-index: 3 (topmost)

- **USDT Coin** (Bottom Left):

  - Position: `left: 20%`, `top: 65%`
  - Size: `w-[190px]`
  - Transform: `translate(-50%, -50%)` (centered on point)
  - z-index: 2 (middle layer)

- **BTC Coin** (Bottom Right):
  - Position: `left: 80%`, `top: 65%`
  - Size: `w-[195px]` (slightly larger for visual balance)
  - Transform: `translate(-50%, -50%)` (centered on point)
  - z-index: 1 (back layer)

### Tablet (md: 768px - 1023px)

- **Container**: `h-[320px]`
- **QDX Coin**: `w-[160px]`, `top: 12%`
- **USDT Coin**: `w-[150px]`, `left: 22%`, `top: 68%`
- **BTC Coin**: `w-[150px]`, `left: 78%`, `top: 68%`

### Mobile (sm: 640px - 767px)

- **Container**: `h-[280px]`
- **QDX Coin**: `w-[140px]`, `top: 10%`
- **USDT Coin**: `w-[110px]`, `left: 20%`, `top: 65%`
- **BTC Coin**: `w-[110px]`, `left: 80%`, `top: 65%`

### Small Mobile (< 640px)

- **Container**: `h-[220px]`
- **QDX Coin**: `w-[120px]`, `top: 10%`
- **USDT Coin**: `w-[100px]`, `left: 18%`, `top: 68%`
- **BTC Coin**: `w-[100px]`, `left: 82%`, `top: 68%`

## Key Features

1. **Perfect Triangle Formation**: Three coins form an isosceles triangle
2. **Layered Depth**: Different z-index values create visual depth
3. **Responsive Scaling**: All sizes scale proportionally across breakpoints
4. **Centered Container**: Images are centered within their container
5. **Overflow Handling**: Container has `overflow-visible` to show full coins
6. **Animation Support**: Stagger animations for sequential reveal

## CSS Classes Structure

```jsx
<div
  className="relative h-[220px] sm:h-[280px] md:h-[320px] lg:h-[395px] 
                flex items-center justify-center 
                px-4 sm:px-6 md:px-8 
                overflow-visible"
>
  {/* QDX - Top Center */}
  <img
    className="absolute rounded-full object-cover aspect-square
                  w-[120px] sm:w-[140px] md:w-[160px] lg:w-[190px]
                  left-1/2 top-[10%] -translate-x-1/2 z-[3]
                  shadow-lg stagger-1"
  />

  {/* USDT - Bottom Left */}
  <img
    className="absolute rounded-full object-cover aspect-square
                  w-[100px] sm:w-[110px] md:w-[150px] lg:w-[190px]
                  left-[18%] sm:left-[20%] md:left-[22%] lg:left-[20%]
                  top-[65%] sm:top-[65%] md:top-[68%] lg:top-[65%]
                  -translate-x-1/2 -translate-y-1/2 z-[2]
                  shadow-lg stagger-2"
  />

  {/* BTC - Bottom Right */}
  <img
    className="absolute rounded-full object-cover aspect-square
                  w-[100px] sm:w-[110px] md:w-[150px] lg:w-[195px]
                  left-[82%] sm:left-[80%] md:left-[78%] lg:left-[80%]
                  top-[65%] sm:top-[65%] md:top-[68%] lg:top-[65%]
                  -translate-x-1/2 -translate-y-1/2 z-[1]
                  shadow-lg stagger-3"
  />
</div>
```

## Responsive Breakpoints

- **Small Mobile**: < 640px
- **Mobile**: 640px - 767px (sm)
- **Tablet**: 768px - 1023px (md)
- **Desktop**: 1024px+ (lg)

## Animation Sequence

1. QDX coin fades in first (stagger-1)
2. USDT coin fades in second (stagger-2)
3. BTC coin fades in third (stagger-3)

All coins scale from 0.8 to 1.0 on reveal.
