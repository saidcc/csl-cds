'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'CSL Design Components');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/build');

/*
 * Set Fractal to use Nunjucks Template Engine.
 */
fractal.components.engine('@frctl/nunjucks');
fractal.components.set('ext', '.njk');
fractal.docs.set('ext', '.html');  
