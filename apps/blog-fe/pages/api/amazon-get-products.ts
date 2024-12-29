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
 * The following is a sample request for GetItems operation.
 * For more information on Product Advertising API 5.0 Operations,
 * refer: https://webservices.amazon.com/paapi5/documentation/operations.html
 */
var getItemsRequest = new ProductAdvertisingAPIv1.GetItemsRequest();

/** Enter your partner tag (store/tracking id) and partner type */
getItemsRequest['PartnerTag'] = process.env.AMAZON_PARTNER_TAG;
getItemsRequest['PartnerType'] = 'Associates';
getItemsRequest['Condition'] = 'New';

/**
 * Choose resources you want from SearchItemsResource enum
 * For more details, refer: https://webservices.amazon.com/paapi5/documentation/search-items.html#resources-parameter
 */
getItemsRequest['Resources'] = ['Images.Primary.Large', 'ItemInfo.Title', 'Offers.Listings.Price'];

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { ASIN } = req.query;

  if (!ASIN) {
    return res.status(400).json({ error: 'Invalid body data.' });
  }

  /**
   * Function to parse GetItemsResponse into an object with key as ASIN
   */
  var parseResponse = function (itemsResponseList: any) {
    return itemsResponseList.map((item: any) => ({
      [item.ASIN]: item,
    }));
  };

  var callback = function (error: any, data: any, response: any) {
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
      var getItemsResponse = ProductAdvertisingAPIv1.GetItemsResponse.constructFromObject(data);
      console.log('Complete Response: \n' + JSON.stringify(getItemsResponse, null, 1));
      if (getItemsResponse['ItemsResult'] !== undefined) {
        console.log('Printing All Item Information in ItemsResult:');
        var response_list = parseResponse(getItemsResponse['ItemsResult']['Items']);
        for (var i in getItemsRequest['ItemIds']) {
          var itemId = getItemsRequest['ItemIds'][i];
          console.log('\nPrinting information about the Item with Id: ' + itemId);
          if (itemId in response_list) {
            var item = response_list[itemId];
            if (item !== undefined) {
              if (item['ASIN'] !== undefined) {
                console.log('ASIN: ' + item['ASIN']);
              }
              if (item['DetailPageURL'] !== undefined) {
                console.log('DetailPageURL: ' + item['DetailPageURL']);
              }
              if (
                item['ItemInfo'] !== undefined &&
                item['ItemInfo']['Title'] !== undefined &&
                item['ItemInfo']['Title']['DisplayValue'] !== undefined
              ) {
                console.log('Title: ' + item['ItemInfo']['Title']['DisplayValue']);
              }
              if (
                item['Offers'] !== undefined &&
                item['Offers']['Listings'] !== undefined &&
                item['Offers']['Listings'][0]['Price'] !== undefined &&
                item['Offers']['Listings'][0]['Price']['DisplayAmount'] !== undefined
              ) {
                console.log(
                  'Buying Price: ' + item['Offers']['Listings'][0]['Price']['DisplayAmount']
                );
              }
            }
          } else {
            console.log('Item not found, check errors');
          }
        }
        res.status(200).json(data);
      }
      if (getItemsResponse['Errors'] !== undefined) {
        console.log('\nErrors:');
        console.log(
          'Complete Error Response: ' + JSON.stringify(getItemsResponse['Errors'], null, 1)
        );
        console.log('Printing 1st Error:');
        var error_0 = getItemsResponse['Errors'][0];
        console.log('Error Code: ' + error_0['Code']);
        console.log('Error Message: ' + error_0['Message']);
        res.status(500).json({ error: 'Failed to fetch items from Amazon' });
      }
    }
  };
  // Specify search ASIN
  getItemsRequest['ItemIds'] = [ASIN];

  try {
    api.getItems(getItemsRequest, callback);
  } catch (ex) {
    console.log('Exception: ' + ex);
  }
}
