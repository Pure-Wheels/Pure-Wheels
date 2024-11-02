
import presetWebFonts from '@unocss/preset-web-fonts'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig, presetUno, type PresetUnoTheme } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig<PresetUnoTheme>({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        "display": 'Akira Expanded',
        "sans": 'Aileron'
      },
    })
  ],
  theme: {
    colors: {
      primary: '#1E49D3',
      "primary-foreground": '#FFFFFF',
      foreground: '#FFFFFF',
      "foreground-foreground": '#151515',
      muted: '#D0CDCD',
      muted2: '#757575',
      background: '#151515',
    },
    container: {
      center: true,
      maxWidth: {
        '2xl': '1200px',
        'xl': '1050px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
        'xs': '480px'
      }
    }
  },
  shortcuts: [
    ["text-display", "font-display text-10 md:text-16 font-800 leading-18 tracking-10%"],
    ["text-title-1", "font-display text-6 md:text-10 font-800 leading-12 tracking-0.2px"],
    ["text-body", "font-sans text-4 font-400 leading-6 tracking-0.2px"],
    ["text-body-md", "font-sans text-4 md:text-5 font-400 leading-6 tracking-0.2px"],
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives()
  ]
})