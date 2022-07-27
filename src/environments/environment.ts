// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const baseAPIURL = "http://localhost:3000";
export const environment = {
  production: false,
  GOOGLE_CLIENT_ID: "275288905489-e6l8m1b3iutbmsddhb0l489inmdv023c.apps.googleusercontent.com",
  user_api: `${baseAPIURL}/users`,
  apiUrl: baseAPIURL,
  subject_api: `${baseAPIURL}/subjects`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
