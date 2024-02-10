import {describe, it, expect, afterEach, vi} from 'vitest';
import any from '@travi/any';

import {scaffold as scaffoldPom} from './pom/index.js';
import scaffold from './scaffolder.js';

vi.mock('./pom/index.js');

describe('scaffolder', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should configure java', async () => {
    const projectRoot = any.string();
    const projectName = any.word();

    expect(await scaffold({projectRoot, projectName})).toEqual({});
    expect(scaffoldPom).toHaveBeenCalledWith({projectRoot, projectName});
  });
});
