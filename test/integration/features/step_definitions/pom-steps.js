import {promises as fs} from 'node:fs';
import {XMLParser} from 'fast-xml-parser';

import {Then} from '@cucumber/cucumber';
import {assert} from 'chai';

Then('the pom file is created', async function () {
  const parser = new XMLParser();
  const parsedContent = parser.parse(await fs.readFile(`${this.projectRoot}/pom.xml`, 'utf-8'));

  assert.deepEqual(parsedContent, {project: {modelVersion: '4.0.0'}});
});
