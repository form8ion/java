import {promises as fs} from 'node:fs';

import {describe, it, expect, vi, afterEach} from 'vitest';
import any from '@travi/any';
import {when} from 'jest-when';

import {write} from './xml/index.js';
import {getPathTo} from './file.js';
import defineScmDetails from './scm.js';
import liftPom from './lifter.js';

vi.mock('node:fs');
vi.mock('./file.js');
vi.mock('./scm.js');
vi.mock('./xml/index.js');

describe('pom lifter', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should define the vcs details', async () => {
    const projectRoot = any.string();
    const pathToPomFile = any.string();
    const vcsDetails = any.simpleObject();
    const scmDetails = any.simpleObject();
    when(fs.readFile)
      .calledWith(pathToPomFile, 'utf-8')
      .mockResolvedValue('<project><modelVersion>4.0.0</modelVersion></project>');
    when(getPathTo).calledWith(projectRoot).mockReturnValue(pathToPomFile);
    when(defineScmDetails).calledWith(vcsDetails).mockReturnValue(scmDetails);

    expect(await liftPom({projectRoot, vcs: vcsDetails})).toEqual({});
    expect(write).toHaveBeenCalledWith({
      path: pathToPomFile,
      contents: {
        project: {
          modelVersion: '4.0.0',
          scm: scmDetails
        }
      }
    });
  });
});
