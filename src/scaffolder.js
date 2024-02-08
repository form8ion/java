import {scaffold as scaffoldPom} from './pom/index.js';

export default async function ({projectRoot, projectName}) {
  await scaffoldPom({projectRoot, projectName});

  return {};
}
