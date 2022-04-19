// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Love of Wisdom',
  tagline: 'For those who never want to stop learning',
  url: 'https://theloveofwisdom.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lucianonooijen', // Usually your GitHub org/user name.
  projectName: 'lovers-of-wisdom', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        //   path: 'guides',
          routeBasePath: 'guides',
          editUrl: 'https://github.com/lucianonooijen/lovers-of-wisdom/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/lucianonooijen/lovers-of-wisdom',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Lovers of Wisdom',
        logo: {
          alt: 'Lovers of Wisdom',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Learning guides',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/lucianonooijen/lovers-of-wisdom',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Creators',
            items: [
              {
                label: 'Luciano van der Toorn',
                to: 'https://lucianonooijen.com',
              },
              {
                label: 'Georgios Michalopoulos',
                to: 'https://lucianonooijen.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/xDj2WM75Vd',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/PhilosophiBooks',
              },
              {
                label: 'Lichess',
                href: 'https://lichess.org/team/philosophers',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/lucianonooijen/lovers-of-wisdom',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lovers of Wisdom`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
