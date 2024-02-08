import {scaffold as scaffoldPom} from './pom/index.js';

export default async function ({projectRoot}) {
  await scaffoldPom({projectRoot});

  return {};
}
