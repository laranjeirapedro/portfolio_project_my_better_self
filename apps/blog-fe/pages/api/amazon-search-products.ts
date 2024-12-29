var ProductAdvertisingAPIv1 = require('paapi5-nodejs-sdk');
import { NextApiRequest, NextApiResponse } from 'next';

var defaultClient = ProductAdvertisingAPIv1.ApiClient.instance;

// Specify your credentials here. These are used to create and sign the request.
defaultClient.accessKey = process.env.AMAZON_ACCESS_KEY;
defaultClient.secretKey = process.env.AMAZON_SECRET_KEY;

/**
 * Specify Host and Region to which you want to send the request to.
 * For more details refer:
 * https://webservices.amazon.com/paapi5/documentation/common-request-parameters.html#host-and-region
 */
defaultClient.host = 'webservices.amazon.ca';
defaultClient.region = 'us-east-1';

var api = new ProductAdvertisingAPIv1.DefaultApi();

/**
 * The following is a sample request for SearchItems operation.
 * For more information on Product Advertising API 5.0 Operations,
 * refer: https://webservices.amazon.com/paapi5/documentation/operations.html
 */
var searchItemsRequest = new ProductAdvertisingAPIv1.SearchItemsRequest();

/** Enter your partner tag (store/tracking id) and partner type */
searchItemsRequest['PartnerTag'] = process.env.AMAZON_PARTNER_TAG;
searchItemsRequest['PartnerType'] = 'Associates';

/**
 * Specify the category in which search request is to be made.
 * For more details, refer:
 * https://webservices.amazon.com/paapi5/documentation/use-cases/organization-of-items-on-amazon/search-index.html
 */
searchItemsRequest['SearchIndex'] = 'All';

/**
 * Choose resources you want from SearchItemsResource enum
 * For more details, refer: https://webservices.amazon.com/paapi5/documentation/search-items.html#resources-parameter
 */
searchItemsRequest['Resources'] = [
  'Images.Primary.Large',
  'ItemInfo.Title',
  'Offers.Listings.Price',
  'CustomerReviews.Count',
  'CustomerReviews.StarRating',
];

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { keyword, numberOfProducts: _numberOfProducts } = req.query;

  const numberOfProducts = parseInt(_numberOfProducts as string);

  if (!keyword || !numberOfProducts || isNaN(numberOfProducts)) {
    return res.status(400).json({ error: 'Invalid body data.' });
  }

  var callback = function (error: any, data: any) {
    if (error) {
      console.log('Error calling PA-API 5.0!');
      console.log('Printing Full Error Object:\n' + JSON.stringify(error, null, 1));
      console.log('Status Code: ' + error['status']);
      if (error['response'] !== undefined && error['response']['text'] !== undefined) {
        console.log('Error Object: ' + JSON.stringify(error['response']['text'], null, 1));
      }
      res.status(500).json({ error: 'Failed to fetch items from Amazon' });
    } else {
      console.log('API called successfully.');
      var searchItemsResponse =
        ProductAdvertisingAPIv1.SearchItemsResponse.constructFromObject(data);

      console.log('Complete Response: \n' + JSON.stringify(searchItemsResponse, null, 1));

      if (searchItemsResponse['SearchResult'] !== undefined) {
        console.log('Printing First Item Information in SearchResult:');
        var item_0 = searchItemsResponse['SearchResult']['Items'][0];
        if (item_0 !== undefined) {
          if (item_0['ASIN'] !== undefined) {
            console.log('ASIN: ' + item_0['ASIN']);
          }
          if (item_0['DetailPageURL'] !== undefined) {
            console.log('DetailPageURL: ' + item_0['DetailPageURL']);
          }
          if (
            item_0['ItemInfo'] !== undefined &&
            item_0['ItemInfo']['Title'] !== undefined &&
            item_0['ItemInfo']['Title']['DisplayValue'] !== undefined
          ) {
            console.log('Title: ' + item_0['ItemInfo']['Title']['DisplayValue']);
          }
          if (
            item_0['Offers'] !== undefined &&
            item_0['Offers']['Listings'] !== undefined &&
            item_0['Offers']['Listings'][0]['Price'] !== undefined &&
            item_0['Offers']['Listings'][0]['Price']['DisplayAmount'] !== undefined
          ) {
            console.log(
              'Buying Price: ' + item_0['Offers']['Listings'][0]['Price']['DisplayAmount']
            );
          }
        }
      }
      res.status(200).json(data);

      if (searchItemsResponse['Errors'] !== undefined) {
        console.log('Errors:');
        console.log(
          'Complete Error Response: ' + JSON.stringify(searchItemsResponse['Errors'], null, 1)
        );
        console.log('Printing 1st Error:');
        var error_0 = searchItemsResponse['Errors'][0];
        console.log('Error Code: ' + error_0['Code']);
        console.log('Error Message: ' + error_0['Message']);
        res.status(500).json({ error: 'Failed to fetch items from Amazon' });
      }
    }
  };

  // Specify the number of items to be returned in search result
  searchItemsRequest['ItemCount'] = numberOfProducts;

  // Specify search keywords
  searchItemsRequest['Keywords'] = keyword;

  try {
    api.searchItems(searchItemsRequest, callback);
  } catch (ex) {
    console.log('Exception: ' + ex);
  }
}
