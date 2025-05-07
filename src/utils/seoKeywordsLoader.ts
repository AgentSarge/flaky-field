import fs from 'fs'
import path from 'path'

export function getSeoKeywords () {
  const filePath = path.resolve(process.cwd(), 'seo_keywords.csv')
  const raw = fs.readFileSync(filePath, 'utf-8')
  const lines = raw.trim().split('\n')
  const headers = lines[0].split(',')
  return lines.slice(1).map(line => {
    const values = line.split(',')
    return headers.reduce((obj, h, i) => ({ ...obj, [h]: values[i] }), {})
  })
}
