import '../styles/features.css'

export default function Features () {
    return (
        <>
            <h2 className='features_title'>What the Bot Can Do</h2>

            <div className='feature_cards'>
                <div className='feature_card'>
                    <div className='emoji'>💡</div>
                    <h3>Daily Facts</h3>
                    <p>Get one mind-blowing fact everyday, no fluff, no filler.</p>
                </div>

                <div className='feature_card'>
                    <div className='emoji'>⚡</div>
                    <h3>Instant Facts</h3>
                    <p>Ask the bot for a random fact at anytime with /random.</p>
                </div>

                <div className='feature_card'>
                    <div className='emoji'>📚</div>
                    <h3>Categorized Knowledge</h3>
                    <p>Choose a topic and get facts filtered by your curiosity.</p>
                </div>

                <div className='feature_card'>
                    <div className='emoji'>📩</div>
                    <h3>Scheduled Delivery</h3>
                    <p>Facts sent on your terms: daily, weekly, or when you say so.</p>
                </div>
            </div>
        </>
    )
}