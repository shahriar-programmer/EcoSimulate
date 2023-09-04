import { useState } from "react"
import { ImpactProps } from "."

type Props = {
    setImpactResult: React.Dispatch<React.SetStateAction<ImpactProps>>,
    calculateTreeImpact: (treeType: string, height: number, diameter: number) => ImpactProps
}

export default function ImpactForm({ calculateTreeImpact, setImpactResult }: Props) {
    const [treeType, setTreeType] = useState("")
    const [height, setHeight] = useState(0)
    const [diameter, setDiameter] = useState(0)

    const calculateFunction = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        const res = calculateTreeImpact(treeType, height, diameter);
        setImpactResult(res);
    }

    return (
        <div className="w-1/3 h-full p-4 py-6 border rounded bg-black/50">
            <p className="pb-1 mb-4 text-3xl font-bold text-center text-white border-b">Calculate Your Tree's Impact</p>
            <form onSubmit={(e) => calculateFunction(e)} className="flex flex-col items-center gap-2 mt-4 text-white gap-y-4">
                <div className="flex flex-col items-center w-full gap-y-2">
                    <label htmlFor="treeType" className="font-bold font-lg">Select Tree Type:</label>
                    <select required value={treeType} onChange={(e) => setTreeType(e.target.value)} name="treeType" id="treeType" className="w-1/2 p-2 bg-transparent border border-white rounded">
                        <option value="coastal_redwood">Coastal Redwood</option>
                        <option value="english_oak">English Oak</option>
                        <option value="oak_species">Oak Species</option>
                        <option value="mangrove_trees">Mangrove Trees</option>
                        <option value="leyland_cypress_trees">Leyland Cypress Trees</option>
                        <option value="austrian_pine_trees">Austrian Pine Trees</option>
                        <option value="gum_species">Gum Species</option>
                        <option value="monterey_pine_trees">Monterey Pine Trees</option>
                        <option value="monterey_cypress_trees">Monterey Cypress Trees</option>
                        <option value="turkey_oak_trees">Turkey Oak Trees</option>
                        <option value="ash_trees">Ash Trees</option>
                        <option value="sycamore_trees">Sycamore Trees</option>
                        <option value="grevillea_trees">Grevillea Trees</option>
                        <option value="basswood_trees">Basswood Trees</option>
                        <option value="lemon_trees">Lemon Trees</option>
                        <option value="cherry_blossom_trees">Cherry Blossom Trees</option>
                        <option value="willow_trees">Willow Trees</option>
                        <option value="american_chestnuts_trees">American Chestnuts Trees</option>
                        <option value="magnolia_trees">Magnolia Trees</option>
                        <option value="banyan_trees">Banyan Trees</option>
                        <option value="dogwood_trees">Dogwood Trees</option>
                        <option value="mulberry_trees">Mulberry Trees</option>
                        <option value="cherry_trees">Cherry Trees</option>
                        <option value="maple_trees">Maple Trees</option>
                    </select>
                </div>
                <div className="flex flex-col items-center w-full gap-y-2">
                    <label htmlFor="treeType" className="font-bold font-lg">Tree Height (m):</label>
                    <input required value={height} onChange={(e) => setHeight(Number(e.target.value))} placeholder="0" type="number" name="height" id="height" className="w-1/2 p-2 text-white bg-transparent border border-white rounded placeholder:text-white" />
                </div>
                <div className="flex flex-col items-center w-full gap-y-2">
                    <label htmlFor="treeType" className="font-bold font-lg">Tree Diameter (cm):</label>
                    <input required value={diameter} onChange={(e) => setDiameter(Number(e.target.value))} placeholder="0" type="number" name="diameter" id="diameter" className="w-1/2 p-2 text-white bg-transparent border border-white rounded placeholder:text-white" />
                </div>

                <div className="flex flex-col items-center w-full mt-4 gap-y-2">
                    <button type="submit" className="w-1/3 px-4 py-2 uppercase transition border rounded-sm hover:bg-white/20 bg-black/40">Calculate</button>
                </div>
            </form>
        </div>
    )
}