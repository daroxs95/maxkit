## Automated Release Workflow
The publishing to npm is handled by manually triggering a github workflow.
This allows you to specify the type of version bump you want to apply.

### How to:
Go to the "Actions" tab of your GitHub repository, select the "Publish package to npm" workflow, and click on "Run workflow". You can specify the release type (`major`, `minor`, or `patch`) as an input.