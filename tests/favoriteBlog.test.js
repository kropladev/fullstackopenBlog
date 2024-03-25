const {test, describe} = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const {favoriteBlog} = require("../utils/list_helper");


describe('favoriteBlogs tests', () => {

    const testData = [
        {
            _id: 'a5422aa745547876209d17e4',
            title: 'Minor blog',
            author: 'Edsger W. Dijkstra',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Awesome blog',
            author: 'John Doe',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 17,
            __v: 0
        },
        {
            _id: '4b311aa71b54a676234d1865',
            title: 'Middle liked blog',
            author: 'Someone Else',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 12,
            __v: 0
        }
    ]

    const expected = [
        {
            title: 'Awesome blog',
            author: 'John Doe',
            likes: 17,
        }
    ]

    test('When couple blogs all with different likes counters, choose one with max likes', () => {
        const result = favoriteBlog(testData)
        console.log(`Result ==> ${JSON.stringify(result)}`)
        assert.deepStrictEqual(result, expected)

    })

})