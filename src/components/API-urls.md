https://vpic.nhtsa.dot.gov/api


BY MAKE MODEL AND YEAR

STEP1
GET ALL MODEL YEARS
https://api.nhtsa.gov/products/vehicle/modelYears?issueType=r 

STEP2
GET ALL MAKES FOR MODEL YEAR
https://api.nhtsa.gov/products/vehicle/makes?modelYear=2021&issueType=r

STEP3
GET ALL MODELS FOR MAKE & YEAR
api.nhtsa.gov/products/vehicle/models?modelYear={year}&make={make}&issueType=r

STEP4
GET ALL RECALS USING MAKE MODEL YEAR
api.nhtsa.gov/recalls/recallsByVehicle?make={MAKE}&model={MODEL}&modelYear={MODEL_YR}


OR GET BY NHTSA CAMPAIGN NUMBER
api.nhtsa.gov/recalls/campaignNumber?campaignNumber ={campaignNumber}



MODELS FOR MAKE
/vehicles/GetModelsForMake/honda?format=json
GET ALL MAKES
/vehicles/GetAllMakes?format=json

SAMPLE VINS
3VWC17AU8FM514802 - 2015 VW GOLF SPORTWAGEN
4T1BF1FK7CU103205 - 2012 TOYOTA CAMRY
2T2BK1BA3CC134733 - 2012 LEXUS SUV