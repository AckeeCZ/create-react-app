'use strict';

const inquirer = require('inquirer');
const chalk = require('chalk');

const applyAnswer = require('./applyAnswer');

module.exports = async props => {
  const result = await inquirer.prompt({
    type: 'confirm',
    name: 'useAuthModule',
    message: `Do you want to include the ${chalk.cyan('"auth"')} module?`,
    default: true,
  });

  await applyAnswer(result.useAuthModule, props);
};
