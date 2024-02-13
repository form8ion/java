// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {scaffold, lift, test} from './lib/index.js';

// remark-usage-ignore-next
stubbedFs();

// #### Execute

(async () => {
  const projectRoot = process.cwd();

  await scaffold({projectRoot, projectName: 'project-name'});

  if (await test({projectRoot})) {
    await lift({projectRoot, vcs: {}});
  }
})();
