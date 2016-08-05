/// <reference path="../typings/tsd.d.ts" />

import angular = require('angular');
import {HelloController} from './controller';
import {HelloService} from './service';
const app = angular.module('app', []);

app.controller('HelloController', HelloController);
app.service('HelloService', HelloService);

