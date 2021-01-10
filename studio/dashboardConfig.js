export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffb263c0cc6c3598333867d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9hfjwckr',
                  apiId: '3827b4fc-b1fe-4727-a284-5c1ce29b7459'
                },
                {
                  buildHookId: '5ffb263d93ca4a20e4652f57',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-trdcfpv3',
                  apiId: '22a4ef38-f030-4bcb-a102-d94e64a10525'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mthomas100/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-trdcfpv3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
