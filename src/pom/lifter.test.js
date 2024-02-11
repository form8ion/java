import {promises as fs} from 'node:fs';

import {describe, it, expect, vi, afterEach} from 'vitest';
import any from '@travi/any';
import {when} from 'jest-when';

import {getPathTo} from './file.js';
import liftPom from './lifter.js';

vi.mock('node:fs');
vi.mock('./file.js');

describe('pom lifter', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should define the vcs details', async () => {
    const projectRoot = any.string();
    const pathToPomFile = any.string();
    when(fs.readFile)
      .calledWith(pathToPomFile, 'utf-8')
      .mockResolvedValue('<project><modelVersion>4.0.0</modelVersion></project>');
    when(getPathTo).calledWith(projectRoot).mockReturnValue(pathToPomFile);

    expect(await liftPom({projectRoot})).toEqual({});
    expect(fs.writeFile).toHaveBeenCalledWith(
      pathToPomFile,
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
