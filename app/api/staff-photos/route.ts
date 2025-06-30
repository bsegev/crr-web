import { readdir } from 'fs/promises'
import { join } from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const publicDir = join(process.cwd(), 'public', 'staff-photos')
    const files = await readdir(publicDir)
    
    const photos = files
      .filter(file => file.endsWith('.jpg'))
      .map(file => ({
        src: `/staff-photos/${file}`,
        alt: `IWC Staff Member${file.includes('James') ? ' - James' : ''}`
      }))
    
    return NextResponse.json(photos)
  } catch (error) {
    console.error('Error reading staff photos:', error)
    return NextResponse.json({ error: 'Failed to load staff photos' }, { status: 500 })
  }
} 