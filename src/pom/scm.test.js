import {describe, expect, it} from 'vitest';
import any from '@travi/any';

import defineScmDetails from './scm.js';

describe('pom scm details', () => {
  it('should define scm details for a project', () => {
    const owner = any.word();
    const name = any.word();
    const host = any.word();

    expect(defineScmDetails({owner, name, host})).toEqual({
      connection: `scm:git:https://${host}/${owner}/${name}.git`,
      developerConnection: `scm:git:https://${host}/${owner}/${name}.git`,
      tag: 'HEAD',
      url: `https://${host}/${owner}/${name}`
    });
  });
});
