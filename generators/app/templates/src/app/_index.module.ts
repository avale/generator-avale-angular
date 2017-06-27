/// <reference path="../../typings/main.d.ts" />

import { config } from './index.config';
<% if (props.router.key === 'new-router') { -%>
import { routerConfig, RouterController } from './index.route';
<% } else if (props.router.key !== 'noRouter') { -%>
import { routerConfig } from './index.route';
<% } -%>
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';

declare var moment: moment.MomentStatic;

module <%- appName %> {
  'use strict';

  angular.module('<%- appName %>', [<%- modulesDependencies %>])
    .constant('moment', moment)
    .config(config)
<% if (props.router.key !== 'noRouter') { -%>
    .config(routerConfig)
<% } -%>
    .run(runBlock)
<% if (props.router.key === 'new-router') { -%>
    .controller('RouterController', RouterController)
<% } -%>
    .controller('MainController', MainController);
}
