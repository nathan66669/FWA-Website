module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-245-41-97.us-west-2.compute.amazonaws.com',
      ref: 'origin/master',
      key:     
      repo: 'git@github.com:nathan66669/tutorial-pt2.git',
      path: '/home/server/tutorial-pt-2',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
