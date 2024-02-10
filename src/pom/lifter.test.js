import {promises as fs} from 'node:fs';

import {describe, it, expect, vi, afterEach} from 'vitest';
import any from '@travi/any';
import {when} from 'jest-when';

import liftPom from './lifter.js';

vi.mock('node:fs');

describe('pom lifter', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should define the vcs details', async () => {
    const projectRoot = any.string();
    when(fs.readFile)
      .calledWith(`${projectRoot}/pom.xml`, 'utf-8')
      .mockResolvedValue('<project><modelVersion>4.0.0</modelVersion></project>');

    expect(await liftPom({projectRoot})).toEqual({});
    expect(fs.writeFile).toHaveBeenCalledWith(
      `${projectRoot}/pom.xml`,
      `<project>
  <modelVersion>4.0.0</modelVersion>
  <scm>
    <tag>HEAD</tag>
  </scm>
</project>
`
    );
  });
});
