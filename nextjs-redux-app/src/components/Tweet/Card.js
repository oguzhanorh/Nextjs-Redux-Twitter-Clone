import style from './Tweet.module.css'

export default function TweetCard({data: {user, text, stats}}){
    
    return (<div className={style.tweetCard}>
            <div>{user.name} @{user.username}</div>

            <div>
                {text}
            </div>

            <div>
                Like ({stats.like}) - Comment ({stats.comment}) - Retweet ({stats.retweet})
            </div>
        </div>)
}