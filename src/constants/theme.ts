export const COLORS = {
  primary: '#c96442',
  
  background: {
    main: 'hsl(48 38% 96%)',
    card: '#ede9de',
    cardHover: '#ede9de',
  },
  
  text: {
    primary: '#3d3929',
    primaryAlt: 'hsl(48 20% 20%)',
    secondary: '#83827d',
    muted: 'hsl(48 3% 50%)',
  },
  
  border: {
    default: 'rgba(201, 100, 66, 0.1)',
    accent: 'rgba(201, 100, 66, 0.2)',
    strong: 'rgba(201, 100, 66, 0.3)',
  },
  
  shadow: {
    card: '0 8px 16px rgba(201, 100, 66, 0.1)',
    button: '0 4px 12px rgba(201, 100, 66, 0.08)',
    buttonHover: '0 8px 20px rgba(201, 100, 66, 0.25)',
  },
} as const;

export const SPACING = {
  spotlight: {
    radius: 400,
  },
  scroll: {
    threshold: 300,
  },
  cardBorder: {
    heightDefault: 0,
    heightHover: 80,
  },
} as const;

export const TRANSITIONS = {
  smooth: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  duration: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
  },
  timing: {
    easeOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

export const TYPOGRAPHY = {
  fontSize: {
    xs: '12px',
    sm: '13px',
    base: '14px',
    md: '15px',
    lg: '16px',
    xl: '18px',
  },
  lineHeight: {
    tight: '1.6',
    normal: '1.7',
  },
} as const;