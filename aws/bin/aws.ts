#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { AwsApp } from "../lib/aws-stack";
import * as path from "path";

const app = new cdk.App();
new AwsApp(app, "AwsStack", {
  stages: ["local", "dev"],
  projectRoot: path.join(__dirname, "..", ".."),
  env: {
    account: process.env.AWS_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.AWS_REGION || process.env.CDK_DEFAULT_REGION,
  },
});
