var swaggerSpec = 
{
  "swagger" : "2.0",
  "info" : {
    "version" : "1.1.4",
    "title" : "Syscoin API"
  },
  "host" : "localhost:8001",
  "tags" : [ {
    "name" : "General",
    "description" : "All general wallet operations."
  }, {
    "name" : "Aliases",
    "description" : "Operations related to aliases."
  }, {
    "name" : "Messaging",
    "description" : "Operations related to messaging."
  }, {
    "name" : "Offers",
    "description" : "Operations related to offers and the decentralized marketplace functionality."
  }, {
    "name" : "Escrow",
    "description" : "Operations related to escrow."
  }, {
    "name" : "Certificates",
    "description" : "Operations related to digital certificates."
  } ],
  "schemes" : [ "http", "https" ],
  "consumes" : [ "application/json" ],
  "produces" : [ "application/json" ],
  "paths" : {
    "/login" : {
      "get" : {
        "tags" : [ "Blockmarket" ],
        "description" : "Returns a session token for use with subsquent protected calls.",
        "operationId" : "login",
        "parameters" : [ {
          "name" : "auth",
          "in" : "query",
          "description" : "SHA1 hash of the user's authentication information- usernamepassword.",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/LoginResponse"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      },
      "x-swagger-router-controller" : "blockmarket"
    },
    "/syscoinlistreceivebyaddress" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns all addresses and balances associated with address",
        "operationId" : "syscoinlistreceivebyaddress",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/SyscoinAddressEntry"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getblock" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "?If verbose is false, returns a string that is serialized, hex-encoded data for block 'hash'. If verbose is true, returns an Object with information about block <hash>.",
        "operationId" : "getblock",
        "parameters" : [ {
          "name" : "hash",
          "in" : "query",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "verbose",
          "in" : "query",
          "required" : false,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/GetBlockResponse"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getblockchaininfo" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns an object containing various state info regarding block chain processing.",
        "operationId" : "getblockchaininfo",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/GetBlockchainInfoResponse"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getblockcount" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns the number of blocks in the longest block chain.",
        "operationId" : "getblockcount",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "number"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "type" : "number"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getinfo" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns an object containing various state info.",
        "operationId" : "getinfo",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/Info"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getmininginfo" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns a json object containing mining-related information.",
        "operationId" : "getmininginfo",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/MiningInfo"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getnetworkinfo" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns a json object containing network-related information.",
        "operationId" : "getnetworkinfo",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/NetworkInfo"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getpeerinfo" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns data about each connected network node as a json array of objects.",
        "operationId" : "getpeerinfo",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/PeerInfoResponse"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/validateaddress" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Return information about the given syscoin address.",
        "operationId" : "validateaddress",
        "parameters" : [ {
          "name" : "syscoinaddress",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/ValidateAddressResponse"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/verifymessage" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Verify a signed message",
        "operationId" : "verifymessage",
        "parameters" : [ {
          "name" : "syscoinaddress",
          "in" : "query",
          "description" : "The syscoin address to use for the signature.",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "signature",
          "in" : "query",
          "description" : "The signature provided by the signer in base 64 encoding (see signmessage).",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "message",
          "in" : "query",
          "description" : "The message that was signed.",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "If the signature is verified or not.",
            "schema" : {
              "type" : "boolean"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/addmultisigaddress" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Add a nrequired-to-sign multisignature address to the wallet. Each key is a Syscoin address or hex-encoded public key. If 'account' is specified (DEPRECATED), assign address to that account.",
        "operationId" : "addmultisigaddress",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AddMultisigAddressRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "A syscoin address associated with the keys.",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliasaffiliates" : {
      "get" : {
        "tags" : [ "Aliases" ],
        "description" : "list affiliations with merchant offers.",
        "operationId" : "aliasaffiliates",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "object",
                "properties" : { }
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliasauthenticate" : {
      "get" : {
        "tags" : [ "Aliases" ],
        "description" : "Authenticates an alias with a provided password and returns the private key if successful. Warning: Calling this function over a public network can lead to someone reading your password/private key in plain text.",
        "operationId" : "aliasauthenticate",
        "parameters" : [ {
          "name" : "alias",
          "in" : "query",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "password",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "object",
                "properties" : { }
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliasbalance" : {
      "get" : {
        "tags" : [ "Aliases" ],
        "description" : "Returns the total amount received by the given alias in transactions with at least minconf confirmations.",
        "operationId" : "aliasbalance",
        "parameters" : [ {
          "name" : "alias",
          "in" : "query",
          "description" : "The syscoin alias for transactions",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "minconf",
          "in" : "query",
          "description" : "?Only include transactions confirmed at least this many times. default=1.",
          "required" : false,
          "type" : "number"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "number"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliascount" : {
      "get" : {
        "tags" : [ "Aliases" ],
        "description" : "Count aliases that an array of aliases own.",
        "operationId" : "aliascount",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "number"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliasfilter" : {
      "get" : {
        "tags" : [ "Aliases" ],
        "description" : "Scan and filter aliases aliasfilter \"\" 5 # list aliases updated in last 5 blocks aliasfilter \"^alias\" # list all aliases starting with \"alias\" aliasfilter 36000 0 0 stat # display stats (number of aliases) on active aliases",
        "operationId" : "aliasfilter",
        "parameters" : [ {
          "name" : "regexp",
          "in" : "query",
          "description" : "apply [regexp] on aliases, empty means all aliases",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "show results from this GUID [from], empty means first",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "number of results to return.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "safesearch",
          "in" : "query",
          "description" : "shows all aliases that are safe to display (not on the ban list)",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Alias"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliashistory" : {
      "get" : {
        "tags" : [ "Aliases" ],
        "description" : "List all stored values of an alias.",
        "operationId" : "aliashistory",
        "parameters" : [ {
          "name" : "aliasname",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/AliasHistoryEntry"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliasinfo" : {
      "get" : {
        "tags" : [ "Aliases" ],
        "description" : "Show values of an alias.",
        "operationId" : "aliasinfo",
        "parameters" : [ {
          "name" : "aliasname",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/Alias"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliaslist" : {
      "get" : {
        "tags" : [ "Aliases" ],
        "description" : "List my own aliases.",
        "operationId" : "aliaslist",
        "parameters" : [ {
          "name" : "aliasname",
          "in" : "query",
          "description" : "Alias name to use as filter.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "The number of results to return",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "The number of results to skip",
          "required" : false,
          "type" : "number"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Alias"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliasnew" : {
      "post" : {
        "tags" : [ "Aliases" ],
        "description" : "Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "aliasnew",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AliasNewRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliaspay" : {
      "post" : {
        "tags" : [ "Aliases" ],
        "description" : "Send multiple times from an alias. Amounts are double-precision floating point numbers.",
        "operationId" : "aliaspay",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AliasPayRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliasupdate" : {
      "post" : {
        "tags" : [ "Aliases" ],
        "description" : "Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "aliasupdate",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AliasUpdateRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/certcount" : {
      "get" : {
        "tags" : [ "Certificates" ],
        "description" : "Count certificates that an array of aliases own.",
        "operationId" : "certcount",
        "parameters" : [ {
          "name" : "aliases",
          "in" : "query",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "number"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/certfilter" : {
      "get" : {
        "tags" : [ "Certificates" ],
        "description" : "scan and filter certs certfilter \"\" 5 = list certs updated in last 5 blocks certfilter \"^cert\" = list all certs starting with \"cert\" certfilter 36000 0 0 stat = display stats (number of certs) on active certs",
        "operationId" : "certfilter",
        "parameters" : [ {
          "name" : "regexp",
          "in" : "query",
          "description" : "apply [regexp] on certes, empty means all certs",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "show results from number [from]",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "the number of results to return",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "safesearch",
          "in" : "query",
          "description" : "shows all certs that are safe to display (not on the ban list)",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "category",
          "in" : "query",
          "description" : "category you want to search in, empty for all",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Cert"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/certhistory" : {
      "get" : {
        "tags" : [ "Certificates" ],
        "description" : "List all stored values of an cert.",
        "operationId" : "certhistory",
        "parameters" : [ {
          "name" : "certname",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/CertHistoryEntry"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/certinfo" : {
      "get" : {
        "tags" : [ "Certificates" ],
        "description" : "Show stored values of a single certificate.",
        "operationId" : "certinfo",
        "parameters" : [ {
          "name" : "guid",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/Cert"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/certlist" : {
      "get" : {
        "tags" : [ "Certificates" ],
        "description" : "List certificates that an array of aliases own. Set of aliases to look up based on alias, and private key to decrypt any data found in certificates.",
        "operationId" : "certlist",
        "parameters" : [ {
          "name" : "aliases",
          "in" : "query",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }, {
          "name" : "cert",
          "in" : "query",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "The number of results to return",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "The number of results to skip",
          "required" : false,
          "type" : "number"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Cert"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/certnew" : {
      "post" : {
        "tags" : [ "Certificates" ],
        "description" : "Create a new Syscoin Certificate. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "certnew",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/CertNewRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/certtransfer" : {
      "post" : {
        "tags" : [ "Certificates" ],
        "description" : "Transfer certificate from one user to another. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "certtransfer",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/CertTransferRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/certupdate" : {
      "post" : {
        "tags" : [ "Certificates" ],
        "description" : "Perform an update on an certificate you control. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "certupdate",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/CertUpdateRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/dumpprivkey" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Reveals the private key corresponding to 'syscoinaddress'. Then the importprivkey can be used with this output.",
        "operationId" : "dumpprivkey",
        "parameters" : [ {
          "name" : "address",
          "in" : "query",
          "description" : "The syscoin address for the private key",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/dumpwallet" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Dumps all wallet keys in a human-readable format.",
        "operationId" : "dumpwallet",
        "parameters" : [ {
          "name" : "filename",
          "in" : "query",
          "description" : "The filename",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/encryptwallet" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Encrypts the wallet with 'passphrase'. This is for first time encryption. After this, any calls that interact with private keys such as sending or signing will require the passphrase to be set prior the making these calls. Use the walletpassphrase call for this, and then walletlock call. If the wallet is already encrypted, use the walletpassphrasechange call. Note that this will shutdown the server.",
        "operationId" : "encryptwallet",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/EncryptWalletRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowacknowledge" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Acknowledge escrow payment as seller of offer. Deducts qty of offer and increases number of sold inventory.",
        "operationId" : "escrowacknowledge",
        "parameters" : [ {
          "name" : "escrowguid",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowclaimrefund" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Claim escrow funds released from seller or arbiter using escrowrefund. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "escrowclaimrefund",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/EscrowClaimRefundRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowclaimrelease" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Claim escrow funds released from buyer or arbiter using escrowrelease. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "escrowclaimrelease",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/EscrowClaimReleaseRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowcompleterefund" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Completes an escrow refund by creating the escrow complete refund transaction on syscoin blockchain.",
        "operationId" : "escrowcompleterefund",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/EscrowCompleteRefundRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowcount" : {
      "get" : {
        "tags" : [ "Escrow" ],
        "description" : "Count escrows that an set of aliases are involved in.",
        "operationId" : "escrowcount",
        "parameters" : [ {
          "name" : "buyerAliases",
          "in" : "query",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }, {
          "name" : "sellerAliases",
          "in" : "query",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }, {
          "name" : "arbiterAliases",
          "in" : "query",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "number"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowcompleterelease" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Completes an escrow release by creating the escrow complete release transaction on syscoin blockchain.",
        "operationId" : "escrowcompleterelease",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/EscrowCompleteReleaseRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowfeedback" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Send feedback for primary and secondary users in escrow, depending on who you are. Ratings are numbers from 1 to 5. User Role is either 'buyer', 'seller', 'reseller', or 'arbiter'. If you are the buyer, feedbackprimary is for seller and feedbacksecondary is for arbiter. If you are the seller, feedbackprimary is for buyer and feedbacksecondary is for arbiter. If you are the arbiter, feedbackprimary is for buyer and feedbacksecondary is for seller. If arbiter didn't do any work for this escrow you can leave his feedback empty and rating as a 0.",
        "operationId" : "escrowfeedback",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/EscrowFeedbackRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowfilter" : {
      "get" : {
        "tags" : [ "Escrow" ],
        "description" : "scan and filter escrows",
        "operationId" : "escrowfilter",
        "parameters" : [ {
          "name" : "regexp",
          "in" : "query",
          "description" : "Apply [regexp] on escrows, empty means all escrows",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "Show results from this GUID [from], 0 means first.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "the number of results to return",
          "required" : false,
          "type" : "number"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Escrow"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowhistory" : {
      "get" : {
        "tags" : [ "Escrow" ],
        "description" : "List all stored values of an escrow.",
        "operationId" : "escrowhistory",
        "parameters" : [ {
          "name" : "escrow",
          "in" : "query",
          "description" : "GUID of escrow",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Escrow"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowinfo" : {
      "get" : {
        "tags" : [ "Escrow" ],
        "description" : "Show stored values of a single escrow",
        "operationId" : "escrowinfo",
        "parameters" : [ {
          "name" : "escrow",
          "in" : "query",
          "description" : "GUID of escrow",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/Escrow"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowlist" : {
      "get" : {
        "tags" : [ "Escrow" ],
        "description" : "List escrows that an array of aliases are involved in.",
        "operationId" : "escrowlist",
        "parameters" : [ {
          "name" : "buyerAliases",
          "in" : "query",
          "description" : "List of buyer aliases to display escrows from",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }, {
          "name" : "sellerAliases",
          "in" : "query",
          "description" : "List of seller aliases to display escrows from",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }, {
          "name" : "arbiterAliases",
          "in" : "query",
          "description" : "List of arbiter aliases to display escrows from",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }, {
          "name" : "escrow",
          "in" : "query",
          "description" : "GUID of escrow",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "The number of results to return",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "The number of results to skip",
          "required" : false,
          "type" : "number"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Escrow"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrownew" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Create new arbitrated Syscoin escrow.",
        "operationId" : "escrownew",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/EscrowNewRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowrefund" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Refunds escrow funds back to buyer, buyer needs to sign the output transaction and send to the network. User role represents either 'seller' or 'arbiter'. Enter in rawTx if this is an external payment refund.",
        "operationId" : "escrowrefund",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/EscrowRefundRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowrelease" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Releases escrow funds to seller, seller needs to sign the output transaction and send to the network. User role represents either 'buyer' or 'arbiter'. Enter in rawTx if this is an external payment release.",
        "operationId" : "escrowrelease",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/EscrowReleaseRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/generate" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Mine up to numblocks blocks immediately (before the RPC call returns).",
        "operationId" : "generate",
        "parameters" : [ {
          "name" : "numBlocks",
          "in" : "query",
          "description" : "How many blocks are generated immediately.",
          "required" : true,
          "type" : "number"
        }, {
          "name" : "maxtries",
          "in" : "query",
          "description" : "?How many iterations to try (default = 1000000).",
          "required" : false,
          "type" : "number"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/generateescrowmultisig" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Generates a multisignature escrow transaction",
        "operationId" : "generateescrowmultisig",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/GenerateEscrowMultisigRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/generatepublickey" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Generates a public key for a wallet.",
        "operationId" : "generatepublickey",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getaccount" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "DEPRECATED. Returns the account associated with the given address.",
        "operationId" : "getaccount",
        "parameters" : [ {
          "name" : "syscoinaddress",
          "in" : "query",
          "description" : "The syscoin address for account lookup.",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getaccountaddress" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "DEPRECATED. Returns the current Syscoin address for receiving payments to this account.",
        "operationId" : "getaccountaddress",
        "parameters" : [ {
          "name" : "account",
          "in" : "query",
          "description" : "The account name for the address. It can also be set to the empty string \"\" to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getaddressesbyaccount" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "DEPRECATED. Returns the list of addresses for the given account.",
        "operationId" : "getaddressesbyaccount",
        "parameters" : [ {
          "name" : "account",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getbalance" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "If account is not specified, returns the server's total available balance. If account is specified (DEPRECATED), returns the balance in the account. Note that the account \"\" is not the same as leaving the parameter out. The server total may be different to the balance in the default \"\" account.",
        "operationId" : "getbalance",
        "parameters" : [ {
          "name" : "account",
          "in" : "query",
          "description" : "DEPRECATED. The selected account, or \"*\" for entire wallet. It may be the default account using \"\".",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "minconf",
          "in" : "query",
          "description" : "Only include transactions confirmed at least this many times.",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "includeWatchonly",
          "in" : "query",
          "description" : "Also include balance in watchonly addresses (see 'importaddress')",
          "required" : false,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "number"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getwalletbalance" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns wallet balance for all accounts. Does not include watch only accounts.",
        "operationId" : "getwalletbalance",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "number"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getnewaddress" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Returns a new Syscoin address for receiving payments. If 'account' is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to 'account'.",
        "operationId" : "getnewaddress",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/GetNewAddressRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getreceivedbyaccount" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "DEPRECATED. Returns the total amount received by addresses with <account> in transactions with at least [minconf] confirmations.",
        "operationId" : "getreceivedbyaccount",
        "parameters" : [ {
          "name" : "account",
          "in" : "query",
          "description" : "The selected account, may be the default account using \"\".",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "minconf",
          "in" : "query",
          "description" : "Only include transactions confirmed at least this many times.",
          "required" : false,
          "type" : "number"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "number"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getreceivedbyaddress" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns the total amount received by the given syscoinaddress in transactions with at least minconf confirmations.",
        "operationId" : "getreceivedbyaddress",
        "parameters" : [ {
          "name" : "syscoinaddress",
          "in" : "query",
          "description" : "The syscoin address for transactions.",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "minconf",
          "in" : "query",
          "description" : "Only include transactions confirmed at least this many times.",
          "required" : false,
          "type" : "number"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "number"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/gettransaction" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Get detailed information about in-wallet transaction <txid>",
        "operationId" : "gettransaction",
        "parameters" : [ {
          "name" : "txid",
          "in" : "query",
          "description" : "The transaction id",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "includeWatchonly",
          "in" : "query",
          "description" : "Whether to include watchonly addresses in balance calculation and details[]",
          "required" : false,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/Transaction"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getunconfirmedbalance" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns the server's total unconfirmed balance",
        "operationId" : "getunconfirmedbalance",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "number"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getv2address" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns a new Syscoin (starts with 1) address for receiving payments. If 'account' is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to 'account'.",
        "operationId" : "getv2address",
        "parameters" : [ {
          "name" : "account",
          "in" : "query",
          "description" : "DEPRECATED. The account name for the address to be linked to. If not provided, the default account \"\" is used. It can also be set to the empty string \"\" to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getwalletinfo" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns an object containing various wallet state info.",
        "operationId" : "getwalletinfo",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/WalletInfo"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getzaddress" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns a new ZCash address for receiving payments in ZCash transaparent tokens. so payments received with the address will be credited to 'account'.",
        "operationId" : "getzaddress",
        "parameters" : [ {
          "name" : "address",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/WalletInfo"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/importaddress" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend.",
        "operationId" : "importaddress",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/ImportAddressRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/importprivkey" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Adds a private key (as returned by dumpprivkey) to your wallet.",
        "operationId" : "importprivkey",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/ImportPrivKeyRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/importprunedfunds" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Imports funds without rescan. Corresponding address or script must previously be included in wallet. Aimed towards pruned wallets. The end-user is responsible to import additional transactions that subsequently spend the imported outputs or rescan after the point in the blockchain the transaction is included.",
        "operationId" : "importprunedfunds",
        "parameters" : [ {
          "name" : "rawtransaction",
          "in" : "query",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "txoutproof",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/importpubkey" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend.",
        "operationId" : "importpubkey",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/ImportPubKeyRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/importwallet" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Imports keys from a wallet dump file (see dumpwallet).",
        "operationId" : "importwallet",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/ImportWalletRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/listaccounts" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "DEPRECATED. Returns Object that has account names as keys, account balances as values.",
        "operationId" : "listaccounts",
        "parameters" : [ {
          "name" : "minconf",
          "in" : "query",
          "description" : "Only include transactions with at least this many confirmations",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "includeWatchonly",
          "in" : "query",
          "description" : "Include balances in watchonly addresses (see 'importaddress')",
          "required" : false,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "object",
              "properties" : { }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/listaddressgroupings" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions",
        "operationId" : "listaddressgroupings",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "array",
                "items" : {
                  "$ref" : "#/definitions/AddressGrouping"
                }
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/listreceivedbyaccount" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "DEPRECATED. List balances by account.",
        "operationId" : "listreceivedbyaccount",
        "parameters" : [ {
          "name" : "minconf",
          "in" : "query",
          "description" : "Only include transactions confirmed at least this many times.",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "includeempty",
          "in" : "query",
          "description" : "Whether to include accounts that haven't received any payments.",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "includeWatchonly",
          "in" : "query",
          "description" : "Whether to include watchonly addresses (see 'importaddress').",
          "required" : false,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Account"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/listreceivedbyaddress" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "List balances by receiving address.",
        "operationId" : "listreceivedbyaddress",
        "parameters" : [ {
          "name" : "minconf",
          "in" : "query",
          "description" : "Only include transactions confirmed at least this many times.",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "includeempty",
          "in" : "query",
          "description" : "Whether to include accounts that haven't received any payments.",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "includeWatchonly",
          "in" : "query",
          "description" : "Whether to include watchonly addresses (see 'importaddress').",
          "required" : false,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/ListReceivedByAddress"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/listsinceblock" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Get all transactions in blocks since block [blockhash], or all transactions if omitted",
        "operationId" : "listsinceblock",
        "parameters" : [ {
          "name" : "blockhash",
          "in" : "query",
          "description" : "The block hash to list transactions since",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "includeWatchonly",
          "in" : "query",
          "description" : "Whether to include watchonly addresses (see 'importaddress').",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "target-confirmations",
          "in" : "query",
          "required" : false,
          "type" : "number"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/ListSinceBlockResponse"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/listtransactions" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns up to 'count' most recent transactions skipping the first 'from' transactions for account 'account'.",
        "operationId" : "listtransactions",
        "parameters" : [ {
          "name" : "account",
          "in" : "query",
          "description" : "DEPRECATED. The account name. Should be \"*\".",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "The number of transactions to return",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "The number of transactions to skip",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "includeWatchonly",
          "in" : "query",
          "description" : "Include transactions to watchonly addresses (see 'importaddress')",
          "required" : false,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/TransactionListEntry"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/messageinfo" : {
      "get" : {
        "tags" : [ "Messaging" ],
        "description" : "Show stored values of a single message.",
        "operationId" : "messageinfo",
        "parameters" : [ {
          "name" : "guid",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/Message"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/messagenew" : {
      "post" : {
        "tags" : [ "Messaging" ],
        "description" : "Create a new Syscoin encrypted message.",
        "operationId" : "messagenew",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/MessageNewRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/messagereceivecount" : {
      "get" : {
        "tags" : [ "Messaging" ],
        "description" : "Count received messages that an array of aliases own.",
        "operationId" : "messagereceivecount",
        "parameters" : [ {
          "name" : "aliases",
          "in" : "query",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "number"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/messagereceivelist" : {
      "get" : {
        "tags" : [ "Messaging" ],
        "description" : "List received messages that an array of aliases own. Set of aliases to look up based on alias, and private key to decrypt any data found in message.",
        "operationId" : "messagereceivelist",
        "parameters" : [ {
          "name" : "aliases",
          "in" : "query",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }, {
          "name" : "message",
          "in" : "query",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "The number of results to return",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "The number of results to skip",
          "required" : false,
          "type" : "number"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Message"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/messagesentcount" : {
      "get" : {
        "tags" : [ "Messaging" ],
        "description" : "Count sent messages that an array of aliases own.",
        "operationId" : "messagesentcount",
        "parameters" : [ {
          "name" : "aliases",
          "in" : "query",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "number"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/messagesentlist" : {
      "get" : {
        "tags" : [ "Messaging" ],
        "description" : "List sent messages that an array of aliases own. Set of aliases to look up based on alias, and private key to decrypt any data found in message.",
        "operationId" : "messagesentlist",
        "parameters" : [ {
          "name" : "aliases",
          "in" : "query",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }, {
          "name" : "message",
          "in" : "query",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "The number of results to return",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "The number of results to skip",
          "required" : false,
          "type" : "number"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Message"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/move" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "DEPRECATED. Move a specified amount from one account in your wallet to another.",
        "operationId" : "move",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/MoveRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "boolean"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offeraccept" : {
      "post" : {
        "tags" : [ "Offers" ],
        "description" : "Accept&Pay for a confirmed offer.",
        "operationId" : "offeraccept",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/OfferAcceptRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offeracceptacknowledge" : {
      "post" : {
        "tags" : [ "Offers" ],
        "description" : "Acknowledge offer payment as seller of offer. Deducts qty of offer and increases number of sold inventory.",
        "operationId" : "offeracceptacknowledge",
        "parameters" : [ {
          "name" : "offerguid",
          "in" : "query",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "offeracceptguid",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offeracceptcount" : {
      "get" : {
        "tags" : [ "Offers" ],
        "description" : "List count of offer accept for a set of aliases. filterpurchases filters results for count of accepts that have been bought with aliases passed in(as buyer), filtersales filters results for count of accepts purchased by aliases passed in(as merchant or affiliate).",
        "operationId" : "offeracceptcount",
        "parameters" : [ {
          "name" : "aliases",
          "in" : "query",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }, {
          "name" : "filterpurchases",
          "in" : "query",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "filtersales",
          "in" : "query",
          "required" : false,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "number"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offeracceptfeedback" : {
      "post" : {
        "tags" : [ "Offers" ],
        "description" : "Send feedback and rating for offer accept specified. Ratings are numbers from 1 to 5",
        "operationId" : "offeracceptfeedback",
        "parameters" : [ {
          "name" : "offerguid",
          "in" : "query",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "offeracceptguid",
          "in" : "query",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "feedback",
          "in" : "query",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "rating",
          "in" : "query",
          "required" : false,
          "type" : "number"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offeracceptlist" : {
      "get" : {
        "tags" : [ "Offers" ],
        "description" : "List offer accepts for a set of aliases. filterpurchases filters results for accepts that have been bought with aliases passed in(as buyer), filtersales filters results for accepts purchased by aliases passed in(as merchant or affiliate).",
        "operationId" : "offeracceptlist",
        "parameters" : [ {
          "name" : "aliases",
          "in" : "query",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }, {
          "name" : "guid",
          "in" : "query",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "filterpurchases",
          "in" : "query",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "filtersales",
          "in" : "query",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "The number of results to return",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "The number of results to skip",
          "required" : false,
          "type" : "number"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/OfferAccept"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offeraddwhitelist" : {
      "post" : {
        "tags" : [ "Offers" ],
        "description" : "Add to the affiliate list of your offer(controls who can resell). Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "offeraddwhitelist",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/OfferAddWhitelistRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offerclearwhitelist" : {
      "post" : {
        "tags" : [ "Offers" ],
        "description" : "Clear the affiliate list of your offer(controls who can resell). Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "offerclearwhitelist",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/OfferClearWhitelistRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offercount" : {
      "get" : {
        "tags" : [ "Offers" ],
        "description" : "Count offers that an array of aliases own.",
        "operationId" : "offercount",
        "parameters" : [ {
          "name" : "aliases",
          "in" : "query",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "number"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offerfilter" : {
      "get" : {
        "tags" : [ "Offers" ],
        "description" : "scan and filter offers",
        "operationId" : "offerfilter",
        "parameters" : [ {
          "name" : "regexp",
          "in" : "query",
          "description" : "apply [regexp] on offeres, empty means all offers",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "show results from number [from]",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "the number of results to return",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "safesearch",
          "in" : "query",
          "description" : "shows all offers that are safe to display (not on the ban list)",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "category",
          "in" : "query",
          "description" : "Category you want to search in, empty for all",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Offer"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offerhistory" : {
      "get" : {
        "tags" : [ "Offers" ],
        "description" : "List all stored values of an offer.",
        "operationId" : "offerhistory",
        "parameters" : [ {
          "name" : "offer",
          "in" : "query",
          "description" : "Offer GUID.",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/OfferHistoryEntry"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offerinfo" : {
      "get" : {
        "tags" : [ "Offers" ],
        "description" : "Show values of an offer.",
        "operationId" : "offerinfo",
        "parameters" : [ {
          "name" : "guid",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/Offer"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offerlink" : {
      "post" : {
        "tags" : [ "Offers" ],
        "description" : "Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "offerlink",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/OfferLinkRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offerlist" : {
      "get" : {
        "tags" : [ "Offers" ],
        "description" : "list offers that an array of aliases own.",
        "operationId" : "offerlist",
        "parameters" : [ {
          "name" : "aliases",
          "in" : "query",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }, {
          "name" : "guid",
          "in" : "query",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "The number of results to return",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "The number of results to skip",
          "required" : false,
          "type" : "number"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Offer"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offernew" : {
      "post" : {
        "tags" : [ "Offers" ],
        "description" : "Create a new offer on the Syscoin decentralized marketplace. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "offernew",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/OfferNewRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success; Returns an array of 2 elements- tx id and offer GUID.",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offerremovewhitelist" : {
      "post" : {
        "tags" : [ "Offers" ],
        "description" : "Remove from the affiliate list of your offer(controls who can resell). Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "offerremovewhitelist",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/OfferRemoveWhitelistRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offerupdate" : {
      "post" : {
        "tags" : [ "Offers" ],
        "description" : "Perform an update on an offer you control. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "offerupdate",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/OfferUpdateRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success; Returns an array with 1 element- tx id.",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offerwhitelist" : {
      "get" : {
        "tags" : [ "Offers" ],
        "description" : "List all affiliates for this offer.",
        "operationId" : "offerwhitelist",
        "parameters" : [ {
          "name" : "offerguid",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/OfferWhitelistEntry"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/sendfrom" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "DEPRECATED (use sendtoaddress). Sent an amount from an account to a syscoin address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "sendfrom",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/SendFromRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/removeprunedfunds" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Deletes the specified transaction from the wallet. Meant for use with pruned wallets and as a companion to importprunedfunds. This will effect wallet balances.",
        "operationId" : "removeprunedfunds",
        "parameters" : [ {
          "name" : "txid",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/sendmany" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Send multiple times. Amounts are double-precision floating point numbers. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "sendmany",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/SendManyRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/sendtoaddress" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Send an amount to a given address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "sendtoaddress",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/SendToAddressRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/signmessage" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Sign a message with the private key of an address. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "signmessage",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/SignMessageRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/walletlock" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Removes the wallet encryption key from memory, locking the wallet. After calling this method, you will need to call walletpassphrase again before being able to call any methods which require the wallet to be unlocked.",
        "operationId" : "walletlock",
        "consumes" : [ "application/json", "application/octet-stream" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/walletpassphrase" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Stores the wallet decryption key in memory for 'timeout' seconds. This is needed prior to performing transactions related to private keys such as sending syscoins",
        "operationId" : "walletpassphrase",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/WalletPassphraseRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/walletpassphrasechange" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Changes the wallet passphrase from 'oldpassphrase' to 'newpassphrase'.",
        "operationId" : "walletpassphrasechange",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/WalletPassphraseChangeRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/syscoindecoderawtransaction" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Decode raw syscoin transaction (serialized, hex-encoded) and display information pertaining to the service that is included in the transactiion data output(OP_RETURN)",
        "operationId" : "syscoindecoderawtransaction",
        "parameters" : [ {
          "name" : "alias",
          "in" : "query",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "hexstring",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/syscoinsignrawtransaction" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Sign inputs for raw transaction (serialized, hex-encoded) and sends them out to the network if signing is complete",
        "operationId" : "syscoinsignrawtransaction",
        "parameters" : [ {
          "name" : "hexstring",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    }
  },
  "securityDefinitions" : {
    "token" : {
      "type" : "apiKey",
      "name" : "token",
      "in" : "header"
    }
  },
  "definitions" : {
    "Info" : {
      "required" : [ "balance", "blocks", "connections", "difficulty", "errors", "keypoololdest", "keypoolsize", "paytxfee", "protocolversion", "proxy", "relayfee", "testnet", "timeoffset", "unlocked_until", "version", "walletversion" ],
      "properties" : {
        "version" : {
          "type" : "number",
          "description" : "the server version"
        },
        "protocolversion" : {
          "type" : "number",
          "description" : "the protocol version"
        },
        "walletversion" : {
          "type" : "number",
          "description" : "the wallet version"
        },
        "balance" : {
          "type" : "number",
          "description" : "the total syscoin balance of the wallet"
        },
        "blocks" : {
          "type" : "number",
          "description" : "the current number of blocks processed in the server"
        },
        "timeoffset" : {
          "type" : "number",
          "description" : "the time offset"
        },
        "connections" : {
          "type" : "number",
          "description" : "the number of connections"
        },
        "proxy" : {
          "type" : "string",
          "description" : "the proxy used by the server"
        },
        "difficulty" : {
          "type" : "number",
          "description" : "the current difficulty"
        },
        "testnet" : {
          "type" : "boolean",
          "description" : "if the server is using testnet or not"
        },
        "keypoololdest" : {
          "type" : "number",
          "description" : "the timestamp (seconds since GMT epoch) of the oldest pre-generated key in the key pool"
        },
        "keypoolsize" : {
          "type" : "number",
          "description" : "how many new keys are pre-generated"
        },
        "unlocked_until" : {
          "type" : "number",
          "description" : "the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked"
        },
        "paytxfee" : {
          "type" : "number",
          "description" : "the transaction fee set in SYS/kB"
        },
        "relayfee" : {
          "type" : "number",
          "description" : "minimum relay fee for non-free transactions in SYS/kB"
        },
        "errors" : {
          "type" : "string",
          "description" : "any error messages"
        }
      },
      "example" : {
        "protocolversion" : 6.02745618307040320615897144307382404804229736328125,
        "relayfee" : 1.231513536777255612975068288506008684635162353515625,
        "timeoffset" : 2.3021358869347654518833223846741020679473876953125,
        "blocks" : 5.63737665663332876420099637471139430999755859375,
        "version" : 0.80082819046101150206595775671303272247314453125,
        "keypoolsize" : 2.027123023002321833274663731572218239307403564453125,
        "unlocked_until" : 4.1456080298839363962315474054776132106781005859375,
        "paytxfee" : 7.3862819483858839220147274318151175975799560546875,
        "difficulty" : 9.301444243932575517419536481611430644989013671875,
        "proxy" : "proxy",
        "walletversion" : 1.46581298050294517310021547018550336360931396484375,
        "balance" : 5.962133916683182377482808078639209270477294921875,
        "keypoololdest" : 3.61607674925191080461672754609026014804840087890625,
        "testnet" : true,
        "connections" : 7.061401241503109105224211816675961017608642578125,
        "errors" : "errors"
      }
    },
    "MiningInfo" : {
      "required" : [ "blocks", "chain", "currentblocksize", "currentblocktx", "difficulty", "errors", "generate", "genproclimit", "pooledtx", "testnet" ],
      "properties" : {
        "blocks" : {
          "type" : "number",
          "description" : "The current block"
        },
        "currentblocksize" : {
          "type" : "number",
          "description" : "The last block size"
        },
        "currentblocktx" : {
          "type" : "number",
          "description" : "The last block transaction"
        },
        "difficulty" : {
          "type" : "number",
          "description" : "The current difficulty"
        },
        "errors" : {
          "type" : "string",
          "description" : "Current errors"
        },
        "genproclimit" : {
          "type" : "number",
          "description" : "The processor limit for generation. -1 if no generation."
        },
        "networkhashps" : {
          "type" : "number",
          "description" : "Current network hashrate in kbs"
        },
        "pooledtx" : {
          "type" : "number",
          "description" : "The size of the mem pool"
        },
        "testnet" : {
          "type" : "boolean",
          "description" : "If using testnet or not"
        },
        "chain" : {
          "type" : "string",
          "description" : "current network name as defined in BIP70 (main, test, regtest)"
        },
        "generate" : {
          "type" : "boolean",
          "description" : "If the generation is on or off (see getgenerate or setgenerate calls)"
        }
      },
      "example" : {
        "difficulty" : 5.962133916683182377482808078639209270477294921875,
        "chain" : "chain",
        "currentblocktx" : 1.46581298050294517310021547018550336360931396484375,
        "blocks" : 0.80082819046101150206595775671303272247314453125,
        "networkhashps" : 2.3021358869347654518833223846741020679473876953125,
        "currentblocksize" : 6.02745618307040320615897144307382404804229736328125,
        "genproclimit" : 5.63737665663332876420099637471139430999755859375,
        "testnet" : true,
        "pooledtx" : 7.061401241503109105224211816675961017608642578125,
        "generate" : true,
        "errors" : "errors"
      }
    },
    "PeerInfoResponse" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/PeerInfo"
      }
    },
    "PeerInfo" : {
      "required" : [ "addr", "addrlocal", "banscore", "bytesrecv", "bytesrecv_per_msg", "bytessent", "bytessent_per_msg", "conntime", "id", "inbound", "inflight", "lastrecv", "lastsend", "minping", "pingtime", "relaytxes", "services", "startingheight", "subver", "synced_blocks", "synced_headers", "timeoffset", "version", "whitelisted" ],
      "properties" : {
        "id" : {
          "type" : "number",
          "description" : "Peer index"
        },
        "addr" : {
          "type" : "string",
          "description" : "The ip address and port of the peer"
        },
        "addrlocal" : {
          "type" : "string",
          "description" : "local address"
        },
        "services" : {
          "type" : "string",
          "description" : "The services offered"
        },
        "relaytxes" : {
          "type" : "boolean",
          "description" : "Whether peer has asked us to relay transactions to it"
        },
        "lastsend" : {
          "type" : "number",
          "description" : "The time in seconds since epoch (Jan 1 1970 GMT) of the last send"
        },
        "lastrecv" : {
          "type" : "number",
          "description" : "The time in seconds since epoch (Jan 1 1970 GMT) of the last receive"
        },
        "bytessent" : {
          "type" : "number",
          "description" : "The total bytes sent"
        },
        "bytesrecv" : {
          "type" : "number",
          "description" : "The total bytes received"
        },
        "conntime" : {
          "type" : "number",
          "description" : "The connection time in seconds since epoch (Jan 1 1970 GMT)"
        },
        "timeoffset" : {
          "type" : "number",
          "description" : "The time offset in seconds"
        },
        "pingtime" : {
          "type" : "number",
          "description" : "ping time"
        },
        "minping" : {
          "type" : "number",
          "description" : "minimum observed ping time"
        },
        "version" : {
          "type" : "number",
          "description" : "The peer version, such as 7001"
        },
        "subver" : {
          "type" : "string",
          "description" : "The string version"
        },
        "inbound" : {
          "type" : "boolean",
          "description" : "Inbound (true) or Outbound (false)"
        },
        "startingheight" : {
          "type" : "number",
          "description" : "The starting height (block) of the peer"
        },
        "banscore" : {
          "type" : "number",
          "description" : "The ban score"
        },
        "synced_headers" : {
          "type" : "number",
          "description" : "The last header we have in common with this peer"
        },
        "synced_blocks" : {
          "type" : "number",
          "description" : "The last block we have in common with this peer"
        },
        "inflight" : {
          "type" : "array",
          "description" : "The heights of blocks we're currently asking from this peer",
          "items" : {
            "type" : "number"
          }
        },
        "whitelisted" : {
          "type" : "boolean",
          "description" : "If this peer is whitelisted"
        },
        "bytessent_per_msg" : {
          "$ref" : "#/definitions/ByteMessageInfo"
        },
        "bytesrecv_per_msg" : {
          "$ref" : "#/definitions/ByteMessageInfo"
        }
      }
    },
    "ByteMessageInfo" : {
      "required" : [ "addr", "getheaders", "headers", "inv", "ping", "pong", "sendheaders", "verack", "version" ],
      "properties" : {
        "addr" : {
          "type" : "number"
        },
        "block" : {
          "type" : "number"
        },
        "getaddr" : {
          "type" : "number"
        },
        "getdata" : {
          "type" : "number"
        },
        "getheaders" : {
          "type" : "number"
        },
        "headers" : {
          "type" : "number"
        },
        "inv" : {
          "type" : "number"
        },
        "ping" : {
          "type" : "number"
        },
        "pong" : {
          "type" : "number"
        },
        "sendheaders" : {
          "type" : "number"
        },
        "tx" : {
          "type" : "number"
        },
        "verack" : {
          "type" : "number"
        },
        "version" : {
          "type" : "number"
        }
      }
    },
    "ValidateAddressResponse" : {
      "properties" : {
        "isvalid" : {
          "type" : "boolean",
          "description" : "If the address is valid or not. If not, this is the only property returned."
        },
        "address" : {
          "type" : "string",
          "description" : "The syscoin address validated"
        },
        "ismine" : {
          "type" : "boolean",
          "description" : "If the address is yours or not"
        },
        "iswatchonly" : {
          "type" : "boolean",
          "description" : "If the address is watchonly"
        },
        "isscript" : {
          "type" : "boolean",
          "description" : "If the key is a script"
        },
        "pubkey" : {
          "type" : "string",
          "description" : "The hex value of the raw public key"
        },
        "iscompressed" : {
          "type" : "boolean",
          "description" : "If the address is compressed"
        },
        "account" : {
          "type" : "string",
          "description" : "DEPRECATED. The account associated with the address, \"\" is the default account"
        }
      },
      "example" : {
        "address" : "address",
        "isscript" : true,
        "iscompressed" : true,
        "ismine" : true,
        "isvalid" : true,
        "iswatchonly" : true,
        "account" : "account",
        "pubkey" : "pubkey"
      }
    },
    "ErrorResponse" : {
      "required" : [ "message" ],
      "properties" : {
        "message" : {
          "type" : "string"
        }
      }
    },
    "Alias" : {
      "required" : [ "name" ],
      "discriminator" : "name",
      "properties" : {
        "name" : {
          "type" : "string"
        },
        "value" : {
          "type" : "string"
        },
        "privatevalue" : {
          "type" : "string"
        },
        "password" : {
          "type" : "string"
        },
        "txid" : {
          "type" : "string"
        },
        "address" : {
          "type" : "string"
        },
        "alias_peg" : {
          "type" : "string"
        },
        "balance" : {
          "type" : "number"
        },
        "ismine" : {
          "type" : "boolean"
        },
        "safesearch" : {
          "type" : "string"
        },
        "acceptcerttransfers" : {
          "type" : "string"
        },
        "safetylevel" : {
          "type" : "number"
        },
        "buyer_rating" : {
          "type" : "number"
        },
        "buyer_ratingcount" : {
          "type" : "number"
        },
        "buyer_rating_display" : {
          "type" : "string"
        },
        "seller_rating" : {
          "type" : "number"
        },
        "seller_ratingcount" : {
          "type" : "number"
        },
        "seller_rating_display" : {
          "type" : "string"
        },
        "arbiter_rating" : {
          "type" : "number"
        },
        "arbiter_ratingcount" : {
          "type" : "number"
        },
        "arbiter_rating_display" : {
          "type" : "string"
        },
        "lastupdate_height" : {
          "type" : "number"
        },
        "expires_in" : {
          "type" : "number"
        },
        "expires_on" : {
          "type" : "number"
        },
        "expired" : {
          "type" : "boolean"
        },
        "pending" : {
          "type" : "boolean"
        },
        "time" : {
          "type" : "string"
        },
        "multisiginfo" : {
          "$ref" : "#/definitions/MultiSignatureInfo"
        },
        "pubkey" : {
          "type" : "string"
        }
      },
      "example" : {
        "alias_peg" : "alias_peg",
        "buyer_rating_display" : "buyer_rating_display",
        "seller_rating_display" : "seller_rating_display",
        "lastupdate_height" : 3.61607674925191080461672754609026014804840087890625,
        "safesearch" : "safesearch",
        "expires_on" : 4.1456080298839363962315474054776132106781005859375,
        "pending" : true,
        "ismine" : true,
        "buyer_ratingcount" : 5.962133916683182377482808078639209270477294921875,
        "arbiter_ratingcount" : 9.301444243932575517419536481611430644989013671875,
        "password" : "password",
        "expired" : true,
        "balance" : 0.80082819046101150206595775671303272247314453125,
        "arbiter_rating_display" : "arbiter_rating_display",
        "seller_ratingcount" : 2.3021358869347654518833223846741020679473876953125,
        "value" : "value",
        "expires_in" : 2.027123023002321833274663731572218239307403564453125,
        "multisiginfo" : {
          "reqsigners" : "reqsigners",
          "reqsigs" : 7.3862819483858839220147274318151175975799560546875,
          "redeemscript" : "redeemscript"
        },
        "buyer_rating" : 1.46581298050294517310021547018550336360931396484375,
        "address" : "address",
        "txid" : "txid",
        "seller_rating" : 5.63737665663332876420099637471139430999755859375,
        "privatevalue" : "privatevalue",
        "safetylevel" : 6.02745618307040320615897144307382404804229736328125,
        "acceptcerttransfers" : "acceptcerttransfers",
        "arbiter_rating" : 7.061401241503109105224211816675961017608642578125,
        "name" : "name",
        "time" : "time",
        "pubkey" : "pubkey"
      }
    },
    "AliasHistoryEntry" : {
      "allOf" : [ {
        "$ref" : "#/definitions/Alias"
      } ]
    },
    "Cert" : {
      "properties" : {
        "cert" : {
          "type" : "string"
        },
        "txid" : {
          "type" : "string"
        },
        "height" : {
          "type" : "number"
        },
        "title" : {
          "type" : "string"
        },
        "time" : {
          "type" : "string"
        },
        "data" : {
          "type" : "string"
        },
        "pubdata" : {
          "type" : "string"
        },
        "category" : {
          "type" : "string"
        },
        "safesearch" : {
          "type" : "string"
        },
        "safetylevel" : {
          "type" : "number"
        },
        "ismine" : {
          "type" : "string"
        },
        "alias" : {
          "type" : "string"
        },
        "transferviewonly" : {
          "type" : "string"
        },
        "expires_in" : {
          "type" : "number"
        },
        "expires_on" : {
          "type" : "number"
        },
        "expired" : {
          "type" : "boolean"
        }
      },
      "example" : {
        "data" : "data",
        "safesearch" : "safesearch",
        "expires_on" : 5.962133916683182377482808078639209270477294921875,
        "txid" : "txid",
        "ismine" : "ismine",
        "cert" : "cert",
        "safetylevel" : 6.02745618307040320615897144307382404804229736328125,
        "transferviewonly" : "transferviewonly",
        "title" : "title",
        "pubdata" : "pubdata",
        "expired" : true,
        "alias" : "alias",
        "time" : "time",
        "category" : "category",
        "expires_in" : 1.46581298050294517310021547018550336360931396484375,
        "height" : 0.80082819046101150206595775671303272247314453125
      }
    },
    "CertHistoryEntry" : {
      "allOf" : [ {
        "$ref" : "#/definitions/Cert"
      } ]
    },
    "Escrow" : {
      "properties" : {
        "escrowtype" : {
          "type" : "string"
        },
        "escrow" : {
          "type" : "string"
        },
        "time" : {
          "type" : "string"
        },
        "seller" : {
          "type" : "string"
        },
        "arbiter" : {
          "type" : "string"
        },
        "buyer" : {
          "type" : "string"
        },
        "offer" : {
          "type" : "string"
        },
        "offerlink_seller" : {
          "type" : "string"
        },
        "offertitle" : {
          "type" : "string"
        },
        "quantity" : {
          "type" : "string"
        },
        "price" : {
          "type" : "string"
        },
        "systotal" : {
          "type" : "number"
        },
        "sysfee" : {
          "type" : "number"
        },
        "fee" : {
          "type" : "string"
        },
        "total" : {
          "type" : "string"
        },
        "totalwithfee" : {
          "type" : "number"
        },
        "currency" : {
          "type" : "string"
        },
        "exttxid" : {
          "type" : "string"
        },
        "escrowaddress" : {
          "type" : "string"
        },
        "paymentoption" : {
          "type" : "number"
        },
        "paymemntoption_display" : {
          "type" : "string"
        },
        "redeem_txid" : {
          "type" : "string"
        },
        "txid" : {
          "type" : "string"
        },
        "height" : {
          "type" : "string"
        },
        "pay_message" : {
          "type" : "string"
        },
        "expired" : {
          "type" : "number"
        },
        "status" : {
          "type" : "string"
        },
        "buyer_feedback" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "avg_buyer_rating" : {
          "type" : "number"
        },
        "seller_feedback" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "avg_seller_feedback" : {
          "type" : "number"
        },
        "arbiter_feedback" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "avg_arbiter_rating" : {
          "type" : "number"
        },
        "avg_rating_count" : {
          "type" : "number"
        },
        "avg_rating" : {
          "type" : "number"
        },
        "avg_rating_display" : {
          "type" : "string"
        }
      },
      "example" : {
        "escrowtype" : "escrowtype",
        "seller" : "seller",
        "sysfee" : 6.02745618307040320615897144307382404804229736328125,
        "pay_message" : "pay_message",
        "fee" : "fee",
        "redeem_txid" : "redeem_txid",
        "offer" : "offer",
        "total" : "total",
        "paymemntoption_display" : "paymemntoption_display",
        "expired" : 5.63737665663332876420099637471139430999755859375,
        "arbiter_feedback" : [ "arbiter_feedback", "arbiter_feedback" ],
        "price" : "price",
        "avg_rating" : 2.027123023002321833274663731572218239307403564453125,
        "escrow" : "escrow",
        "systotal" : 0.80082819046101150206595775671303272247314453125,
        "currency" : "currency",
        "escrowaddress" : "escrowaddress",
        "avg_rating_display" : "avg_rating_display",
        "totalwithfee" : 1.46581298050294517310021547018550336360931396484375,
        "height" : "height",
        "avg_seller_feedback" : 7.061401241503109105224211816675961017608642578125,
        "quantity" : "quantity",
        "paymentoption" : 5.962133916683182377482808078639209270477294921875,
        "txid" : "txid",
        "offerlink_seller" : "offerlink_seller",
        "buyer" : "buyer",
        "arbiter" : "arbiter",
        "avg_arbiter_rating" : 9.301444243932575517419536481611430644989013671875,
        "exttxid" : "exttxid",
        "seller_feedback" : [ "seller_feedback", "seller_feedback" ],
        "offertitle" : "offertitle",
        "avg_buyer_rating" : 2.3021358869347654518833223846741020679473876953125,
        "time" : "time",
        "buyer_feedback" : [ "buyer_feedback", "buyer_feedback" ],
        "avg_rating_count" : 3.61607674925191080461672754609026014804840087890625,
        "status" : "status"
      }
    },
    "EscrowRefundRequest" : {
      "required" : [ "escrowguid", "userrole" ],
      "properties" : {
        "escrowguid" : {
          "type" : "string"
        },
        "userrole" : {
          "type" : "string"
        },
        "rawtx" : {
          "type" : "string"
        }
      },
      "example" : {
        "escrowguid" : "escrowguid",
        "rawtx" : "rawtx",
        "userrole" : "userrole"
      }
    },
    "EscrowReleaseRequest" : {
      "required" : [ "escrowguid", "userrole" ],
      "properties" : {
        "escrowguid" : {
          "type" : "string"
        },
        "userrole" : {
          "type" : "string"
        },
        "rawtx" : {
          "type" : "string"
        }
      },
      "example" : {
        "escrowguid" : "escrowguid",
        "rawtx" : "rawtx",
        "userrole" : "userrole"
      }
    },
    "Transaction" : {
      "properties" : {
        "amount" : {
          "type" : "string",
          "description" : "The transaction amount in SYS"
        },
        "confirmations" : {
          "type" : "number",
          "description" : "The number of confirmations"
        },
        "blockhash" : {
          "type" : "string",
          "description" : "The block hash"
        },
        "blockindex" : {
          "type" : "number",
          "description" : "The block index"
        },
        "blocktime" : {
          "type" : "number",
          "description" : "The time in seconds since epoch (1 Jan 1970 GMT)"
        },
        "txid" : {
          "type" : "string",
          "description" : "The transaction id."
        },
        "time" : {
          "type" : "number",
          "description" : "The transaction time in seconds since epoch (1 Jan 1970 GMT)"
        },
        "timereceived" : {
          "type" : "number",
          "description" : "The time received in seconds since epoch (1 Jan 1970 GMT)"
        },
        "details" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/TransactionDetailEntry"
          }
        },
        "hex" : {
          "type" : "string",
          "description" : "Raw data for transaction"
        }
      },
      "example" : {
        "amount" : "amount",
        "blockhash" : "blockhash",
        "timereceived" : 5.63737665663332876420099637471139430999755859375,
        "blocktime" : 1.46581298050294517310021547018550336360931396484375,
        "txid" : "txid",
        "details" : [ {
          "amount" : 2.3021358869347654518833223846741020679473876953125,
          "address" : "address",
          "label" : "label",
          "category" : "category",
          "account" : "account",
          "vout" : 7.061401241503109105224211816675961017608642578125
        }, {
          "amount" : 2.3021358869347654518833223846741020679473876953125,
          "address" : "address",
          "label" : "label",
          "category" : "category",
          "account" : "account",
          "vout" : 7.061401241503109105224211816675961017608642578125
        } ],
        "hex" : "hex",
        "time" : 5.962133916683182377482808078639209270477294921875,
        "confirmations" : 0.80082819046101150206595775671303272247314453125,
        "blockindex" : 6.02745618307040320615897144307382404804229736328125
      }
    },
    "TransactionDetailEntry" : {
      "properties" : {
        "account" : {
          "type" : "string",
          "description" : "DEPRECATED. The account name involved in the transaction, can be \"\" for the default account."
        },
        "address" : {
          "type" : "string",
          "description" : "The syscoin address involved in the transaction"
        },
        "category" : {
          "type" : "string",
          "description" : "The category, either 'send' or 'receive'"
        },
        "amount" : {
          "type" : "number",
          "description" : "The amount in SYS"
        },
        "label" : {
          "type" : "string",
          "description" : "A comment for the address/transaction, if any"
        },
        "vout" : {
          "type" : "number",
          "description" : "the vout value"
        }
      },
      "example" : {
        "amount" : 2.3021358869347654518833223846741020679473876953125,
        "address" : "address",
        "label" : "label",
        "category" : "category",
        "account" : "account",
        "vout" : 7.061401241503109105224211816675961017608642578125
      }
    },
    "WalletInfo" : {
      "properties" : {
        "walletversion" : {
          "type" : "number",
          "description" : "the wallet version"
        },
        "balance" : {
          "type" : "number",
          "description" : "the total confirmed balance of the wallet in SYS"
        },
        "unconfirmed_balance" : {
          "type" : "number",
          "description" : "the total unconfirmed balance of the wallet in SYS"
        },
        "immature_balance" : {
          "type" : "number",
          "description" : "the total immature balance of the wallet in SYS"
        },
        "txcount" : {
          "type" : "number",
          "description" : "the total number of transactions in the wallet"
        },
        "keypoololdest" : {
          "type" : "number",
          "description" : "the timestamp (seconds since GMT epoch) of the oldest pre-generated key in the key pool"
        },
        "keypoolsize" : {
          "type" : "number",
          "description" : "how many new keys are pre-generated"
        },
        "unlocked_until" : {
          "type" : "number",
          "description" : "the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked"
        },
        "paytxfee" : {
          "type" : "number",
          "description" : "the transaction fee configuration, set in SYS/kB"
        }
      },
      "example" : {
        "walletversion" : 0.80082819046101150206595775671303272247314453125,
        "balance" : 6.02745618307040320615897144307382404804229736328125,
        "txcount" : 5.63737665663332876420099637471139430999755859375,
        "keypoololdest" : 2.3021358869347654518833223846741020679473876953125,
        "unconfirmed_balance" : 1.46581298050294517310021547018550336360931396484375,
        "immature_balance" : 5.962133916683182377482808078639209270477294921875,
        "keypoolsize" : 7.061401241503109105224211816675961017608642578125,
        "unlocked_until" : 9.301444243932575517419536481611430644989013671875,
        "paytxfee" : 3.61607674925191080461672754609026014804840087890625
      }
    },
    "AddressGrouping" : {
      "properties" : {
        "syscoinaddress" : {
          "type" : "string",
          "description" : "The syscoin address"
        },
        "amount" : {
          "type" : "number",
          "description" : "The amount in SYS"
        },
        "account" : {
          "type" : "string",
          "description" : "(optional) The account (DEPRECATED)"
        }
      },
      "example" : {
        "amount" : 0.80082819046101150206595775671303272247314453125,
        "syscoinaddress" : "syscoinaddress",
        "account" : "account"
      }
    },
    "Account" : {
      "properties" : {
        "involvesWatchonly" : {
          "type" : "boolean",
          "description" : "Only returned if imported addresses were involved in transaction"
        },
        "account" : {
          "type" : "string",
          "description" : "The account name of the receiving account"
        },
        "amount" : {
          "type" : "number",
          "description" : "The total amount received by addresses with this account"
        },
        "confirmations" : {
          "type" : "number",
          "description" : "The number of confirmations of the most recent transaction included"
        },
        "label" : {
          "type" : "string",
          "description" : "A comment for the address/transaction, if any"
        }
      },
      "example" : {
        "amount" : 0.80082819046101150206595775671303272247314453125,
        "involvesWatchonly" : true,
        "label" : "label",
        "confirmations" : 6.02745618307040320615897144307382404804229736328125,
        "account" : "account"
      }
    },
    "ListSinceBlockResponse" : {
      "properties" : {
        "transactions" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/SinceBlockTransactionEntry"
          }
        },
        "lastblock" : {
          "type" : "string",
          "description" : "The hash of the last block"
        }
      },
      "example" : {
        "lastblock" : "lastblock",
        "transactions" : [ {
          "amount" : 0.80082819046101150206595775671303272247314453125,
          "address" : "address",
          "fee" : 1.46581298050294517310021547018550336360931396484375,
          "txid" : "txid",
          "label" : "label",
          "confirmations" : 5.962133916683182377482808078639209270477294921875,
          "vout" : 6.02745618307040320615897144307382404804229736328125,
          "blockhash" : "blockhash",
          "timereceived" : 9.301444243932575517419536481611430644989013671875,
          "blocktime" : 2.3021358869347654518833223846741020679473876953125,
          "comment" : "comment",
          "time" : 7.061401241503109105224211816675961017608642578125,
          "to" : "to",
          "category" : "category",
          "blockindex" : 5.63737665663332876420099637471139430999755859375,
          "account" : "account"
        }, {
          "amount" : 0.80082819046101150206595775671303272247314453125,
          "address" : "address",
          "fee" : 1.46581298050294517310021547018550336360931396484375,
          "txid" : "txid",
          "label" : "label",
          "confirmations" : 5.962133916683182377482808078639209270477294921875,
          "vout" : 6.02745618307040320615897144307382404804229736328125,
          "blockhash" : "blockhash",
          "timereceived" : 9.301444243932575517419536481611430644989013671875,
          "blocktime" : 2.3021358869347654518833223846741020679473876953125,
          "comment" : "comment",
          "time" : 7.061401241503109105224211816675961017608642578125,
          "to" : "to",
          "category" : "category",
          "blockindex" : 5.63737665663332876420099637471139430999755859375,
          "account" : "account"
        } ]
      }
    },
    "SinceBlockTransactionEntry" : {
      "properties" : {
        "account" : {
          "type" : "string",
          "description" : "DEPRECATED. The account name associated with the transaction. Will be \"\" for the default account."
        },
        "address" : {
          "type" : "string",
          "description" : "The syscoin address of the transaction. Not present for move transactions (category = move)."
        },
        "category" : {
          "type" : "string",
          "description" : "The transaction category. 'send' has negative amounts, 'receive' has positive amounts."
        },
        "amount" : {
          "type" : "number",
          "description" : "The amount in SYS. This is negative for the 'send' category, and for the 'move' category for moves outbound. It is positive for the 'receive' category, and for the 'move' category for inbound funds."
        },
        "vout" : {
          "type" : "number",
          "description" : "the vout value"
        },
        "fee" : {
          "type" : "number",
          "description" : "The amount of the fee in SYS. This is negative and only available for the 'send' category of transactions."
        },
        "confirmations" : {
          "type" : "number",
          "description" : "The number of confirmations for the transaction. Available for 'send' and 'receive' category of transactions."
        },
        "blockhash" : {
          "type" : "string",
          "description" : "The block hash containing the transaction. Available for 'send' and 'receive' category of transactions."
        },
        "blockindex" : {
          "type" : "number",
          "description" : "The block index containing the transaction. Available for 'send' and 'receive' category of transactions."
        },
        "blocktime" : {
          "type" : "number",
          "description" : "The block time in seconds since epoch (1 Jan 1970 GMT)."
        },
        "txid" : {
          "type" : "string",
          "description" : "The transaction id. Available for 'send' and 'receive' category of transactions."
        },
        "time" : {
          "type" : "number",
          "description" : "The transaction time in seconds since epoch (Jan 1 1970 GMT)."
        },
        "timereceived" : {
          "type" : "number",
          "description" : "The time received in seconds since epoch (Jan 1 1970 GMT). Available for 'send' and 'receive' category of transactions."
        },
        "comment" : {
          "type" : "string",
          "description" : "If a comment is associated with the transaction."
        },
        "label" : {
          "type" : "string",
          "description" : "A comment for the address/transaction, if any"
        },
        "to" : {
          "type" : "string",
          "description" : "If a comment to is associated with the transaction."
        }
      },
      "example" : {
        "amount" : 0.80082819046101150206595775671303272247314453125,
        "address" : "address",
        "fee" : 1.46581298050294517310021547018550336360931396484375,
        "txid" : "txid",
        "label" : "label",
        "confirmations" : 5.962133916683182377482808078639209270477294921875,
        "vout" : 6.02745618307040320615897144307382404804229736328125,
        "blockhash" : "blockhash",
        "timereceived" : 9.301444243932575517419536481611430644989013671875,
        "blocktime" : 2.3021358869347654518833223846741020679473876953125,
        "comment" : "comment",
        "time" : 7.061401241503109105224211816675961017608642578125,
        "to" : "to",
        "category" : "category",
        "blockindex" : 5.63737665663332876420099637471139430999755859375,
        "account" : "account"
      }
    },
    "TransactionListEntry" : {
      "properties" : {
        "account" : {
          "type" : "string",
          "description" : "DEPRECATED. The account name associated with the transaction. It will be \"\" for the default account."
        },
        "address" : {
          "type" : "string",
          "description" : "The syscoin address of the transaction. Not present for move transactions (category = move)."
        },
        "category" : {
          "type" : "string",
          "description" : "The transaction category. 'move' is a local (off blockchain) transaction between accounts, and not associated with an address, transaction id or block. 'send' and 'receive' transactions are associated with an address, transaction id and block details"
        },
        "amount" : {
          "type" : "number",
          "description" : "The amount in SYS. This is negative for the 'send' category, and for the 'move' category for moves outbound. It is positive for the 'receive' category, and for the 'move' category for inbound funds."
        },
        "vout" : {
          "type" : "number",
          "description" : "the vout value"
        },
        "fee" : {
          "type" : "number",
          "description" : "The amount of the fee in SYS. This is negative and only available for the 'send' category of transactions."
        },
        "confirmations" : {
          "type" : "number",
          "description" : "The number of confirmations for the transaction. Available for 'send' and'receive' category of transactions. Negative confirmations indicate the transation conflicts with the block chain"
        },
        "trusted" : {
          "type" : "boolean",
          "description" : "Whether we consider the outputs of this unconfirmed transaction safe to spend."
        },
        "blockhash" : {
          "type" : "string",
          "description" : "The block hash containing the transaction. Available for 'send' and 'receive' category of transactions."
        },
        "blockindex" : {
          "type" : "string",
          "description" : "The block index containing the transaction. Available for 'send' and 'receive' category of transactions."
        },
        "blocktime" : {
          "type" : "number",
          "description" : "The block time in seconds since epoch (1 Jan 1970 GMT)."
        },
        "txid" : {
          "type" : "string",
          "description" : "The transaction id. Available for 'send' and 'receive' category of transactions."
        },
        "time" : {
          "type" : "number",
          "description" : "The transaction time in seconds since epoch (midnight Jan 1 1970 GMT)."
        },
        "timereceived" : {
          "type" : "number",
          "description" : "The time received in seconds since epoch (midnight Jan 1 1970 GMT). Available for 'send' and 'receive' category of transactions."
        },
        "comment" : {
          "type" : "string",
          "description" : "If a comment is associated with the transaction."
        },
        "label" : {
          "type" : "string",
          "description" : "A comment for the address/transaction, if any"
        },
        "otheraccount" : {
          "type" : "string",
          "description" : "For the 'move' category of transactions, the account the funds came from (for receiving funds, positive amounts), or went to (for sending funds, negative amounts)."
        }
      },
      "example" : {
        "amount" : 0.80082819046101150206595775671303272247314453125,
        "address" : "address",
        "fee" : 1.46581298050294517310021547018550336360931396484375,
        "txid" : "txid",
        "label" : "label",
        "otheraccount" : "otheraccount",
        "confirmations" : 5.962133916683182377482808078639209270477294921875,
        "vout" : 6.02745618307040320615897144307382404804229736328125,
        "blockhash" : "blockhash",
        "timereceived" : 7.061401241503109105224211816675961017608642578125,
        "trusted" : true,
        "blocktime" : 5.63737665663332876420099637471139430999755859375,
        "comment" : "comment",
        "time" : 2.3021358869347654518833223846741020679473876953125,
        "category" : "category",
        "blockindex" : "blockindex",
        "account" : "account"
      }
    },
    "Message" : {
      "properties" : {
        "GUID" : {
          "type" : "string"
        },
        "txid" : {
          "type" : "string"
        },
        "time" : {
          "type" : "number"
        },
        "from" : {
          "type" : "string"
        },
        "to" : {
          "type" : "string"
        },
        "subject" : {
          "type" : "string"
        },
        "message" : {
          "type" : "string"
        }
      },
      "example" : {
        "subject" : "subject",
        "GUID" : "GUID",
        "txid" : "txid",
        "from" : "from",
        "time" : 0.80082819046101150206595775671303272247314453125,
        "to" : "to",
        "message" : "message"
      }
    },
    "OfferAccept" : {
      "properties" : {
        "offer" : {
          "type" : "string"
        },
        "id" : {
          "type" : "string"
        },
        "txid" : {
          "type" : "string"
        },
        "title" : {
          "type" : "string"
        },
        "exttxid" : {
          "type" : "string"
        },
        "paymentoption" : {
          "type" : "number"
        },
        "paymentoption_display" : {
          "type" : "string"
        },
        "height" : {
          "type" : "number"
        },
        "time" : {
          "type" : "string"
        },
        "quantity" : {
          "type" : "number"
        },
        "currency" : {
          "type" : "string"
        },
        "offer_discount_percentage" : {
          "type" : "number"
        },
        "systotal" : {
          "type" : "number"
        },
        "sysprice" : {
          "type" : "number"
        },
        "price" : {
          "type" : "number"
        },
        "total" : {
          "type" : "number"
        },
        "buyer" : {
          "type" : "string"
        },
        "seller" : {
          "type" : "string"
        },
        "ismine" : {
          "type" : "boolean"
        },
        "status" : {
          "type" : "string"
        },
        "buyer_fedback" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "seller_fedback" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "avg_rating" : {
          "type" : "number"
        },
        "avg_rating_display" : {
          "type" : "string"
        },
        "pay_message" : {
          "type" : "string"
        }
      },
      "example" : {
        "seller" : "seller",
        "paymentoption_display" : "paymentoption_display",
        "pay_message" : "pay_message",
        "ismine" : true,
        "sysprice" : 2.3021358869347654518833223846741020679473876953125,
        "title" : "title",
        "offer" : "offer",
        "total" : 9.301444243932575517419536481611430644989013671875,
        "price" : 7.061401241503109105224211816675961017608642578125,
        "avg_rating" : 3.61607674925191080461672754609026014804840087890625,
        "buyer_fedback" : [ "buyer_fedback", "buyer_fedback" ],
        "currency" : "currency",
        "systotal" : 5.63737665663332876420099637471139430999755859375,
        "id" : "id",
        "avg_rating_display" : "avg_rating_display",
        "height" : 6.02745618307040320615897144307382404804229736328125,
        "offer_discount_percentage" : 5.962133916683182377482808078639209270477294921875,
        "quantity" : 1.46581298050294517310021547018550336360931396484375,
        "paymentoption" : 0.80082819046101150206595775671303272247314453125,
        "txid" : "txid",
        "seller_fedback" : [ "seller_fedback", "seller_fedback" ],
        "buyer" : "buyer",
        "exttxid" : "exttxid",
        "time" : "time",
        "status" : "status"
      }
    },
    "OfferWhitelistEntry" : {
      "properties" : {
        "alias" : {
          "type" : "string"
        },
        "expiresin" : {
          "type" : "number"
        },
        "offer_discount_percentage" : {
          "type" : "number"
        }
      },
      "example" : {
        "expiresin" : 0.80082819046101150206595775671303272247314453125,
        "offer_discount_percentage" : 6.02745618307040320615897144307382404804229736328125,
        "alias" : "alias"
      }
    },
    "OfferHistoryEntry" : {
      "allOf" : [ {
        "$ref" : "#/definitions/Offer"
      } ]
    },
    "Offer" : {
      "required" : [ "offer" ],
      "discriminator" : "offer",
      "properties" : {
        "offer" : {
          "type" : "string"
        },
        "cert" : {
          "type" : "string"
        },
        "txid" : {
          "type" : "string"
        },
        "expires_in" : {
          "type" : "number"
        },
        "expired_block" : {
          "type" : "number"
        },
        "expired" : {
          "type" : "boolean"
        },
        "height" : {
          "type" : "number"
        },
        "category" : {
          "type" : "string"
        },
        "title" : {
          "type" : "string"
        },
        "quantity" : {
          "type" : "string"
        },
        "currency" : {
          "type" : "string"
        },
        "sysprice" : {
          "type" : "number"
        },
        "price" : {
          "type" : "number"
        },
        "ismine" : {
          "type" : "boolean"
        },
        "commission" : {
          "type" : "number"
        },
        "offerlink" : {
          "type" : "boolean"
        },
        "offerlink_guid" : {
          "type" : "string"
        },
        "offerlink_seller" : {
          "type" : "string"
        },
        "private" : {
          "type" : "boolean"
        },
        "safesearch" : {
          "type" : "string"
        },
        "safetylevel" : {
          "type" : "number"
        },
        "paymentoptions" : {
          "type" : "number"
        },
        "paymentoptions_display" : {
          "type" : "string"
        },
        "alias_peg" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "alias" : {
          "type" : "string"
        },
        "address" : {
          "type" : "string"
        },
        "alias_rating" : {
          "type" : "number"
        },
        "alias_rating_count" : {
          "type" : "number"
        },
        "alias_rating_display" : {
          "type" : "string"
        },
        "geolocation" : {
          "type" : "string"
        },
        "offers_sold" : {
          "type" : "number"
        },
        "time" : {
          "type" : "string"
        }
      },
      "example" : {
        "alias_peg" : "alias_peg",
        "private" : true,
        "safesearch" : "safesearch",
        "offers_sold" : 4.1456080298839363962315474054776132106781005859375,
        "ismine" : true,
        "description" : "description",
        "cert" : "cert",
        "sysprice" : 5.962133916683182377482808078639209270477294921875,
        "title" : "title",
        "offer" : "offer",
        "expired" : true,
        "price" : 5.63737665663332876420099637471139430999755859375,
        "alias_rating_count" : 2.027123023002321833274663731572218239307403564453125,
        "alias" : "alias",
        "currency" : "currency",
        "commission" : 2.3021358869347654518833223846741020679473876953125,
        "expires_in" : 0.80082819046101150206595775671303272247314453125,
        "height" : 1.46581298050294517310021547018550336360931396484375,
        "quantity" : "quantity",
        "address" : "address",
        "offerlink" : true,
        "txid" : "txid",
        "alias_rating" : 3.61607674925191080461672754609026014804840087890625,
        "expired_block" : 6.02745618307040320615897144307382404804229736328125,
        "safetylevel" : 7.061401241503109105224211816675961017608642578125,
        "offerlink_guid" : "offerlink_guid",
        "paymentoptions" : 9.301444243932575517419536481611430644989013671875,
        "paymentoptions_display" : "paymentoptions_display",
        "offerlink_seller" : "offerlink_seller",
        "alias_rating_display" : "alias_rating_display",
        "time" : "time",
        "category" : "category",
        "geolocation" : "geolocation"
      }
    },
    "AddMultisigAddressRequest" : {
      "required" : [ "keysobject", "nrequired" ],
      "properties" : {
        "nrequired" : {
          "type" : "number",
          "description" : "The number of required signatures out of the n keys or addresses."
        },
        "keysobject" : {
          "type" : "string",
          "description" : "A json array of syscoin addresses or hex-encoded public keys. [ \"address\"  (string) syscoin address or hex-encoded public key ... ]"
        },
        "account" : {
          "type" : "string",
          "description" : "DEPRECATED. An account to assign the addresses to."
        }
      },
      "example" : {
        "nrequired" : 0.80082819046101150206595775671303272247314453125,
        "keysobject" : "keysobject",
        "account" : "account"
      }
    },
    "AliasNewRequest" : {
      "required" : [ "aliasname", "aliaspeg", "publicvalue" ],
      "properties" : {
        "aliaspeg" : {
          "type" : "string",
          "description" : "Alias peg which will be used for conversion operations on all Syscoin services related to this Alias"
        },
        "aliasname" : {
          "type" : "string",
          "description" : "Alias name"
        },
        "publicvalue" : {
          "type" : "string",
          "description" : "Alias public profile data, 1023 chars max."
        },
        "password" : {
          "type" : "string",
          "description" : "Used to generate your public/private key that controls this alias. Warning: Calling this function over a public network can lead to someone reading your password in plain text."
        },
        "safesearch" : {
          "type" : "string",
          "description" : "set to No if this alias should only show in the search when safe search is not selected. Defaults to Yes (alias shows with or without safe search selected in search lists)."
        },
        "accepttransfers" : {
          "type" : "string",
          "description" : "set to No if this alias should not allow a certificate to be transferred to it. Defaults to Yes."
        },
        "expire" : {
          "type" : "string",
          "description" : "Time in seconds. Future time when to expire alias. It is exponentially more expensive per year, calculation is FEERATE*(1.5^years). FEERATE is the dynamic satoshi per byte fee set in the rate peg alias used for this alias. Defaults to 1 year."
        },
        "nrequired" : {
          "type" : "number",
          "description" : "For multisig aliases only. The number of required signatures out of the n aliases for a multisig alias update."
        },
        "aliases" : {
          "type" : "array",
          "description" : "For multisig aliases only. A json array of aliases which are used to sign on an update to this alias. [ \"alias\"    Existing syscoin alias name ,... ]",
          "items" : {
            "type" : "string"
          }
        }
      },
      "example" : {
        "aliasname" : "aliasname",
        "publicvalue" : "publicvalue",
        "password" : "password",
        "aliases" : [ "aliases", "aliases" ],
        "nrequired" : 0.80082819046101150206595775671303272247314453125,
        "safesearch" : "safesearch",
        "expire" : "expire",
        "accepttransfers" : "accepttransfers",
        "aliaspeg" : "aliaspeg"
      }
    },
    "AliasUpdateRequest" : {
      "required" : [ "aliasname", "aliaspeg", "publicvalue" ],
      "properties" : {
        "aliaspeg" : {
          "type" : "string",
          "description" : "Alias peg which will be used for conversion operations on all Syscoin services related to this Alias"
        },
        "aliasname" : {
          "type" : "string",
          "description" : "Alias name"
        },
        "publicvalue" : {
          "type" : "string",
          "description" : "Alias public profile data, 1023 chars max."
        },
        "privatevalue" : {
          "type" : "string",
          "description" : "Alias private profile data, 1023 chars max. Will be private and readable by owner only."
        },
        "password" : {
          "type" : "string",
          "description" : "Used to generate your public/private key that controls this alias. Warning: Calling this function over a public network can lead to someone reading your password in plain text."
        },
        "safesearch" : {
          "type" : "string",
          "description" : "set to No if this alias should only show in the search when safe search is not selected. Defaults to Yes (alias shows with or without safe search selected in search lists)."
        },
        "toalias_pubkey" : {
          "type" : "string",
          "description" : "receiver syscoin alias pub key, if transferring alias."
        },
        "accepttransfers" : {
          "type" : "string",
          "description" : "set to No if this alias should not allow a certificate to be transferred to it. Defaults to Yes."
        },
        "expire" : {
          "type" : "string",
          "description" : "Time in seconds. Future time when to expire alias. It is exponentially more expensive per year, calculation is FEERATE*(1.5^years). FEERATE is the dynamic satoshi per byte fee set in the rate peg alias used for this alias. Defaults to 1 year."
        },
        "nrequired" : {
          "type" : "number",
          "description" : "For multisig aliases only. The number of required signatures out of the n aliases for a multisig alias update."
        },
        "aliases" : {
          "type" : "array",
          "description" : "For multisig aliases only. A json array of aliases which are used to sign on an update to this alias. [ \"alias\"    Existing syscoin alias name ,... ]",
          "items" : {
            "type" : "string"
          }
        }
      },
      "example" : {
        "toalias_pubkey" : "toalias_pubkey",
        "aliasname" : "aliasname",
        "publicvalue" : "publicvalue",
        "password" : "password",
        "aliases" : [ "aliases", "aliases" ],
        "nrequired" : 0.80082819046101150206595775671303272247314453125,
        "safesearch" : "safesearch",
        "expire" : "expire",
        "privatevalue" : "privatevalue",
        "accepttransfers" : "accepttransfers",
        "aliaspeg" : "aliaspeg"
      }
    },
    "CertNewRequest" : {
      "required" : [ "alias", "private", "public", "title" ],
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "An alias you own."
        },
        "title" : {
          "type" : "string",
          "description" : "title, 255 bytes max."
        },
        "private" : {
          "type" : "string",
          "description" : "private data, 1024 characters max."
        },
        "public" : {
          "type" : "string",
          "description" : "public data, 1024 characters max."
        },
        "safesearch" : {
          "type" : "string",
          "description" : "set to No if this cert should only show in the search when safe search is not selected. Defaults to Yes (cert shows with or without safe search selected in search lists)."
        },
        "category" : {
          "type" : "string",
          "description" : "category, 25 characters max. Defaults to certificates;"
        }
      },
      "example" : {
        "private" : "private",
        "public" : "public",
        "safesearch" : "safesearch",
        "alias" : "alias",
        "title" : "title",
        "category" : "category"
      }
    },
    "CertTransferRequest" : {
      "required" : [ "alias", "certkey" ],
      "properties" : {
        "certkey" : {
          "type" : "string",
          "description" : "Certificate guidkey."
        },
        "alias" : {
          "type" : "string",
          "description" : "Alias to transfer this certificate to."
        },
        "viewonly" : {
          "type" : "boolean",
          "description" : "Transfer the certificate as view-only. Recipient cannot edit, transfer or sell this certificate in the future."
        }
      },
      "example" : {
        "viewonly" : true,
        "certkey" : "certkey",
        "alias" : "alias"
      }
    },
    "CertUpdateRequest" : {
      "required" : [ "alias", "guid", "private", "public", "title" ],
      "properties" : {
        "guid" : {
          "type" : "string",
          "description" : "certificate guidkey."
        },
        "alias" : {
          "type" : "string",
          "description" : "an alias you own to associate with this certificate."
        },
        "title" : {
          "type" : "string",
          "description" : "certificate title, 255 bytes max."
        },
        "private" : {
          "type" : "string",
          "description" : "Private certificate data, 1024 characters max."
        },
        "public" : {
          "type" : "string",
          "description" : "Public certificate data, 1024 characters max."
        },
        "safesearch" : {
          "type" : "string",
          "description" : "set to No if this cert should only show in the search when safe search is not selected. Defaults to Yes (cert shows with or without safe search selected in search lists)."
        },
        "category" : {
          "type" : "string",
          "description" : "category, 256 characters max. Defaults to certificates"
        }
      },
      "example" : {
        "private" : "private",
        "public" : "public",
        "safesearch" : "safesearch",
        "guid" : "guid",
        "alias" : "alias",
        "title" : "title",
        "category" : "category"
      }
    },
    "EscrowClaimRefundRequest" : {
      "required" : [ "guid" ],
      "properties" : {
        "guid" : {
          "type" : "string"
        },
        "rawtx" : {
          "type" : "string"
        }
      },
      "example" : {
        "rawtx" : "rawtx",
        "guid" : "guid"
      }
    },
    "EscrowClaimReleaseRequest" : {
      "required" : [ "guid" ],
      "properties" : {
        "guid" : {
          "type" : "string"
        },
        "rawtx" : {
          "type" : "string"
        }
      },
      "example" : {
        "rawtx" : "rawtx",
        "guid" : "guid"
      }
    },
    "EscrowCompleteRefundRequest" : {
      "required" : [ "escrowguid", "rawtx" ],
      "properties" : {
        "escrowguid" : {
          "type" : "string"
        },
        "rawtx" : {
          "type" : "string"
        }
      },
      "example" : {
        "escrowguid" : "escrowguid",
        "rawtx" : "rawtx"
      }
    },
    "EscrowCompleteReleaseRequest" : {
      "required" : [ "escrowguid", "rawtx" ],
      "properties" : {
        "escrowguid" : {
          "type" : "string"
        },
        "rawtx" : {
          "type" : "string"
        }
      },
      "example" : {
        "escrowguid" : "escrowguid",
        "rawtx" : "rawtx"
      }
    },
    "EscrowNewRequest" : {
      "required" : [ "alias", "arbiter", "message", "offer", "quantity" ],
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "An alias you own."
        },
        "offer" : {
          "type" : "string",
          "description" : "GUID of offer that this escrow is managing."
        },
        "quantity" : {
          "type" : "number",
          "description" : "Quantity of items to buy of offer."
        },
        "message" : {
          "type" : "string",
          "description" : "Delivery details to seller. 256 characters max."
        },
        "arbiter" : {
          "type" : "string",
          "description" : "Alias of Arbiter."
        },
        "exttx" : {
          "type" : "string",
          "description" : "External transaction ID if paid with another blockchain."
        },
        "paymentoption" : {
          "type" : "string",
          "description" : "If extTx is defined, specify a valid payment option used to make payment. Default is SYS."
        },
        "redeemscript" : {
          "type" : "string",
          "description" : "If paid in external chain, enter redeemScript that generateescrowmultisig returns"
        },
        "height" : {
          "type" : "number",
          "description" : "If paid in extneral chain, enter height that generateescrowmultisig returns"
        }
      },
      "example" : {
        "offer" : "offer",
        "arbiter" : "arbiter",
        "exttx" : "exttx",
        "quantity" : 0.80082819046101150206595775671303272247314453125,
        "paymentoption" : "paymentoption",
        "alias" : "alias",
        "message" : "message",
        "redeemscript" : "redeemscript",
        "height" : 6.02745618307040320615897144307382404804229736328125
      }
    },
    "AliasPayRequest" : {
      "required" : [ "alias", "amounts" ],
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "Alias you own to pay from"
        },
        "amounts" : {
          "type" : "string",
          "description" : "A json object with aliases and amounts { \"address\":amount   (numeric or string) The syscoin alias is the key, the numeric amount (can be string) in SYS is the value ,... }"
        },
        "minconf" : {
          "type" : "number",
          "description" : "Only use the balance confirmed at least this many times."
        },
        "comment" : {
          "type" : "string",
          "description" : "A comment"
        }
      },
      "example" : {
        "amounts" : "amounts",
        "minconf" : 0.80082819046101150206595775671303272247314453125,
        "alias" : "alias",
        "comment" : "comment"
      }
    },
    "GetNewAddressRequest" : {
      "properties" : {
        "account" : {
          "type" : "string",
          "description" : "DEPRECATED. The account name for the address to be linked to. If not provided, the default account \"\" is used. It can also be set to the empty string \"\" to represent the default account. The account does not need to exist, it will be created if there is no account by the given name."
        }
      },
      "example" : {
        "account" : "account"
      }
    },
    "ImportAddressRequest" : {
      "required" : [ "script" ],
      "properties" : {
        "script" : {
          "type" : "string",
          "description" : "The hex-encoded script (or address)"
        },
        "label" : {
          "type" : "string",
          "description" : "An optional label"
        },
        "rescan" : {
          "type" : "boolean",
          "description" : "Rescan the wallet for transactions"
        },
        "p2sh" : {
          "type" : "boolean",
          "description" : "Add the P2SH version of the script as well"
        }
      },
      "example" : {
        "p2sh" : true,
        "label" : "label",
        "rescan" : true,
        "script" : "script"
      }
    },
    "ImportPrivKeyRequest" : {
      "required" : [ "syscoinprivkey" ],
      "properties" : {
        "syscoinprivkey" : {
          "type" : "string",
          "description" : "The private key (see dumpprivkey)"
        },
        "label" : {
          "type" : "string",
          "description" : "An optional label"
        },
        "rescan" : {
          "type" : "boolean",
          "description" : "Rescan the wallet for transactions"
        }
      },
      "example" : {
        "syscoinprivkey" : "syscoinprivkey",
        "label" : "label",
        "rescan" : true
      }
    },
    "ImportPubKeyRequest" : {
      "required" : [ "pubkey" ],
      "properties" : {
        "pubkey" : {
          "type" : "string",
          "description" : "The hex-encoded public key"
        },
        "label" : {
          "type" : "string",
          "description" : "An optional label"
        },
        "rescan" : {
          "type" : "boolean",
          "description" : "Rescan the wallet for transactions"
        }
      },
      "example" : {
        "label" : "label",
        "rescan" : true,
        "pubkey" : "pubkey"
      }
    },
    "ImportWalletRequest" : {
      "required" : [ "filename" ],
      "properties" : {
        "filename" : {
          "type" : "string",
          "description" : "The wallet file"
        }
      },
      "example" : {
        "filename" : "filename"
      }
    },
    "MessageNewRequest" : {
      "required" : [ "fromalias", "frommessage", "subject", "toalias", "tomessage" ],
      "properties" : {
        "subject" : {
          "type" : "string",
          "description" : "Subject of message."
        },
        "fromalias" : {
          "type" : "string",
          "description" : "Alias to send message from."
        },
        "toalias" : {
          "type" : "string",
          "description" : "Alias to send message to."
        },
        "frommessage" : {
          "type" : "string",
          "description" : "Message encrypted to from alias."
        },
        "tomessage" : {
          "type" : "string",
          "description" : "Message encrypted to sending alias."
        }
      },
      "example" : {
        "fromalias" : "fromalias",
        "toalias" : "toalias",
        "tomessage" : "tomessage",
        "subject" : "subject",
        "frommessage" : "frommessage"
      }
    },
    "MoveRequest" : {
      "required" : [ "amount", "fromaccount", "toaccount" ],
      "properties" : {
        "fromaccount" : {
          "type" : "string",
          "description" : "The name of the account to move funds from. May be the default account using \"\"."
        },
        "toaccount" : {
          "type" : "string",
          "description" : "The name of the account to move funds to. May be the default account using \"\"."
        },
        "amount" : {
          "type" : "number",
          "description" : "Quantity of SYS to move between accounts."
        },
        "minconf" : {
          "type" : "string",
          "description" : "Only use funds with at least this many confirmations."
        },
        "comment" : {
          "type" : "string",
          "description" : "An optional comment, stored in the wallet only."
        }
      },
      "example" : {
        "fromaccount" : "fromaccount",
        "amount" : 0.80082819046101150206595775671303272247314453125,
        "minconf" : "minconf",
        "toaccount" : "toaccount",
        "comment" : "comment"
      }
    },
    "OfferAcceptRequest" : {
      "required" : [ "alias", "guid" ],
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "An alias of the buyer."
        },
        "guid" : {
          "type" : "string",
          "description" : "guidkey from offer."
        },
        "quantity" : {
          "type" : "number",
          "description" : "quantity to buy. Defaults to 1."
        },
        "message" : {
          "type" : "string",
          "description" : "payment message to seller, 1KB max."
        },
        "exttxid" : {
          "type" : "string",
          "description" : "If paid in another coin, enter the Transaction ID here. Default is empty."
        },
        "paymentoption" : {
          "type" : "string",
          "description" : "If Ext TxId is defined, specify a valid payment option used to make payment. Default is SYS."
        }
      },
      "example" : {
        "quantity" : 0.80082819046101150206595775671303272247314453125,
        "exttxid" : "exttxid",
        "paymentoption" : "paymentoption",
        "alias" : "alias",
        "guid" : "guid",
        "message" : "message"
      }
    },
    "OfferAddWhitelistRequest" : {
      "required" : [ "aliasguid", "offerguid" ],
      "properties" : {
        "offerguid" : {
          "type" : "string",
          "description" : "offer guid that you are adding to"
        },
        "aliasguid" : {
          "type" : "string",
          "description" : "alias guid representing an alias that you want to add to the affiliate list"
        },
        "discountPercentage" : {
          "type" : "number",
          "description" : "Percentage of discount given to affiliate for this offer. 0 to 99."
        }
      },
      "example" : {
        "discountPercentage" : 0.80082819046101150206595775671303272247314453125,
        "offerguid" : "offerguid",
        "aliasguid" : "aliasguid"
      }
    },
    "OfferClearWhitelistRequest" : {
      "required" : [ "offerguid" ],
      "properties" : {
        "offerguid" : {
          "type" : "string"
        }
      },
      "example" : {
        "offerguid" : "offerguid"
      }
    },
    "OfferLinkRequest" : {
      "required" : [ "alias", "commission", "guid" ],
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "An alias you own."
        },
        "guid" : {
          "type" : "string",
          "description" : "offer guid that you are linking to"
        },
        "commission" : {
          "type" : "string",
          "description" : "percentage of profit desired over original offer price, > 0, ie 5 for 5%"
        },
        "description" : {
          "type" : "string",
          "description" : "description, 1 KB max. Defaults to original description. Leave as '' to use default."
        }
      },
      "example" : {
        "alias" : "alias",
        "guid" : "guid",
        "description" : "description",
        "commission" : "commission"
      }
    },
    "OfferNewRequest" : {
      "required" : [ "alias", "category", "currency", "description", "price", "quantity", "title" ],
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "An alias you own."
        },
        "category" : {
          "type" : "string",
          "description" : "category, 255 chars max."
        },
        "title" : {
          "type" : "string",
          "description" : "title, 255 chars max."
        },
        "quantity" : {
          "type" : "number",
          "description" : "quantity, > 0 or -1 for infinite"
        },
        "price" : {
          "type" : "number",
          "description" : "price in <currency>, > 0"
        },
        "description" : {
          "type" : "string",
          "description" : "description, 1 KB max."
        },
        "currency" : {
          "type" : "string",
          "description" : "The currency code that you want your offer to be in ie USD."
        },
        "certguid" : {
          "type" : "string",
          "description" : "Set this to the guid of a certificate you wish to sell"
        },
        "paymentoptions" : {
          "type" : "string",
          "description" : "'SYS' to accept SYS only, 'BTC' for BTC only, 'ZEC' for zcash only, or a |-delimited string to accept multiple currencies (e.g. 'BTC|SYS' to accept BTC or SYS). Leave empty for default. Defaults to 'SYS'."
        },
        "geolocation" : {
          "type" : "string",
          "description" : "set to your geolocation. Defaults to empty."
        },
        "safesearch" : {
          "type" : "string",
          "description" : "set to No if this offer should only show in the search when safe search is not selected. Defaults to Yes (offer shows with or without safe search selected in search lists)."
        },
        "private" : {
          "type" : "boolean",
          "description" : "set to 1 if this offer should be private not be searchable. Defaults to 0."
        }
      },
      "example" : {
        "private" : true,
        "quantity" : 0.80082819046101150206595775671303272247314453125,
        "price" : 6.02745618307040320615897144307382404804229736328125,
        "safesearch" : "safesearch",
        "certguid" : "certguid",
        "alias" : "alias",
        "description" : "description",
        "currency" : "currency",
        "category" : "category",
        "title" : "title",
        "paymentoptions" : "paymentoptions",
        "geolocation" : "geolocation"
      }
    },
    "OfferRemoveWhitelistRequest" : {
      "required" : [ "aliasguid", "offerguid" ],
      "properties" : {
        "offerguid" : {
          "type" : "string"
        },
        "aliasguid" : {
          "type" : "string"
        }
      },
      "example" : {
        "offerguid" : "offerguid",
        "aliasguid" : "aliasguid"
      }
    },
    "OfferUpdateRequest" : {
      "required" : [ "alias", "category", "guid", "price", "quantity", "title" ],
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "An alias you own."
        },
        "guid" : {
          "type" : "string",
          "description" : "GUID of offer to update."
        },
        "category" : {
          "type" : "string",
          "description" : "category, 255 chars max."
        },
        "title" : {
          "type" : "string",
          "description" : "title, 255 chars max."
        },
        "quantity" : {
          "type" : "number",
          "description" : "quantity, > 0 or -1 for infinite"
        },
        "price" : {
          "type" : "number",
          "description" : "price in <currency>, > 0"
        },
        "description" : {
          "type" : "string",
          "description" : "description, 1 KB max."
        },
        "currency" : {
          "type" : "string",
          "description" : "The currency code that you want your offer to be in ie USD."
        },
        "private" : {
          "type" : "boolean",
          "description" : "set to 1 if this offer should be private not be searchable. Defaults to 0."
        },
        "certguid" : {
          "type" : "string",
          "description" : "Set this to the guid of a certificate you wish to sell"
        },
        "geolocation" : {
          "type" : "string",
          "description" : "set to your geolocation. Defaults to empty."
        },
        "safesearch" : {
          "type" : "string",
          "description" : "set to No if this offer should only show in the search when safe search is not selected. Defaults to Yes (offer shows with or without safe search selected in search lists)."
        },
        "commission" : {
          "type" : "number",
          "description" : "For resold offers."
        },
        "paymentoptions" : {
          "type" : "string",
          "description" : "'SYS' to accept SYS only, 'BTC' for BTC only, 'ZEC' for zcash only, or a |-delimited string to accept multiple currencies (e.g. 'BTC|SYS' to accept BTC or SYS). Leave empty for default. Defaults to 'SYS'."
        }
      },
      "example" : {
        "private" : true,
        "quantity" : 0.80082819046101150206595775671303272247314453125,
        "safesearch" : "safesearch",
        "certguid" : "certguid",
        "description" : "description",
        "title" : "title",
        "paymentoptions" : "paymentoptions",
        "price" : 6.02745618307040320615897144307382404804229736328125,
        "alias" : "alias",
        "guid" : "guid",
        "currency" : "currency",
        "commission" : 1.46581298050294517310021547018550336360931396484375,
        "category" : "category",
        "geolocation" : "geolocation"
      }
    },
    "SendFromRequest" : {
      "required" : [ "amount", "fromaccount", "tosyscoinaddress" ],
      "properties" : {
        "fromaccount" : {
          "type" : "string",
          "description" : "The name of the account to send funds from. May be the default account using \"\"."
        },
        "tosyscoinaddress" : {
          "type" : "string",
          "description" : "The syscoin address to send funds to."
        },
        "amount" : {
          "type" : "number",
          "description" : "he amount in SYS (transaction fee is added on top)."
        },
        "minconf" : {
          "type" : "number",
          "description" : "Only use funds with at least this many confirmations."
        },
        "comment" : {
          "type" : "string",
          "description" : "A comment used to store what the transaction is for. This is not part of the transaction, just kept in your wallet."
        },
        "commentto" : {
          "type" : "string",
          "description" : "An optional comment to store the name of the person or organization to which you're sending the transaction. This is not part of the transaction, it is just kept in your wallet."
        }
      },
      "example" : {
        "fromaccount" : "fromaccount",
        "amount" : 0.80082819046101150206595775671303272247314453125,
        "minconf" : 6.02745618307040320615897144307382404804229736328125,
        "commentto" : "commentto",
        "comment" : "comment",
        "tosyscoinaddress" : "tosyscoinaddress"
      }
    },
    "SendManyRequest" : {
      "required" : [ "amounts", "fromaccount" ],
      "properties" : {
        "fromaccount" : {
          "type" : "string",
          "description" : "DEPRECATED. The account to send the funds from. Should be \"\" for the default account"
        },
        "amounts" : {
          "type" : "string",
          "description" : "A json object with addresses and amounts { \"address\":amount   (numeric) The syscoin address is the key, the numeric amount in SYS is the value,...}"
        },
        "minconf" : {
          "type" : "number",
          "description" : "Only use the balance confirmed at least this many times."
        },
        "comment" : {
          "type" : "string",
          "description" : "A comment used to store what the transaction is for. This is not part of the transaction, just kept in your wallet."
        },
        "subtractfeefromamount" : {
          "type" : "string",
          "description" : "A json array with addresses. The fee will be equally deducted from the amount of each selected address. Those recipients will receive less syscoins than you enter in their corresponding amount field. If no addresses are specified here, the sender pays the fee. [ \"address\" Subtract fee from this address,... ]"
        }
      },
      "example" : {
        "fromaccount" : "fromaccount",
        "amounts" : "amounts",
        "minconf" : 0.80082819046101150206595775671303272247314453125,
        "comment" : "comment",
        "subtractfeefromamount" : "subtractfeefromamount"
      }
    },
    "SendToAddressRequest" : {
      "required" : [ "amount", "syscoinaddress" ],
      "properties" : {
        "syscoinaddress" : {
          "type" : "string",
          "description" : "The syscoin address to send to."
        },
        "amount" : {
          "type" : "number",
          "description" : "The amount in SYS to send. eg 0.1"
        },
        "comment" : {
          "type" : "string",
          "description" : "A comment used to store what the transaction is for. This is not part of the transaction, just kept in your wallet."
        },
        "commentto" : {
          "type" : "string",
          "description" : "An optional comment to store the name of the person or organization to which you're sending the transaction. This is not part of the transaction, it is just kept in your wallet."
        },
        "subtractfeefromamount" : {
          "type" : "string",
          "description" : "The fee will be deducted from the amount being sent. The recipient will receive less syscoins than you enter in the amount field."
        }
      },
      "example" : {
        "amount" : 0.80082819046101150206595775671303272247314453125,
        "syscoinaddress" : "syscoinaddress",
        "commentto" : "commentto",
        "comment" : "comment",
        "subtractfeefromamount" : "subtractfeefromamount"
      }
    },
    "SignMessageRequest" : {
      "required" : [ "message", "syscoinaddress" ],
      "properties" : {
        "syscoinaddress" : {
          "type" : "string",
          "description" : "The syscoin address to use for the private key."
        },
        "message" : {
          "type" : "string",
          "description" : "The message to create a signature of."
        }
      },
      "example" : {
        "syscoinaddress" : "syscoinaddress",
        "message" : "message"
      }
    },
    "WalletPassphraseRequest" : {
      "required" : [ "passphrase", "timeout" ],
      "properties" : {
        "passphrase" : {
          "type" : "string",
          "description" : "The wallet passphrase"
        },
        "timeout" : {
          "type" : "number",
          "description" : "The time to keep the decryption key in seconds."
        }
      },
      "example" : {
        "passphrase" : "passphrase",
        "timeout" : 0.80082819046101150206595775671303272247314453125
      }
    },
    "WalletPassphraseChangeRequest" : {
      "required" : [ "newpassphrase", "oldpassphrase" ],
      "properties" : {
        "oldpassphrase" : {
          "type" : "string",
          "description" : "The current passphrase"
        },
        "newpassphrase" : {
          "type" : "string",
          "description" : "The new passphrase"
        }
      },
      "example" : {
        "oldpassphrase" : "oldpassphrase",
        "newpassphrase" : "newpassphrase"
      }
    },
    "MultiSignatureInfo" : {
      "required" : [ "redeemscript", "reqsigners", "reqsigs" ],
      "properties" : {
        "reqsigs" : {
          "type" : "number"
        },
        "reqsigners" : {
          "type" : "string"
        },
        "redeemscript" : {
          "type" : "string"
        }
      },
      "example" : {
        "reqsigners" : "reqsigners",
        "reqsigs" : 7.3862819483858839220147274318151175975799560546875,
        "redeemscript" : "redeemscript"
      }
    },
    "EscrowFeedbackRequest" : {
      "required" : [ "escrowguid", "feedbackprimary", "feedbacksecondary", "ratingprimary", "ratingsecondary", "userrole" ],
      "properties" : {
        "escrowguid" : {
          "type" : "string"
        },
        "userrole" : {
          "type" : "string"
        },
        "feedbackprimary" : {
          "type" : "string"
        },
        "ratingprimary" : {
          "type" : "number"
        },
        "feedbacksecondary" : {
          "type" : "string"
        },
        "ratingsecondary" : {
          "type" : "number"
        }
      },
      "example" : {
        "feedbacksecondary" : "feedbacksecondary",
        "ratingprimary" : 0.80082819046101150206595775671303272247314453125,
        "escrowguid" : "escrowguid",
        "ratingsecondary" : 6.02745618307040320615897144307382404804229736328125,
        "feedbackprimary" : "feedbackprimary",
        "userrole" : "userrole"
      }
    },
    "GenerateEscrowMultisigRequest" : {
      "required" : [ "arbiter", "buyer", "offerguid", "quantity" ],
      "properties" : {
        "buyer" : {
          "type" : "string"
        },
        "offerguid" : {
          "type" : "string"
        },
        "quantity" : {
          "type" : "number"
        },
        "arbiter" : {
          "type" : "string"
        },
        "paymentoption" : {
          "type" : "string"
        }
      },
      "example" : {
        "arbiter" : "arbiter",
        "quantity" : 0.80082819046101150206595775671303272247314453125,
        "offerguid" : "offerguid",
        "paymentoption" : "paymentoption",
        "buyer" : "buyer"
      }
    },
    "LoginResponse" : {
      "required" : [ "message", "success", "token" ],
      "properties" : {
        "success" : {
          "type" : "boolean"
        },
        "message" : {
          "type" : "string"
        },
        "token" : {
          "type" : "string"
        }
      },
      "example" : {
        "success" : true,
        "message" : "message",
        "token" : "token"
      }
    },
    "GetBlockResponse" : {
      "properties" : {
        "hash" : {
          "type" : "string",
          "description" : "The block hash (same as provided)"
        },
        "confirmations" : {
          "type" : "number",
          "description" : "The number of confirmations, or -1 if the block is not on the main chain"
        },
        "size" : {
          "type" : "number",
          "description" : "The block size"
        },
        "strippedsize" : {
          "type" : "number",
          "description" : "The block size excluding witness data"
        },
        "weight" : {
          "type" : "number",
          "description" : "The block weight (BIP 141)"
        },
        "height" : {
          "type" : "number",
          "description" : "The block height or index"
        },
        "version" : {
          "type" : "number",
          "description" : "The block version"
        },
        "versionHex" : {
          "type" : "string",
          "description" : "The block version formatted in hexadecimal"
        },
        "merkleroot" : {
          "type" : "string",
          "description" : "The merkle root"
        },
        "tx" : {
          "type" : "array",
          "description" : "The transaction ids",
          "items" : {
            "type" : "string"
          }
        },
        "time" : {
          "type" : "number",
          "description" : "The block time in seconds since epoch (Jan 1 1970 GMT)"
        },
        "mediantime" : {
          "type" : "number",
          "description" : "The median block time in seconds since epoch (Jan 1 1970 GMT)"
        },
        "nonce" : {
          "type" : "number",
          "description" : "?The nonce"
        },
        "bits" : {
          "type" : "string",
          "description" : "The bits"
        },
        "difficulty" : {
          "type" : "number",
          "description" : "?The difficulty"
        },
        "chainwork" : {
          "type" : "string",
          "description" : "?Expected number of hashes required to produce the chain up to this block (in hex)"
        },
        "previousblockhash" : {
          "type" : "string",
          "description" : "?The hash of the previous block"
        },
        "nextblockhash" : {
          "type" : "string",
          "description" : "The hash of the next block"
        },
        "data" : {
          "type" : "string",
          "description" : "(for verbose=false) A string that is serialized, hex-encoded data for block 'hash'."
        }
      },
      "example" : {
        "tx" : [ "tx", "tx" ],
        "mediantime" : 9.301444243932575517419536481611430644989013671875,
        "data" : "data",
        "previousblockhash" : "previousblockhash",
        "bits" : "bits",
        "weight" : 5.962133916683182377482808078639209270477294921875,
        "versionHex" : "versionHex",
        "confirmations" : 0.80082819046101150206595775671303272247314453125,
        "version" : 2.3021358869347654518833223846741020679473876953125,
        "nonce" : 3.61607674925191080461672754609026014804840087890625,
        "nextblockhash" : "nextblockhash",
        "difficulty" : 2.027123023002321833274663731572218239307403564453125,
        "chainwork" : "chainwork",
        "size" : 6.02745618307040320615897144307382404804229736328125,
        "merkleroot" : "merkleroot",
        "strippedsize" : 1.46581298050294517310021547018550336360931396484375,
        "time" : 7.061401241503109105224211816675961017608642578125,
        "hash" : "hash",
        "height" : 5.63737665663332876420099637471139430999755859375
      }
    },
    "GetBlockchainInfoResponse" : {
      "properties" : {
        "chain" : {
          "type" : "string",
          "description" : "Current network name as defined in BIP70 (main, test, regtest)"
        },
        "blocks" : {
          "type" : "number",
          "description" : "the current number of blocks processed in the server"
        },
        "headers" : {
          "type" : "number",
          "description" : "the current number of headers we have validated"
        },
        "bestblockhash" : {
          "type" : "string",
          "description" : "the hash of the currently best block"
        },
        "difficulty" : {
          "type" : "number",
          "description" : "the current difficulty"
        },
        "mediantime" : {
          "type" : "number",
          "description" : "median time for the current best block"
        },
        "verificationprogress" : {
          "type" : "number",
          "description" : "estimate of verification progress [0..1]"
        },
        "chainwork" : {
          "type" : "string",
          "description" : "total amount of work in active chain, in hexadecimal"
        },
        "pruned" : {
          "type" : "boolean",
          "description" : "if the blocks are subject to pruning"
        },
        "pruneheight" : {
          "type" : "number",
          "description" : "lowest-height complete block stored"
        },
        "softforks" : {
          "type" : "array",
          "description" : "status of softforks in progress",
          "items" : {
            "type" : "object",
            "properties" : { }
          }
        },
        "bip9_softforks" : {
          "type" : "object",
          "description" : "status of BIP9 softforks in progress",
          "properties" : { }
        }
      },
      "example" : {
        "difficulty" : 1.46581298050294517310021547018550336360931396484375,
        "headers" : 6.02745618307040320615897144307382404804229736328125,
        "bip9_softforks" : "{}",
        "chain" : "chain",
        "chainwork" : "chainwork",
        "mediantime" : 5.962133916683182377482808078639209270477294921875,
        "verificationprogress" : 5.63737665663332876420099637471139430999755859375,
        "blocks" : 0.80082819046101150206595775671303272247314453125,
        "pruned" : true,
        "softforks" : [ "{}", "{}" ],
        "pruneheight" : 2.3021358869347654518833223846741020679473876953125,
        "bestblockhash" : "bestblockhash"
      }
    },
    "EncryptWalletRequest" : {
      "required" : [ "passphrase" ],
      "properties" : {
        "passphrase" : {
          "type" : "string",
          "description" : "The pass phrase to encrypt the wallet with. It must be at least 1 character, but should be long."
        }
      },
      "example" : {
        "passphrase" : "passphrase"
      }
    },
    "NetworkInfo" : {
      "properties" : {
        "version" : {
          "type" : "number"
        },
        "subversion" : {
          "type" : "string"
        },
        "protocolversion" : {
          "type" : "number"
        },
        "localservices" : {
          "type" : "string"
        },
        "localrelay" : {
          "type" : "boolean"
        },
        "timeoffset" : {
          "type" : "number"
        },
        "connections" : {
          "type" : "number"
        },
        "networks" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/NetworkInfoDetails"
          }
        },
        "relayfee" : {
          "type" : "number"
        },
        "localaddresses" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "warnings" : {
          "type" : "string"
        }
      },
      "example" : {
        "localaddresses" : [ "localaddresses", "localaddresses" ],
        "protocolversion" : 6.02745618307040320615897144307382404804229736328125,
        "relayfee" : 5.63737665663332876420099637471139430999755859375,
        "subversion" : "subversion",
        "timeoffset" : 1.46581298050294517310021547018550336360931396484375,
        "warnings" : "warnings",
        "localrelay" : true,
        "networks" : [ {
          "proxy" : "proxy",
          "limited" : true,
          "proxy_randomize_credentials" : true,
          "name" : "name",
          "reachable" : true
        }, {
          "proxy" : "proxy",
          "limited" : true,
          "proxy_randomize_credentials" : true,
          "name" : "name",
          "reachable" : true
        } ],
        "version" : 0.80082819046101150206595775671303272247314453125,
        "connections" : 5.962133916683182377482808078639209270477294921875,
        "localservices" : "localservices"
      }
    },
    "NetworkInfoDetails" : {
      "properties" : {
        "name" : {
          "type" : "string"
        },
        "limited" : {
          "type" : "boolean"
        },
        "reachable" : {
          "type" : "boolean"
        },
        "proxy" : {
          "type" : "string"
        },
        "proxy_randomize_credentials" : {
          "type" : "boolean"
        }
      },
      "example" : {
        "proxy" : "proxy",
        "limited" : true,
        "proxy_randomize_credentials" : true,
        "name" : "name",
        "reachable" : true
      }
    },
    "ListReceivedByAddress" : {
      "properties" : {
        "address" : {
          "type" : "string"
        },
        "v2address" : {
          "type" : "string"
        },
        "account" : {
          "type" : "string"
        },
        "amount" : {
          "type" : "number"
        },
        "confirmations" : {
          "type" : "number"
        },
        "label" : {
          "type" : "string"
        },
        "txids" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "ismine" : {
          "type" : "boolean"
        }
      },
      "example" : {
        "amount" : 0.80082819046101150206595775671303272247314453125,
        "address" : "address",
        "v2address" : "v2address",
        "ismine" : true,
        "label" : "label",
        "confirmations" : 6.02745618307040320615897144307382404804229736328125,
        "account" : "account",
        "txids" : [ "txids", "txids" ]
      }
    },
    "SyscoinAddressEntry" : {
      "properties" : {
        "address" : {
          "type" : "string"
        },
        "balance" : {
          "type" : "number"
        },
        "label" : {
          "type" : "string"
        },
        "alias" : {
          "type" : "string"
        }
      },
      "example" : {
        "address" : "address",
        "balance" : 0.80082819046101150206595775671303272247314453125,
        "alias" : "alias",
        "label" : "label"
      }
    }
  }
}