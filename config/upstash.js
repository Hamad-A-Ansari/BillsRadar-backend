import { Client as WorkfloeClient } from "@upstash/workflow";
import { QSTASH_TOKEN, QSTASH_URL } from "./env.js";

export const workflowClient = new WorkfloeClient({
  baseUrl: QSTASH_URL,
  token: QSTASH_TOKEN,
});