import {promises as fs} from 'node:fs';
import {XMLParser} from 'fast-xml-parser';

import {afterEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';
import {when} from 'vitest-when';

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
    when(XMLParser).called with().thenReturn({parse});
    when(fs.readFile).calledWith(pathToFile, 'utf-8').thenResolve(xmlContent);
    when(parse).calledWith(xmlContent).thenReturn(parsedContent);

    expect(await parseFile({path: pathToFile})).toEqual(parsedContent);
  });
});
