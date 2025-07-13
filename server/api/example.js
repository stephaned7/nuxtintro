export default defineEventHandler(async (event) => {

    //get
    const{ name } = getQuery(event)

    //post
    const { age } = await readBody(event)

    return {
        message: `Hello, ${name}, you are ${age} years old`
    }

})