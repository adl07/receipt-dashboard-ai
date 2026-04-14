# PayrollHub Design System

A comprehensive design system for the PayrollHub salary receipt management application. This document provides guidelines for maintaining visual consistency, accessibility, and scalability across the application.

---

## Table of Contents

1. [Design Principles](#design-principles)
2. [Design Tokens](#design-tokens)
3. [Typography](#typography)
4. [Color System](#color-system)
5. [Spacing System](#spacing-system)
6. [Layout Rules](#layout-rules)
7. [Components](#components)
8. [Component States](#component-states)
9. [Accessibility Guidelines](#accessibility-guidelines)
10. [UI Consistency Rules](#ui-consistency-rules)

---

## Design Principles

### 1. Clarity
Every element should have a clear purpose. Users should immediately understand what actions they can take and what information is being presented.

### 2. Consistency
Maintain visual and behavioral consistency across all screens. Use the same patterns, components, and interactions throughout the application.

### 3. Efficiency
Optimize for common tasks. The most frequent actions (uploading receipts, searching, viewing details) should require minimal effort.

### 4. Accessibility
Design for all users. Ensure proper contrast ratios, keyboard navigation, screen reader support, and clear focus states.

### 5. Scalability
Components and patterns should work across different screen sizes and accommodate future growth in features and data.

---

## Design Tokens

Design tokens are the foundational values that define the visual language of the application.

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | `0.5rem` (8px) | Base radius |
| `radius-sm` | `calc(var(--radius) - 4px)` | Small elements |
| `radius-md` | `calc(var(--radius) - 2px)` | Medium elements |
| `radius-lg` | `var(--radius)` | Cards, containers |
| `radius-xl` | `calc(var(--radius) + 4px)` | Large containers |

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle elevation |
| `shadow` | `0 1px 3px rgba(0,0,0,0.1)` | Default cards |
| `shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Dropdowns, modals |
| `shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Elevated dialogs |

### Transitions

| Token | Value | Usage |
|-------|-------|-------|
| `transition-colors` | `150ms ease` | Color changes |
| `transition-all` | `150ms ease` | All properties |
| `transition-transform` | `200ms ease` | Scale, position |

---

## Typography

### Font Family

| Variable | Font | Usage |
|----------|------|-------|
| `--font-sans` | Geist | Primary text, UI elements |
| `--font-mono` | Geist Mono | Code, technical data |

### Type Scale

| Class | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `text-xs` | 12px | 16px | 400 | Labels, captions |
| `text-sm` | 14px | 20px | 400 | Secondary text, table cells |
| `text-base` | 16px | 24px | 400 | Body text |
| `text-lg` | 18px | 28px | 500 | Subheadings |
| `text-xl` | 20px | 28px | 600 | Section titles |
| `text-2xl` | 24px | 32px | 700 | Page titles |
| `text-3xl` | 30px | 36px | 700 | Hero headings |
| `text-4xl` | 36px | 40px | 700 | Marketing headlines |

### Font Weights

| Class | Weight | Usage |
|-------|--------|-------|
| `font-normal` | 400 | Body text |
| `font-medium` | 500 | Labels, buttons |
| `font-semibold` | 600 | Section titles |
| `font-bold` | 700 | Page titles, emphasis |

### Typography Guidelines

- Use `text-balance` for headings to ensure optimal line breaks
- Use `text-pretty` for body text to prevent orphans
- Maintain a maximum line length of 65-75 characters for readability
- Use `leading-relaxed` (1.625) for body text

---

## Color System

### Primary Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--primary` | `oklch(0.55 0.18 250)` | `oklch(0.65 0.18 250)` | Primary actions, links |
| `--primary-foreground` | `oklch(1 0 0)` | `oklch(0.12 0 0)` | Text on primary |

### Neutral Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--background` | `oklch(0.985 0 0)` | `oklch(0.12 0 0)` | Page background |
| `--foreground` | `oklch(0.145 0 0)` | `oklch(0.95 0 0)` | Primary text |
| `--card` | `oklch(1 0 0)` | `oklch(0.16 0 0)` | Card backgrounds |
| `--muted` | `oklch(0.97 0.005 250)` | `oklch(0.2 0.005 250)` | Muted backgrounds |
| `--muted-foreground` | `oklch(0.45 0 0)` | `oklch(0.65 0 0)` | Secondary text |
| `--border` | `oklch(0.9 0 0)` | `oklch(0.25 0 0)` | Borders, dividers |

### Semantic Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--destructive` | `oklch(0.55 0.2 25)` | `oklch(0.55 0.2 25)` | Error, delete actions |
| `--success` | `oklch(0.6 0.18 145)` | `oklch(0.6 0.18 145)` | Success states |
| `--warning` | `oklch(0.75 0.15 75)` | `oklch(0.75 0.15 75)` | Warning messages |

### Sidebar Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--sidebar` | `oklch(0.12 0 0)` | `oklch(0.1 0 0)` | Sidebar background |
| `--sidebar-foreground` | `oklch(0.85 0 0)` | `oklch(0.85 0 0)` | Sidebar text |
| `--sidebar-accent` | `oklch(0.2 0 0)` | `oklch(0.18 0 0)` | Sidebar hover states |
| `--sidebar-muted` | `oklch(0.5 0 0)` | `oklch(0.5 0 0)` | Sidebar secondary text |

### Color Usage Guidelines

1. **Never use more than 5 colors** in a single view
2. **Primary blue** is reserved for interactive elements and emphasis
3. **Semantic colors** should only be used for their intended purpose
4. **Always ensure sufficient contrast** (4.5:1 for normal text, 3:1 for large text)
5. **Avoid pure black and white** - use the design token values instead

---

## Spacing System

### Base Scale

The spacing system is based on a 4px grid. Use Tailwind's spacing classes:

| Class | Value | Usage |
|-------|-------|-------|
| `gap-1` / `p-1` | 4px | Tight spacing, inline elements |
| `gap-2` / `p-2` | 8px | Button padding, small gaps |
| `gap-3` / `p-3` | 12px | Input padding |
| `gap-4` / `p-4` | 16px | Card padding, section gaps |
| `gap-6` / `p-6` | 24px | Large section spacing |
| `gap-8` / `p-8` | 32px | Page sections |
| `gap-12` / `p-12` | 48px | Major sections |

### Component Spacing

| Component | Padding | Gap |
|-----------|---------|-----|
| Button | `px-4 py-2` | - |
| Card | `p-6` | - |
| Card Header | `pb-2` | `gap-1.5` |
| Input | `px-3 py-2` | - |
| Table Cell | `px-6 py-4` | - |
| Modal | `p-6` | `gap-4` |

### Spacing Guidelines

1. **Use gap utilities** for consistent spacing between flex/grid children
2. **Never mix margin and gap** on the same container
3. **Maintain consistent page padding** of `p-6` (24px)
4. **Use larger spacing** between major sections (`gap-6` or `gap-8`)

---

## Layout Rules

### Grid System

The application uses a responsive grid based on CSS Grid and Flexbox:

| Breakpoint | Prefix | Width | Columns |
|------------|--------|-------|---------|
| Mobile | - | < 640px | 1 |
| Small | `sm:` | 640px | 2 |
| Medium | `md:` | 768px | 2-3 |
| Large | `lg:` | 1024px | 3-4 |
| XL | `xl:` | 1280px | 4+ |

### Layout Method Priority

1. **Flexbox** for most layouts: `flex items-center justify-between`
2. **CSS Grid** for complex 2D layouts: `grid grid-cols-3 gap-4`
3. **Avoid floats and absolute positioning** unless necessary

### Container Widths

| Container | Max Width | Usage |
|-----------|-----------|-------|
| Content | `max-w-4xl` (896px) | Forms, detail pages |
| Wide | `max-w-6xl` (1152px) | Tables, dashboards |
| Full | `w-full` | Full-width sections |

### Application Shell

```
┌──────────────────────────────────────────────────────────┐
│                       Top Bar (64px)                      │
├──────────┬───────────────────────────────────────────────┤
│          │                                               │
│  Sidebar │               Main Content                    │
│  (256px) │               (padding: 24px)                 │
│          │                                               │
│          │                                               │
└──────────┴───────────────────────────────────────────────┘
```

---

## Components

### Buttons

#### Variants

| Variant | Usage | Example |
|---------|-------|---------|
| `default` | Primary actions | Save, Submit, Create |
| `secondary` | Secondary actions | Cancel, Reset |
| `outline` | Tertiary actions | Filter, Export |
| `ghost` | Subtle actions | Icons, navigation |
| `destructive` | Dangerous actions | Delete, Remove |

#### Sizes

| Size | Height | Padding | Usage |
|------|--------|---------|-------|
| `sm` | 32px | `px-3 py-1` | Inline actions |
| `default` | 40px | `px-4 py-2` | Standard buttons |
| `lg` | 44px | `px-8 py-2` | Hero CTAs |
| `icon` | 40px | `p-2` | Icon-only buttons |

#### Button Guidelines

- Always include loading states with `Spinner` component
- Use icons to reinforce meaning, placed before text
- Maintain consistent button sizing within a group
- Use `ButtonGroup` for related actions

### Inputs

#### Types

| Type | Component | Usage |
|------|-----------|-------|
| Text | `Input` | Single-line text |
| Password | `Input type="password"` | Secure entry |
| File | `Input type="file"` | File uploads |
| Search | `Input` with icon | Search fields |
| Date | `Input type="date"` | Date selection |

#### Input Guidelines

- Always pair inputs with `Label` components
- Use `FieldGroup` + `Field` + `FieldLabel` for form layouts
- Include helper text for complex inputs
- Show validation errors below the input
- Use `InputGroup` with `InputGroupAddon` for inputs with icons

### Tables

#### Structure

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Column</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Data</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

#### Table Guidelines

- Use hover states on rows for interactivity
- Include checkbox column for bulk actions
- Right-align numeric data
- Use consistent action patterns (dropdown menu)
- Include loading skeletons for data fetching

### Cards

#### Anatomy

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
  <CardFooter>
    {/* Actions */}
  </CardFooter>
</Card>
```

#### Card Guidelines

- Use `border-t` on CardFooter for separation
- Maintain consistent padding (`p-6`)
- Use hover state only for clickable cards

### Modals / Dialogs

#### Structure

```tsx
<Dialog>
  <DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    {/* Content */}
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

#### Modal Guidelines

- Always include a way to close (X button or Cancel)
- Destructive actions require confirmation dialog
- Use appropriate dialog width for content
- Prevent background scroll when open

### Alerts

#### Variants

| Variant | Usage |
|---------|-------|
| `default` | Informational messages |
| `destructive` | Error messages |
| `success` | Success confirmations |
| `warning` | Warning notifications |

#### Alert Guidelines

- Use semantic colors appropriately
- Include icon for quick recognition
- Keep message concise and actionable
- Position consistently (toast for transient, inline for persistent)

### Navigation

#### Sidebar Navigation

- Use icons with labels for clarity
- Highlight active state clearly
- Group related items under sections
- Include user menu at bottom

#### Top Bar

- Display current page title
- Include breadcrumbs for deep navigation
- Show notifications and user profile
- Include mobile menu toggle

---

## Component States

### Interactive States

| State | Visual Change | Usage |
|-------|---------------|-------|
| Default | Base styling | Normal state |
| Hover | Background lightened | Mouse over |
| Focus | Ring outline | Keyboard focus |
| Active | Background darkened | During click |
| Disabled | Reduced opacity (50%) | Not interactive |
| Loading | Spinner + disabled | Processing |

### State Guidelines

1. **All interactive elements must have visible focus states**
2. **Use `transition-colors` for smooth state changes**
3. **Disabled elements should have `cursor-not-allowed`**
4. **Loading states should disable the element**

### Form Validation States

| State | Visual Indicator |
|-------|------------------|
| Valid | Green check icon |
| Invalid | Red border + error message |
| Required | Asterisk (*) in label |
| Warning | Yellow border + warning message |

---

## Accessibility Guidelines

### Keyboard Navigation

- All interactive elements must be reachable via Tab
- Maintain logical focus order
- Provide skip links for main content
- Use arrow keys for menu navigation

### Screen Readers

- Use semantic HTML elements (`main`, `nav`, `header`, `section`)
- Provide `aria-label` for icon-only buttons
- Use `sr-only` class for screen reader only text
- Announce dynamic content changes with `aria-live`

### Color Contrast

| Element | Required Ratio |
|---------|----------------|
| Normal text | 4.5:1 |
| Large text (18px+) | 3:1 |
| UI components | 3:1 |
| Focus indicators | 3:1 |

### ARIA Guidelines

```tsx
// Icon-only button
<Button size="icon" aria-label="Delete item">
  <Trash2 className="h-4 w-4" />
</Button>

// Loading state
<Button disabled aria-busy="true">
  <Spinner /> Loading...
</Button>

// Form error
<Input aria-invalid="true" aria-describedby="error-message" />
<p id="error-message" role="alert">Error text</p>
```

### Alt Text

- All images must have meaningful alt text
- Decorative images use `alt=""`
- Icons paired with text don't need alt text
- Charts should have text alternatives

---

## UI Consistency Rules

### General Rules

1. **Use design tokens exclusively** - Never use hardcoded colors
2. **Follow the spacing system** - Use Tailwind spacing classes
3. **Maintain component hierarchy** - Page > Section > Card > Element
4. **Keep interactions consistent** - Same action = same pattern

### Content Guidelines

1. **Use sentence case** for headings and labels
2. **Be concise** - Avoid unnecessary words
3. **Use active voice** - "Upload file" not "File should be uploaded"
4. **Provide clear feedback** - Confirm actions, explain errors

### Pattern Consistency

| Pattern | Implementation |
|---------|----------------|
| List with actions | Table with dropdown menu |
| Detail view | Two-column layout (content + sidebar) |
| Form | Card with sections, footer actions |
| Empty state | Centered with icon, title, description, CTA |
| Loading | Skeleton placeholders matching content |
| Error | Alert with retry action |

### File Organization

```
app/
├── (auth)/              # Auth-related pages
│   └── login/
├── (dashboard)/         # Dashboard-related pages
│   ├── dashboard/
│   ├── receipts/
│   ├── upload/
│   └── settings/
components/
├── layout/              # Layout components
│   ├── app-sidebar.tsx
│   └── top-bar.tsx
├── ui/                  # shadcn/ui components
└── [feature]/           # Feature-specific components
```

---

## Implementation Checklist

When building new features, ensure:

- [ ] Uses design tokens for all colors
- [ ] Follows spacing system
- [ ] Includes all interactive states
- [ ] Has keyboard navigation support
- [ ] Includes screen reader support
- [ ] Has loading and error states
- [ ] Follows component patterns
- [ ] Is responsive across breakpoints
- [ ] Uses consistent typography
- [ ] Follows content guidelines

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | March 2024 | Initial design system |

---

*This design system is a living document and will be updated as the application evolves.*
