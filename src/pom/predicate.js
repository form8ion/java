import {fileExists} from '@form8ion/core';

export default function pomFileExists({projectRoot}) {
  return fileExists(`${projectRoot}/pom.xml`);
}
