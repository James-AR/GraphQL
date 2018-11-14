const Subscription = {
     comment: {
         subscribe(parent, { postId }, { db, pubsub }, info) {
            const post = db.posts.find((post) => post.id === postId && post.published === true)

            if(!post) {
                throw new Error('Post does not exist')
            }

            return pubsub.asyncIterator(`comment ${postId}`)
         }
     },
     post: {
        subscribe(parent, args, { pubsub }, info) {
            return pubsub.asyncIterator('New post.')
        }
     }
}

export { Subscription as default }