const { exec } = require('child_process')
const ora = require('ora')
const chalk = require('chalk')
const config = require('../config')

const spinner = ora('Deploy to gh-pages...')
spinner.start()

const message = `Update @ ${new Date()}`
const check = `cd ${config.paths.output} && git status -s`
const commit = `cd ${config.paths.output} && git add --all && git commit -m '${message}' && git push -u origin gh-pages`

exec(check, (err, stdout, stderr) => {
  if (!stdout.toString().trim()) {
    console.log(chalk.yellow(`\n  No change in ${config.paths.output}\n`))
    return spinner.stop()
  }
  exec(commit, (err, stdout, stderr) => {
    if (err) console.error(err)
    console.log(chalk.green(message))
    spinner.stop()
  })
})
