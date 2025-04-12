#### Arkanesia

Arkanesia merupakan sebuah projek untuk membantu anda mengenal banyak destinasi budaya! Informasi yang disajikan sangat lengkap dan rapi. Projek ini telah dientegrasikan dengan AI yang dapat membantu anda disini. 


### Getting Start

First, activating the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.


### Cara Seting Database

Kita menggunakan Prisma dan MySql sebagai database.

# Instal Prisma

```bash
npm install prisma --save-dev
# and
npm install tsx --save-dev
# then
npx prisma init --output ../src/app/generated/prisma
```

# Create Database
Buat database di phpmyadmin dengan nama arkanesia

Lalu atur file .env dengan format :

```bash
DATABASE_URL="mysql://username:password@localhost:3306/db_name"
```

# Migrate model Tabel 
```bash
npx prisma migrate dev --name init
```

# Seeding data Tabel
```bash
npx prisma db seed
```

# Cek database(Opsional)
```bash
npx prisma studio
```