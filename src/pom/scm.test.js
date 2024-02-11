import {describe, expect, it} from 'vitest';
import any from '@travi/any';

import defineScmDetails from './scm.js';

describe('pom scm details', () => {
  it('should define scm details for a project hosted on github.com', () => {
    const owner = any.word();
    const name = any.word();

    expect(defineScmDetails({owner, name, host: 'github'}))
      .toEqual({tag: 'HEAD', url: `https://github.com/${owner}/${name}`});
  });

  it('should only define the tag for a project not hosted on github.com', () => {
    const owner = any.word();
    const name = any.word();

    expect(defineScmDetails({owner, name, host: any.word()})).toEqual({tag: 'HEAD'});
  });
});
