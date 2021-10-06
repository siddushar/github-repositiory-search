// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"

import { Application } from 'stimulus';
// import { definitionsFromContext } from 'stimulus/webpack-helpers';

import * as ActiveStorage from "@rails/activestorage"
import "channels"
require("bootstrap")
var jQuery = require('jquery')
require('webpack-jquery-ui');
require('webpack-jquery-ui/css');

// include jQuery in global and window scope (so you can access it globally)
// in your web browser, when you type $('.div'), it is actually refering to global.$('.div')
global.$ = global.jQuery = jQuery;
window.$ = window.jQuery = jQuery;

import "../stylesheets/application";
import 'bootstrap/dist/js/bootstrap.min';
import "@fortawesome/fontawesome-free/css/all"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import "controllers"
