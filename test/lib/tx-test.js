/*jshint expr: true*/
var expect = require('chai').expect,
  txLib = require('../../lib/tx');

describe('lib/tx', function(){

  describe('.getTx()', function(){

    var remote = {
        constructor: {
          name: 'Remote'
        },
        _getServer: function(){
          return {
            _lastLedgerClose: Date.now()
          };
        },
        requestAccountTx: function(opts, callback){
          if (opts.account === 'rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz') {

            if () {
              callback(null, {
                "id": 8,
                "status": "success",
                "type": "response",
                "result": {
                  "account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                  "ledger_index_max": 4819837,
                  "ledger_index_min": 32570,
                  "limit": 20,
                  "offset": 0,
                  "transactions": [
                    {
                      "meta": {
                        "AffectedNodes": [
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-9.988928176795589"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                  "value": "30"
                                },
                                "HighNode": "0000000000000009",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "LowNode": "0000000000000009"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "24E9ED0A4560CECB8F4677896E84D1245891C6AD2D8C826C0B61F4F9F499EA5F",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-9.99003535911603"
                                }
                              },
                              "PreviousTxnID": "EC19E24AA51D39E809597A5DCF3A7E253F98C27FE3287CB919319A5C59AD8302",
                              "PreviousTxnLgrSeq": 4716034
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                                "Balance": "172420707",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 38
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                              "PreviousFields": {
                                "Balance": "172468857",
                                "Sequence": 37
                              },
                              "PreviousTxnID": "EC19E24AA51D39E809597A5DCF3A7E253F98C27FE3287CB919319A5C59AD8302",
                              "PreviousTxnLgrSeq": 4716034
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                "BookDirectory": "7F8C9F53419784C394C9D1531B14E7DBCBC1923B7AEA1A485503ECF76DF08D6F",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "0000000000000001",
                                "Sequence": 144,
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.238978"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.98782099447516"
                                }
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "7B3984ED3B9B30B75CF7D8C2ABDBE71B56A8CB83EE1839D17D742EAD585C0212",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.23998"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.9889281767956"
                                }
                              },
                              "PreviousTxnID": "EC19E24AA51D39E809597A5DCF3A7E253F98C27FE3287CB919319A5C59AD8302",
                              "PreviousTxnLgrSeq": 4716034
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                "Balance": "22573619676",
                                "Flags": 0,
                                "OwnerCount": 72,
                                "Sequence": 32818
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "99E731A23496C471328C733B7AEFBD3E78A533B886A9CAE90B1554561EBF82C3",
                              "PreviousFields": {
                                "Balance": "22573571538"
                              },
                              "PreviousTxnID": "072913EE5C8CA00D6BBB9A556286265EA2A307BD9794C7636623DF5883419239",
                              "PreviousTxnLgrSeq": 4716040
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0884138583074"
                                },
                                "Flags": 131072,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "1200"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "00000000000000BE"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "9E61FEB8F12418B79DE776EE96BE58643854B2AE3249FE7BDAF372B567A5FCEA",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0894158583074"
                                }
                              },
                              "PreviousTxnID": "EC19E24AA51D39E809597A5DCF3A7E253F98C27FE3287CB919319A5C59AD8302",
                              "PreviousTxnLgrSeq": 4716034
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.64223716053296"
                                },
                                "Flags": 196608,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "25"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "50"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C032D6B34C17F2E46AF53E5EE925CAF780EF05EC06D6DE75B2046F8235D662BB",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.6433443428534"
                                }
                              },
                              "PreviousTxnID": "EC19E24AA51D39E809597A5DCF3A7E253F98C27FE3287CB919319A5C59AD8302",
                              "PreviousTxnLgrSeq": 4716034
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7377738992461"
                                },
                                "Flags": 65536,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "HighNode": "0000000000000001",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "3000"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C29D6CE99DA3E7B11B5E6C2730438760069836F65D87F026BC21DB1A1A9A54C0",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7366667169257"
                                }
                              },
                              "PreviousTxnID": "EC19E24AA51D39E809597A5DCF3A7E253F98C27FE3287CB919319A5C59AD8302",
                              "PreviousTxnLgrSeq": 4716034
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.014"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                                  "value": "10"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "000000000000018F"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "CB2B4541697629B646B3E93B2E0334BC13AC7ADAE79BA49E27A40B44E9C10A5B",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.013"
                                }
                              },
                              "PreviousTxnID": "EC19E24AA51D39E809597A5DCF3A7E253F98C27FE3287CB919319A5C59AD8302",
                              "PreviousTxnLgrSeq": 4716034
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                "BookDirectory": "0423F6FBF60C5F359820660A10CD60AAEB7A49342FD037C95C0F7249057574F8",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "000000000000024C",
                                "Sequence": 32812,
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "9.988928176795588"
                                },
                                "TakerPays": "434296881"
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "E12B73A1372F115F36C10AD02D468CDFBA1E1504939B507DC1FEFF723A8CD465",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "9.990035359116029"
                                },
                                "TakerPays": "434345019"
                              },
                              "PreviousTxnID": "EC19E24AA51D39E809597A5DCF3A7E253F98C27FE3287CB919319A5C59AD8302",
                              "PreviousTxnLgrSeq": 4716034
                            }
                          }
                        ],
                        "TransactionIndex": 3,
                        "TransactionResult": "tesSUCCESS"
                      },
                      "tx": {
                        "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                        "Amount": {
                          "currency": "USD",
                          "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                          "value": "0.001"
                        },
                        "Destination": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                        "Fee": "12",
                        "Flags": 0,
                        "Paths": [
                          [
                            {
                              "currency": "CAD",
                              "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "BTC",
                              "issuer": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rnziParaNb8nsU4aruQdwYE3j5jUcqjzFm",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ]
                        ],
                        "SendMax": "48138",
                        "Sequence": 37,
                        "SigningPubKey": "025B32A54BFA33FB781581F49B235C0E2820C929FF41E677ADA5D3E53CFBA46332",
                        "TransactionType": "Payment",
                        "TxnSignature": "3045022100F50C9C8C95FC9CC6E4CA9DC42E1407B6368E8BA52D205999AE8457E5486C81AD02205398FD05F452B7B4917B0191273518C14D759275CAC1D9C548A3357F29D81566",
                        "date": 444445860,
                        "hash": "8DFC1A7FBB60472CBEE9211D4DA44A5A42542729C9472D6B582302C77F31D95B",
                        "inLedger": 4716041,
                        "ledger_index": 4716041
                      },
                      "validated": true
                    },
                    {
                      "meta": {
                        "AffectedNodes": [
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-9.99003535911603"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                  "value": "30"
                                },
                                "HighNode": "0000000000000009",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "LowNode": "0000000000000009"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "24E9ED0A4560CECB8F4677896E84D1245891C6AD2D8C826C0B61F4F9F499EA5F",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-9.991142541436471"
                                }
                              },
                              "PreviousTxnID": "6C0076C61A1AA2D058E25FB0F7D2E7054D188939227F83819DB1311D03B948D8",
                              "PreviousTxnLgrSeq": 4716007
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                                "Balance": "172468857",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 37
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                              "PreviousFields": {
                                "Balance": "172517007",
                                "Sequence": 36
                              },
                              "PreviousTxnID": "6C0076C61A1AA2D058E25FB0F7D2E7054D188939227F83819DB1311D03B948D8",
                              "PreviousTxnLgrSeq": 4716007
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                "BookDirectory": "7F8C9F53419784C394C9D1531B14E7DBCBC1923B7AEA1A485503ECF76DF08D6F",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "0000000000000001",
                                "Sequence": 144,
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.23998"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.9889281767956"
                                }
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "7B3984ED3B9B30B75CF7D8C2ABDBE71B56A8CB83EE1839D17D742EAD585C0212",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.240982"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.99003535911604"
                                }
                              },
                              "PreviousTxnID": "6C0076C61A1AA2D058E25FB0F7D2E7054D188939227F83819DB1311D03B948D8",
                              "PreviousTxnLgrSeq": 4716007
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                "Balance": "22573571738",
                                "Flags": 0,
                                "OwnerCount": 72,
                                "Sequence": 32814
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "99E731A23496C471328C733B7AEFBD3E78A533B886A9CAE90B1554561EBF82C3",
                              "PreviousFields": {
                                "Balance": "22573523600"
                              },
                              "PreviousTxnID": "C3E74E96D7279BE9FEBCFB705CFE7DB47CF06DD3ACF01443A5DC62E54DCB0303",
                              "PreviousTxnLgrSeq": 4716028
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0894158583074"
                                },
                                "Flags": 131072,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "1200"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "00000000000000BE"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "9E61FEB8F12418B79DE776EE96BE58643854B2AE3249FE7BDAF372B567A5FCEA",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0904178583074"
                                }
                              },
                              "PreviousTxnID": "6C0076C61A1AA2D058E25FB0F7D2E7054D188939227F83819DB1311D03B948D8",
                              "PreviousTxnLgrSeq": 4716007
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.6433443428534"
                                },
                                "Flags": 196608,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "25"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "50"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C032D6B34C17F2E46AF53E5EE925CAF780EF05EC06D6DE75B2046F8235D662BB",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.64445152517384"
                                }
                              },
                              "PreviousTxnID": "6C0076C61A1AA2D058E25FB0F7D2E7054D188939227F83819DB1311D03B948D8",
                              "PreviousTxnLgrSeq": 4716007
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7366667169257"
                                },
                                "Flags": 65536,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "HighNode": "0000000000000001",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "3000"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C29D6CE99DA3E7B11B5E6C2730438760069836F65D87F026BC21DB1A1A9A54C0",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7355595346053"
                                }
                              },
                              "PreviousTxnID": "6C0076C61A1AA2D058E25FB0F7D2E7054D188939227F83819DB1311D03B948D8",
                              "PreviousTxnLgrSeq": 4716007
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.013"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                                  "value": "10"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "000000000000018F"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "CB2B4541697629B646B3E93B2E0334BC13AC7ADAE79BA49E27A40B44E9C10A5B",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.012"
                                }
                              },
                              "PreviousTxnID": "6C0076C61A1AA2D058E25FB0F7D2E7054D188939227F83819DB1311D03B948D8",
                              "PreviousTxnLgrSeq": 4716007
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                "BookDirectory": "0423F6FBF60C5F359820660A10CD60AAEB7A49342FD037C95C0F7249057574F8",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "000000000000024C",
                                "Sequence": 32812,
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "9.990035359116029"
                                },
                                "TakerPays": "434345019"
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "E12B73A1372F115F36C10AD02D468CDFBA1E1504939B507DC1FEFF723A8CD465",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "9.99114254143647"
                                },
                                "TakerPays": "434393157"
                              },
                              "PreviousTxnID": "F403E768708EE4F399D0E85AA29C30C85C37512DD881715F6869CEB6F96A8D45",
                              "PreviousTxnLgrSeq": 4716015
                            }
                          }
                        ],
                        "TransactionIndex": 12,
                        "TransactionResult": "tesSUCCESS"
                      },
                      "tx": {
                        "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                        "Amount": {
                          "currency": "USD",
                          "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                          "value": "0.001"
                        },
                        "Destination": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                        "Fee": "12",
                        "Flags": 0,
                        "Paths": [
                          [
                            {
                              "currency": "CAD",
                              "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "BTC",
                              "issuer": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rnziParaNb8nsU4aruQdwYE3j5jUcqjzFm",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ]
                        ],
                        "SendMax": "48138",
                        "Sequence": 36,
                        "SigningPubKey": "025B32A54BFA33FB781581F49B235C0E2820C929FF41E677ADA5D3E53CFBA46332",
                        "TransactionType": "Payment",
                        "TxnSignature": "3045022100C2A4E77CADA94C3496ACDF481F16C1C361CBC4E3F073600ACD5981DFC6BC68EF02204D7AE96DBAA9DE0F9E66B4690196C5FDFE99CF405BD2909244523C85394F1931",
                        "date": 444445830,
                        "hash": "EC19E24AA51D39E809597A5DCF3A7E253F98C27FE3287CB919319A5C59AD8302",
                        "inLedger": 4716034,
                        "ledger_index": 4716034
                      },
                      "validated": true
                    },
                    {
                      "meta": {
                        "AffectedNodes": [
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                "BookDirectory": "0423F6FBF60C5F359820660A10CD60AAEB7A49342FD037C95C0F724905AC4A10",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "0000000000000246",
                                "Sequence": 32575,
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "9.991142541436472"
                                },
                                "TakerPays": "434393157"
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "230F4C0A84F59E8415B18E8748EC369F4A6E695B6FBBDBAD9EB47927F0F9A7F0",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "9.992249723756913"
                                },
                                "TakerPays": "434441295"
                              },
                              "PreviousTxnID": "6EA8B80D24E02F1E25E0E22022A0887D080BE793237256A2785B458626AF97DC",
                              "PreviousTxnLgrSeq": 4715969
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-9.991142541436471"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                  "value": "30"
                                },
                                "HighNode": "0000000000000009",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "LowNode": "0000000000000009"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "24E9ED0A4560CECB8F4677896E84D1245891C6AD2D8C826C0B61F4F9F499EA5F",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-9.992249723756912"
                                }
                              },
                              "PreviousTxnID": "6EA8B80D24E02F1E25E0E22022A0887D080BE793237256A2785B458626AF97DC",
                              "PreviousTxnLgrSeq": 4715969
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                                "Balance": "172517007",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 36
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                              "PreviousFields": {
                                "Balance": "172565157",
                                "Sequence": 35
                              },
                              "PreviousTxnID": "6EA8B80D24E02F1E25E0E22022A0887D080BE793237256A2785B458626AF97DC",
                              "PreviousTxnLgrSeq": 4715969
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                "BookDirectory": "7F8C9F53419784C394C9D1531B14E7DBCBC1923B7AEA1A485503ECF76DF08D6F",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "0000000000000001",
                                "Sequence": 144,
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.240982"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.99003535911604"
                                }
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "7B3984ED3B9B30B75CF7D8C2ABDBE71B56A8CB83EE1839D17D742EAD585C0212",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.241984"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.99114254143648"
                                }
                              },
                              "PreviousTxnID": "6EA8B80D24E02F1E25E0E22022A0887D080BE793237256A2785B458626AF97DC",
                              "PreviousTxnLgrSeq": 4715969
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                "Balance": "22573523850",
                                "Flags": 0,
                                "OwnerCount": 72,
                                "Sequence": 32809
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "99E731A23496C471328C733B7AEFBD3E78A533B886A9CAE90B1554561EBF82C3",
                              "PreviousFields": {
                                "Balance": "22573475712"
                              },
                              "PreviousTxnID": "6AE56B72BAE85BB38D1E736BB1400B34249F5BDC9774C9705C864AF04D9E5A84",
                              "PreviousTxnLgrSeq": 4716007
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0904178583074"
                                },
                                "Flags": 131072,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "1200"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "00000000000000BE"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "9E61FEB8F12418B79DE776EE96BE58643854B2AE3249FE7BDAF372B567A5FCEA",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0914198583074"
                                }
                              },
                              "PreviousTxnID": "6EA8B80D24E02F1E25E0E22022A0887D080BE793237256A2785B458626AF97DC",
                              "PreviousTxnLgrSeq": 4715969
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.64445152517384"
                                },
                                "Flags": 196608,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "25"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "50"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C032D6B34C17F2E46AF53E5EE925CAF780EF05EC06D6DE75B2046F8235D662BB",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.64555870749428"
                                }
                              },
                              "PreviousTxnID": "6EA8B80D24E02F1E25E0E22022A0887D080BE793237256A2785B458626AF97DC",
                              "PreviousTxnLgrSeq": 4715969
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7355595346053"
                                },
                                "Flags": 65536,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "HighNode": "0000000000000001",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "3000"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C29D6CE99DA3E7B11B5E6C2730438760069836F65D87F026BC21DB1A1A9A54C0",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7344523522849"
                                }
                              },
                              "PreviousTxnID": "6EA8B80D24E02F1E25E0E22022A0887D080BE793237256A2785B458626AF97DC",
                              "PreviousTxnLgrSeq": 4715969
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.012"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                                  "value": "10"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "000000000000018F"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "CB2B4541697629B646B3E93B2E0334BC13AC7ADAE79BA49E27A40B44E9C10A5B",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.011"
                                }
                              },
                              "PreviousTxnID": "6EA8B80D24E02F1E25E0E22022A0887D080BE793237256A2785B458626AF97DC",
                              "PreviousTxnLgrSeq": 4715969
                            }
                          }
                        ],
                        "TransactionIndex": 5,
                        "TransactionResult": "tesSUCCESS"
                      },
                      "tx": {
                        "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                        "Amount": {
                          "currency": "USD",
                          "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                          "value": "0.001"
                        },
                        "Destination": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                        "Fee": "12",
                        "Flags": 0,
                        "Paths": [
                          [
                            {
                              "currency": "CAD",
                              "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "BTC",
                              "issuer": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rnziParaNb8nsU4aruQdwYE3j5jUcqjzFm",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ]
                        ],
                        "SendMax": "48138",
                        "Sequence": 35,
                        "SigningPubKey": "025B32A54BFA33FB781581F49B235C0E2820C929FF41E677ADA5D3E53CFBA46332",
                        "TransactionType": "Payment",
                        "TxnSignature": "3046022100B5C5BC626E3B2B57771534BA72A2AF134ABD466CDFE60351D6A9DEC295824A6E022100FB66773CB460D5E7B6E7C6B1A79D5D7CF39AC4AD5E7D7E539168BC48D041D6FF",
                        "date": 444445670,
                        "hash": "6C0076C61A1AA2D058E25FB0F7D2E7054D188939227F83819DB1311D03B948D8",
                        "inLedger": 4716007,
                        "ledger_index": 4716007
                      },
                      "validated": true
                    },
                    {
                      "meta": {
                        "AffectedNodes": [
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                "BookDirectory": "0423F6FBF60C5F359820660A10CD60AAEB7A49342FD037C95C0F724905AC4A10",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "0000000000000246",
                                "Sequence": 32575,
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "9.992249723756913"
                                },
                                "TakerPays": "434441295"
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "230F4C0A84F59E8415B18E8748EC369F4A6E695B6FBBDBAD9EB47927F0F9A7F0",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "9.993356906077354"
                                },
                                "TakerPays": "434489433"
                              },
                              "PreviousTxnID": "401B0DD780B0A6B4A6964707BFDE9ECCEDC4F9153C75DEA97DF988289929EED6",
                              "PreviousTxnLgrSeq": 4715428
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-9.992249723756912"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                  "value": "30"
                                },
                                "HighNode": "0000000000000009",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "LowNode": "0000000000000009"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "24E9ED0A4560CECB8F4677896E84D1245891C6AD2D8C826C0B61F4F9F499EA5F",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-9.993356906077353"
                                }
                              },
                              "PreviousTxnID": "401B0DD780B0A6B4A6964707BFDE9ECCEDC4F9153C75DEA97DF988289929EED6",
                              "PreviousTxnLgrSeq": 4715428
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                                "Balance": "172565157",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 35
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                              "PreviousFields": {
                                "Balance": "172613309",
                                "Sequence": 34
                              },
                              "PreviousTxnID": "401B0DD780B0A6B4A6964707BFDE9ECCEDC4F9153C75DEA97DF988289929EED6",
                              "PreviousTxnLgrSeq": 4715428
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                "BookDirectory": "7F8C9F53419784C394C9D1531B14E7DBCBC1923B7AEA1A485503ECF76DF08D6F",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "0000000000000001",
                                "Sequence": 144,
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.241984"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.99114254143648"
                                }
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "7B3984ED3B9B30B75CF7D8C2ABDBE71B56A8CB83EE1839D17D742EAD585C0212",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.242986"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.99224972375692"
                                }
                              },
                              "PreviousTxnID": "401B0DD780B0A6B4A6964707BFDE9ECCEDC4F9153C75DEA97DF988289929EED6",
                              "PreviousTxnLgrSeq": 4715428
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                "Balance": "22573476712",
                                "Flags": 0,
                                "OwnerCount": 72,
                                "Sequence": 32789
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "99E731A23496C471328C733B7AEFBD3E78A533B886A9CAE90B1554561EBF82C3",
                              "PreviousFields": {
                                "Balance": "22573428574"
                              },
                              "PreviousTxnID": "994FCE38302EA9E14A64E5EA59E62E5848D52C564968D7FD94DA65B591FBF127",
                              "PreviousTxnLgrSeq": 4715956
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0914198583074"
                                },
                                "Flags": 131072,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "1200"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "00000000000000BE"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "9E61FEB8F12418B79DE776EE96BE58643854B2AE3249FE7BDAF372B567A5FCEA",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0924218583074"
                                }
                              },
                              "PreviousTxnID": "401B0DD780B0A6B4A6964707BFDE9ECCEDC4F9153C75DEA97DF988289929EED6",
                              "PreviousTxnLgrSeq": 4715428
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.64555870749428"
                                },
                                "Flags": 196608,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "25"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "50"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C032D6B34C17F2E46AF53E5EE925CAF780EF05EC06D6DE75B2046F8235D662BB",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.64666588981472"
                                }
                              },
                              "PreviousTxnID": "401B0DD780B0A6B4A6964707BFDE9ECCEDC4F9153C75DEA97DF988289929EED6",
                              "PreviousTxnLgrSeq": 4715428
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7344523522849"
                                },
                                "Flags": 65536,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "HighNode": "0000000000000001",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "3000"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C29D6CE99DA3E7B11B5E6C2730438760069836F65D87F026BC21DB1A1A9A54C0",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7333451699645"
                                }
                              },
                              "PreviousTxnID": "401B0DD780B0A6B4A6964707BFDE9ECCEDC4F9153C75DEA97DF988289929EED6",
                              "PreviousTxnLgrSeq": 4715428
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.011"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                                  "value": "10"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "000000000000018F"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "CB2B4541697629B646B3E93B2E0334BC13AC7ADAE79BA49E27A40B44E9C10A5B",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.01"
                                }
                              },
                              "PreviousTxnID": "401B0DD780B0A6B4A6964707BFDE9ECCEDC4F9153C75DEA97DF988289929EED6",
                              "PreviousTxnLgrSeq": 4715428
                            }
                          }
                        ],
                        "TransactionIndex": 0,
                        "TransactionResult": "tesSUCCESS"
                      },
                      "tx": {
                        "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                        "Amount": {
                          "currency": "USD",
                          "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                          "value": "0.001"
                        },
                        "Destination": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                        "Fee": "14",
                        "Flags": 0,
                        "Paths": [
                          [
                            {
                              "currency": "CAD",
                              "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "BTC",
                              "issuer": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rnziParaNb8nsU4aruQdwYE3j5jUcqjzFm",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ]
                        ],
                        "SendMax": "48138",
                        "Sequence": 34,
                        "SigningPubKey": "025B32A54BFA33FB781581F49B235C0E2820C929FF41E677ADA5D3E53CFBA46332",
                        "TransactionType": "Payment",
                        "TxnSignature": "3046022100B19B6B3F6FBC2EE1EE4C4FC04A6B9541224012815A764401D68046A251353F3D022100B75B32DA73519756E5990EA7F66CC5FEEAFD8952DC66DFBDA4A32DD995DF90D0",
                        "date": 444445470,
                        "hash": "6EA8B80D24E02F1E25E0E22022A0887D080BE793237256A2785B458626AF97DC",
                        "inLedger": 4715969,
                        "ledger_index": 4715969
                      },
                      "validated": true
                    },
                    {
                      "meta": {
                        "AffectedNodes": [
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                "BookDirectory": "0423F6FBF60C5F359820660A10CD60AAEB7A49342FD037C95C0F724905AC4A10",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "0000000000000246",
                                "Sequence": 32575,
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "9.993356906077354"
                                },
                                "TakerPays": "434489433"
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "230F4C0A84F59E8415B18E8748EC369F4A6E695B6FBBDBAD9EB47927F0F9A7F0",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "9.994464088397795"
                                },
                                "TakerPays": "434537571"
                              },
                              "PreviousTxnID": "18F013B8A07867CFE1B41CC732129D23F444EA11267DA6EEBC872E9CDA229566",
                              "PreviousTxnLgrSeq": 4715407
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-9.993356906077353"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                  "value": "30"
                                },
                                "HighNode": "0000000000000009",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "LowNode": "0000000000000009"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "24E9ED0A4560CECB8F4677896E84D1245891C6AD2D8C826C0B61F4F9F499EA5F",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-9.994464088397794"
                                }
                              },
                              "PreviousTxnID": "BBA8805AF485C5247939118F8AD14DC29335BA4FCBA1A36CBCBA30A817605BD7",
                              "PreviousTxnLgrSeq": 4715259
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                                "Balance": "172613309",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 34
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                              "PreviousFields": {
                                "Balance": "172661459",
                                "Sequence": 33
                              },
                              "PreviousTxnID": "D290C44FD407F4A1296A0553945B93DCE60725ACD27576B1857526C75EE3241B",
                              "PreviousTxnLgrSeq": 4715353
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                "BookDirectory": "7F8C9F53419784C394C9D1531B14E7DBCBC1923B7AEA1A485503ECF76DF08D6F",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "0000000000000001",
                                "Sequence": 144,
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.242986"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.99224972375692"
                                }
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "7B3984ED3B9B30B75CF7D8C2ABDBE71B56A8CB83EE1839D17D742EAD585C0212",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.243988"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.99335690607736"
                                }
                              },
                              "PreviousTxnID": "BBA8805AF485C5247939118F8AD14DC29335BA4FCBA1A36CBCBA30A817605BD7",
                              "PreviousTxnLgrSeq": 4715259
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                "Balance": "22931185459",
                                "Flags": 0,
                                "OwnerCount": 69,
                                "Sequence": 32581
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "99E731A23496C471328C733B7AEFBD3E78A533B886A9CAE90B1554561EBF82C3",
                              "PreviousFields": {
                                "Balance": "22931137321"
                              },
                              "PreviousTxnID": "0B70264169C720AF84FE4394B3316CDC5CC821F3D4157A4DDE44F85F50EAAD9B",
                              "PreviousTxnLgrSeq": 4715424
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0924218583074"
                                },
                                "Flags": 131072,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "1200"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "00000000000000BE"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "9E61FEB8F12418B79DE776EE96BE58643854B2AE3249FE7BDAF372B567A5FCEA",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0934238583074"
                                }
                              },
                              "PreviousTxnID": "BBA8805AF485C5247939118F8AD14DC29335BA4FCBA1A36CBCBA30A817605BD7",
                              "PreviousTxnLgrSeq": 4715259
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.64666588981472"
                                },
                                "Flags": 196608,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "25"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "50"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C032D6B34C17F2E46AF53E5EE925CAF780EF05EC06D6DE75B2046F8235D662BB",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.64777307213516"
                                }
                              },
                              "PreviousTxnID": "BBA8805AF485C5247939118F8AD14DC29335BA4FCBA1A36CBCBA30A817605BD7",
                              "PreviousTxnLgrSeq": 4715259
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7333451699645"
                                },
                                "Flags": 65536,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "HighNode": "0000000000000001",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "3000"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C29D6CE99DA3E7B11B5E6C2730438760069836F65D87F026BC21DB1A1A9A54C0",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7322379876441"
                                }
                              },
                              "PreviousTxnID": "BBA8805AF485C5247939118F8AD14DC29335BA4FCBA1A36CBCBA30A817605BD7",
                              "PreviousTxnLgrSeq": 4715259
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.01"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                                  "value": "10"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "000000000000018F"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "CB2B4541697629B646B3E93B2E0334BC13AC7ADAE79BA49E27A40B44E9C10A5B",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.009"
                                }
                              },
                              "PreviousTxnID": "D290C44FD407F4A1296A0553945B93DCE60725ACD27576B1857526C75EE3241B",
                              "PreviousTxnLgrSeq": 4715353
                            }
                          }
                        ],
                        "TransactionIndex": 0,
                        "TransactionResult": "tesSUCCESS"
                      },
                      "tx": {
                        "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                        "Amount": {
                          "currency": "USD",
                          "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                          "value": "0.001"
                        },
                        "Destination": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                        "Fee": "12",
                        "Flags": 0,
                        "Paths": [
                          [
                            {
                              "currency": "CAD",
                              "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "BTC",
                              "issuer": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rnziParaNb8nsU4aruQdwYE3j5jUcqjzFm",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ]
                        ],
                        "SendMax": "48138",
                        "Sequence": 33,
                        "SigningPubKey": "025B32A54BFA33FB781581F49B235C0E2820C929FF41E677ADA5D3E53CFBA46332",
                        "TransactionType": "Payment",
                        "TxnSignature": "3045022039367D794869954E39ACAC9A44CDE42CB69F1E5AE23C7CD50C2361440BCDAFEB022100E22A814E6F5CAAA845DDE0E72972A54E189475B0B93BC17A182A854DFAB75C66",
                        "date": 444442410,
                        "hash": "401B0DD780B0A6B4A6964707BFDE9ECCEDC4F9153C75DEA97DF988289929EED6",
                        "inLedger": 4715428,
                        "ledger_index": 4715428
                      },
                      "validated": true
                    },
                    {
                      "meta": {
                        "AffectedNodes": [
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rpQJFQi7gPx5TBfZpExBzoMc7V6AdyXLgX",
                                "Balance": "4942998131",
                                "Flags": 0,
                                "OwnerCount": 17,
                                "Sequence": 2599
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "01E0E10BF4F3B22B403A244699422B4028B6E2B95B597E8185EE0EB19F8633C6",
                              "PreviousFields": {
                                "Balance": "4942947652"
                              },
                              "PreviousTxnID": "BF3826AD35BCA2D1F95C4694E7234F29400FC733831ADCA3BF152BD9E813CD42",
                              "PreviousTxnLgrSeq": 4715245
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rpQJFQi7gPx5TBfZpExBzoMc7V6AdyXLgX",
                                "BookDirectory": "4627DFFCFF8B5A265EDBD8AE8C14A52325DBFEDAF4F5C32E5C11E5D6588A7FAC",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "000000000000000B",
                                "Sequence": 2597,
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0.09624400000000002"
                                },
                                "TakerPays": "4848563"
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "0D192A7E3F1BEE7AB3B657E9304A1746EB32AF9F866846B82C5504A125D44077",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0.09724600000000002"
                                },
                                "TakerPays": "4899042"
                              },
                              "PreviousTxnID": "BF3826AD35BCA2D1F95C4694E7234F29400FC733831ADCA3BF152BD9E813CD42",
                              "PreviousTxnLgrSeq": 4715245
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-97.61209874630314"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "rpQJFQi7gPx5TBfZpExBzoMc7V6AdyXLgX",
                                  "value": "0"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "0000000000000183"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "11A0B092630B15DE3E747AB982C4A724210C509A149F847456B8C92382E0178F",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-97.61310074630314"
                                }
                              },
                              "PreviousTxnID": "BF3826AD35BCA2D1F95C4694E7234F29400FC733831ADCA3BF152BD9E813CD42",
                              "PreviousTxnLgrSeq": 4715245
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                                "Balance": "172661459",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 33
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                              "PreviousFields": {
                                "Balance": "172711950",
                                "Sequence": 32
                              },
                              "PreviousTxnID": "BBA8805AF485C5247939118F8AD14DC29335BA4FCBA1A36CBCBA30A817605BD7",
                              "PreviousTxnLgrSeq": 4715259
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.009"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                                  "value": "10"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "000000000000018F"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "CB2B4541697629B646B3E93B2E0334BC13AC7ADAE79BA49E27A40B44E9C10A5B",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.008"
                                }
                              },
                              "PreviousTxnID": "BBA8805AF485C5247939118F8AD14DC29335BA4FCBA1A36CBCBA30A817605BD7",
                              "PreviousTxnLgrSeq": 4715259
                            }
                          }
                        ],
                        "TransactionIndex": 7,
                        "TransactionResult": "tesSUCCESS"
                      },
                      "tx": {
                        "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                        "Amount": {
                          "currency": "USD",
                          "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                          "value": "0.001"
                        },
                        "Destination": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                        "Fee": "12",
                        "Flags": 0,
                        "Paths": [
                          [
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rnziParaNb8nsU4aruQdwYE3j5jUcqjzFm",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rQ96qm46YsRX2F7SSCQxToR2ybRuUYsZ4R",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rMZKeAt1vMjhuNCWDiB4SdzJRiymdpERw4",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ]
                        ],
                        "SendMax": "50479",
                        "Sequence": 32,
                        "SigningPubKey": "025B32A54BFA33FB781581F49B235C0E2820C929FF41E677ADA5D3E53CFBA46332",
                        "TransactionType": "Payment",
                        "TxnSignature": "3045022100F2D9F24200D2B09A668D6E6A82D7A729B16ED30043380A2C4A4606B5ACC547F8022017B733301094D7CA54C64E63446342290090C9F2C6F7213C53C31A2CC840003E",
                        "date": 444441900,
                        "hash": "D290C44FD407F4A1296A0553945B93DCE60725ACD27576B1857526C75EE3241B",
                        "inLedger": 4715353,
                        "ledger_index": 4715353
                      },
                      "validated": true
                    },
                    {
                      "meta": {
                        "AffectedNodes": [
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-9.994464088397794"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                  "value": "30"
                                },
                                "HighNode": "0000000000000009",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "LowNode": "0000000000000009"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "24E9ED0A4560CECB8F4677896E84D1245891C6AD2D8C826C0B61F4F9F499EA5F",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-9.995571270718235"
                                }
                              },
                              "PreviousTxnID": "BC8227746D18DBEB87B244E00B38DB240D9DC9921B118722F1EE2B8D06696A71",
                              "PreviousTxnLgrSeq": 4715232
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                                "Balance": "172711950",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 32
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                              "PreviousFields": {
                                "Balance": "172760100",
                                "Sequence": 31
                              },
                              "PreviousTxnID": "BF3826AD35BCA2D1F95C4694E7234F29400FC733831ADCA3BF152BD9E813CD42",
                              "PreviousTxnLgrSeq": 4715245
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                "BookDirectory": "0423F6FBF60C5F359820660A10CD60AAEB7A49342FD037C95C0F7249056F0201",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "0000000000000243",
                                "Sequence": 32439,
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "9.994464088397793"
                                },
                                "TakerPays": "434537570"
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "73C7C020CBFDBD1B0AED216C871073E3638739A8BBDBDA4079E59F4312D608AE",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "9.995571270718234"
                                },
                                "TakerPays": "434585708"
                              },
                              "PreviousTxnID": "BC8227746D18DBEB87B244E00B38DB240D9DC9921B118722F1EE2B8D06696A71",
                              "PreviousTxnLgrSeq": 4715232
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                "BookDirectory": "7F8C9F53419784C394C9D1531B14E7DBCBC1923B7AEA1A485503ECF76DF08D6F",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "0000000000000001",
                                "Sequence": 144,
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.243988"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.99335690607736"
                                }
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "7B3984ED3B9B30B75CF7D8C2ABDBE71B56A8CB83EE1839D17D742EAD585C0212",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.24499"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.9944640883978"
                                }
                              },
                              "PreviousTxnID": "BC8227746D18DBEB87B244E00B38DB240D9DC9921B118722F1EE2B8D06696A71",
                              "PreviousTxnLgrSeq": 4715232
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                "Balance": "22541432493",
                                "Flags": 0,
                                "OwnerCount": 68,
                                "Sequence": 32524
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "99E731A23496C471328C733B7AEFBD3E78A533B886A9CAE90B1554561EBF82C3",
                              "PreviousFields": {
                                "Balance": "22541384355"
                              },
                              "PreviousTxnID": "5BBA54C6F42C958D0CFEF34540869B9743E91B43FF783DA90FC67902BE5F309B",
                              "PreviousTxnLgrSeq": 4715259
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0934238583074"
                                },
                                "Flags": 131072,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "1200"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "00000000000000BE"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "9E61FEB8F12418B79DE776EE96BE58643854B2AE3249FE7BDAF372B567A5FCEA",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0944258583074"
                                }
                              },
                              "PreviousTxnID": "BC8227746D18DBEB87B244E00B38DB240D9DC9921B118722F1EE2B8D06696A71",
                              "PreviousTxnLgrSeq": 4715232
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.64777307213516"
                                },
                                "Flags": 196608,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "25"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "50"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C032D6B34C17F2E46AF53E5EE925CAF780EF05EC06D6DE75B2046F8235D662BB",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.6488802544556"
                                }
                              },
                              "PreviousTxnID": "BC8227746D18DBEB87B244E00B38DB240D9DC9921B118722F1EE2B8D06696A71",
                              "PreviousTxnLgrSeq": 4715232
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7322379876441"
                                },
                                "Flags": 65536,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "HighNode": "0000000000000001",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "3000"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C29D6CE99DA3E7B11B5E6C2730438760069836F65D87F026BC21DB1A1A9A54C0",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7311308053237"
                                }
                              },
                              "PreviousTxnID": "BC8227746D18DBEB87B244E00B38DB240D9DC9921B118722F1EE2B8D06696A71",
                              "PreviousTxnLgrSeq": 4715232
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.008"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                                  "value": "10"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "000000000000018F"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "CB2B4541697629B646B3E93B2E0334BC13AC7ADAE79BA49E27A40B44E9C10A5B",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.007"
                                }
                              },
                              "PreviousTxnID": "BF3826AD35BCA2D1F95C4694E7234F29400FC733831ADCA3BF152BD9E813CD42",
                              "PreviousTxnLgrSeq": 4715245
                            }
                          }
                        ],
                        "TransactionIndex": 2,
                        "TransactionResult": "tesSUCCESS"
                      },
                      "tx": {
                        "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                        "Amount": {
                          "currency": "USD",
                          "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                          "value": "0.001"
                        },
                        "Destination": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                        "Fee": "12",
                        "Flags": 0,
                        "Paths": [
                          [
                            {
                              "currency": "CAD",
                              "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "BTC",
                              "issuer": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rnziParaNb8nsU4aruQdwYE3j5jUcqjzFm",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ]
                        ],
                        "SendMax": "48138",
                        "Sequence": 31,
                        "SigningPubKey": "025B32A54BFA33FB781581F49B235C0E2820C929FF41E677ADA5D3E53CFBA46332",
                        "TransactionType": "Payment",
                        "TxnSignature": "304602210087AB1FE0FE57D99260BDC92BA8898437AEDBD6F1B1D506E2E29FB21F841FD0F0022100B01A3176DDA5B7D902BD80B61F452780052CE02ED1B2E3E73A18C1C64E4F665E",
                        "date": 444441290,
                        "hash": "BBA8805AF485C5247939118F8AD14DC29335BA4FCBA1A36CBCBA30A817605BD7",
                        "inLedger": 4715259,
                        "ledger_index": 4715259
                      },
                      "validated": true
                    },
                    {
                      "meta": {
                        "AffectedNodes": [
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rpQJFQi7gPx5TBfZpExBzoMc7V6AdyXLgX",
                                "Balance": "4942947652",
                                "Flags": 0,
                                "OwnerCount": 17,
                                "Sequence": 2599
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "01E0E10BF4F3B22B403A244699422B4028B6E2B95B597E8185EE0EB19F8633C6",
                              "PreviousFields": {
                                "Balance": "4942897173"
                              },
                              "PreviousTxnID": "165E26E9DC1BBAFEAEDF3BB127E7A64425207E260A6D1DBB3F979EED5D36A8CD",
                              "PreviousTxnLgrSeq": 4715107
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rpQJFQi7gPx5TBfZpExBzoMc7V6AdyXLgX",
                                "BookDirectory": "4627DFFCFF8B5A265EDBD8AE8C14A52325DBFEDAF4F5C32E5C11E5D6588A7FAC",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "000000000000000B",
                                "Sequence": 2597,
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0.09724600000000002"
                                },
                                "TakerPays": "4899042"
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "0D192A7E3F1BEE7AB3B657E9304A1746EB32AF9F866846B82C5504A125D44077",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0.09824800000000002"
                                },
                                "TakerPays": "4949521"
                              },
                              "PreviousTxnID": "165E26E9DC1BBAFEAEDF3BB127E7A64425207E260A6D1DBB3F979EED5D36A8CD",
                              "PreviousTxnLgrSeq": 4715107
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-97.61310074630314"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "rpQJFQi7gPx5TBfZpExBzoMc7V6AdyXLgX",
                                  "value": "0"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "0000000000000183"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "11A0B092630B15DE3E747AB982C4A724210C509A149F847456B8C92382E0178F",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-97.61410274630314"
                                }
                              },
                              "PreviousTxnID": "165E26E9DC1BBAFEAEDF3BB127E7A64425207E260A6D1DBB3F979EED5D36A8CD",
                              "PreviousTxnLgrSeq": 4715107
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                                "Balance": "172760100",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 31
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                              "PreviousFields": {
                                "Balance": "172810647",
                                "Sequence": 30
                              },
                              "PreviousTxnID": "BC8227746D18DBEB87B244E00B38DB240D9DC9921B118722F1EE2B8D06696A71",
                              "PreviousTxnLgrSeq": 4715232
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.007"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                                  "value": "10"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "000000000000018F"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "CB2B4541697629B646B3E93B2E0334BC13AC7ADAE79BA49E27A40B44E9C10A5B",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.006"
                                }
                              },
                              "PreviousTxnID": "BC8227746D18DBEB87B244E00B38DB240D9DC9921B118722F1EE2B8D06696A71",
                              "PreviousTxnLgrSeq": 4715232
                            }
                          }
                        ],
                        "TransactionIndex": 0,
                        "TransactionResult": "tesSUCCESS"
                      },
                      "tx": {
                        "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                        "Amount": {
                          "currency": "USD",
                          "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                          "value": "0.001"
                        },
                        "Destination": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                        "Fee": "68",
                        "Flags": 0,
                        "Paths": [
                          [
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rnziParaNb8nsU4aruQdwYE3j5jUcqjzFm",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rQ96qm46YsRX2F7SSCQxToR2ybRuUYsZ4R",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rMZKeAt1vMjhuNCWDiB4SdzJRiymdpERw4",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ]
                        ],
                        "SendMax": "50479",
                        "Sequence": 30,
                        "SigningPubKey": "025B32A54BFA33FB781581F49B235C0E2820C929FF41E677ADA5D3E53CFBA46332",
                        "TransactionType": "Payment",
                        "TxnSignature": "3045022100B07DD0F3AEA6169BCDAD7F5F5D8172CD68A39D945FE1B71479CD717E29655C3102201AAAEA3054B8F6DF0C6C467A816ECC4E2A1355D84895D1A40F8CD0F2D7287863",
                        "date": 444441220,
                        "hash": "BF3826AD35BCA2D1F95C4694E7234F29400FC733831ADCA3BF152BD9E813CD42",
                        "inLedger": 4715245,
                        "ledger_index": 4715245
                      },
                      "validated": true
                    },
                    {
                      "meta": {
                        "AffectedNodes": [
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-9.995571270718235"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                  "value": "30"
                                },
                                "HighNode": "0000000000000009",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "LowNode": "0000000000000009"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "24E9ED0A4560CECB8F4677896E84D1245891C6AD2D8C826C0B61F4F9F499EA5F",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-9.996678453038676"
                                }
                              },
                              "PreviousTxnID": "3B510B7C84DAE8520981D6A4A4AC368A6D6F55203D0E35626CB20B5D25A02989",
                              "PreviousTxnLgrSeq": 4715220
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                                "Balance": "172810647",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 30
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                              "PreviousFields": {
                                "Balance": "172858798",
                                "Sequence": 29
                              },
                              "PreviousTxnID": "3B510B7C84DAE8520981D6A4A4AC368A6D6F55203D0E35626CB20B5D25A02989",
                              "PreviousTxnLgrSeq": 4715220
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                "BookDirectory": "0423F6FBF60C5F359820660A10CD60AAEB7A49342FD037C95C0F7249056F0201",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "0000000000000243",
                                "Sequence": 32439,
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "9.995571270718234"
                                },
                                "TakerPays": "434585708"
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "73C7C020CBFDBD1B0AED216C871073E3638739A8BBDBDA4079E59F4312D608AE",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "9.996678453038675"
                                },
                                "TakerPays": "434633846"
                              },
                              "PreviousTxnID": "3B510B7C84DAE8520981D6A4A4AC368A6D6F55203D0E35626CB20B5D25A02989",
                              "PreviousTxnLgrSeq": 4715220
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                "BookDirectory": "7F8C9F53419784C394C9D1531B14E7DBCBC1923B7AEA1A485503ECF76DF08D6F",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "0000000000000001",
                                "Sequence": 144,
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.24499"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.9944640883978"
                                }
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "7B3984ED3B9B30B75CF7D8C2ABDBE71B56A8CB83EE1839D17D742EAD585C0212",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.245992"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.99557127071824"
                                }
                              },
                              "PreviousTxnID": "3B510B7C84DAE8520981D6A4A4AC368A6D6F55203D0E35626CB20B5D25A02989",
                              "PreviousTxnLgrSeq": 4715220
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                "Balance": "22684042107",
                                "Flags": 0,
                                "OwnerCount": 70,
                                "Sequence": 32523
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "99E731A23496C471328C733B7AEFBD3E78A533B886A9CAE90B1554561EBF82C3",
                              "PreviousFields": {
                                "Balance": "22683993969"
                              },
                              "PreviousTxnID": "1695CF4D19EAB55A5251F5765DE7A657F56653A46A3BA5582C793DFBBBE85694",
                              "PreviousTxnLgrSeq": 4715231
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0944258583074"
                                },
                                "Flags": 131072,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "1200"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "00000000000000BE"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "9E61FEB8F12418B79DE776EE96BE58643854B2AE3249FE7BDAF372B567A5FCEA",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0954278583074"
                                }
                              },
                              "PreviousTxnID": "3B510B7C84DAE8520981D6A4A4AC368A6D6F55203D0E35626CB20B5D25A02989",
                              "PreviousTxnLgrSeq": 4715220
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.6488802544556"
                                },
                                "Flags": 196608,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "25"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "50"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C032D6B34C17F2E46AF53E5EE925CAF780EF05EC06D6DE75B2046F8235D662BB",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.64998743677604"
                                }
                              },
                              "PreviousTxnID": "3B510B7C84DAE8520981D6A4A4AC368A6D6F55203D0E35626CB20B5D25A02989",
                              "PreviousTxnLgrSeq": 4715220
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7311308053237"
                                },
                                "Flags": 65536,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "HighNode": "0000000000000001",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "3000"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C29D6CE99DA3E7B11B5E6C2730438760069836F65D87F026BC21DB1A1A9A54C0",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7300236230033"
                                }
                              },
                              "PreviousTxnID": "3B510B7C84DAE8520981D6A4A4AC368A6D6F55203D0E35626CB20B5D25A02989",
                              "PreviousTxnLgrSeq": 4715220
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.006"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                                  "value": "10"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "000000000000018F"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "CB2B4541697629B646B3E93B2E0334BC13AC7ADAE79BA49E27A40B44E9C10A5B",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.005"
                                }
                              },
                              "PreviousTxnID": "3B510B7C84DAE8520981D6A4A4AC368A6D6F55203D0E35626CB20B5D25A02989",
                              "PreviousTxnLgrSeq": 4715220
                            }
                          }
                        ],
                        "TransactionIndex": 0,
                        "TransactionResult": "tesSUCCESS"
                      },
                      "tx": {
                        "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                        "Amount": {
                          "currency": "USD",
                          "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                          "value": "0.001"
                        },
                        "Destination": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                        "Fee": "13",
                        "Flags": 0,
                        "Paths": [
                          [
                            {
                              "currency": "CAD",
                              "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "BTC",
                              "issuer": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rnziParaNb8nsU4aruQdwYE3j5jUcqjzFm",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ]
                        ],
                        "SendMax": "48138",
                        "Sequence": 29,
                        "SigningPubKey": "025B32A54BFA33FB781581F49B235C0E2820C929FF41E677ADA5D3E53CFBA46332",
                        "TransactionType": "Payment",
                        "TxnSignature": "30450221008AFA4A24AE4CE8F6D5773923023F51124D008137908C00E08213F205B77ABDD70220278724488A4BB17402C3A06DF96848BC062E98CF962CF7CC1052E9AEBD7EC033",
                        "date": 444441120,
                        "hash": "BC8227746D18DBEB87B244E00B38DB240D9DC9921B118722F1EE2B8D06696A71",
                        "inLedger": 4715232,
                        "ledger_index": 4715232
                      },
                      "validated": true
                    },
                    {
                      "meta": {
                        "AffectedNodes": [
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-9.996678453038676"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                  "value": "30"
                                },
                                "HighNode": "0000000000000009",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "LowNode": "0000000000000009"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "24E9ED0A4560CECB8F4677896E84D1245891C6AD2D8C826C0B61F4F9F499EA5F",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-9.997785635359117"
                                }
                              },
                              "PreviousTxnID": "F9FC3AAE7D095527C6BBC6B8A32A79D6AFDD133FBFD75472362205BBB3E425DC",
                              "PreviousTxnLgrSeq": 4715076
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                                "Balance": "172858798",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 29
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                              "PreviousFields": {
                                "Balance": "172906949",
                                "Sequence": 28
                              },
                              "PreviousTxnID": "FB4754AC97623D5C5FC960C125E5F28DD7782293BCBB24DE8DAF75B0DF9D93A6",
                              "PreviousTxnLgrSeq": 4715204
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                "BookDirectory": "0423F6FBF60C5F359820660A10CD60AAEB7A49342FD037C95C0F7249056F0201",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "0000000000000243",
                                "Sequence": 32439,
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "9.996678453038675"
                                },
                                "TakerPays": "434633846"
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "73C7C020CBFDBD1B0AED216C871073E3638739A8BBDBDA4079E59F4312D608AE",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "9.997785635359116"
                                },
                                "TakerPays": "434681984"
                              },
                              "PreviousTxnID": "F9FC3AAE7D095527C6BBC6B8A32A79D6AFDD133FBFD75472362205BBB3E425DC",
                              "PreviousTxnLgrSeq": 4715076
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                "BookDirectory": "7F8C9F53419784C394C9D1531B14E7DBCBC1923B7AEA1A485503ECF76DF08D6F",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "0000000000000001",
                                "Sequence": 144,
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.245992"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.99557127071824"
                                }
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "7B3984ED3B9B30B75CF7D8C2ABDBE71B56A8CB83EE1839D17D742EAD585C0212",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.246994"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.99667845303868"
                                }
                              },
                              "PreviousTxnID": "F9FC3AAE7D095527C6BBC6B8A32A79D6AFDD133FBFD75472362205BBB3E425DC",
                              "PreviousTxnLgrSeq": 4715076
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                "Balance": "22683994519",
                                "Flags": 0,
                                "OwnerCount": 70,
                                "Sequence": 32512
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "99E731A23496C471328C733B7AEFBD3E78A533B886A9CAE90B1554561EBF82C3",
                              "PreviousFields": {
                                "Balance": "22683946381"
                              },
                              "PreviousTxnID": "F2CF41FE142FB006F2A9DB327091C81B7037A8D1EBF1D039399D80281FFAA388",
                              "PreviousTxnLgrSeq": 4715212
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0954278583074"
                                },
                                "Flags": 131072,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "1200"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "00000000000000BE"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "9E61FEB8F12418B79DE776EE96BE58643854B2AE3249FE7BDAF372B567A5FCEA",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0964298583074"
                                }
                              },
                              "PreviousTxnID": "F9FC3AAE7D095527C6BBC6B8A32A79D6AFDD133FBFD75472362205BBB3E425DC",
                              "PreviousTxnLgrSeq": 4715076
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.64998743677604"
                                },
                                "Flags": 196608,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "25"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "50"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C032D6B34C17F2E46AF53E5EE925CAF780EF05EC06D6DE75B2046F8235D662BB",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.65109461909648"
                                }
                              },
                              "PreviousTxnID": "F9FC3AAE7D095527C6BBC6B8A32A79D6AFDD133FBFD75472362205BBB3E425DC",
                              "PreviousTxnLgrSeq": 4715076
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7300236230033"
                                },
                                "Flags": 65536,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "HighNode": "0000000000000001",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "3000"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C29D6CE99DA3E7B11B5E6C2730438760069836F65D87F026BC21DB1A1A9A54C0",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7289164406829"
                                }
                              },
                              "PreviousTxnID": "F9FC3AAE7D095527C6BBC6B8A32A79D6AFDD133FBFD75472362205BBB3E425DC",
                              "PreviousTxnLgrSeq": 4715076
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.005"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                                  "value": "10"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "000000000000018F"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "CB2B4541697629B646B3E93B2E0334BC13AC7ADAE79BA49E27A40B44E9C10A5B",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.004"
                                }
                              },
                              "PreviousTxnID": "165E26E9DC1BBAFEAEDF3BB127E7A64425207E260A6D1DBB3F979EED5D36A8CD",
                              "PreviousTxnLgrSeq": 4715107
                            }
                          }
                        ],
                        "TransactionIndex": 0,
                        "TransactionResult": "tesSUCCESS"
                      },
                      "tx": {
                        "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                        "Amount": {
                          "currency": "USD",
                          "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                          "value": "0.001"
                        },
                        "Destination": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                        "Fee": "13",
                        "Flags": 0,
                        "Paths": [
                          [
                            {
                              "currency": "CAD",
                              "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "BTC",
                              "issuer": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rnziParaNb8nsU4aruQdwYE3j5jUcqjzFm",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ]
                        ],
                        "SendMax": "48138",
                        "Sequence": 28,
                        "SigningPubKey": "025B32A54BFA33FB781581F49B235C0E2820C929FF41E677ADA5D3E53CFBA46332",
                        "TransactionType": "Payment",
                        "TxnSignature": "3044022032091A1A80E7F1FB346A013C2449E820568568A1F46EF2431CDD8E029793377202200C0B7A04EDDEBFA33CD7F2623CC09A4BA29C28040D2AD0FAB68067957309698C",
                        "date": 444441040,
                        "hash": "3B510B7C84DAE8520981D6A4A4AC368A6D6F55203D0E35626CB20B5D25A02989",
                        "inLedger": 4715220,
                        "ledger_index": 4715220
                      },
                      "validated": true
                    },
                    {
                      "meta": {
                        "AffectedNodes": [
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                                "Balance": "172906949",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 28
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                              "PreviousFields": {
                                "Balance": "172906964",
                                "Sequence": 27
                              },
                              "PreviousTxnID": "165E26E9DC1BBAFEAEDF3BB127E7A64425207E260A6D1DBB3F979EED5D36A8CD",
                              "PreviousTxnLgrSeq": 4715107
                            }
                          }
                        ],
                        "TransactionIndex": 1,
                        "TransactionResult": "tesSUCCESS"
                      },
                      "tx": {
                        "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                        "Fee": "15",
                        "Flags": 0,
                        "Sequence": 27,
                        "SigningPubKey": "025B32A54BFA33FB781581F49B235C0E2820C929FF41E677ADA5D3E53CFBA46332",
                        "TransactionType": "AccountSet",
                        "TxnSignature": "30450220447ED008A33B0A50A9409A820EAED333934188AFFD18CF4D492E4BA0F70BC58D022100E5084330F9BE710F7B3868258D078DBB46C4928A1EE71AF51CB8342AE4820449",
                        "date": 444440940,
                        "hash": "FB4754AC97623D5C5FC960C125E5F28DD7782293BCBB24DE8DAF75B0DF9D93A6",
                        "inLedger": 4715204,
                        "ledger_index": 4715204
                      },
                      "validated": true
                    },
                    {
                      "meta": {
                        "AffectedNodes": [
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rpQJFQi7gPx5TBfZpExBzoMc7V6AdyXLgX",
                                "Balance": "4942897173",
                                "Flags": 0,
                                "OwnerCount": 17,
                                "Sequence": 2599
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "01E0E10BF4F3B22B403A244699422B4028B6E2B95B597E8185EE0EB19F8633C6",
                              "PreviousFields": {
                                "Balance": "4942846694"
                              },
                              "PreviousTxnID": "2C55DD198957F82D2A34D9FB51D5414FDE6D78B20E9C74D7B7561D0C242E014D",
                              "PreviousTxnLgrSeq": 4714805
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rpQJFQi7gPx5TBfZpExBzoMc7V6AdyXLgX",
                                "BookDirectory": "4627DFFCFF8B5A265EDBD8AE8C14A52325DBFEDAF4F5C32E5C11E5D6588A7FAC",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "000000000000000B",
                                "Sequence": 2597,
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0.09824800000000002"
                                },
                                "TakerPays": "4949521"
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "0D192A7E3F1BEE7AB3B657E9304A1746EB32AF9F866846B82C5504A125D44077",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0.09925000000000002"
                                },
                                "TakerPays": "5000000"
                              },
                              "PreviousTxnID": "0ED1AB8B819879562178E4DFBD4B8B36B8E0EF8A190AEA3C99C57AAC20860F20",
                              "PreviousTxnLgrSeq": 4714801
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-97.61410274630314"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "rpQJFQi7gPx5TBfZpExBzoMc7V6AdyXLgX",
                                  "value": "0"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "0000000000000183"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "11A0B092630B15DE3E747AB982C4A724210C509A149F847456B8C92382E0178F",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-97.61510474630314"
                                }
                              },
                              "PreviousTxnID": "C31A086A96065F7840B45E872ADF7113401F3C47C647191A832E646B55984098",
                              "PreviousTxnLgrSeq": 4714784
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                                "Balance": "172906964",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 27
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                              "PreviousFields": {
                                "Balance": "172957455",
                                "Sequence": 26
                              },
                              "PreviousTxnID": "F9FC3AAE7D095527C6BBC6B8A32A79D6AFDD133FBFD75472362205BBB3E425DC",
                              "PreviousTxnLgrSeq": 4715076
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.004"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                                  "value": "10"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "000000000000018F"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "CB2B4541697629B646B3E93B2E0334BC13AC7ADAE79BA49E27A40B44E9C10A5B",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.003"
                                }
                              },
                              "PreviousTxnID": "F9FC3AAE7D095527C6BBC6B8A32A79D6AFDD133FBFD75472362205BBB3E425DC",
                              "PreviousTxnLgrSeq": 4715076
                            }
                          }
                        ],
                        "TransactionIndex": 0,
                        "TransactionResult": "tesSUCCESS"
                      },
                      "tx": {
                        "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                        "Amount": {
                          "currency": "USD",
                          "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                          "value": "0.001"
                        },
                        "Destination": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                        "Fee": "12",
                        "Flags": 0,
                        "Paths": [
                          [
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rnziParaNb8nsU4aruQdwYE3j5jUcqjzFm",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rQ96qm46YsRX2F7SSCQxToR2ybRuUYsZ4R",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rLEsXccBGNR3UPuPu2hUXPjziKC3qKSBun",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rLEsXccBGNR3UPuPu2hUXPjziKC3qKSBun",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "r9cZA1mLK5R5Am25ArfXFmqgNwjZgnfk59",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ]
                        ],
                        "SendMax": "50479",
                        "Sequence": 26,
                        "SigningPubKey": "025B32A54BFA33FB781581F49B235C0E2820C929FF41E677ADA5D3E53CFBA46332",
                        "TransactionType": "Payment",
                        "TxnSignature": "3046022100D4D9774DB74E170328FBB45EEFA956575A5325411E7079A31B87E22ECDB59C800221008C80144600222C515286D7A7AEFB1E86278C2B7981B4104B308DEB93DD7C5AD0",
                        "date": 444440350,
                        "hash": "165E26E9DC1BBAFEAEDF3BB127E7A64425207E260A6D1DBB3F979EED5D36A8CD",
                        "inLedger": 4715107,
                        "ledger_index": 4715107
                      },
                      "validated": true
                    },
                    {
                      "meta": {
                        "AffectedNodes": [
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-9.997785635359117"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                  "value": "30"
                                },
                                "HighNode": "0000000000000009",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "LowNode": "0000000000000009"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "24E9ED0A4560CECB8F4677896E84D1245891C6AD2D8C826C0B61F4F9F499EA5F",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-9.998892817679558"
                                }
                              },
                              "PreviousTxnID": "22BB21B2C4ACD068C90D54B599A360F092E4D09EA6922878A7F78D50827DC493",
                              "PreviousTxnLgrSeq": 4715017
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                                "Balance": "172957455",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 26
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                              "PreviousFields": {
                                "Balance": "173005605",
                                "Sequence": 25
                              },
                              "PreviousTxnID": "22BB21B2C4ACD068C90D54B599A360F092E4D09EA6922878A7F78D50827DC493",
                              "PreviousTxnLgrSeq": 4715017
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                "BookDirectory": "0423F6FBF60C5F359820660A10CD60AAEB7A49342FD037C95C0F7249056F0201",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "0000000000000243",
                                "Sequence": 32439,
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "9.997785635359116"
                                },
                                "TakerPays": "434681984"
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "73C7C020CBFDBD1B0AED216C871073E3638739A8BBDBDA4079E59F4312D608AE",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "9.998892817679557"
                                },
                                "TakerPays": "434730122"
                              },
                              "PreviousTxnID": "22BB21B2C4ACD068C90D54B599A360F092E4D09EA6922878A7F78D50827DC493",
                              "PreviousTxnLgrSeq": 4715017
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                "BookDirectory": "7F8C9F53419784C394C9D1531B14E7DBCBC1923B7AEA1A485503ECF76DF08D6F",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "0000000000000001",
                                "Sequence": 144,
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.246994"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.99667845303868"
                                }
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "7B3984ED3B9B30B75CF7D8C2ABDBE71B56A8CB83EE1839D17D742EAD585C0212",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.247996"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.99778563535912"
                                }
                              },
                              "PreviousTxnID": "22BB21B2C4ACD068C90D54B599A360F092E4D09EA6922878A7F78D50827DC493",
                              "PreviousTxnLgrSeq": 4715017
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                "Balance": "23344180582",
                                "Flags": 0,
                                "OwnerCount": 72,
                                "Sequence": 32460
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "99E731A23496C471328C733B7AEFBD3E78A533B886A9CAE90B1554561EBF82C3",
                              "PreviousFields": {
                                "Balance": "23344132444"
                              },
                              "PreviousTxnID": "7E7C970331007637AC94E0B1EE60845EB2A22513208D336A76704A7832C9C3E0",
                              "PreviousTxnLgrSeq": 4715050
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0964298583074"
                                },
                                "Flags": 131072,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "1200"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "00000000000000BE"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "9E61FEB8F12418B79DE776EE96BE58643854B2AE3249FE7BDAF372B567A5FCEA",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0974318583074"
                                }
                              },
                              "PreviousTxnID": "22BB21B2C4ACD068C90D54B599A360F092E4D09EA6922878A7F78D50827DC493",
                              "PreviousTxnLgrSeq": 4715017
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.65109461909648"
                                },
                                "Flags": 196608,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "25"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "50"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C032D6B34C17F2E46AF53E5EE925CAF780EF05EC06D6DE75B2046F8235D662BB",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.65220180141692"
                                }
                              },
                              "PreviousTxnID": "22BB21B2C4ACD068C90D54B599A360F092E4D09EA6922878A7F78D50827DC493",
                              "PreviousTxnLgrSeq": 4715017
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7289164406829"
                                },
                                "Flags": 65536,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "HighNode": "0000000000000001",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "3000"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C29D6CE99DA3E7B11B5E6C2730438760069836F65D87F026BC21DB1A1A9A54C0",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7278092583625"
                                }
                              },
                              "PreviousTxnID": "22BB21B2C4ACD068C90D54B599A360F092E4D09EA6922878A7F78D50827DC493",
                              "PreviousTxnLgrSeq": 4715017
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.003"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                                  "value": "10"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "000000000000018F"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "CB2B4541697629B646B3E93B2E0334BC13AC7ADAE79BA49E27A40B44E9C10A5B",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.002"
                                }
                              },
                              "PreviousTxnID": "22BB21B2C4ACD068C90D54B599A360F092E4D09EA6922878A7F78D50827DC493",
                              "PreviousTxnLgrSeq": 4715017
                            }
                          }
                        ],
                        "TransactionIndex": 4,
                        "TransactionResult": "tesSUCCESS"
                      },
                      "tx": {
                        "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                        "Amount": {
                          "currency": "USD",
                          "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                          "value": "0.001"
                        },
                        "Destination": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                        "Fee": "12",
                        "Flags": 0,
                        "Paths": [
                          [
                            {
                              "currency": "CAD",
                              "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "BTC",
                              "issuer": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rnziParaNb8nsU4aruQdwYE3j5jUcqjzFm",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ]
                        ],
                        "SendMax": "48138",
                        "Sequence": 25,
                        "SigningPubKey": "025B32A54BFA33FB781581F49B235C0E2820C929FF41E677ADA5D3E53CFBA46332",
                        "TransactionType": "Payment",
                        "TxnSignature": "30450220248EE7BF299FEE398A9847041DF7D1711CDECC580BE186BC97436278BC21672C022100DA8F87EE3D1B61AEFAC8E6204FD0941C9086F830EA81E297C893B592BB4F26FF",
                        "date": 444440190,
                        "hash": "F9FC3AAE7D095527C6BBC6B8A32A79D6AFDD133FBFD75472362205BBB3E425DC",
                        "inLedger": 4715076,
                        "ledger_index": 4715076
                      },
                      "validated": true
                    },
                    {
                      "meta": {
                        "AffectedNodes": [
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-9.998892817679558"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                  "value": "30"
                                },
                                "HighNode": "0000000000000009",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "LowNode": "0000000000000009"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "24E9ED0A4560CECB8F4677896E84D1245891C6AD2D8C826C0B61F4F9F499EA5F",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-9.999999999999999"
                                }
                              },
                              "PreviousTxnID": "4CCC3DC9EB6FA26363CD352A64FF97236BC4F230045C15CB005498E323A62F0B",
                              "PreviousTxnLgrSeq": 4709388
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                                "Balance": "173005605",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 25
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                              "PreviousFields": {
                                "Balance": "173053755",
                                "Sequence": 24
                              },
                              "PreviousTxnID": "8FB78363BF65CA146F3609003B6DE6C8063D370DDE4A4F5C36495A25E52D9502",
                              "PreviousTxnLgrSeq": 4714985
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                "BookDirectory": "0423F6FBF60C5F359820660A10CD60AAEB7A49342FD037C95C0F7249056F0201",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "0000000000000243",
                                "Sequence": 32439,
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "9.998892817679557"
                                },
                                "TakerPays": "434730122"
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "73C7C020CBFDBD1B0AED216C871073E3638739A8BBDBDA4079E59F4312D608AE",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "9.999999999999998"
                                },
                                "TakerPays": "434778260"
                              },
                              "PreviousTxnID": "EDAF3451D1D72F28CC6C943A1193075BEA7CD00C5CAC96A84D26DD848A5A5754",
                              "PreviousTxnLgrSeq": 4715000
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                "BookDirectory": "7F8C9F53419784C394C9D1531B14E7DBCBC1923B7AEA1A485503ECF76DF08D6F",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "0000000000000001",
                                "Sequence": 144,
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.247996"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.99778563535912"
                                }
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "7B3984ED3B9B30B75CF7D8C2ABDBE71B56A8CB83EE1839D17D742EAD585C0212",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.248998"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.99889281767956"
                                }
                              },
                              "PreviousTxnID": "8FB78363BF65CA146F3609003B6DE6C8063D370DDE4A4F5C36495A25E52D9502",
                              "PreviousTxnLgrSeq": 4714985
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rPEZyTnSyQyXBCwMVYyaafSVPL8oMtfG6a",
                                "Balance": "23344133194",
                                "Flags": 0,
                                "OwnerCount": 72,
                                "Sequence": 32445
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "99E731A23496C471328C733B7AEFBD3E78A533B886A9CAE90B1554561EBF82C3",
                              "PreviousFields": {
                                "Balance": "23344085056"
                              },
                              "PreviousTxnID": "29DD7BF3A7572E1BA5DEE395750AA0886808926D0B97ECE8DB9B01CA42C56E4E",
                              "PreviousTxnLgrSeq": 4715016
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0974318583074"
                                },
                                "Flags": 131072,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "1200"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "00000000000000BE"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "9E61FEB8F12418B79DE776EE96BE58643854B2AE3249FE7BDAF372B567A5FCEA",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0984338583074"
                                }
                              },
                              "PreviousTxnID": "8FB78363BF65CA146F3609003B6DE6C8063D370DDE4A4F5C36495A25E52D9502",
                              "PreviousTxnLgrSeq": 4714985
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.65220180141692"
                                },
                                "Flags": 196608,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "25"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "50"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C032D6B34C17F2E46AF53E5EE925CAF780EF05EC06D6DE75B2046F8235D662BB",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.65330898373736"
                                }
                              },
                              "PreviousTxnID": "8FB78363BF65CA146F3609003B6DE6C8063D370DDE4A4F5C36495A25E52D9502",
                              "PreviousTxnLgrSeq": 4714985
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7278092583625"
                                },
                                "Flags": 65536,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "HighNode": "0000000000000001",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "3000"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C29D6CE99DA3E7B11B5E6C2730438760069836F65D87F026BC21DB1A1A9A54C0",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7267020760421"
                                }
                              },
                              "PreviousTxnID": "8FB78363BF65CA146F3609003B6DE6C8063D370DDE4A4F5C36495A25E52D9502",
                              "PreviousTxnLgrSeq": 4714985
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.002"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                                  "value": "10"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "000000000000018F"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "CB2B4541697629B646B3E93B2E0334BC13AC7ADAE79BA49E27A40B44E9C10A5B",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.001"
                                }
                              },
                              "PreviousTxnID": "8FB78363BF65CA146F3609003B6DE6C8063D370DDE4A4F5C36495A25E52D9502",
                              "PreviousTxnLgrSeq": 4714985
                            }
                          }
                        ],
                        "TransactionIndex": 0,
                        "TransactionResult": "tesSUCCESS"
                      },
                      "tx": {
                        "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                        "Amount": {
                          "currency": "USD",
                          "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                          "value": "0.001"
                        },
                        "Destination": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                        "Fee": "12",
                        "Flags": 0,
                        "Paths": [
                          [
                            {
                              "currency": "CAD",
                              "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "BTC",
                              "issuer": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rnziParaNb8nsU4aruQdwYE3j5jUcqjzFm",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ]
                        ],
                        "SendMax": "48138",
                        "Sequence": 24,
                        "SigningPubKey": "025B32A54BFA33FB781581F49B235C0E2820C929FF41E677ADA5D3E53CFBA46332",
                        "TransactionType": "Payment",
                        "TxnSignature": "304402206A0726D4DF345EE266BB2A27539DDF5E481600765E696A661DDCA8979D3D66B902207078BC118863D55CF2D140B32872E363162C9A91C6C516D3162289F62F3DF95C",
                        "date": 444439740,
                        "hash": "22BB21B2C4ACD068C90D54B599A360F092E4D09EA6922878A7F78D50827DC493",
                        "inLedger": 4715017,
                        "ledger_index": 4715017
                      },
                      "validated": true
                    },
                    {
                      "meta": {
                        "AffectedNodes": [
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                                "Balance": "173053755",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 24
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                              "PreviousFields": {
                                "Balance": "173101912",
                                "Sequence": 23
                              },
                              "PreviousTxnID": "57928ACC38A93CC57ED878D61F2A8A61C5CF93F42CD9DBDE117E04FBC4D6D592",
                              "PreviousTxnLgrSeq": 4714499
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rMkMfJ4wHeZASrWF8rxzW9ZFT1HQh9yjHP",
                                "BookDirectory": "0423F6FBF60C5F359820660A10CD60AAEB7A49342FD037C95C0F725325754DEA",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "0000000000000000",
                                "Sequence": 33,
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "45.99889281767956"
                                },
                                "TakerPays": "1999951861"
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "724E86EB060378FF14FF4E9AB822D882214278603E5B026F14385C9A9BAEFBC0",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "46"
                                },
                                "TakerPays": "2000000000"
                              },
                              "PreviousTxnID": "36ECCE420FE65CC7B9D0394953BFDD2214AD14F0DBB69313819044F06EA84855",
                              "PreviousTxnLgrSeq": 4714853
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                "BookDirectory": "7F8C9F53419784C394C9D1531B14E7DBCBC1923B7AEA1A485503ECF76DF08D6F",
                                "BookNode": "0000000000000000",
                                "Flags": 0,
                                "OwnerNode": "0000000000000001",
                                "Sequence": 144,
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.248998"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "49.99889281767956"
                                }
                              },
                              "LedgerEntryType": "Offer",
                              "LedgerIndex": "7B3984ED3B9B30B75CF7D8C2ABDBE71B56A8CB83EE1839D17D742EAD585C0212",
                              "PreviousFields": {
                                "TakerGets": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "45.25"
                                },
                                "TakerPays": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "50"
                                }
                              },
                              "PreviousTxnID": "35AE973DB917D105D891CCBA23D04DC4B6B46BAAF7CFC2E58CDC2D9510FEAD41",
                              "PreviousTxnLgrSeq": 4585909
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0984338583074"
                                },
                                "Flags": 131072,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "1200"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "00000000000000BE"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "9E61FEB8F12418B79DE776EE96BE58643854B2AE3249FE7BDAF372B567A5FCEA",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-770.0994358583074"
                                }
                              },
                              "PreviousTxnID": "0AE03821C5B5702A9D0250A6C929BE5FC86E6831B6B696719E55268477C7FA76",
                              "PreviousTxnLgrSeq": 4665084
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.65330898373736"
                                },
                                "Flags": 196608,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3v6QzgkBq9hM75XGThKS1NM9gchcTrBHL",
                                  "value": "25"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "50"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C032D6B34C17F2E46AF53E5EE925CAF780EF05EC06D6DE75B2046F8235D662BB",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "99.6544161660578"
                                }
                              },
                              "PreviousTxnID": "0AE03821C5B5702A9D0250A6C929BE5FC86E6831B6B696719E55268477C7FA76",
                              "PreviousTxnLgrSeq": 4665084
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7267020760421"
                                },
                                "Flags": 65536,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "HighNode": "0000000000000001",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                                  "value": "3000"
                                },
                                "LowNode": "0000000000000000"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "C29D6CE99DA3E7B11B5E6C2730438760069836F65D87F026BC21DB1A1A9A54C0",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "346.7255948937217"
                                }
                              },
                              "PreviousTxnID": "A84DDF40F4B57D5BE8E158073440EDB77557BD0F4DBF4DBEA00187316F37F87A",
                              "PreviousTxnLgrSeq": 4702578
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rMkMfJ4wHeZASrWF8rxzW9ZFT1HQh9yjHP",
                                "Balance": "28000048390",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 34
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "C2B83BFE5EFC4A3DE8AD387AB9B8A2781AF1554C987921583CE701D454526CAD",
                              "PreviousFields": {
                                "Balance": "28000000251"
                              },
                              "PreviousTxnID": "36ECCE420FE65CC7B9D0394953BFDD2214AD14F0DBB69313819044F06EA84855",
                              "PreviousTxnLgrSeq": 4714853
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-0.001"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "USD",
                                  "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                                  "value": "10"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "USD",
                                  "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                                  "value": "0"
                                },
                                "LowNode": "000000000000018F"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "CB2B4541697629B646B3E93B2E0334BC13AC7ADAE79BA49E27A40B44E9C10A5B",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "USD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "0"
                                }
                              },
                              "PreviousTxnID": "EDBBB9C37424F4AA7314D7E2637064212AE0CAE8EC5793428DABCA1F40BB70E5",
                              "PreviousTxnLgrSeq": 4696104
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-307.2460324387976"
                                },
                                "Flags": 2228224,
                                "HighLimit": {
                                  "currency": "CAD",
                                  "issuer": "rMkMfJ4wHeZASrWF8rxzW9ZFT1HQh9yjHP",
                                  "value": "1000"
                                },
                                "HighNode": "0000000000000000",
                                "LowLimit": {
                                  "currency": "CAD",
                                  "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                                  "value": "0"
                                },
                                "LowNode": "0000000000000009"
                              },
                              "LedgerEntryType": "RippleState",
                              "LedgerIndex": "EBBFD41C95566C491B8076D640EC983FB8A5CB8A8FE761120AA5AD2F20724B4F",
                              "PreviousFields": {
                                "Balance": {
                                  "currency": "CAD",
                                  "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
                                  "value": "-307.247139621118"
                                }
                              },
                              "PreviousTxnID": "FC1238CA79165871E6FCA52FC4BD006744DC0F6D95E1E6D8DB9C2E2AA04C26B5",
                              "PreviousTxnLgrSeq": 4713307
                            }
                          }
                        ],
                        "TransactionIndex": 0,
                        "TransactionResult": "tesSUCCESS"
                      },
                      "tx": {
                        "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                        "Amount": {
                          "currency": "USD",
                          "issuer": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                          "value": "0.001"
                        },
                        "Destination": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                        "Fee": "18",
                        "Flags": 0,
                        "Paths": [
                          [
                            {
                              "currency": "CAD",
                              "issuer": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rhKJE9kFPz6DuK4KyL2o8NkCCNPKnSQGRL",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "BTC",
                              "issuer": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "currency": "USD",
                              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ],
                          [
                            {
                              "currency": "USD",
                              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 48,
                              "type_hex": "0000000000000030"
                            },
                            {
                              "account": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rnziParaNb8nsU4aruQdwYE3j5jUcqjzFm",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            },
                            {
                              "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
                              "type": 1,
                              "type_hex": "0000000000000001"
                            }
                          ]
                        ],
                        "SendMax": "48139",
                        "Sequence": 23,
                        "SigningPubKey": "025B32A54BFA33FB781581F49B235C0E2820C929FF41E677ADA5D3E53CFBA46332",
                        "TransactionType": "Payment",
                        "TxnSignature": "3044022035BDB2DA66DAD6AD84CDD1C34949B6000BB64C17BD8BC4E611DB2A9DDBA8C30602205097120458A30B7114E6F79C38EADA412B8EEB658A41192E466000CF220018F8",
                        "date": 444439500,
                        "hash": "8FB78363BF65CA146F3609003B6DE6C8063D370DDE4A4F5C36495A25E52D9502",
                        "inLedger": 4714985,
                        "ledger_index": 4714985
                      },
                      "validated": true
                    },
                    {
                      "meta": {
                        "AffectedNodes": [
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                                "Balance": "173101912",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 23
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                              "PreviousFields": {
                                "Balance": "173102924",
                                "Sequence": 22
                              },
                              "PreviousTxnID": "731174AD16A65BF9C43BCB7F7066983308C220650C4CCAB8EB668F5F3DC0B5C8",
                              "PreviousTxnLgrSeq": 4714490
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                                "Balance": "26424669",
                                "Flags": 0,
                                "OwnerCount": 1,
                                "Sequence": 86
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "FA39C6EC43AA870B5E9ED592EF683CC1134DB60746C54A997B6BEAE366EF04C9",
                              "PreviousFields": {
                                "Balance": "26423669"
                              },
                              "PreviousTxnID": "731174AD16A65BF9C43BCB7F7066983308C220650C4CCAB8EB668F5F3DC0B5C8",
                              "PreviousTxnLgrSeq": 4714490
                            }
                          }
                        ],
                        "TransactionIndex": 1,
                        "TransactionResult": "tesSUCCESS"
                      },
                      "tx": {
                        "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                        "Amount": "1000",
                        "Destination": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                        "Fee": "12",
                        "Flags": 0,
                        "Sequence": 22,
                        "SigningPubKey": "025B32A54BFA33FB781581F49B235C0E2820C929FF41E677ADA5D3E53CFBA46332",
                        "TransactionType": "Payment",
                        "TxnSignature": "304402201F30BF2921D5BE19DCE1E2AA64EA2A4CC9A03A32FB65659F8C560BADD63497E502202BC1E9321E8024747EFD287A8BD81EEF30A93E1AD9D8E926532F876838F845D9",
                        "date": 444436730,
                        "hash": "57928ACC38A93CC57ED878D61F2A8A61C5CF93F42CD9DBDE117E04FBC4D6D592",
                        "inLedger": 4714499,
                        "ledger_index": 4714499
                      },
                      "validated": true
                    },
                    {
                      "meta": {
                        "AffectedNodes": [
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                                "Balance": "173102924",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 22
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                              "PreviousFields": {
                                "Balance": "173103936",
                                "Sequence": 21
                              },
                              "PreviousTxnID": "A83C38FDA3CCB0C555A2A58FCC017A1BC2BA1AC532EA8B67632C9DCCBE106243",
                              "PreviousTxnLgrSeq": 4714483
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                                "Balance": "26423669",
                                "Flags": 0,
                                "OwnerCount": 1,
                                "Sequence": 86
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "FA39C6EC43AA870B5E9ED592EF683CC1134DB60746C54A997B6BEAE366EF04C9",
                              "PreviousFields": {
                                "Balance": "26422669"
                              },
                              "PreviousTxnID": "A83C38FDA3CCB0C555A2A58FCC017A1BC2BA1AC532EA8B67632C9DCCBE106243",
                              "PreviousTxnLgrSeq": 4714483
                            }
                          }
                        ],
                        "TransactionIndex": 1,
                        "TransactionResult": "tesSUCCESS"
                      },
                      "tx": {
                        "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                        "Amount": "1000",
                        "Destination": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                        "Fee": "12",
                        "Flags": 0,
                        "Sequence": 21,
                        "SigningPubKey": "025B32A54BFA33FB781581F49B235C0E2820C929FF41E677ADA5D3E53CFBA46332",
                        "TransactionType": "Payment",
                        "TxnSignature": "3045022100CB67FFC043E0EE00091A517F7F48D5628C3854C118E977EE2D5D651DB0B4DB34022056092DCF60CE05F3384B23A7BB6136156F03536D6FBF106E45189D15CD387029",
                        "date": 444436690,
                        "hash": "731174AD16A65BF9C43BCB7F7066983308C220650C4CCAB8EB668F5F3DC0B5C8",
                        "inLedger": 4714490,
                        "ledger_index": 4714490
                      },
                      "validated": true
                    },
                    {
                      "meta": {
                        "AffectedNodes": [
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                                "Balance": "173103936",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 21
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                              "PreviousFields": {
                                "Balance": "173104949",
                                "Sequence": 20
                              },
                              "PreviousTxnID": "C11EE263F799AF188DF74F32B6B9379B11BEC36718C517D682B52AC485863736",
                              "PreviousTxnLgrSeq": 4714435
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                                "Balance": "26422669",
                                "Flags": 0,
                                "OwnerCount": 1,
                                "Sequence": 86
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "FA39C6EC43AA870B5E9ED592EF683CC1134DB60746C54A997B6BEAE366EF04C9",
                              "PreviousFields": {
                                "Balance": "26421669"
                              },
                              "PreviousTxnID": "C11EE263F799AF188DF74F32B6B9379B11BEC36718C517D682B52AC485863736",
                              "PreviousTxnLgrSeq": 4714435
                            }
                          }
                        ],
                        "TransactionIndex": 9,
                        "TransactionResult": "tesSUCCESS"
                      },
                      "tx": {
                        "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                        "Amount": "1000",
                        "Destination": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                        "Fee": "13",
                        "Flags": 0,
                        "Sequence": 20,
                        "SigningPubKey": "025B32A54BFA33FB781581F49B235C0E2820C929FF41E677ADA5D3E53CFBA46332",
                        "TransactionType": "Payment",
                        "TxnSignature": "3044022073EBD7A68629D748EFE1C4186B2D0BE9504B923F7F4581F8A7F446FAAC55292D02203AC0865775D7CDE98EFB6B343E0D172A890593D934015A422D48539A18619DA6",
                        "date": 444436660,
                        "hash": "A83C38FDA3CCB0C555A2A58FCC017A1BC2BA1AC532EA8B67632C9DCCBE106243",
                        "inLedger": 4714483,
                        "ledger_index": 4714483
                      },
                      "validated": true
                    },
                    {
                      "meta": {
                        "AffectedNodes": [
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                                "Balance": "173104949",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 20
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                              "PreviousFields": {
                                "Balance": "173105965",
                                "Sequence": 19
                              },
                              "PreviousTxnID": "3B823190297ABE88C41FD178C0D315D0904993BF28579EF14B52F0B136A5F1BC",
                              "PreviousTxnLgrSeq": 4714369
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                                "Balance": "26421669",
                                "Flags": 0,
                                "OwnerCount": 1,
                                "Sequence": 86
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "FA39C6EC43AA870B5E9ED592EF683CC1134DB60746C54A997B6BEAE366EF04C9",
                              "PreviousFields": {
                                "Balance": "26420669"
                              },
                              "PreviousTxnID": "3B823190297ABE88C41FD178C0D315D0904993BF28579EF14B52F0B136A5F1BC",
                              "PreviousTxnLgrSeq": 4714369
                            }
                          }
                        ],
                        "TransactionIndex": 5,
                        "TransactionResult": "tesSUCCESS"
                      },
                      "tx": {
                        "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                        "Amount": "1000",
                        "Destination": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                        "Fee": "16",
                        "Flags": 0,
                        "Sequence": 19,
                        "SigningPubKey": "025B32A54BFA33FB781581F49B235C0E2820C929FF41E677ADA5D3E53CFBA46332",
                        "TransactionType": "Payment",
                        "TxnSignature": "3046022100A712F7B4ABC96ED6177708C0690986CB8762298E8B17A460F3BD64D7498B355F022100D8D9B9084F0E0A5409B527C9F100981EBCABB63089C4B1E5E6104BAB93791A26",
                        "date": 444436350,
                        "hash": "C11EE263F799AF188DF74F32B6B9379B11BEC36718C517D682B52AC485863736",
                        "inLedger": 4714435,
                        "ledger_index": 4714435
                      },
                      "validated": true
                    },
                    {
                      "meta": {
                        "AffectedNodes": [
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                                "Balance": "173105965",
                                "Flags": 0,
                                "OwnerCount": 3,
                                "Sequence": 19
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                              "PreviousFields": {
                                "Balance": "173106982",
                                "Sequence": 18
                              },
                              "PreviousTxnID": "C48705C0A0D3747E1DE4DCF559FD1EF95A95079A5A019C1D3FCDAA4D3291685E",
                              "PreviousTxnLgrSeq": 4699111
                            }
                          },
                          {
                            "ModifiedNode": {
                              "FinalFields": {
                                "Account": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                                "Balance": "26420669",
                                "Flags": 0,
                                "OwnerCount": 1,
                                "Sequence": 86
                              },
                              "LedgerEntryType": "AccountRoot",
                              "LedgerIndex": "FA39C6EC43AA870B5E9ED592EF683CC1134DB60746C54A997B6BEAE366EF04C9",
                              "PreviousFields": {
                                "Balance": "26419669"
                              },
                              "PreviousTxnID": "55BA3440B1AAFFB64E51F497EFDF2022C90EDB171BBD979F04685904E38A89B7",
                              "PreviousTxnLgrSeq": 4696959
                            }
                          }
                        ],
                        "TransactionIndex": 0,
                        "TransactionResult": "tesSUCCESS"
                      },
                      "tx": {
                        "Account": "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                        "Amount": "1000",
                        "Destination": "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                        "Fee": "17",
                        "Flags": 0,
                        "Sequence": 18,
                        "SigningPubKey": "025B32A54BFA33FB781581F49B235C0E2820C929FF41E677ADA5D3E53CFBA46332",
                        "TransactionType": "Payment",
                        "TxnSignature": "3046022100BA606CDE7FF35B612591F722782E07577F951477C7B1F237183D58D3CEC703F0022100A84AD2D6CD249AA88D86F2F2A9E2375F993C7CFD28D7B53DF198A43C85F98B42",
                        "date": 444435870,
                        "hash": "3B823190297ABE88C41FD178C0D315D0904993BF28579EF14B52F0B136A5F1BC",
                        "inLedger": 4714369,
                        "ledger_index": 4714369
                      },
                      "validated": true
                    }
                  ],
                  "validated": true
                }
              });
            }
          }

        }
      };

    var tx = {
        Account : "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
        Amount : "1000000",
        Destination : "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
        Fee : "12",
        Flags : 0,
        Sequence : 45,
        SigningPubKey : "02BE53B7ACBB0900E0BB7729C9CAC1033A0137993B17800BD1191BBD1B29D96A8C",
        TransactionType : "Payment",
        TxnSignature : "3044022066A99B1F88C36B5BB48E8C6E5F17743A5BEB55FA651427C4B63FADB245A9C52B022044C70A873AF65493A1016C9876ED8A24BAD0BC885C2799E33A6D6AE1EBF9B3FB",
        hash : "6181F4859C96ADF673C3986693C3339F415EB9E1E39285C4FE9A109911F5AAD6",
        inLedger : 4604132,
        ledger_index : 4604132,
        meta : {
          AffectedNodes : [
            {
              ModifiedNode : {
                FinalFields : {
                  Account : "rKXCummUHnenhYudNb9UoJ4mGBR75vFcgz",
                  Balance : "144000001",
                  Flags : 0,
                  OwnerCount : 0,
                  Sequence : 1
                },
                LedgerEntryType : "AccountRoot",
                LedgerIndex : "58D2E252AE8842B950C960B6BC7A3319762F1C66E3C35985A3B160479EFEDF23",
                PreviousFields : {
                  Balance : "143000001"
                },
                PreviousTxnID : "EE612365607E23B4D5386C4D925C55C497583B2363D286E8551FECC1BDEF23B9",
                PreviousTxnLgrSeq : 4604111
              }
            },
            {
              ModifiedNode : {
                FinalFields : {
                  Account : "rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r",
                  Balance : "55999454",
                  Flags : 0,
                  OwnerCount : 0,
                  Sequence : 46
                },
                LedgerEntryType : "AccountRoot",
                LedgerIndex : "FA39C6EC43AA870B5E9ED592EF683CC1134DB60746C54A997B6BEAE366EF04C9",
                PreviousFields : {
                  Balance : "56999466",
                  Sequence : 45
                },
                PreviousTxnID : "EE612365607E23B4D5386C4D925C55C497583B2363D286E8551FECC1BDEF23B9",
                PreviousTxnLgrSeq : 4604111
              }
            }
          ],
          TransactionIndex : 1,
          TransactionResult : "tesSUCCESS"
        },
        validated : true
      };

    it('should respond with an error if given no hash', function(done){
      txLib.getTx({}, function(err, tx){
        expect(err).to.exist;
        expect(err.message).to.equal('Invalid parameter: tx_hash. Must provide a transaction hash to look for')
        expect(tx).not.to.exist;
        done();
      });
    });

    it('should respond with an error if given an invalid hash', function(done){
      txLib.getTx({
        hash: 'badhash',
        account: 'rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r'
      }, function(err, tx){
        expect(err).to.exist;
        expect(err.message).to.equal('No transaction found. This means that either the rippled\'s transaction history is incomplete or the transaction does not exist');
        expect(tx).not.to.exist;
        done();
      });
    });

    it('should respond with an error if not given either an address or ledger index', function(done){
      txLib.getTx({
        hash: '6181F4859C96ADF673C3986693C3339F415EB9E1E39285C4FE9A109911F5AAD6'
      }, function(err, tx){
        expect(err).to.exist;
        expect(err.message).to.equal('Must provide either an address or a ledger_index, as well as the tx_hash, to look up a transaction');
        expect(tx).not.to.exist;
        done();
      });
    });

    it('should get a full ripple tx if given a hash and an address', function(done){

      txLib.getTx({
        remote: remote, 
        hash: '6181F4859C96ADF673C3986693C3339F415EB9E1E39285C4FE9A109911F5AAD6',
        address: 'rNw4ozCG514KEjPs5cDrqEcdsi31Jtfm5r'
      }, function(err, res){
        expect(err).not.to.exist;
        expect(res).to.deep.equal(tx);
        done();
      });
    });

    it('should get a full ripple tx if given a hash and a ledger_index', function(done){

      txLib.getTx({
        remote: remote, 
        hash: '6181F4859C96ADF673C3986693C3339F415EB9E1E39285C4FE9A109911F5AAD6',
        ledger_index: '4604132'
      }, function(err, res){
        expect(err).not.to.exist;
        expect(res).to.deep.equal(tx);
        done();
      });
    });


  describe('.submitTx()', function(){

    // it('should accept transactions in JSON format', function(){
    //   txLib.submitTx({

    //   }, function(err, res){

    //   });
    // });

    // it('should accept transactions in ripple-lib Transaction object format', function(){

    // });

    // it('should respond with an error if given an invalid secret', function(){

    // });

    // it('should respond with an error if given an invalid transaction', function(){

    // });

  });

});

