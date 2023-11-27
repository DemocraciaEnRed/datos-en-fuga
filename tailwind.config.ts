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
        nippo: ['var(--font-nippo)'],
        "open-sans": ['var(--font-open-sans)'],
        roboto: ['var(--font-roboto)'],
        raleway: ['var(--font-raleway)'],
        "lexend-deca": ['var(--font-lexend-deca)']
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
