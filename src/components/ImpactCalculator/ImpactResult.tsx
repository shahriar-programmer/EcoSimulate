import { ImpactProps } from "."

type Props = {
    impactResult: ImpactProps
}

export default function ImpactResult({ impactResult }: Props) {
    return (
        <div className="grid w-1/3 h-full grid-cols-2 gap-4 p-4 text-white border">
            <div className="flex flex-col items-center justify-center w-full h-48 p-4 border rounded bg-white/50">
                <img src="src/assets/icon-oxygen.png" alt="" width={"70px"} />
                <p className="text-2xl font-bold text-center">Produces <span className="px-2 py-1 text-white rounded-md bg-black/70">{Math.ceil(impactResult.oxygenProduction / 365)}</span> tons of Oxygen per day.</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-48 p-4 border rounded bg-white/50">
                <img src="src/assets/icon-people.png" alt="" width={"70px"} />
                <p className="text-xl font-bold text-center">Allows <span className="px-2 py-1 text-white rounded-md bg-black/70">{Math.ceil(impactResult.peopleCanBreath)}</span> people to breath for an entire day.</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-48 p-4 border rounded bg-white/50">
                <img src="src/assets/icon-carbon.png" alt="" width={"70px"} />
                <p className="text-2xl font-bold text-center">Stores <span className="px-2 py-1 text-white rounded-md bg-black/70">{Math.ceil(impactResult.carbonImpact)}</span> kgs of carbon.</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-48 p-4 border rounded bg-white/50">
                <img src="src/assets/icon-water.png" alt="" width={"70px"} />
                <p className="text-2xl font-bold text-center"><span className="px-2 py-1 text-white rounded-md bg-black/70">{Math.ceil(impactResult.waterEvaporated / 365)}</span> gallons of water evaporation per day.</p>
            </div>
        </div>
    )
}