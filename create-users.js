const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const users = [
    {
        name: 'John Snow',
        email: 'snow@gmail.com',
        phone: '+79247467723'
    },
    {
        name: 'Aria Stark',
        email: 'killer@live.com',
        phone: '+79124372833'
    },
    {
        name: 'Sersei Lannister',
        email: 'bitch@gmail.com',
        phone: '+79842384822'
    }
]

async function main() {
    console.time('Creating users finished')
    for (let user of users) {
        await prisma.user.create({
            data: user
        })
    }
    console.timeEnd('Creating users finished')
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.disconnect()
    })
