import plugin from 'tailwindcss/plugin';

export const customPlugin = plugin(({ addComponents, addUtilities }) => {
  addComponents({
    '.card-hover': {
      '@apply relative p-6 rounded-lg overflow-hidden border': {},
      transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
      borderColor: 'rgba(201, 100, 66, 0.1)',
      '&:hover': {
        backgroundColor: '#ede9de',
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 16px rgba(201, 100, 66, 0.1)',
        '& h3': {
          color: '#c96442',
        },
        '& .border-accent': {
          height: '80px',
        },
      },
    },
    '.border-accent': {
      '@apply absolute top-0 left-0 w-1 transition-all duration-300': {},
      height: '0px',
      backgroundColor: '#c96442',
    },
    '.section-heading': {
      '@apply text-xs uppercase tracking-widest font-bold mb-6 flex items-center': {},
      color: 'hsl(48 20% 20%)',
    },
    '.date-range': {
      fontSize: '12px',
      color: '#83827d',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    '.card-title': {
      fontSize: '18px',
      fontWeight: '600',
      color: '#3d3929',
      marginBottom: '8px',
      transition: 'color 0.3s ease',
    },

    '.card-description': {
      fontSize: '15px',
      color: '#83827d',
      lineHeight: '1.7',
    },

    '.tech-badge': {
      '@apply px-3 py-1.5 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105': {},
      fontSize: '13px',
      backgroundColor: 'white',
      color: '#3d3929',
      border: '1px solid rgba(201, 100, 66, 0.15)',
      boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
    },

    '.tech-badge-lg': {
      '@apply px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-sm flex items-center gap-2.5 cursor-default': {},
      fontSize: '13px',
      backgroundColor: 'white',
      color: '#3d3929',
      border: '1px solid rgba(201, 100, 66, 0.15)',
      boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
    },
  });

  addUtilities({
    '.text-primary-custom': {
      color: '#3d3929',
    },
    '.text-secondary-custom': {
      color: '#83827d',
    },
    '.text-accent-custom': {
      color: '#c96442',
    },
    '.bg-card-custom': {
      backgroundColor: '#ede9de',
    },
  });
});