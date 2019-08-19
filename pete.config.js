module.exports = {
  apps : [
    {
      name: 'server',
      script: 'server.js',
      instances: 1,
      autorestart: true
    },
    {
      name: 'scheduler',
      script: 'ace',
      args: 'run:scheduler',
      instances: 1,
      autorestart: true
    }
  ]
}
