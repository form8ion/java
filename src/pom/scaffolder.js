import {promises as fs} from 'node:fs';

export default async function ({projectRoot}) {
  await fs.writeFile(`${projectRoot}/pom.xml`, '');
}
