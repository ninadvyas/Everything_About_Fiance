
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Everything About Phynanc',
  tagline: '',
  favicon: 'img/favicon.ico',
  url: 'https://localhost:3000',
  baseUrl: '/',
  organizationName: 'EAP', 
  projectName: 'EAP', 
  trailingSlash: false,
  deploymentBranch: 'deployment',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

        },
        blog: {
          showReadingTime: true,

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-D4CDTL01MK', 
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Everything About Phynanc',
        logo: {
          alt: 'EAP',
          src: 'img/logo.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Docs',
          // },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/track/', label: 'Expanse Tracker', position: 'left'},
          {to: '/portfolio/', label: 'Portfolio', position: 'left'},
          {to: '/stocks/', label: 'Stocks', position: 'left'},
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'ND8NZ5P2WZ',

        apiKey: 'edd794130a1f50cef6f932aa163babb5',
  
        indexName: 'aipower',

        contextualSearch: true,
  

        externalUrlRegex: 'external\\.com|domain\\.com',
    
        searchParameters: {},
  

        searchPagePath: 'search',

      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
