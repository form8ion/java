import {scaffold as scaffoldPom} from './pom/index.js';

export default async function scaffold({projectRoot, projectName}) {
  await scaffoldPom({projectRoot, projectName});

  return {};
}
