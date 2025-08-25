import '@testing-library/jest-dom';

// Polyfill TextEncoder/TextDecoder for libraries that expect them in JSDOM
import {
    TextEncoder as NodeTextEncoder,
    TextDecoder as NodeTextDecoder,
} from 'util';

const hasTextEncoder =
    typeof (globalThis as { TextEncoder?: unknown }).TextEncoder !==
    'undefined';
const hasTextDecoder =
    typeof (globalThis as { TextDecoder?: unknown }).TextDecoder !==
    'undefined';

if (!hasTextEncoder) {
    Object.defineProperty(globalThis, 'TextEncoder', {
        value: NodeTextEncoder,
        writable: true,
        configurable: true,
    });
}

if (!hasTextDecoder) {
    Object.defineProperty(globalThis, 'TextDecoder', {
        value: NodeTextDecoder,
        writable: true,
        configurable: true,
    });
}
