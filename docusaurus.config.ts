import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { ScalarOptions } from '@scalar/docusaurus';

const config: Config = {
  title: 'Piyovi',
  tagline: 'Dinosaurs are cool',
  favicon: 'https://piyovi.io/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',


  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Piyovi',
        src: 'https://piyovi.com/wp-content/uploads/2022/06/logo-removebg-preview-1.png',
        srcDark :'https://secureservercdn.net/198.71.233.71/agh.925.myftpupload.com/wp-content/uploads/2022/06/logo_white-e1656456093112.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guides',
          position: 'left',
          label: 'Product Guide',
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'changelog',
          label: 'Releases',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
       
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins:[[
    '@scalar/docusaurus',
    {
      label: 'Api Reference',
      route: '/api-reference',
      configuration: {
        spec: {
          url: 'https://cdn.scalar.com/spec/openapi_petstore.json',
        },
      }
    } as ScalarOptions,
  ]],
};

export default config;
