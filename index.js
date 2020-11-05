const parser = require('xml2js');
const fs = require('fs');

fs.readFile(__dirname + '/response.xml', function (err, data) {
    parser.parseString(data, function (err, result) {
        let offer = Object.values(result.Notification.NotificationPayload[0].AnyOfferChangedNotification[0].Offers[0]);
        let offers = offer[0];
        let changelist = [];
        console.log(offers.length)
        offers.forEach((element, index) => {
            changelist.push(element.SellerId + '|' 
                                + element.SellerFeedbackRating[0].SellerPositiveFeedbackRating + '|' 
                                + element.ListingPrice[0].Amount + '|'
                                + element.Shipping[0].Amount);

        if(index == offers.length - 1){
                sendChanges(changelist);
            }
        });
    });
});

function sendChanges(changes){
    console.log(changes.length)
};
