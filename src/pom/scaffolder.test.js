import {promises as fs} from 'node:fs';

import {describe, expect, it, vi, afterEach} from 'vitest';
import any from '@travi/any';

import scaffold from './scaffolder.js';

vi.mock('node:fs');

describe('pom scaffolder', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should create the pom file', async () => {
    const projectRoot = any.string();

    await scaffold({projectRoot});

    expect(fs.writeFile).toHaveBeenCalledWith(`${projectRoot}/pom.xml`, '');
  });
});
