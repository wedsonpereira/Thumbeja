# Image Assets

Place your before/after image files in this directory (create any subfolders you like).

When referencing these files inside `data/images.json`, point to them with paths that start with `/images/`, e.g.:

```
{
  "before": "/images/e-commerce/clipping-path/before-01.jpg",
  "after": "/images/e-commerce/clipping-path/after-01.jpg"
}
```

Vite serves everything in `public` at the site root, so `/images/...` URLs will resolve automatically.
