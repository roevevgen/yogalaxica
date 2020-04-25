const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.styles([
    'resources/assets/css/open-iconic-bootstrap.min.css',
    'resources/assets/css/animate.css',
    'resources/assets/css/owl.carousel.min.css',
    'resources/assets/css/owl.theme.default.min.css',
    'resources/assets/css/magnific-popup.css',
    'resources/assets/css/aos.css',
    'resources/assets/css/ionicons.min.css',
    'resources/assets/css/bootstrap-datepicker.css',
    'resources/assets/css/jquery.timepicker.css',
    'resources/assets/css/flaticon.css',
    'resources/assets/css/icomoon.css',
    'resources/assets/css/style.css'
], 'public/css/yogalaxica.css');

mix.scripts([
    'resources/assets/js/jquery.min.js',
    'resources/assets/js/jquery-migrate-3.0.1.min.js',
    'resources/assets/js/popper.min.js',
    'resources/assets/js/bootstrap.min.js',
    'resources/assets/js/jquery.easing.1.3.js',
    'resources/assets/js/jquery.waypoints.min.js',
    'resources/assets/js/jquery.stellar.min.js',
    'resources/assets/js/owl.carousel.min.js',
    'resources/assets/js/jquery.magnific-popup.min.js',
    'resources/assets/js/aos.js',
    'resources/assets/js/jquery.animateNumber.min.js',
    'resources/assets/js/bootstrap-datepicker.js',
    'resources/assets/js/jquery.timepicker.min.js',
    'resources/assets/js/scrollax.min.js',
    'resources/assets/js/google-map.js',
    'resources/assets/js/main.js'
], 'public/js/yogalaxica.js');

mix.copy('resources/assets/fonts', 'public/fonts');

mix.copy('resources/assets/images', 'public/images');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
