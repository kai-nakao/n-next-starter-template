import '@testing-library/jest-dom/vitest'
// For rechart graph
// Nodejs doesn't support ResizeObserver, so we need to polyfill it
global.ResizeObserver = require('resize-observer-polyfill')
