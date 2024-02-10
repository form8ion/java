import {promises as fs} from 'node:fs';
import {XMLBuilder, XMLParser} from 'fast-xml-parser';

export default async function ({projectRoot}) {
  const pathToPom = `${projectRoot}/pom.xml`;
  const parser = new XMLParser();
  const builder = new XMLBuilder({format: true});
  const existingPomContents = parser.parse(await fs.readFile(pathToPom, 'utf-8'));
  existingPomContents.project.scm = {tag: 'HEAD'};
  await fs.writeFile(pathToPom, builder.build(existingPomContents));

  return {};
}
