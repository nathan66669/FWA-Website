module.exports = {
  apps: [{
    name: 'FWASite',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-217-122-161.us-east-2.compute.amazonaws.com',
      ref: 'origin/master',
      key:  '~/.ssh/theFWA.pem',   
      repo: 'git@github.com:nathan66669/FWA-Website.git',
      path: '/home/ubuntu/FWAp',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
