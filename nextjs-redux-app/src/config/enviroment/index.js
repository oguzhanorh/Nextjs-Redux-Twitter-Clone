import Shared from './shared'

const all = {
    env: process.env.APP_ENVIROMENT || 'development'
}

const curEnv = require(`./${all.env}.js`)

export default {
    ...Shared,
    ...curEnv
}