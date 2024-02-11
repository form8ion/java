import {write} from './xml/index.js';
import {getPathTo} from './file.js';

export default async function ({projectRoot, projectName}) {
  await write({
    path: getPathTo(projectRoot),
    contents: {
      project: {
        modelVersion: '4.0.0',
        artifactId: projectName
      }
    }
  });
}
