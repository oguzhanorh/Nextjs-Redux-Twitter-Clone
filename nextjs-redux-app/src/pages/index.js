import {useEffect, useState} from 'react'
import {PrivateContainer} from 'containers'
import {tweetService} from 'services'
import {Tweet} from 'components'

import {useDispatch, useSelector} from 'react-redux'
import {tweetInit} from 'redux/actions'


export default function Home() {

  const dispatch = useDispatch()
  const {tweets} = useSelector(state=>state.tweet)

  useEffect(()=>{
  
    tweetService.getTweets().then(resp=>{
      dispatch(tweetInit(resp))
    }).catch(err=>{
      console.log('Error',err)
    })

  },[])

  const timeline = tweets.map((item,i)=>{
    return <Tweet.TweetCard key={`card_${i}`} data={item} />
  })

  return (
    <div>
      <main>
        
        <Tweet.TweetCompose maxLength={280} />

        {timeline}
      </main>
    </div>
  )
}

Home.getLayout = (page) => {
  return <PrivateContainer title={'Home Page'} {...page.props}>{page}</PrivateContainer>
}