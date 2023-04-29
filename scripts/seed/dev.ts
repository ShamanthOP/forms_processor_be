import db, { generateId } from "../../src/modules/db";

const run = async () => {
    await db.post.createMany({
        data: [
            {
                id: generateId(),
                slug: "ultimate-node-stack",
                title: "Ultimate Node Stack 2023",
                publishedAt: new Date(),
            },
            {
                id: generateId(),
                slug: "draft-post",
                title: "Draft Post",
            },
        ],
    });
};

// Auto-run if main script (not imported)
if (require.main === module) {
    run().then(() => {
        console.log("Data seed complete");
        process.exit();
    });
}
