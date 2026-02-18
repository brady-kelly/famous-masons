import MasonCard from "@/components/masons/mason-card";
import { getAllMasons } from "@/lib/db";

export default async function PeopleDirectory() {
    const masons = await getAllMasons();

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-8">Famous Freemasons</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {masons.map((mason) => (
                    <MasonCard key={mason.id} mason={mason} />
                ))}
            </div>
        </div>
    );
}