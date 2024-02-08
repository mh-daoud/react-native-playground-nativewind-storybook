const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro')
const path = require('path');
const { generate } = require('@storybook/react-native/scripts/generate');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */


generate({
    configPath: path.resolve(__dirname, './.storybook'),
});

const config = mergeConfig(getDefaultConfig(__dirname), {
    transformer: {
        unstable_allowRequireContext: true,
    },

});;

module.exports = withNativeWind(config, { input: './global.css' })
