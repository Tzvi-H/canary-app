import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as AriaApp from '../lib/aria-app-stack';

test('Empty Stack', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new AriaApp.AriaAppStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Resources: {},
      },
      MatchStyle.EXACT,
    ),
  );
});
