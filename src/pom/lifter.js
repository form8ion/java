import {parse, write} from './xml/index.js';
import {getPathTo} from './file.js';
import defineScmDetails from './scm.js';

export default async function ({projectRoot, vcs}) {
  const pathToPom = getPathTo(projectRoot);
  const existingPomContents = await parse({path: pathToPom});

  existingPomContents.project.scm = defineScmDetails(vcs);

  await write({path: pathToPom, contents: existingPomContents});

  return {};
}
