export const getAllBlogs = () => {
    return fetch('/api/blogs', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const createBlog = (data) => {
    return fetch('/api/blogs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const getOneBlog = (id) => {
    return fetch(`/api/blogs/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const getOneUser = (id) => {
    return fetch(`/api/user/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}