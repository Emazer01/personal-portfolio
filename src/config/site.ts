export const siteConfig = {
  siteName: 'Gary Ferdinand Wahyudi',
  siteTitle: 'Gary Ferdinand Wahyudi — Indonesian Air Force Officer | Software, Infrastructure & AI',
  siteUrl: 'https://emazer01.github.io/personal-portfolio',
  github: {
    username: 'Emazer01',
    profileUrl: 'https://github.com/Emazer01',
    userApiUrl: 'https://api.github.com/users/Emazer01',
    reposApiUrl: 'https://api.github.com/users/Emazer01/repos?sort=updated&per_page=100',
    cacheKey: 'gfw_github_portfolio_cache_v1',
    cacheTtlMs: 30 * 60 * 1000 // 30 minutes
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/gary-ferdinand-wahyudi/',
    handle: 'in/gary-ferdinand-wahyudi'
  },
  cv: {
    // Replace public/documents/Gary-Ferdinand-Wahyudi-CV.pdf with your final PDF CV anytime
    path: './documents/Gary-Ferdinand-Wahyudi-CV.pdf',
    fileName: 'Gary-Ferdinand-Wahyudi-CV.pdf',
    isPlaceholder: true
  },
  contact: {
    // Add your real public contact email here when ready (leave empty string to avoid displaying unconfirmed email)
    email: '',
    // Optional: Add a Formspree or Web3Forms endpoint URL to enable an interactive contact form
    formEndpoint: ''
  },
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'GitHub', href: '#github' },
    { label: 'Credentials', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ]
} as const;
