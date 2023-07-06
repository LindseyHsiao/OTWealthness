export const getAllBlogs = () => {
return fetch('/api/blogs', {
    headers: {
        'Content-Type': 'application/json'
    }
})
}