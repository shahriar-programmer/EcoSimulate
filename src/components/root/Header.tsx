import { PageProps } from "../../App";

type Props = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<PageProps>>
}

export default function Header({ page, setPage }: Props) {

  const pagesArray: {title: string, path: PageProps}[] = [
    {
      title: "Tree Simulator",
      path: "/tree-simulator"
    },
    {
      title: "Impact Calculator",
      path: "/impact-calculator"
    },
    {
      title: "Data Visualization",
      path: "/data-visualization"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Github",
      path: "/github"
    }
  ]

  return (
    <div className='flex items-center justify-between w-full h-20 bg-gradient-to-r from-[#000046] to-[#1CB5E0] px-44'>
      <a className="text-3xl font-semibold text-white logo" href="/">EcoSimulate</a>
      <div className='flex text-lg font-semibold text-white gap-x-8'>
        {
          pagesArray.map(pA => (
            <p onClick={() => setPage(pA.path)} className={`px-6 py-1 transition ${page == pA.path ? "bg-blue-400/30" : "bg-transparent"} border rounded hover:bg-blue-400/30 cursor-pointer`}>{pA.title}</p>
          ))
        }
      </div>
    </div>
  )
}