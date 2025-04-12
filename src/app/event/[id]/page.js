export default async function EventDetailPage({ params }) {
    const { id } = params;

    const event = await prisma.event.findUnique({
        where: {
            id: Number(id),
        },
    });

    if (!event) {
        return <div>Event tidak ditemukan</div>;
    }

    return (
        <main>
            
        </main>
    )
}