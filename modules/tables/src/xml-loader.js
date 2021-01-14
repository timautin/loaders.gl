/** @typedef {import('@loaders.gl/loader-utils').LoaderObject} LoaderObject */
import parseXML, {parseXMLSupported} from './lib/xml/parse-xml';

const XML_HEADER = '<?xml';

function testText(text) {
  return text.startsWith(XML_HEADER);
}
/**
 * @type {LoaderObject}
 */
export default {
  name: 'XML',
  extensions: ['xml'],
  supported: parseXMLSupported(),
  testText,
  parseTextSync: parseXML,
  browserOnly: true,
  worker: false
};
