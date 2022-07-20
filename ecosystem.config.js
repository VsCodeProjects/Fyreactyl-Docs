module.exports = {
    apps: [
        {
            name: 'Docs - FyreSoft',
            script: 'yarn',
            args: 'run serve --build --port 5000 --host 0.0.0.0',
            interpreter: 'bash'
        }
    ]
}
