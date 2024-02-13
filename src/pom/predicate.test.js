import {fileExists} from '@form8ion/core';

import {afterEach, describe, it, vi, expect} from 'vitest';
import any from '@travi/any';
import {when} from 'jest-when';

import pomExists from './predicate.js';

vi.mock('@form8ion/core');

describe('maven predicate', () => {
  const projectRoot = any.string();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should return `true` when a root pom exists', async () => {
    when(fileExists).calledWith(`${projectRoot}/pom.xml`).mockReturnValue(true);

    expect(await pomExists({projectRoot})).toBe(true);
  });

  it('should return `false` when a root pom does not exist', async () => {
    when(fileExists).calledWith(`${projectRoot}/pom.xml`).mockReturnValue(false);

    expect(await pomExists({projectRoot})).toBe(false);
  });
});
