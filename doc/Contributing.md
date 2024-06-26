# How to Contribute

Want to get involved? This project welcomes contributions from everyone via
GitHub's [fork feature](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

## Develop Locally

We manage node versions with NVM. Check the `.nvmrc` file for our current version:

1. Switch to the correct node version:

   ```shell
   nvm use
   ```

2. Install dependencies:

   ```shell
   npm i
   ```

3. Build lib:

   ```shell
   npm run build
   ```

4. Build kitchen-sink/showcase app:

   ```shell
   npm run build:app
   ```

5. Develop locally with Storybook:

   ```bash
   npm run storybook
   ```

## Component Development

Create a new component following structure of atoms(`Box`)

## Release a Component

- [Release Instructions](./Releasing.md)
