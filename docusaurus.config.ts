import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import schema from './schema.json';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const config: Config = {
  title: 'Prompt.org.es - Aprende Ingeniería de Prompts en Español',
  tagline: 'Aprende sobre ingeniería de prompts, inteligencia artificial y procesamiento de lenguaje natural. Tutoriales, guías y recursos en español.',
  favicon: 'img/logo.ico',

  // Set the production url of your site here
  url: 'https://www.prompt.org.es/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jagger499', // Usually your GitHub org/user name.
  projectName: 'prompt.org.es', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/jagger499/prompt.org.es/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: {
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'Prompt.org.es - Blog sobre Ingeniería de Prompts',
            description: 'Últimas actualizaciones y tutoriales sobre ingeniería de prompts, IA y PLN',
            copyright: `Copyright © ${new Date().getFullYear()} Prompt.org.es`,
            language: 'es',
          },
          editUrl: 'https://github.com/jagger499/prompt.org.es/tree/main/',
          blogTitle: 'Blog de Ingeniería de Prompts',
          blogDescription: 'Tutoriales, guías y recursos sobre ingeniería de prompts, IA y procesamiento de lenguaje natural',
          postsPerPage: 10,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {name: 'keywords', content: 'prompting, ingeniería de prompts, ia, inteligencia artificial, tutoriales, gpt, machine learning, nlp, procesamiento lenguaje natural, prompt engineering, chatgpt, openai'},
      {name: 'description', content: 'Aprende ingeniería de prompts con tutoriales prácticos y guías detalladas. Recursos en español sobre IA, procesamiento de lenguaje natural y prompt engineering.'},
      {name: 'google-site-verification', content: 'wIJCtyoka3eS6grq65oWfQPomVw1iPINcjvaYwdVIKs'},
      {name: 'og:title', content: 'Prompt.org.es - Aprende Ingeniería de Prompts en Español'},
      {name: 'og:description', content: 'Tutoriales y guías prácticas sobre ingeniería de prompts, IA y PLN en español'},
      {name: 'og:type', content: 'website'},
      {name: 'og:site_name', content: 'Prompt.org.es'},
      {name: 'og:image:width', content: '1200'},
      {name: 'og:image:height', content: '630'},
      {name: 'og:image:type', content: 'image/png'},
      {name: 'og:image', content: 'https://www.prompt.org.es/img/social/default.png'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@promptorges'},
      {name: 'twitter:creator', content: '@promptorges'},
      {name: 'twitter:image', content: 'https://www.prompt.org.es/img/social/default.png'},
      {name: 'twitter:title', content: 'Prompt.org.es - Ingeniería de Prompts'},
      {name: 'twitter:description', content: 'Aprende ingeniería de prompts con tutoriales prácticos y guías detalladas en español'},
      {name: 'script', content: JSON.stringify(schema)},
      {name: 'msapplication-TileColor', content: '#1a1a1a'},
      {name: 'theme-color', content: '#1a1a1a'}
    ],
    navbar: {
      title: 'Prompt.org.es',
      logo: {
        alt: 'Prompt.org.es Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutoriales',
          to: '/docs/introduccion-prompting-guia-completa'
        },
        {
          href: 'https://github.com/jagger499/prompt.org.es',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contenido',
          items: [
            {
              label: 'Tutoriales',
              to: '/docs/intro',
            },
            {
              label: 'Prompt Basics',
              to: '/docs/prompt-basics/intro',
            },
          ],
        },
        {
          title: 'Recursos',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/jagger499/prompt.org.es',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Prompt.org.es - Todos los derechos reservados`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
