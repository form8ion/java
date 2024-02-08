import {fileExists} from '@form8ion/core';

import {Then} from '@cucumber/cucumber';
import {assert} from 'chai';

Then('the pom file is created', async function () {
  assert.isTrue(await fileExists(`${this.projectRoot}/pom.xml`));
});
