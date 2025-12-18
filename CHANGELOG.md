# Changelog

All notable changes to this project will be documented in this file.

This project adheres to Keep a Changelog principles, with versions identified by annotated Git tags.

## [v2025.12.18] - 2025-12-18

- Upgrade core framework to React `19.2.3` and `react-dom` `19.2.3`.
- Update `lucide-react` to `^0.562.0` for React 19 compatibility.
- Add TypeScript type packages `@types/react@^19` and `@types/react-dom@^19`.
- Install `eslint-plugin-react-hooks@^7` (React 19 compatible).
- Update `typescript-eslint` to latest to align with TypeScript 5.6.
- Environment: validated with Node LTS `24.12.0` (satisfies Vite 7 engine range).
- Tooling health: `npm run lint`, `npm run typecheck`, and `npm run build` all pass.
- Security: `npm audit --omit=dev` reports 0 vulnerabilities.
- CI/CD: add automated release workflow `.github/workflows/release.yml` to create/update releases on tag push and via manual dispatch.

Tag pushed to both remotes:
- Org repo: https://github.com/olelectronicsin-blip/vendgenius-product-webpage/releases/tag/v2025.12.18
- Personal mirror: https://github.com/InjamamulIslam/vendgenius-product-webpage/releases/tag/v2025.12.18

[v2025.12.18]: https://github.com/olelectronicsin-blip/vendgenius-product-webpage/releases/tag/v2025.12.18