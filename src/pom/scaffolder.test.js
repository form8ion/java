import {promises as fs} from 'node:fs';

import {describe, expect, it, vi, afterEach} from 'vitest';
import any from '@travi/any';
import {when} from 'jest-when';

import {getPathTo} from './file.js';
import scaffold from './scaffolder.js';

vi.mock('node:fs');
vi.mock('./file.js');

describe('pom scaffolder', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should create the pom file', async () => {
    const projectRoot = any.string();
    const projectName = any.word();
    const pathToPomFile = any.string();
    when(getPathTo).calledWith(projectRoot).mockReturnValue(pathToPomFile);

    await scaffold({projectRoot, projectName});

    expect(fs.writeFile)
      .toHaveBeenCalledWith(
        pathToPomFile,
        `<project>
  <modelVersion>4.0.0</modelVersion>
  <artifactId>${projectName}</artifactId>
</project>
`
      );
  });
});
