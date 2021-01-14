/** @typedef {import('@loaders.gl/loader-utils').LoaderObject} LoaderObject */

function parseTextSync(text, options) {
  return JSON.parse(text);
}

/**
 * @type {LoaderObject}
 */
export default {
  name: 'JSON',
  extensions: ['json'],
  testText: null,
  parseTextSync
};
