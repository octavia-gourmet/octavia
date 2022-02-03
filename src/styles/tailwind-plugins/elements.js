module.exports = ({ theme, addUtilities }) => {
  addUtilities({
    '.btn-red': {
      fontFamily: theme('fontFamily')['gotham-book'],
      color: theme('colors')['red'],
      height: '48px',
      width: '220px',
      fontSize: '18px',
      letterSpacing: '0',
      lineHeight: '24px',
      textAlign: 'center',
      border: `2px solid ${theme('colors')['red']}`,
    },
    '.btn-black': {
      fontFamily: theme('fontFamily')['gotham-book'],
      color: theme('colors')['body'],
      height: '48px',
      width: '220px',
      fontSize: '18px',
      letterSpacing: '0',
      lineHeight: '24px',
      textAlign: 'center',
      border: `2px solid ${theme('colors')['body']}`,
    },
    '.btn-shop': {
      position: 'absolute',
      bottom: '8px',
      right: '8px',
    },
    '.checkbox': {
      appearance: 'none',
      width: '16px',
      height: '16px',
      backgroundColor: theme('colors')['beige'],
      border: `1px solid ${theme('colors')['smoke']}`,
      position: 'relative',
      '&:checked': {
        backgroundImage: theme('backgroundImage')['checkmark'],
        border: `1px solid ${theme('colors')['yellow']}`,
        backgroundSize: 'contain',
      },
    },
    '.filter-badge': {
      fontFamily: theme('fontFamily')['gotham-book'],
      color: theme('colors')['smoke'],
      height: '32px',
      width: 'auto',
      fontSize: '12px',
      letterSpacing: '1.2px',
      lineHeight: '12px',
      border: `1px solid ${theme('colors')['pink']}`,
      borderRadius: '9999px',
      marginRight: '20px',
      padding: '0 10px 0 12px',
      backgroundColor: theme('colors')['white'],
    },
    '.input': {
      fontFamily: theme('fontFamily')['gotham-book'],
      color: theme('colors')['body'],
      border: '2px',
      height: '3.5rem',
      paddingLeft: '7px',
      paddingRight: '4px',
      border: `2px solid ${theme('colors')['beige']}`,
    },
  });
};
