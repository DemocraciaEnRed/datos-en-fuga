import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        nippo: ['var(--font-nippo)'],
        roboto: ['var(--font-roboto)'],
        raleway: ['var(--font-raleway)'],
        "lexend-deca": ['var(--font-lexend-deca)'],
        "open-sans": ['var(--font-open-sans)'],
        monda: ['var(--font-monda)'],
        mada: ['var(--font-mada)'],
        kanit: ['var(--font-kanit)']
      },
      listStyleType: {
        disc: 'disc'
      },
      colors: {
        'der-black': '#212121'
      }
    }
  },
  plugins: [],
}
export default config
