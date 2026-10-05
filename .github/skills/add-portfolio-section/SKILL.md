---
name: add-portfolio-section
description: 'Scaffold a new top-level section for this portfolio single-page app (component + data file + Navbar entry + App.tsx wiring). Use when asked to add a new section/page block such as Testimonials, Blog, Certifications, etc.'
---

# Add Portfolio Section

Adds a new scroll-anchored section to the one-page portfolio, following the existing conventions in this repo (data-driven content, `AnimatedSection` wrapper, react-scroll nav entry).

## Procedure

1. **Pick an id and label**, e.g. id `testimonials`, label `Testimonials`.
2. **Add a data file** at `src/data/<name>.ts` exporting a typed array/object for the section's content (mirror the style of `src/data/projects.ts` or `src/data/skills.ts`). Mark any unknown values with `// TODO:` comments.
3. **Create the component** at `src/components/<Name>/<Name>.tsx`:
   ```tsx
   import { AnimatedSection } from '../common/AnimatedSection'
   import { myContent } from '../../data/<name>'

   export function <Name>() {
     return (
       <AnimatedSection id="<id>">
         {/* render myContent using MUI components */}
       </AnimatedSection>
     )
   }
   ```
   - Use `sx` for `fontWeight`/`alignItems`/`flexWrap` (MUI v9 in this repo removed those as direct props - see `.github/copilot-instructions.md`).
   - For grids of cards, wrap items in `motion.div` with the `fadeInUp`/`staggerContainer` variants from `src/animations/variants.ts`, matching `src/components/Projects/Projects.tsx`.
4. **Register the nav entry** - add `{ id: '<id>', label: '<Label>' }` to `navSections` in `src/data/navigation.ts`, positioned where it should appear in the Navbar/scroll order.
5. **Wire into `App.tsx`** - import the component and place it inside `<main>` in the same order as the nav entry (before `<ContactForm />` for content sections, since Contact/Footer are conventionally last).
6. **Verify**: run `pnpm build` and `pnpm lint`; both must pass. Then `pnpm dev` and confirm the Navbar link scrolls to and highlights the new section.

## Notes
- Do not duplicate data already in `projects.ts` - only create a new data file for genuinely new content categories.
- Keep the section's heading structure consistent (`variant="h3" component="h2"` for the title, matching existing sections).
