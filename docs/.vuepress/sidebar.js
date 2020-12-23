module.exports = {
  '/reference': [
    '/',
    {
      title: 'Reference',
      path: '/reference',
      collapsable: false,
      children: [
        {
          title: 'APIs',
          path: '/reference/api',
          children: [
            'reference/api/authentication',
            'reference/api/pieces',
            'reference/api/pages',
            'reference/api/media',
            'reference/api/field-formats'
          ]
        },
        {
          title: 'Field Types',
          path: '/reference/field-types',
          children: [
            'reference/field-types/area',
            'reference/field-types/array',
            'reference/field-types/attachment',
            'reference/field-types/boolean',
            'reference/field-types/checkbox',
            'reference/field-types/color',
            'reference/field-types/date',
            'reference/field-types/email',
            'reference/field-types/float',
            'reference/field-types/integer',
            'reference/field-types/relationship',
            'reference/field-types/relationship-reverse',
            'reference/field-types/object',
            'reference/field-types/password',
            'reference/field-types/range',
            'reference/field-types/select',
            'reference/field-types/string',
            'reference/field-types/slug',
            'reference/field-types/time',
            'reference/field-types/url',
            {
              title: 'Field Properties',
              path: '/reference/field-types/field-properties',
              children: [
                'reference/field-types/field-properties/choices',
                'reference/field-types/field-properties/sortify'
              ]
            }
          ]
        }
      ]
    }
  ],
  '/': [
    '/whats-new.md',
    '/coming-soon.md',
    '/major-changes.md',
    '/upgrade.md',
    '/starting-your-project.md',
    '/module-format-example.md',
    '/front-end-assets.md',
    '/widgets-and-templates.md',
    '/custom-widgets.md',
    '/custom-page-types.md',
    '/page-tree-navigation.md',
    '/pieces.md',
    '/piece-pages.md',
    '/async-components.md',
    '/rest-apis.md',
    'reference/'
  ]
};
