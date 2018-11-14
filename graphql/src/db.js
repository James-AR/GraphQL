const users = [{
    id: '1',
    name: 'James',
    email: 'james@example.com',
    age: 25,
}, {
    id: '2',
    name: 'Sara',
    email: 'sara@example.com',
    age: 22,
}, {
    id: '3',
    name: 'Taylor',
    email: 'taylor@example.com',
    age: 29,
}]

const posts = [{
    id: '10',
    title: 'Learning GraphQL',
    body: 'Not so bad so far',
    published: true,
    author: '1'
}, {
    id: '11',
    title: 'Why do we learn it?',
    body: 'Because its very popular API',
    published: false,
    author: '1'
}, {
    id: '12',
    title: 'What is it being used for?',
    body: 'Labs project',
    published: true,
    author: '2'
}]

const comments = [{
    id: 'A',
    text: '1st comment!',
    author: '1',
    post: '10'
}, {
    id: 'B',
    text: '2nd comment!',
    author: '2',
    post: '11'
}, {
    id: 'C',
    text: '3rd comment!',
    author: '3',
    post: '11'
}, {
    id: 'D',
    text: '4th comment!',
    author: '3',
    post: '12'
}]

const db = {
    users,
    posts,
    comments
}

export {db as default}