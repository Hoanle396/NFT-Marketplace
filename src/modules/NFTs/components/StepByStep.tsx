import React from "react";
import StepCard from "./StepCard";
import ArrowRight from "@/icons/ArrowRight";
import { FCC } from "@/types";

type Props = {};

const StepByStep: FCC = (props: Props) => {
  return (
    <div className="h-full w-full flex flex-col items-center py-16 gap-16">
      <div className="flex flex-row w-full justify-between text-white">
        <p className="text-4xl font-bold">Create And Sell Your NFTs</p>
      </div>
      <div className="flex flex-row w-full justify-between gap-16 flex-wrap ">
        <StepCard
          description="Wallet that is functional for NFT purchasing. You may
            have a Coinbase account at this point, but very few
            are actually set up to buy an NFT."
          icon={<ArrowRight className="w-16" />}
          title="Set Up Your Wallet"
        />
        <StepCard
          description="Setting up your NFT collection and creating NFTs on
          NFTs is easy! This guide explains how to set up your
          first collection"
          icon={<ArrowRight className="w-16" />}
          title="Create Your Collection"
        />
        <StepCard
          description="Sed ut perspiciatis un de omnis iste natus error sit
          voluptatem accusantium doloremque laudantium,
          totam rem."
          icon={<ArrowRight className="w-16" />}
          title="Add Your NFTs"
        />
        <StepCard
          description="Choose between auctions, fixed-price listings, and
          declining-price listings. You choose how you want to
          sell your NFTs!"
          icon={<ArrowRight className="w-16" />}
          title="List Them For Sale"
        />
      </div>
    </div>
  );
};

export default StepByStep;
