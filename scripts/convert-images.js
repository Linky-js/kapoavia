import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const srcDir = path.join(process.cwd(), 'public', 'images')

async function walk(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(full)
    } else {
      const ext = path.extname(entry.name).toLowerCase()
      if (['.jpg', '.jpeg', '.png', '.tif', '.tiff', '.bmp', '.gif'].includes(ext)) {
        const out = full.replace(/\.[^.]+$/, '.webp')
        try {
          await sharp(full).webp({ quality: 75 }).toFile(out)
          console.log('Converted', full, '->', out)
        } catch (e) {
          console.error('Failed to convert', full, e.message)
        }
      }
    }
  }
}

if (!fs.existsSync(srcDir)) {
  console.error('Images directory not found:', srcDir)
  process.exit(1)
}

walk(srcDir)
  .then(() => console.log('Conversion finished'))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
