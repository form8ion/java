import {promises as fs} from 'node:fs';

import {Given, Then} from '@cucumber/cucumber';
import {XMLParser} from 'fast-xml-parser';
import {assert} from 'chai';

Given('vcs details are not defined in the pom', async function () {
  await fs.writeFile(`${this.projectRoot}/pom.xml`, '<project><modelVersion>4.0.0</modelVersion></project>');
});

Then('vcs details are defined in the pom', async function () {
  const parser = new XMLParser();
  const {project: {scm}} = parser.parse(await fs.readFile(`${this.projectRoot}/pom.xml`, 'utf-8'));

  assert.deepEqual(scm, {tag: 'HEAD'});
});
