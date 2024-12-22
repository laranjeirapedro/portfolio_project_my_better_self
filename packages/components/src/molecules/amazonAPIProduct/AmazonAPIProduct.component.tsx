import { amazonProductClickedAnalytics, trackEvent } from '@app/hooks';
import { EVENT_NAMES, Product, ProductEvent } from '@app/types';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState, memo } from 'react';
import { Image, SubHeading } from '../..';
import * as Styled from './AmazonAPIProduct.styles';
import { useProductsContext } from '@app/hooks';

export type AmazonAPIProductProps = {
  mobile?: boolean;
  keyword?: string;
  ASIN?: string;
  apiType: 'keyword' | 'ASIN';
};

export const AmazonAPIProduct = memo((data: AmazonAPIProductProps) => {
  const { mobile = false, keyword = '', ASIN = '' } = data;

  const router = useRouter();

  const { getItemByKeyword } = useProductsContext();

  const [product, setProduct] = useState<Product | null>();

  useEffect(() => {
    setProduct(getItemByKeyword(keyword));
  }, [keyword]);

  const { title, price, imageUrl, productUrl } = product
    ? product
    : {
        title: '',
        price: 0,
        imageUrl: '',
        productUrl: '',
      };

  const onButtonClick = useCallback(() => {
    trackEvent<ProductEvent>({
      eventName: EVENT_NAMES.PRODUCT_CLICKED,
      eventProperties: {
        screenPath: router.asPath,
        path: productUrl,
        title,
      },
    });

    amazonProductClickedAnalytics({
      origin: router.asPath,
      path: productUrl,
      title,
    });
  }, [router, productUrl, title]);

  if (!product) return null;

  return (
    <Styled.CardContainer mobile={mobile}>
      <Styled.CardWrapper mobile={mobile}>
        <Styled.ImageWrapper mobile={mobile}>
          <Image
            data={{
              image: {
                url: imageUrl,
                originalFilename: title,
              },
              height: 200,
              width: 200,
            }}
            objectFit="contain"
          />
        </Styled.ImageWrapper>
        <Styled.ContentWrapper mobile={mobile}>
          <SubHeading text={title} numberOfLines={2} />
          <Styled.PriceWrapper>
            <Styled.PriceSup text={'$'} />
            <SubHeading text={`${Math.floor(price)}`} />
            <Styled.PriceSup text={`${((price * 100) % 100).toFixed(0).padStart(2, '0')}`} />
          </Styled.PriceWrapper>
          <a
            href={productUrl}
            target="_blank"
            onClick={onButtonClick}
            style={{ textDecoration: 'none', width: 'fit-content' }}
          >
            <Styled.AmazonButton>
              <span>Visit</span>
            </Styled.AmazonButton>
          </a>
        </Styled.ContentWrapper>
      </Styled.CardWrapper>
    </Styled.CardContainer>
  );
});
