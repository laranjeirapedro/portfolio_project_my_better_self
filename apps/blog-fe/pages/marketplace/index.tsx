import {
  MarketplaceFilterSidebar,
  MarketplaceNavbar,
  MarketplaceProductList,
} from '@app/components';
import { MarketplaceProvider } from '@app/hooks';
import { breakpoints } from '@app/styles';
import styled from '@emotion/styled';

const ContentWrapperStyled = styled.div`
  max-width: 1438px;
  width: 100%;
  margin: 0 auto;
  min-height: calc(100vh - 194px);
  display: flex;
  flex-direction: row;

  @media (max-width: ${breakpoints.mobile}px) {
    flex-direction: column;
  }
`;

const MarketplaceHome = () => {
  return (
    <MarketplaceProvider>
      <MarketplaceNavbar />
      <ContentWrapperStyled>
        <MarketplaceFilterSidebar />
        <MarketplaceProductList />
      </ContentWrapperStyled>
    </MarketplaceProvider>
  );
};

export default MarketplaceHome;
