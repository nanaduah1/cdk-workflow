import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { BaseApp, BaseAppProps } from "cdk-lib/lib/common";

export class AwsApp extends BaseApp {
  constructor(scope: Construct, id: string, props: BaseAppProps) {
    super(scope, id, props);
  }
}
