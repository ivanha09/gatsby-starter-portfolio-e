module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Ivan', // Navigation and Site Title
  siteTitleAlt: 'Ivan - Portfolio', // Alternative Site title for SEO
  siteTitleShort: 'Ivan', // short_name for manifest
  siteHeadline: 'Design for web and print', // Headline for schema.org JSONLD
  siteUrl: 'https://www.ivanha.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo.png', // Used for SEO and manifest
  siteDescription: 'Graphic design portfolio',
  author: 'Ivan', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@ivanha', // Twitter Username
  ogSiteName: 'ivanha', // Facebook Site Name
  ogLanguage: 'en_US', // og:language
  googleAnalyticsID: 'G-N14CZHZ8D3',

  // Manifest and Progress color
  themeColor: '#BBA05B',
  backgroundColor: '#2b2e3c',

  // Your information
  avatar: '/logos/ivanha.png',
  name: 'IvanHa',
  location: 'Toronto',
  socialMedia: [
    {
      url: '../about/',
      name: 'About',
    },
    {
      url: '../',
      name: 'Work',
    },
    {
      url: 'mailto:info@ivanha.com',
      name: 'Contact'
    },
    {
      url: 'https://www.linkedin.com/in/ivan-h-8ab3583b/',
      name: 'LinkedIn',
    },
    {
      url: 'https://github.com/ivanha09',
      name: 'GitHub',
    },
  ],
}
