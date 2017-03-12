const { exec } = require('child_process')
const ora = require('ora')

const spinner = ora('Git submodule init & update...')
spinner.start()

const cmd = `git submodule init && git submodule update`

exec(cmd, (err, stdout, stderr) => {
  if (err) console.error(err)
  spinner.stop()
})
