import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme:{
    extend:{
      gridTemplateColumns: {
        'launchpad': '50px 1fr'
      }
    }
  },
  extract: {
    // accepts globs and file paths relative to project root
    include: [
      'index.html',
      'src/**/*.{vue,html}',
    ],
    exclude: [
      'node_modules/**/*',
      '.git/**/*',
    ],
  },
})