import * as types from './types'

export const tweetCreate = (payload) => ({type: types.TWEET_CREATE, payload: payload})
export const tweetInit = (payload) => ({type:types.TWEET_INIT, payload:payload})

