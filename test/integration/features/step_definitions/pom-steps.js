import {promises as fs} from 'node:fs';
import {XMLParser} from 'fast-xml-parser';

import {Then} from '@cucumber/cucumber';
import {assert} from 'chai';

Then('the pom file is created', async function () {
  const parser = new XMLParser();
  const pomContent = await fs.readFile(`${this.projectRoot}/pom.xml`, 'utf-8');
  const parsedContent = parser.parse(pomContent);

  assert.deepEqual(parsedContent, {project: {modelVersion: '4.0.0', artifactId: this.projectName}});
  assert.deepEqual(
    pomContent,
    `<project>
  <modelVersion>4.0.0</modelVersion>
  <artifactId>${this.projectName}</artifactId>
</project>
`
  );
});
