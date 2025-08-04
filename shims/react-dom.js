// do resolve react dom errors of gluestack ui v2

/* Only used by metro --> native only */
// Empty shim for react-dom (used by @react-aria/utils in web contexts)
module.exports = {
  flushSync: () => {},
};
