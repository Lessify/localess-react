import type React from 'react';
import {loadLocalessSync, LocalessClient, localessClient} from "@localess/js-client";
import {FONT_BOLD, FONT_NORMAL} from "./console";
import {LocalessOptions} from "./models";

let client: LocalessClient | undefined = undefined
let components: Record<string, React.ElementType> = {};
let fallbackComponent: React.ElementType | undefined = undefined;
let enableSync: boolean = false;

export function localessInit(options: LocalessOptions) {
  client = localessClient(options);

  components = options.components || {};
  fallbackComponent = options.fallbackComponent;
  if (options.enableSync) {
    enableSync = true;
    loadLocalessSync(options.origin)
  }
}

export function getLocalessClient(): LocalessClient {
  if (!client) {
    console.error('[Localess] No client found. Please check if the Localess is initialized.');
    throw new Error('[Localess] No client found.');
  }
  return client;
}

export function getComponent(key: string): React.ElementType | undefined {
  if (Object.hasOwn(components, key)) {
    console.error(`[Localess] component %c${key}%c can't be found.`, FONT_BOLD, FONT_NORMAL)
    return undefined;
  }
  return components[key];
}

export function getFallbackComponent(): React.ElementType | undefined {
  return fallbackComponent;
}

export function isSyncEnabled(): boolean {
  return enableSync;
}

// Client + Edit
export {llEditable, LocalessClient} from '@localess/js-client'
// Sync
export {LocalessSync, EventToApp, EventCallback, EventToAppType} from '@localess/js-client'
// Models
export type * from './models';
