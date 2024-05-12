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

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'piyovi', // Usually your GitHub org/user name.
  projectName: 'piyovi-docs', // Usually your repo name.

  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  staticDirectories: ['public', 'static'],
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          docItemComponent: "@theme/ApiItem",
          docRootComponent: "@theme/DocRoot",
        
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
       
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
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          label: "Api Reference",
          to: "/api-reference",
        },
      ],
    },
    footer: {
      links: [
      
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Piyovi, Inc.`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
    announcementBar: {
      id: "announcementBar_1",
      content:
        "🥳 First v2.0.0 stable release! Currently only compatible with Docusaurus v2.4.1 -> v2.4.3",
    },
   
  } satisfies Preset.ThemeConfig,
  plugins:[
    // [
    //   '@scalar/docusaurus',
    //   {
    //     id: 'api-reference-1', 
    //     label: "Api Reference",
    //     route: '/api-reference',
    //     configuration: {
    //       baseServerURL:"https://apidev.piyovi.io",
    //       hideModels: true,
    //       withDefaultFonts: false,
    //       spec: {
    //         url: 'http://localhost:7587/swagger/v1/swagger.json',
    //       },
    //     }
    //   } as ScalarOptions,
    // ],
[ 'docusaurus-lunr-search',{
  languages: ['en'] // language codes

 }],
 [
  'docusaurus-plugin-openapi-docs',
  {
    id: "openapi", // plugin id
    docsPluginId: "classic", // id of plugin-content-docs or preset for rendering docs
    config: {
      api: {
        
        specPath: "https://apidev.piyovi.io/swagger/v1/swagger.json",
        outputDir: "docs/api-reference", // No trailing slash
        sidebarOptions: {
          groupPathsBy: "tag",
          categoryLinkSource: "tag",
        },
        // version: "2.0.0", // Current version
        // label: "v2.0.0", // Current version label
        // baseUrl: "/api-reference/get-started", // Leading slash is important
        // versions: {
        //   "1.0.0": {
        //     specPath: "https://apidev.piyovi.io/swagger/v1/swagger.json",
        //     outputDir: "docs/api-reference/1.0.0", // No trailing slash
        //     label: "v1.0.0",
        //     baseUrl: "/api-reference/1.0.0/get-started", // Leading slash is important
        //   },
        // },
      }
  
    }
  }],
  [
    '@docusaurus/plugin-pwa',
    {
      debug: true,
      offlineModeActivationStrategies: [
        'appInstalled',
        'standalone',
        'queryString',
      ],
      pwaHead: [
        {
          tagName: 'link',
          rel: 'icon',
          href: '/img/docusaurus.png',
        },
        {
          tagName: 'link',
          rel: 'manifest',
          href: '/manifest.json', // your PWA manifest
        },
        {
          tagName: 'meta',
          name: 'theme-color',
          content: 'rgb(37, 194, 160)',
        },
      ],
    },
  ],
],
themes: ["docusaurus-theme-openapi-docs"],


};

export default config;

 

