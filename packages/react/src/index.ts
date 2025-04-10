import type React from 'react';
import {loadLocalessSync, LocalessClient, localessClient} from "@localess/js-client";
import {FONT_BOLD, FONT_NORMAL} from "./console";
import {LocalessOptions} from "./models";

let _client: LocalessClient | undefined = undefined
let _components: Record<string, React.ElementType> = {};
let _fallbackComponent: React.ElementType | undefined = undefined;
let _enableSync: boolean = false;

export function localessInit(options: LocalessOptions): LocalessClient {
  console.log("localessInit", options);
  const {components, fallbackComponent, enableSync, ...restOptions} = options;
  _client = localessClient(restOptions);

  _components = components || {};
  _fallbackComponent = fallbackComponent;
  if (enableSync) {
    _enableSync = true;
    loadLocalessSync(restOptions.origin)
  }
  return _client;
}

export function getLocalessClient(): LocalessClient {
  if (!_client) {
    console.error('[Localess] No client found. Please check if the Localess is initialized.');
    throw new Error('[Localess] No client found.');
  }
  return _client;
}

export function getComponent(key: string): React.ElementType | undefined {
  if (Object.hasOwn(_components, key)) {
    console.error(`[Localess] component %c${key}%c can't be found.`, FONT_BOLD, FONT_NORMAL)
    return undefined;
  }
  return _components[key];
}

export function getFallbackComponent(): React.ElementType | undefined {
  return _fallbackComponent;
}

export function isSyncEnabled(): boolean {
  return _enableSync;
}

// Client + Edit
export {llEditable, LocalessClient} from '@localess/js-client'
// Sync
export {LocalessSync, EventToApp, EventCallback, EventToAppType} from '@localess/js-client'
// Models
export type * from './models';
// Component
export * from './localess-componenet';
