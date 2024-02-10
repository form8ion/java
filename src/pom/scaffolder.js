import {promises as fs} from 'node:fs';
import {XMLBuilder} from 'fast-xml-parser';

export default async function ({projectRoot, projectName}) {
  const builder = new XMLBuilder({format: true});

  await fs.writeFile(
    `${projectRoot}/pom.xml`,
    builder.build({project: {modelVersion: '4.0.0', artifactId: projectName}})
  );
}
