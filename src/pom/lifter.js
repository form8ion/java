import {promises as fs} from 'node:fs';
import {XMLParser} from 'fast-xml-parser';

import {write} from './xml/index.js';
import {getPathTo} from './file.js';
import defineScmDetails from './scm.js';

export default async function ({projectRoot, vcs}) {
  const pathToPom = getPathTo(projectRoot);
  const parser = new XMLParser();
  const existingPomContents = parser.parse(await fs.readFile(pathToPom, 'utf-8'));

  existingPomContents.project.scm = defineScmDetails(vcs);

  await write({path: pathToPom, contents: existingPomContents});

  return {};
}
