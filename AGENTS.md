<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:qurai-article-image-workflow -->
# Qurai article image workflow

When the user says there are new article images, check `pict/` for raw image files without a two-digit numeric prefix. These are source references for article illustrations.

Use this workflow:

1. Match each raw image filename to an article in `src/app/artikel/page.tsx`.
2. Use the article's `number`, `slug`, and title as the identity for the final assets.
3. Generate or edit a 16:9 editorial illustration in the Qurai house style: dark-gold, scholarly, historical, cinematic, textured, with deep green-black shadows and no watermark/readable modern text.
4. Save the final working asset in `pict/` using:
   `NN-Article Title-illustration.png`
5. Copy the final web asset to `public/article-images/` using:
   `nn-article-slug-illustration.png`
6. Add the image to the matching item in `src/app/artikel/page.tsx`.
7. Add the same image to the article detail page as:
   - `metadata.openGraph.images`
   - a hero `<Image>` figure after the header and before the ornament divider
8. Use the existing article pages as the implementation pattern.
9. Run `npm run build` before finishing.

If a raw image is violent, explicit, low quality, or too literal, use it as a concept reference only and produce a symbolic Qurai-style illustration instead.
<!-- END:qurai-article-image-workflow -->
