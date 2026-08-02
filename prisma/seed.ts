import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const hair = await prisma.category.create({
    data: {
      name: "Hair",
      slug: "hair",
    },
  });

  const facial = await prisma.category.create({
    data: {
      name: "Facials",
      slug: "facials",
    },
  });

  await prisma.service.createMany({
    data: [
      {
        title: "Luxury Hair Styling",
        slug: "luxury-hair-styling",
        description: "Professional styling and treatment.",
        duration: 90,
        price: 650,
        featured: true,
        categoryId: hair.id,
      },
      {
        title: "Deep Cleansing Facial",
        slug: "deep-cleansing-facial",
        description: "Luxury facial treatment.",
        duration: 60,
        price: 599,
        featured: true,
        categoryId: facial.id,
      },
    ],
  });

  await prisma.setting.create({
    data: {
      businessName: "SHINE Luxury Beauty Spa",
      phone: "+27 78 870 2149",
      whatsapp: "+27788702149",
      email: "info@shinebeautyspa.co.za",
      address: "108 Long Street, Cape Town",
    },
  });

  console.log("Database seeded successfully.");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });