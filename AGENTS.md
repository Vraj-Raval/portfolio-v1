# Repository Guidelines

## Project Scope & Structure

This repository is for a personal developer portfolio using Next.js App Router, React, TypeScript, and Tailwind CSS. Currently, only this guide exists; there are no source files, dependency manifests, or tooling configurations. Do not scaffold or implement the website unless requested.

When implementation is authorized, use app/ or src/app/ for routes and layouts, components/ for reusable UI, and public/ for static assets. Follow the structure established by the project; preserve existing configuration and avoid unnecessary directories.

## Component & Code Conventions

Build reusable, well-structured components with clear responsibilities and typed props. Prefer Server Components; add `"use client"` only where interactivity, browser APIs, or client hooks require it. Keep client boundaries narrow. Use TypeScript and Tailwind CSS consistently, following existing formatting and naming conventions once configured.

Keep dependencies minimal. Use built-in framework capabilities where suitable, and avoid unnecessary abstractions, speculative utilities, and overengineering.

## Design & Accessibility

Use a minimal, editorial, brutalist-inspired visual direction: sharp corners, clean typography, strong visual hierarchy, and generous whitespace. Avoid generic AI-generated website aesthetics, excessive gradients, glowing effects, unnecessary animations, and decorative cards.

Use semantic HTML, meaningful heading order, accessible labels, keyboard-operable controls, visible focus states, and sufficient contrast. Apply responsive layouts across mobile and desktop; check for overflow and readable typography.

## Content Integrity

Never invent professional experience, project details, achievements, employers, metrics, or testimonials. Use information supplied by the owner. Ask for missing factual content or use clearly identified placeholders during development.

## Commands & Validation

No development, lint, type-check, build, or test commands are currently configured. Inspect the dependency manifest and lockfile before selecting commands; use the configured package manager and scripts. After implementation, run available lint, type-check, and build commands when practical. Run relevant tests if configured, and check responsive behavior and accessibility for UI changes. Report results and explain checks that could not run.

## Change Communication & Configuration

Keep changes focused and preserve existing configuration. Explain important changes and any commands requiring approval, including their purpose and effects. Keep secrets and local environment files out of version control. For commits and pull requests, use concise descriptions, summarize validation, and include screenshots for visible UI changes when applicable.
