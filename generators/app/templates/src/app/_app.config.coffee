angular.module '<%- appName %>'
  .config ($logProvider) ->
    'ngInject'
    # Enable log
    $logProvider.debugEnabled true

<% if (props.languageSupport) { -%>
  .config ($translateProvider) ->
    'ngInject'
    $translateProvider.useStaticFilesLoader
      prefix: 'assets/translations/'
      suffix: '.json'
    .determinePreferredLanguage()

    $translateProvider.useSanitizeValueStrategy 'escapeParameters'

    language = $translateProvider.preferredLanguage()
    language = language.split('_')[0]

    supportedLanguages = ['sv', 'en']

    language = 'en' if (supportedLanguages.indexOf language) == -1;

    $translateProvider.preferredLanguage language
    moment.locale language
<% } -%>
