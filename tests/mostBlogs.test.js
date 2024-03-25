const {test, describe} = require('node:test')
const assert = require('node:assert')
const {mostBlogs} = require("../utils/list_helper");

describe('Find authors with most blogs written', () => {
    const blogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 5,
            __v: 0,
        },
        {
            _id: '5a422aa71b54a676234d17f9',
            title: 'The Structure of Scientific Revolutions',
            author: 'Thomas Kuhn',
            url: 'https://www.amazon.com/Structure-Scientific-Revolutions-50th-Anniversary/dp/0226458083',
            likes: 10,
            __v: 0,
        },
        {
            _id: '5a422aa71b54a676234d17fa',
            title: 'The Art of Computer Programming',
            author: 'Donald Knuth',
            url: 'https://www.amazon.com/Art-Computer-Programming-Volumes-1A/dp/0321751043',
            likes: 7,
            __v: 0,
        },
        {
            _id: '5a422aa71b54a676234d17fb',
            title: 'Concrete Mathematics',
            author: 'Ronald Graham',
            url: 'https://www.amazon.com/Concrete-Mathematics-Foundation-Computer-Science/dp/0262018906',
            likes: 9,
            __v: 0,
        },
        {
            _id: '5a422aa71b54a676234d17fc',
            title: 'The Pragmatic Programmer',
            author: 'Andrew Hunt',
            author: 'David Thomas',
            url: 'https://www.amazon.com/Pragmatic-Programmer-20th-Anniversary-Edition/dp/0134994705',
            likes: 8,
            __v: 0,
        },
        {
            _id: '5a4333a71b54a676234d17fb',
            title: 'Concrete Mathematics',
            author: 'Ronald Graham',
            url: 'https://www.amazon.com/Concrete-Mathematics-Foundation-Computer-Science/dp/0262018906',
            likes: 13,
            __v: 0,
        },

    ];

    test('top bloggers returns R Graham with 2 blogs', () => {
        const expected = {
            author: 'Ronald Graham',
            blogs: 2
        }

        const result = mostBlogs(blogs)

        assert.deepStrictEqual(result, expected)
    })
})


