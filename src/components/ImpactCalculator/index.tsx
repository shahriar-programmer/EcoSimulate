import { useState } from "react";
import ImpactForm from "./ImpactForm";
import ImpactResult from "./ImpactResult";

export interface ImpactProps {
    carbonImpact: number,
    oxygenProduction: number,
    peopleCanBreath: number,
    waterEvaporated: number
}

export default function ImpactCalculator() {
    const [impactResult, setImpactResult] = useState<ImpactProps>({
        carbonImpact: 0,
        oxygenProduction: 0,
        peopleCanBreath: 0,
        waterEvaporated: 0
    })

    function calculateTreeImpact(treeType: string, height: number, diameter: number) {

        const treesData: Record<string, { carbonSequestrationRate: number, waterEvaporationRate: number, oxygenProductionRate: number }> = {
            "coastal_redwood": {
                "carbonSequestrationRate": 226796.24,
                "waterEvaporationRate": 1000,
                "oxygenProductionRate": 10
            },
            "english_oak": {
                "carbonSequestrationRate": 17237.12,
                "waterEvaporationRate": 500,
                "oxygenProductionRate": 8
            },
            "oak_species": {
                "carbonSequestrationRate": 6502.80,
                "waterEvaporationRate": 250,
                "oxygenProductionRate": 6
            },
            "mangrove_trees": {
                "carbonSequestrationRate": 317.51,
                "waterEvaporationRate": 100,
                "oxygenProductionRate": 3
            },
            "leyland_cypress_trees": {
                "carbonSequestrationRate": 90.7,
                "waterEvaporationRate": 50,
                "oxygenProductionRate": 2
            },
            "austrian_pine_trees": {
                "carbonSequestrationRate": 113.40,
                "waterEvaporationRate": 25,
                "oxygenProductionRate": 1
            },
            "gum_species": {
                "carbonSequestrationRate": 872.56,
                "waterEvaporationRate": 150,
                "oxygenProductionRate": 1
            },
            "monterey_pine_trees": {
                "carbonSequestrationRate": 68.04,
                "waterEvaporationRate": 100,
                "oxygenProductionRate": 1
            },
            "monterey_cypress_trees": {
                "carbonSequestrationRate": 175.89,
                "waterEvaporationRate": 150,
                "oxygenProductionRate": 1
            },
            "turkey_oak_trees": {
                "carbonSequestrationRate": 218.28,
                "waterEvaporationRate": 75,
                "oxygenProductionRate": 1
            },
            "ash_trees": {
                "carbonSequestrationRate": 544.32,
                "waterEvaporationRate": 375,
                "oxygenProductionRate": 1
            },
            "sycamore_trees": {
                "carbonSequestrationRate": 1300.56,
                "waterEvaporationRate": 200,
                "oxygenProductionRate": 1
            },
            "grevillea_trees": {
                "carbonSequestrationRate": 130.06,
                "waterEvaporationRate": 100,
                "oxygenProductionRate": 1
            },
            "basswood_trees": {
                "carbonSequestrationRate": 435.36,
                "waterEvaporationRate": 250,
                "oxygenProductionRate": 1
            },
            "lemon_trees": {
                "carbonSequestrationRate": 56.70,
                "waterEvaporationRate": 100,
                "oxygenProductionRate": 1
            },
            "cherry_blossom_trees": {
                "carbonSequestrationRate": 50.80,
                "waterEvaporationRate": 100,
                "oxygenProductionRate": 1
            },
            "willow_trees": {
                "carbonSequestrationRate": 54.44,
                "waterEvaporationRate": 150,
                "oxygenProductionRate": 1
            },
            "american_chestnuts_trees": {
                "carbonSequestrationRate": 290.30,
                "waterEvaporationRate": 25,
                "oxygenProductionRate": 1
            },
            "magnolia_trees": {
                "carbonSequestrationRate": 172.37,
                "waterEvaporationRate": 100,
                "oxygenProductionRate": 1
            },
            "banyan_trees": {
                "carbonSequestrationRate": 226.79,
                "waterEvaporationRate": 75,
                "oxygenProductionRate": 1
            },
            "dogwood_trees": {
                "carbonSequestrationRate": 34.02,
                "waterEvaporationRate": 50,
                "oxygenProductionRate": 1
            },
            "mulberry_trees": {
                "carbonSequestrationRate": 70.31,
                "waterEvaporationRate": 150,
                "oxygenProductionRate": 1
            },
            "cherry_trees": {
                "carbonSequestrationRate": 45.36,
                "waterEvaporationRate": 100,
                "oxygenProductionRate": 1
            },
            "maple_trees": {
                "carbonSequestrationRate": 99.72,
                "waterEvaporationRate": 100,
                "oxygenProductionRate": 1
            }
        }

        const treePeopleRespirationRate = 20;

        const carbonImpact = treesData[treeType]?.carbonSequestrationRate * height * diameter / 10000;
        const oxygenProduction = treesData[treeType]?.oxygenProductionRate * height * diameter;
        const peopleCanBreath = oxygenProduction / treePeopleRespirationRate;
        const waterEvaporated = treesData[treeType]?.waterEvaporationRate * height * diameter;

        const res: ImpactProps = {
            carbonImpact: carbonImpact,
            oxygenProduction: oxygenProduction,
            peopleCanBreath: peopleCanBreath,
            waterEvaporated: waterEvaporated
        }

        return res

    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-full min-h-[91.5vh] p-4" style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("src/assets/impact-bg.webp")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex items-center w-full h-full justify-evenly">
                <ImpactForm setImpactResult={setImpactResult} calculateTreeImpact={calculateTreeImpact} />
                <ImpactResult impactResult={impactResult} />
            </div>
            {/* <p className="justify-end w-full mt-4 text-center text-white bg-transparent">Data Source: <a href="https://climate.nasa.gov/" className="underline" target="_blank">https://climate.nasa.gov/</a></p> */}
        </div>

    )
}