# VendGenius Product Webpage

A modern, responsive product landing site built with React, Vite, TypeScript, and Tailwind CSS.

## Requirements
- Node.js LTS `>=22.12.0` (validated on `24.12.0`)
- npm `>=10`

## Scripts
- `npm run dev`: start the Vite dev server
- `npm run build`: build for production
- `npm run preview`: preview the production build
- `npm run lint`: run ESLint
- `npm run typecheck`: run TypeScript type checks

## Release Notes
- Latest: `v2025.12.18`
  - React `19.2.3`, `react-dom` `19.2.3`
  - `lucide-react` updated for React 19
  - `@types/react@^19`, `@types/react-dom@^19`
  - `eslint-plugin-react-hooks@^7`
  - `typescript-eslint` updated for TS 5.6
  - Build/Lint/Typecheck passing; audit clean
- Releases:
  - Org: https://github.com/olelectronicsin-blip/vendgenius-product-webpage/releases
  - Mirror: https://github.com/InjamamulIslam/vendgenius-product-webpage/releases

## Automated Releases
Releases are auto-created on tag push and can be backfilled manually.

- Workflow: `.github/workflows/release.yml`
- Triggers:
  - Push tags: `v*` → create/update release using the tag annotation as notes
  - Manual: `workflow_dispatch` with `tag` and optional `notes`

### Tag-and-Release Example
```powershell
# Create an annotated tag
git tag -a v2026.01.01 -m "January update: performance tweaks + dependencies"

# Push the tag (triggers release creation)
git push --tags
```

## Docs
- Enhancements: `ENHANCEMENT_SUMMARY.md`
- SEO: `SEO_ENHANCEMENTS.md`
- Quick Start: `QUICK_START.md`
- Forms: `FORM_SETUP_GUIDE.md`

## Tech Stack
- React, React Router, TypeScript
- Vite 7, Tailwind CSS
- ESLint (flat config), `typescript-eslint`
- Vercel Analytics

## License
Proprietary. All rights reserved.