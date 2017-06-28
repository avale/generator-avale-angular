/* global moment:false */

<% if (props.languageSupport) { -%>
import { config, configTranslations } from './index.config';
<% } else { -%>
import { config } from './index.config';
<% } -%>

<% if (props.router.key === 'new-router') { -%>
import { routerConfig, RouterController } from './index.route';
<% } else if (props.router.key !== 'noRouter') { -%>
import { routerConfig } from './index.route';
<% } -%>
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';

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
