import {promises as fs} from 'node:fs';
import {XMLBuilder, XMLParser} from 'fast-xml-parser';

import {getPathTo} from './file.js';

export default async function ({projectRoot}) {
  const pathToPom = getPathTo(projectRoot);
  const parser = new XMLParser();
  const builder = new XMLBuilder({format: true});
  const existingPomContents = parser.parse(await fs.readFile(pathToPom, 'utf-8'));
  existingPomContents.project.scm = {tag: 'HEAD'};
  await fs.writeFile(pathToPom, builder.build(existingPomContents));

  return {};
}
