import { Action } from "@thoughtspot/visual-embed-sdk";

export const USERNAME = `demo-user`;
// See https://github.com/thoughtspot/node-token-auth-server-example
// for the implementation of the below endpoint.
export const TOKEN_SERVER =
  "https://node-token-auth-server-example-eta.vercel.app";
export const TOKEN_ENDPOINT = `${TOKEN_SERVER}/api/gettoken/${USERNAME}`;
// If you change this to `demo-user` the request starts failing with 403
export const TOKEN_ENDPOINT_API = `${TOKEN_SERVER}/api/v2/gettoken/ashish.shubham@thoughtspot.com`;

// Cluster details
export const TS_HOST = `ft-9-0-5-tse.thoughtspotdev.cloud`;

// Liveboard
export const LiveboardId = "88bce971-35b9-41be-a20b-0e506e7f3789";

// Options for Select filter- EQ
export const filterName = "Lo Shipmode";
export const filterValues = [
  "air",
  "fob",
  "mail",
  "ship",
  "null",
  "invalid"
  // "massachusettes",
  // "illinois",
  // "new hampsire",
  // "maryland"
];

// Vizzes to show for 'Selected Vizs' button

export const visibleVizIds = [
  "f3d1b3b0-0b60-4d40-9d6e-4f6960e2f8c8"
  // "5c2924f5-4d89-42e8-b845-a5d6936bf25d"
  // "0e674e79-e08b-4690-9519-cf71c2ca72a6"
  // "5c77eea9-e0f8-4b1a-9dc1-573f296129a8"
];

// Options for Actions Disabled
export const actionsToDisable = [
  // Action.UpdateTML
  // Action.EditTML,
  // Action.ImportTML,
  // Action.ExportTML,
  // Action.Schedule
];
export const disabledReason = "Action disabled";

// Options for Actions hidden
export const actionsToHide = [];

// Create a custom action and update the name here.- ignore
// Selecting the action should only show the current viz.
export const customActionNameForShowThisViz = "show-json";
