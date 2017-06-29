/// <reference path="../../typings/main.d.ts" />

<% if (props.languageSupport) { -%>
import { config, configTranslations } from './app.config';
<% } else { -%>
import { config } from './app.config';
<% } -%>

<% if (props.router.key === 'new-router') { -%>
import { routerConfig, RouterController } from './app.route';
<% } else if (props.router.key !== 'noRouter') { -%>
import { routerConfig } from './app.route';
<% } -%>
import { runBlock } from './app.run';
import { MainController } from './main/main.controller';

declare var moment: moment.MomentStatic;

module <%- appName %> {
  'use strict';

  angular.module('<%- appName %>', [<%- modulesDependencies %>])
    .constant('moment', moment)
    .config(config)
<% if (props.router.key !== 'noRouter') { -%>
    .config(routerConfig)
<% } if (props.languageSupport) { -%>
    .config(configTranslations)
<% } -%>
    .run(runBlock)
<% if (props.router.key === 'new-router') { -%>
    .controller('RouterController', RouterController)
<% } -%>
    .controller('MainController', MainController);
}
