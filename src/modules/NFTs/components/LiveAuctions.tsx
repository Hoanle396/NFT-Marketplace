import Button from "@/components/Button";
import useNFTs from "@/hooks/useNFTs";
import { FCC } from "@/types";
import ActionCard from "./ActionCard";
import LoadingNFT from "./LoadingNFT";
import { INFT } from "@/apis/types";

const LiveAuctions: FCC = () => {
  const { loading, nfts } = useNFTs();
  console.log({ loading, nfts });

  return (
    <div>
      <div className="h-full w-full flex flex-col items-center py-16 gap-16">
        <div className="flex flex-row w-full justify-between text-white">
          <p className="text-4xl font-bold">Live Auctions</p>
          <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E250E5] to-[#4B50E6]">
            EXPLORE MORE
          </p>
        </div>
        <div className="w-full grid grid-flow-row xl:gap-12 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {loading &&
            Array.from({ length: 8 })
              .fill(0)
              .map((v, i) => <LoadingNFT key={i} />)}
          {!!nfts &&
            nfts.map((v: INFT, i: number) => <ActionCard {...v} key={i} />)}
        </div>
        {/* <Button className="text-lg px-8">Load more</Button> */}
      </div>
    </div>
  );
};

export default LiveAuctions;
