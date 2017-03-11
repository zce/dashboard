const { exec } = require('child_process')
const ora = require('ora')
const config = require('../config')

const spinner = ora('Deploy to gh-pages...')
spinner.start()

const cmd = `cd ${config.paths.output} && git add --all && git commit -m 'Update @ ${new Date()}' && git push -u origin gh-pages`

exec(cmd, (err, stdout, stderr) => {
  if (err) console.error(err)
  spinner.stop()
})
