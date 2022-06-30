import style from './Tweet.module.css'
import {tweetCreate} from 'redux/actions'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {tweetService} from 'services'

export default function TweetCompose({maxLength}){

    const [tweet, setTweet] = useState('')
    const dispatch = useDispatch()

    const createTweet = () => {    
        
        tweetService.createTweet(tweet).then(resp=>{
            dispatch(tweetCreate(resp))
            setTweet('')
        })
        

    }

    return <div className={style.composeContainer}>
        <textarea 
        maxLength={maxLength} 
        placeholder={'Tweet oluştur.'}
        value={tweet}
        onChange={(e)=>{
            setTweet(e.target.value)
        }}
        ></textarea>
        <button onClick={createTweet} type={'submit'}>Tweet</button>
    </div>
}