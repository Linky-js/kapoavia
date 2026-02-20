import fs from 'fs'
import path from 'path'

export default defineEventHandler((event) => {
  const siteUrl = 'https://капо-авиа.рф'
  const pagesDir = path.resolve(process.cwd(), 'app/pages')

  let files: string[] = []
  try {
    files = fs.readdirSync(pagesDir)
  } catch (e) {
    // if folder missing, return basic sitemap
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n  </url>\n</urlset>`
    setResponseHeader(event, 'Content-Type', 'application/xml')
    return xml
  }

  const routes = files
    .filter((f) => f.endsWith('.vue'))
    .map((f) => f.replace(/\.vue$/, ''))
    .filter((name) => !name.startsWith('_'))
    .map((name) => (name === 'index' ? '/' : `/${name}`))

  const urls = routes.map((r) => `${siteUrl}${r}`)

  const urlEntries = urls.map((u) => `  <url>\n    <loc>${u}</loc>\n  </url>`).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`

  // set response header
  setResponseHeader(event, 'Content-Type', 'application/xml')
  return xml
})
