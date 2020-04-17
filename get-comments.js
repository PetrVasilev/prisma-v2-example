const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    const comments = await prisma.comment.findMany({
        include: {
            author: true
        }
    })
    console.log(comments)
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.disconnect()
    })
