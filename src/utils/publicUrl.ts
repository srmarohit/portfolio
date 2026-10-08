/** Resolves a path under `public/` against Vite's base URL so it works under the GitHub Pages subpath. */
export function publicUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
