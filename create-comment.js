const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const commentText = process.env.COMMENT || 'Hello World!'
const userId = process.env.USER_ID || null

async function main() {
    if (!userId) throw new Error('Set USER_ID environment')
    console.time('Creating comment finished')
    const createdComment = await prisma.comment.create({
        data: {
            text: commentText,
            author: {
                connect: {
                    id: parseInt(userId)
                }
            }
        }
    })
    console.timeEnd('Creating comment finished')
    const comment = await prisma.comment.findOne({
        where: {
            id: createdComment.id
        },
        include: {
            author: true
        }
    })
    console.log('Created comment', comment)
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.disconnect()
    })
