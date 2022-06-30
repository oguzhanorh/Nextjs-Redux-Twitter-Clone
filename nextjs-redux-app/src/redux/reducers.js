import { combineReducers } from 'redux'
import * as types from './types'


const initialTweets =  {
    tweets: []
}

const tweetState = (state = initialTweets, {type, payload}) => {
    switch(type){
        
        case types.TWEET_INIT:
            return {
                ...state,
                tweets: payload
            }
        case types.TWEET_CREATE:
            let _tweets = state.tweets
            _tweets.push(payload)
            console.log(_tweets)
            return {
                ...state,
                tweets: _tweets
            }
        default:
            return state

    }
}

const reducers = {
    tweet: tweetState
}

export default combineReducers(reducers)