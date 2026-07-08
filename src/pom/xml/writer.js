import {promises as fs} from 'node:fs';
import {XMLBuilder} from 'fast-xml-parser';

export default async function writeToXmlFile({path, contents}) {
  const builder = new XMLBuilder({format: true});

  await fs.writeFile(path, builder.build(contents));
}
