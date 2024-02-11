import {promises as fs} from 'node:fs';
import {XMLBuilder} from 'fast-xml-parser';

import {afterEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';
import {when} from 'jest-when';

import write from './writer.js';

vi.mock('node:fs');
vi.mock('fast-xml-parser');

describe('xml writer', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should write the provided data to the xml file', async () => {
    const pathToFile = any.string();
    const contents = any.simpleObject();
    const build = vi.fn();
    const renderedXml = any.string();
    when(XMLBuilder).calledWith({format: true}).mockReturnValue({build});
    when(build).calledWith(contents).mockReturnValue(renderedXml);

    await write({path: pathToFile, contents});

    expect(fs.writeFile).toHaveBeenCalledWith(pathToFile, renderedXml);
  });
});
