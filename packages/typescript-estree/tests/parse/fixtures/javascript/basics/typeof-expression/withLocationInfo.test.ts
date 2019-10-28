import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/basics/typeof-expression.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);