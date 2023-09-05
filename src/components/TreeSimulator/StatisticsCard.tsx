import CountUp from "react-countup";

type Props = {
  cardTitle: string;
  cardPoint: string;
}

export default function StatisticsCard({cardTitle, cardPoint}: Props) {
  return (
    <div className="w-full p-2 text-white bg-gradient-to-r from-[#457fca] to-[#5691c8] rounded-md">
      <h4 className="text-xl font-semibold uppercase">{cardTitle}</h4>
      <p className="w-full my-2 text-4xl font-black text-center">
      <CountUp end={Number(cardPoint)} duration={8} delay={3}/>
        </p>
    </div>
  )
}