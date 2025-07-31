import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export default defineConfig({
  integrations: [
    starlight({
      title: 'OpenRays Docs',
      favicon: '/favicon.png',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/OpenRays-org'
        }
      ],
      sidebar: [
        {
          label: 'Server Info',
          autogenerate: { directory: 'server' }
        },
        {
          label: 'Data/Save Info',
          autogenerate: { directory: 'data' }
        }
      ]
    })
  ]
})
