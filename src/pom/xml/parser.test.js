import {promises as fs} from 'node:fs';
import {XMLParser} from 'fast-xml-parser';

import {afterEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';
import {when} from 'jest-when';

import parseFile from './parser.js';

vi.mock('node:fs');
vi.mock('fast-xml-parser');

describe('xml parser', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should return the parsed data', async () => {
    const pathToFile = any.string();
    const xmlContent = any.string();
    const parsedContent = any.simpleObject();
    const parse = vi.fn();
    XMLParser.mockReturnValue({parse});
    when(fs.readFile).calledWith(pathToFile, 'utf-8').mockResolvedValue(xmlContent);
    when(parse).calledWith(xmlContent).mockReturnValue(parsedContent);

    expect(await parseFile({path: pathToFile})).toEqual(parsedContent);
  });
});
