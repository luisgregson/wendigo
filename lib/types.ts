import DomElement from './models/dom_element';
import { Viewport } from 'puppeteer';

export type CssSelector = string;
export type XPathSelector = string;

export type WendigoSelector = CssSelector | XPathSelector | DomElement;

export interface BrowserSettings {
    log?: boolean;
    userAgent?: string;
    bypassCSP?: boolean;
    headless?: boolean;
    args?: Array<string>;
    slowMo?: number;
    incognito?: boolean;
    noSandbox?: boolean;
    proxyServer?: string | null;
    timezone?: string;
}

export interface FinalBrowserSettings extends BrowserSettings {
    __onClose: (a: any) => any;
    env?: {
        TZ: string
    };
}

export type WendigoPluginInterface = any; // TODO: improve
export type WendigoPluginAssertionInterface = any;

export interface OpenSettings {
    clearRequestMocks?: boolean;
    viewport?: Viewport;
    queryString?: string | { [s: string]: string; };
}
