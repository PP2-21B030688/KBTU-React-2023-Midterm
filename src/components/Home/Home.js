function Home(props) {
    const posts = props.posts;

    return (
        <div>
            {
                posts.forEach(post => {
                    return (
                        <div>
                            <div>
                                {post.title}
                            </div>
                            <div>
                                {post.content}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home;