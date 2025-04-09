import type React from "react";

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

  /**
   * Components mapping for Localess Component integration
   */
  components?: Record<string, React.ElementType>;
  /**
   * Component used if expected key didn't return anything
   */
  fallbackComponent?: React.ElementType;

  /**
   * Load Sync Script, for Visual Editor integration
   */
  enableSync?: boolean
};
