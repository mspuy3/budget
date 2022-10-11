const { environment } = require('@rails/webpacker')

//From https://matthewhoelter.com/2021/08/13/how-to-install-bootstrap-5-in-ruby-on-rails-6-with-webpack.html

// Add the following lines
const webpack = require("webpack")

environment.plugins.append("Provide", new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']  // Not a typo, we're still using popper.js here
}))
// End new addition

module.exports = environment
