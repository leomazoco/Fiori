import requests
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config["username"] = "LMAZOCO"
app.config["password"] = "Infinit@001"

@app.route('/results', methods=['GET'])
def get_flights():
    host = "http://infinitfytraining.ddns.net:8000"
    resource = "/sap/opu/odata/sap/ZCDS_VOOS_INFO_CDS/ZCDS_VOOS_INFO"
    query = "?$select=connid,carrid,fldate,cityfrom,airpfrom,cityto,airpto"

    auth = (app.config["username"], app.config["password"])

    response = requests.request("GET", host + resource + query + "&$format=json", auth=auth)

    return response.json()

"""@app.route('/results/<string:connid>', methods=['GET'])
def get_flightsbyID(connid):
    results = []
    for item in Results:
        if item["connid"] == connid:
            results.append(item)

    return jsonify(results)"""


app.run(debug=True)
