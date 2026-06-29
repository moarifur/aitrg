import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'AI TRG',
  tagline: 'AITSO',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  organizationName: 'AITSO',
  projectName: 'AI TRG',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/moarifur/aitrg',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Course Outline',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'foundationSidebar',
            position: 'left',
            label: 'TCREI Framework Mastery',
          },

          {
            href: 'https://github.com/moarifur/aitrg',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} DRF Docs, Built by Mohammad Arifur Rahman`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
