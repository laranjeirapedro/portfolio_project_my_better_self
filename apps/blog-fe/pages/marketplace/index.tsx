import { useState } from "react";
import { useRouter } from "next/router";
import { ContentWrapper } from "../../components";
import { MarketplaceFilterSidebar, MarketplaceNavbar, MarketplaceProductList } from "@app/components";

const MarketplaceHome = () => {
  const router = useRouter();

  return (
    <>
    <MarketplaceNavbar/>
    <ContentWrapper width={1438} flexDirection="row">
        <MarketplaceFilterSidebar/>
        <MarketplaceProductList/>
    </ContentWrapper>
    </>
  );
};

export default MarketplaceHome;
