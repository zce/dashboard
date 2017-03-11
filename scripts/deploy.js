const { exec } = require('child_process')
const ora = require('ora')
const config = require('../config')

const spinner = ora('Deploy to gh-pages...')
spinner.start()

function execute (cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) return reject(err)
      if (stderr) return reject(stderr)
      resolve(stdout)
    })
  })
}

execute(`cd ${config.paths.output}`)
  .then(stdout => {
    execute('pwd').then(s => console.log(s.toString()))
    return execute('git add --all')
  })
  .then(stdout => {
    return execute(`git commit -m 'Update @ ${new Date}'`)
  })
  .then(stdout => {
    return execute('git push -u origin gh-pages')
  })
  .then(stdout => {
    spinner.stop()
  })
  .catch(err => {
    throw err
    spinner.stop()
  })
