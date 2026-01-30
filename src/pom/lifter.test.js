import {afterEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';
import {when} from 'vitest-when';

import {parse, write} from './xml/index.js';
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
    const existingProjectDetails = any.simpleObject();
    const scmDetails = any.simpleObject();
    when(getPathTo).calledWith(projectRoot).thenReturn(pathToPomFile);
    when(parse)
      .calledWith({path: pathToPomFile})
      .thenResolve({project: existingProjectDetails});
    when(defineScmDetails).calledWith(vcsDetails).thenReturn(scmDetails);

    expect(await liftPom({projectRoot, vcs: vcsDetails})).toEqual({});
    expect(write).toHaveBeenCalledWith({
      path: pathToPomFile,
      contents: {
        project: {
          ...existingProjectDetails,
          scm: scmDetails
        }
      }
    });
  });
});
