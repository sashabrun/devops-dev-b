import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const admin = await prisma.user.create({
        data: {
            username: 'admin',
            firstName: 'Admin',
            lastName: 'User',
            password: await bcrypt.hash('adminpassword', 10),
            isAdmin: true,
        },
    });

    console.log('Utilisateur admin créé:', admin);
}

main()
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

