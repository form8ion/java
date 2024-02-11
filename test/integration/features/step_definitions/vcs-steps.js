import {promises as fs} from 'node:fs';
import {XMLParser} from 'fast-xml-parser';

import {Given, Then} from '@cucumber/cucumber';
import {assert} from 'chai';
import any from '@travi/any';

Given('vcs details are not defined in the pom', async function () {
  await fs.writeFile(`${this.projectRoot}/pom.xml`, '<project><modelVersion>4.0.0</modelVersion></project>');
});

Given('the repository is hosted on github.com', async function () {
  const owner = any.word();
  const repositoryName = any.word();
  this.vcsDetails = {host: 'github', owner, name: repositoryName};
  this.vcsUrl = `https://github.com/${owner}/${repositoryName}`;
});

Then('vcs details are defined in the pom', async function () {
  const parser = new XMLParser();
  const {project: {scm}} = parser.parse(await fs.readFile(`${this.projectRoot}/pom.xml`, 'utf-8'));

  assert.deepEqual(scm, {tag: 'HEAD', url: this.vcsUrl});
});
