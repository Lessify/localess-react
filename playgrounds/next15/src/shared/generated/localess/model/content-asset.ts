/* tslint:disable */
/* eslint-disable */
/**
 * Localess Open API Specification
 * Fetch data from Localess via REST API
 *
 * The version of the OpenAPI document: 2.4.1
 * Contact: info@lessify.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Content Asset define reference to a Asset.
 * @export
 * @interface ContentAsset
 */
export interface ContentAsset {
    /**
     * Define the type of Asset
     * @type {string}
     * @memberof ContentAsset
     */
    'kind': ContentAssetKindEnum;
    /**
     * Unique identifier for the asset.
     * @type {string}
     * @memberof ContentAsset
     */
    'uri': string;
}

export const ContentAssetKindEnum = {
    Asset: 'ASSET'
} as const;

export type ContentAssetKindEnum = typeof ContentAssetKindEnum[keyof typeof ContentAssetKindEnum];


