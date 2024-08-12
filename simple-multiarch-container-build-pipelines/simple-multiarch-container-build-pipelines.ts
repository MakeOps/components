#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class SimpleMultiarchContainerBuildPipelinesStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
  }
}

const app = new cdk.App();

new SimpleMultiarchContainerBuildPipelinesStack(app, 'SimpleMultiarchContainerBuildPipelinesStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
