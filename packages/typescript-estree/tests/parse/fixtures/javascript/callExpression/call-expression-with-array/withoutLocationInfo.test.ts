import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/callExpression/call-expression-with-array.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);