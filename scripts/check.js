const { execSync } = require('child_process')
const chalk = require('chalk')
const semver = require('semver')
const { engines } = require('../package.json')

const exec = cmd => execSync(cmd).toString().trim()

const requirements = [
  { name: 'node', version: semver.clean(process.version), required: engines.node },
  { name: 'yarn', version: exec('yarn --version'), required: engines.yarn },
  { name: 'npm', version: exec('npm --version'), required: engines.npm }
]

module.exports = () => {
  const warnings = requirements
    .filter(i => !semver.satisfies(i.version, i.required))
    .map(i => `${i.name}: ${chalk.red(i.version)} should be ${chalk.green(i.required)}`)

  if (warnings.length) {
    console.log(chalk.yellow('\n  To use this template, you must update following to modules:\n'))
    warnings.forEach(item => console.log('  ' + item))
    console.log()
    process.exit(1)
  }
}
