module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
           updown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(30px)' }, // لفوق
        },
      },
     animation: {
        updown: 'updown 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
