const _ = require('lodash')

const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce(((acc, blog) => acc + blog.likes), 0)
}

const favoriteBlog = (blogs) => {
    const maxLikes = Math.max(...blogs.map(b => b.likes));
    console.log(`max likes: ${maxLikes}`);

    return blogs.filter(b => b.likes === maxLikes).map((b) => {
        return {
            author: b.author,
            likes: b.likes,
            title: b.title
        }
    });
}

const mostBlogs = (blogs) => {

    const authorsByBlogsCount = _.countBy(blogs, 'author')
    console.log(`authorsByBlogsCount: ${JSON.stringify(authorsByBlogsCount)}`)
    console.log(`keys: ${JSON.stringify(Object.keys(authorsByBlogsCount))}`)

    const maxAuthorCount = _.maxBy(_.keys(authorsByBlogsCount), function (o) {
        return authorsByBlogsCount[o];
    })
    const maxCount = authorsByBlogsCount[maxAuthorCount]

    console.log(`maxAuthorCount: ${maxAuthorCount}`)
    console.log(`maxCount: ${maxCount}`)

    //const mostBlogsPublished = _.findKey(authorsByBlogsCount,  _.max(authorsByBlogsCount))
    //console.log(`mostBlogsPublished: ${mostBlogsPublished}`)

    return {
        author: maxAuthorCount,
        blogs: maxCount

    }
}


const mostLikes = (blogs) => {

    const authorLikes = blogs.reduce((acc, blog) => {
        const author = blog.author;
        const likes = blog.likes || 0; // Handle potential missing 'likes' key
        acc[author] = (acc[author] || 0) + likes;
        return acc;
    }, {});


    const authorsByLikesCount = blogs.reduce((acc, blog) => {
            acc[blog.author] = (acc[blog.author] || 0) + blog.likes
            return acc
        }, {}
    )

    console.log(`authorsByLikesCount: ${JSON.stringify(authorsByLikesCount)}`)

    const maxLikesAuthorCount = _.maxBy(_.keys(authorsByLikesCount), function (o) {
        return authorsByLikesCount[o];
    })
    const maxLikesCount = authorsByLikesCount[maxLikesAuthorCount]

    console.log(`maxAuthorCount: ${maxLikesAuthorCount}`)
    console.log(`maxCount: ${maxLikesCount}`)

    //const mostBlogsPublished = _.findKey(authorsByBlogsCount,  _.max(authorsByBlogsCount))
    //console.log(`mostBlogsPublished: ${mostBlogsPublished}`)

    return {
        author: maxLikesAuthorCount,
        likes: maxLikesCount

    }
}

module.exports = {
    dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes
}