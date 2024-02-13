import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

import {After, Before, When} from '@cucumber/cucumber';
import stubbedFs from 'mock-fs';

const __dirname = dirname(fileURLToPath(import.meta.url));          // eslint-disable-line no-underscore-dangle
const stubbedNodeModules = stubbedFs.load(resolve(__dirname, '..', '..', '..', '..', 'node_modules'));

let scaffold, lift, test;

Before(async function () {
  // eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
  ({scaffold, lift, test} = await import('@form8ion/java'));

  stubbedFs({
    node_modules: stubbedNodeModules
  });

  this.projectRoot = process.cwd();
});

After(function () {
  stubbedFs.restore();
});

When('the project is scaffolded', async function () {
  await scaffold({projectRoot: this.projectRoot, projectName: this.projectName});
});

When('the project is lifted', async function () {
  if (await test({projectRoot: this.projectRoot})) {
    await lift({projectRoot: this.projectRoot, vcs: this.vcsDetails});
  }
});
