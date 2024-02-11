import {promises as fs} from 'node:fs';
import {XMLBuilder} from 'fast-xml-parser';

import {getPathTo} from './file.js';

export default async function ({projectRoot, projectName}) {
  const builder = new XMLBuilder({format: true});

  await fs.writeFile(
    getPathTo(projectRoot),
    builder.build({project: {modelVersion: '4.0.0', artifactId: projectName}})
  );
}
