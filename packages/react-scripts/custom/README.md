# Custom scripts and configurations for react-scripts package

## BE AWARE!

1. Do not rename `custom-package.json` to `package.json`.
   If you do so, whole `custom` directory will be ignored during `@ackee/react-scripts` publishing, since the `custom` dir. would be considered as a its own NPM package.

2. Try to modify `custom` outer content as least as possible to prevent conflicts during an upgrade to newer `react-scripts` version.
   Of course, there're following and only exceptions: `template`, `template-typescript`, `README.md`, and `CHANGELOG.md`.

---

## Upgrade guide

1. Set a new `remote` to the original repository
   `$ git remote add upstream https://github.com/facebook/create-react-app.git`
2. Get the latest original repo changes by calling
   `$ git fetch upstream`
3. Check out to [the latest tag](https://github.com/facebook/create-react-app/releases), e.g. `v3.2.0`
   `$ git checkout v3.2.0`
4. Check out back to your `master` branch
   `$ git checkout master`
5. Run rebase
   `$ git rebase v3.2.0`
