'use strict';

const madge = require('madge');
const chalk = require('chalk');
const { performance } = require('perf_hooks');
const paths = require('../../../config/paths');

const availableArguments = {
  CIRCULAR: '--circular',
  SILENT: '--silent',
};

function printCircular(circular = []) {
  console.log('');
  if (circular.length === 0) {
    console.log(
      chalk.green.bold('  No circular dependencies has been found.\n')
    );
  } else {
    console.log(
      chalk.red.bold(`  These modules contain circular dependencies:\n`)
    );
    circular.forEach((moduleDependencies, index) => {
      console.log(chalk.dim(`  #${index + 1}`));
      for (const dependency of moduleDependencies) {
        console.log(`   ${chalk.italic(dependency)}`);
      }
      console.log('');
    });
  }
}

function logDuration(res, t0, t1) {
  const duration = Math.round(t1 - t0);
  const files = Object.keys(res.obj());

  console.log(
    chalk.dim(
      `  Processed ${files.length} file${
        files.length === 1 ? '' : 's'
      } in ${duration}ms.`
    )
  );
}

async function performanDependenciesAnalysis({ options, notSilent }) {
  try {
    const t0 = performance.now();
    const res = await madge(paths.appSrc, options);
    const t1 = performance.now();

    if (notSilent) {
      logDuration(res, t0, t1);
    }

    return res;
  } catch (e) {
    let msg = chalk.red.bold(`Failed to analyze dependencies:\n`);
    msg += chalk.dim(`\ninput options: ${JSON.stringify(options, null, 2)}\n`);

    console.error(msg);
    console.error(e);

    return null;
  }
}

(async function analyzeDependencies() {
  const args = process.argv.slice(2);
  const options = {
    fileExtensions: ['js', 'jsx'],
    webpackConfig: paths.webpackConfig,
  };

  const notSilent = !args.includes(availableArguments.SILENT);

  if (notSilent) {
    console.log(chalk.bold(`Analyzing module dependencies...\n`));
    console.log(chalk.dim(`  scope: ${paths.appSrc}`));
    console.log(
      chalk.dim(
        `  file extensions: ${options.fileExtensions
          .map(ext => `'${ext}'`)
          .join(', ')}`
      )
    );
    console.log('');
  }

  const res = await performanDependenciesAnalysis({ options, notSilent });

  if (!res) {
    process.exit(1);
  }

  const circular = res.circular();

  if (notSilent && args.includes(availableArguments.CIRCULAR)) {
    printCircular(circular);
  }

  process.exit(circular.length === 0 ? 0 : 1);
})();
