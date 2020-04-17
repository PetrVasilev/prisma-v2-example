const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const commentId = process.env.COMMENT_ID

async function main() {
    if (!commentId) throw new Error('Set COMMENT_ID environment')
    console.time('Deleting comment finished')
    await prisma.comment.delete({
        where: {
            id: parseInt(commentId)
        }
    })
    console.timeEnd('Deleting comment finished')
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.disconnect()
    })
