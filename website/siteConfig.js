/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [];

const siteConfig = {
  title: "Backstage.", // Title for your website.
  tagline: "An open platform for building developer portals",
  url: "https://backstage.tech", // Your website URL
  cname: "backstage.tech",
  baseUrl: "/s/backstage-microsite/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "backstage",
  organizationName: "Spotify",
  fossWebsite: "https://spotify.github.io/",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { page: "background.html", label: "The Spotify story" },
    { doc: "getting-started.html", label: "Docs" },
    { href: "https://github.com/spotify/backstage", label: "GitHub" }
  ],

  /* path to images for header/footer */
  // headerIcon: "img/android-chrome-192x192.png",
  footerIcon: "img/android-chrome-192x192.png",
  favicon: "img/favicon.ico",

  /* Colors for website */
  colors: {
    primaryColor: "#1DB954",
    secondaryColor: "#191414",
    textColor: "#FFFFFF",
    navigatorTitleTextColor: "#9e9e9e",
    navigatorItemTextColor: "#616161",
  },

  /* Colors for syntax highlighting */
  highlight: {
    theme: 'dark'
  },

  /* Custom fonts for website */

  fonts: {
    backstageFontDisplay: ["Red Hat Display", "sans-serif", "system-ui"],
    backstageFontText: ["Red Hat Text", "sans-serif", "system-ui"],
    backstageMonoText: ["IBM Plex Mono", "Menlo", "Monaco", "Consolas", "Courier New", "monospace"]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Spotify AB`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "monokai"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://buttons.github.io/buttons.js"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg",

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/spotify/backstage',
  twitterUsername: 'SpotifyEng',

  stylesheets: [
    "https://fonts.googleapis.com/css?family=Red+Hat+Text:400,400i,500,500i&display=swap&subset=latin-ext",
    "https://fonts.googleapis.com/css?family=Red+Hat+Display:700&display=swap&subset=latin-ext",
    "https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500,700&display=swap"
  ]
};

module.exports = siteConfig;
