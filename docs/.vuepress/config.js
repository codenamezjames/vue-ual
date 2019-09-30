module.exports = {
  plugins: [
    require('./plugin.js')
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VueUal',
      description: 'UAL for Vue.js'
    }
  },
  themeConfig: {
    repo: '/vue-ual',
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [{
          text: 'Changelog',
          link: 'https://github.com/codenamezjames/vue-ula/blob/master/CHANGELOG.md'
        }],
        sidebar: [
          '/installation.md',
          '/started.md',
        ]
      }
    }
  }
}
