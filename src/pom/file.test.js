import {describe, expect, it} from 'vitest';
import any from '@travi/any';

import {getPathTo} from './file.js';

describe('pom file', () => {
  it('should return the path to the pom file', () => {
    const projectRoot = any.string();

    expect(getPathTo(projectRoot)).toEqual(`${projectRoot}/pom.xml`);
  });
});
