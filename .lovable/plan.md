Replace the current Manifesto section portrait (`portrait-vision.png`) with your newly uploaded photo (the figure with red-tinted round sunglasses).

## Steps
1. Upload `INSTA-L.png` to Lovable Assets CDN via `lovable-assets create`, producing `src/assets/portrait-vision.png.asset.json`.
2. Update `src/routes/index.tsx` Manifesto section to import the asset JSON and use `asset.url` as the `<img src>` (instead of the current static import).
3. Delete the old `src/assets/portrait-vision.png` file since it's no longer referenced.

## Notes
- Only the Manifesto portrait changes. Hero, pillars, products, and other images stay as-is.
- Alt text will be updated to match the new image.
- Let me know if you'd rather swap a different image (e.g. the hero, or a pillar photo) instead.