import {promises as fs} from 'node:fs';
import {XMLParser} from 'fast-xml-parser';

export default async function parseXmlFile({path}) {
  const parser = new XMLParser();

  return parser.parse(await fs.readFile(path, 'utf-8'));
}
