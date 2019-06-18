const axios = require('axios');

const CTAENDPOINTS = require('../../ctaEndpoints');

const directions = require('../../utils/directions');

const getTrainArrivals = async args => {
    const {status, data} = await axios.get(CTAENDPOINTS.getTrainArrivals(args));
    if (status === 200) {
        return data.ctatt.eta.map(train => ({
            id: train.rn,
            route: train.rt,
            arrivalTime: train.arrT,
            destination: train.destNm,
            hasAlerts: Number(train.isFlt) === 1,
            isDelayed: Number(train.isDly) === 1,
            isPrediction: Number(train.isSch) === 1,
            isApproaching: Number(train.isApp) === 1
        }));
    }
    // else there's an error with the request

    return [];
};

module.exports = {
    getTrainArrivals
};






// const { firestore } = require("../../../config/firebase.config");

// const getAllergy = async id => {
//   const request = await firestore
//     .collection("allergies")
//     .doc(id)
//     .get();

//   return {
//     id,
//     ...request.data()
//   };
// };

// const getAllergies = async args => {
//   const response = await firestore.collection("allergies").get();
//   let allergiesArr = [];

//   for (let allergy of response.docs) {
//     allergiesArr.push({
//       id: allergy.id,
//       ...allergy.data()
//     });
//   }

//   return allergiesArr;
// };

// module.exports = {
//   getAllergy,
//   getAllergies
// };
