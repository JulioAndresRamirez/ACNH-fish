// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      poppins: ['Poppins'],
    },
    extend: {
      boxShadow: {
        fishHeader: '0px 6px 4px rgba(0, 0, 0, 0.02);',
      },
      colors: {
        'fish-background': '#F6F7FB',
        'fish-lightgray': '#DEDEDE',
        'fish-text-primary': '#001567',
        'fish-text-small': '#828282',
        'fish-button-default': '#EFEFEF',
        'fish-button-selected': '#22F2FF',
        'fish-accent-cian': '#77FBDE',
        'fish-accent-blue': '#5850EC',
        'fish-accent-red': '#FF0080',
        'fish-accent-green': '#3DF165',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: 'repeat(16, minmax(0, 1fr))',
      },
      spacing: {
        imageFixed: '0.01rem',
        14: '3.5rem',
        28: '7rem',
        52: '15rem',
        72: '18rem',
        fisTileWMAx: '18.4375rem',
        fishHTileDefault: '6.6875rem',
        fishTileWMin: '335px',
      },
    },
  },
  variants: {
    extend: {
      backgroundClip: ['hover']
    },
  },
  plugins: [],
}
