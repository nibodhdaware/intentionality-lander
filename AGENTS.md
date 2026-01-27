# Intentionality Lander - Development Guide

This guide helps agentic coding agents work effectively in this Next.js + TypeScript + Tailwind CSS codebase.

## Development Commands

### Essential Commands
```bash
# Install dependencies
npm install

# NEVER run these server commands - the server is already running in the background
# npm run dev
# npm run build
# npm run start

# Lint code
npm run lint

# Run tests
npm run test

# Run single test file
npm test -- --testPathPattern=<filename>

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx          # Root layout
│   └── api/               # API routes
├── components/
│   ├── ui/                # Reusable UI components (shadcn/ui)
│   └── icons/             # Custom icon components
├── lib/
│   ├── utils.ts           # Utility functions (cn helper)
│   └── firebase.ts        # Firebase configuration
└── __tests__/             # Test files
```

## Code Style Guidelines

### Import Organization
1. **External libraries** (React, Next.js, third-party)
2. **Internal modules** (@/ components, lib, etc.)
3. **Relative imports** (./, ../)
4. **Type-only imports** use `import type`

```typescript
// ✅ Correct order
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import WaitlistModal from "@/components/WaitlistModal";
import type { Metadata } from "next";
```

### Component Structure
- Use functional components with React hooks
- Export default function as arrow function for pages, named function for components
- Props interface defined above component
- Use `cn()` utility for conditional classes

```typescript
interface ComponentProps {
  title: string;
  variant?: 'primary' | 'secondary';
}

function Component({ title, variant = 'primary' }: ComponentProps) {
  return (
    <div className={cn("base-class", variant === 'primary' && "primary-class")}>
      {title}
    </div>
  );
}

export default Component;
```

### TypeScript Conventions
- Strict mode enabled (`"strict": true` in tsconfig.json)
- Use interfaces for object shapes, types for unions/primitives
- Export types when used across components
- Prefer explicit return types for API routes

```typescript
// ✅ Use interfaces for objects
interface WaitlistData {
  email: string;
  platform: 'android' | 'ios' | 'firefox';
}

// ✅ Use types for unions
type Platform = 'android' | 'ios' | 'firefox';

// ✅ Explicit return type for API routes
export async function POST(request: NextRequest): Promise<NextResponse> {
  // ...
}
```

### Naming Conventions
- **Components**: PascalCase (`WaitlistModal.tsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **Variables**: camelCase (`emailAddress`, `isLoading`)
- **Constants**: SCREAMING_SNAKE_CASE for exports (`API_BASE_URL`)
- **CSS Classes**: Tailwind utility classes, use `cn()` for conditional logic

### Error Handling
- Always wrap API routes in try-catch blocks
- Return appropriate HTTP status codes
- Use console.error for server-side errors
- Handle user input validation explicitly

```typescript
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    if (!body.email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    
    // Process request
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

### Styling Guidelines
- Use Tailwind CSS classes exclusively
- Responsive design: mobile-first approach (`md:`, `lg:` prefixes)
- Component variants use class-variance-authority (cva)
- Dark mode: use `dark:` prefix for dark theme variations
- Spacing: consistent use of Tailwind's spacing scale
- Colors: stick to defined color palette (`slate-`, `sky-`, etc.)

```typescript
// ✅ Mobile-first responsive
<div className="col-span-2 md:col-span-4 gap-2 md:gap-0">

// ✅ Dark mode variants
<button className="bg-sky-500 hover:bg-sky-600 text-white dark:bg-slate-800 dark:hover:bg-slate-700">

// ✅ Component variants with cva
const buttonVariants = cva("base-classes", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground",
      destructive: "bg-destructive text-white",
    }
  }
});
```

### Testing Guidelines
- Use React Testing Library for component tests
- Mock external dependencies (framer-motion, Next.js router)
- Test user behavior, not implementation details
- Use semantic queries (`getByRole`, `getByLabelText`)
- Structure tests with `describe`, `it`, and `expect`

```typescript
// ✅ Test structure
describe('Component', () => {
  it('renders primary action button', () => {
    render(<Component />);
    const button = screen.getByRole('button', { name: /primary action/i });
    expect(button).toBeInTheDocument();
  });
});
```

### UI Components (shadcn/ui)
- Use pre-built components from `/src/components/ui/`
- Extend components using `className` prop with `cn()`
- Follow Radix UI patterns for accessibility
- Each component exports both the component and its variants

### Firebase Integration
- All Firebase logic in `/src/lib/firebase.ts`
- Use server-side Firebase functions in API routes
- Client-side Firebase only for analytics
- Never expose Firebase config secrets in client code

## File Path Resolution
- Use `@/` prefix for imports from `src/` directory
- Absolute imports configured in `tsconfig.json` paths
- Example: `import { Button } from "@/components/ui/button"`

## Environment Variables
- Use `.env.local` for local development
- Server-only variables: `process.env.VARIABLE_NAME`
- Client variables must be prefixed with `NEXT_PUBLIC_`

## Git Workflow
- Never commit secrets (API keys, env files)
- Use conventional commit messages if team follows this pattern
- Run lint and tests before committing

## Common Patterns

### Form Handling
```typescript
const [formData, setFormData] = useState({ email: '', platform: 'android' });
const [isLoading, setIsLoading] = useState(false);
```

### Motion Components
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {content}
</motion.div>
```

### API Route Pattern
```typescript
interface BodyType { /* ... */ }
export async function POST(request: NextRequest) {
  try {
    const body: BodyType = await request.json();
    // validation and processing
    return NextResponse.json({ success: true });
  } catch (error) {
    // error handling
  }
}
```

## Browser Support
- Modern browsers (ES2017+ target)
- Mobile-first responsive design
- Accessible components following WCAG guidelines