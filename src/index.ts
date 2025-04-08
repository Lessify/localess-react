import type React from 'react';
import {localessClient} from "@localess/js-client";

export type LocalessOptions = {
  /**
   * A fully qualified domain name with protocol (http/https) and port.
   *
   * Example: https://my-localess.web.app
   */
  origin: string;
  /**
   * Localess space ID, cna be found in the Localess Space settings
   */
  spaceId: string;
  /**
   * Localess API token, can be found in the Localess Space settings
   */
  token: string;
  /**
   * Content version to fetch, leave empty for 'published' or 'draft' for the latest draft
   */
  version?: 'draft' | string;
  /**
   * Enable debug mode
   */
  debug?: boolean;

  components?: Record<string, React.ElementType>;
  fallbackComponentEnable?: boolean;
} & {
  fallbackComponentEnable: true;
  fallbackComponent?: React.ElementType;
};

let components: Record<string, React.ElementType> = {};
let fallbackComponentEnable: boolean | undefined = undefined;
let fallbackComponent: React.ElementType | undefined = undefined;

export function localessInit(options: LocalessOptions) {
  const client = localessClient(options);

  components = options.components || {};
  fallbackComponentEnable = options.fallbackComponentEnable;
  fallbackComponent = options.fallbackComponent;
}

export function getComponent(key: string): React.ElementType | undefined {
  return components[key];
}

export function isFallbackComponentEnabled(): boolean {
  return fallbackComponentEnable === true;
}

export function getFallbackComponent(): React.ElementType | undefined {
  return fallbackComponent;
}
