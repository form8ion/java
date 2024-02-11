import {describe, expect, it, vi, afterEach} from 'vitest';
import any from '@travi/any';
import {when} from 'jest-when';

import {write} from './xml/index.js';
import {getPathTo} from './file.js';
import scaffold from './scaffolder.js';

vi.mock('./file.js');
vi.mock('./xml/index.js');

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

    expect(write)
      .toHaveBeenCalledWith({
        path: pathToPomFile,
        contents: {
          project: {
            modelVersion: '4.0.0',
            artifactId: projectName
          }
        }
      });
  });
});
