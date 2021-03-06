import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({
  a: {
    color: '#36B5A2',
    boxShadow: 'none',
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'p code': {
    fontSize: '1.1rem'
  },
  'h1, h2, h3, h4, h5, h6, p, body': {
    fontFamily: 'Bitter, sans-serif',
  }
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
