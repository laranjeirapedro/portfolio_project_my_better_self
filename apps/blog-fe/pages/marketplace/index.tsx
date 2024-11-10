import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { ContentWrapper } from "@components";
import {
  MarketplaceFilterSidebar,
  MarketplaceNavbar,
  MarketplaceProductList,
} from "@app/components";
import { useGetProductCategories, MarketplaceProvider } from "@app/hooks";
import { Category } from "@app/types";

const MarketplaceHome = () => {
  const router = useRouter();

  return (
    <MarketplaceProvider>
      <MarketplaceNavbar />
      <ContentWrapper width={1438} flexDirection="row">
        <MarketplaceFilterSidebar />
        <MarketplaceProductList />
      </ContentWrapper>
    </MarketplaceProvider>
  );
};

export default MarketplaceHome;
