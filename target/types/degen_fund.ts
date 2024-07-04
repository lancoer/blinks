/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/degen_fund.json`.
 */
export type DegenFund = {
  "address": "dev6AMdRCezC37X2RgdVnBUhka1zeKnHinBvwhPW4bg",
  "metadata": {
    "name": "degenFund",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "devLockerClaim",
      "discriminator": [
        104,
        96,
        17,
        236,
        74,
        182,
        185,
        96
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "baseMint",
          "writable": true
        },
        {
          "name": "devLocker",
          "docs": [
            "Initialize dev locker."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  118,
                  95,
                  108,
                  111,
                  99,
                  107,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "devLockerVault",
          "writable": true
        },
        {
          "name": "userBaseAta",
          "writable": true
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "emergencyWithdraw",
      "discriminator": [
        239,
        45,
        203,
        64,
        150,
        73,
        218,
        92
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true,
          "address": "dev6AMdRCezC37X2RgdVnBUhka1zeKnHinBvwhPW4bg"
        },
        {
          "name": "baseMint",
          "writable": true
        },
        {
          "name": "quoteMint",
          "writable": true
        },
        {
          "name": "pool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              }
            ]
          }
        },
        {
          "name": "baseVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "pool"
              },
              {
                "kind": "account",
                "path": "baseMint"
              }
            ]
          }
        },
        {
          "name": "quoteVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "pool"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "emergencyWallet",
          "writable": true,
          "address": "dev6AMdRCezC37X2RgdVnBUhka1zeKnHinBvwhPW4bg"
        },
        {
          "name": "emergencyBaseAta",
          "writable": true
        },
        {
          "name": "emergencyQuoteAta",
          "writable": true
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "legacyTokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "feeCollectorClaim",
      "discriminator": [
        157,
        112,
        142,
        26,
        83,
        223,
        126,
        2
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Address to be set as protocol owner."
          ],
          "writable": true,
          "signer": true,
          "address": "dev6AMdRCezC37X2RgdVnBUhka1zeKnHinBvwhPW4bg"
        },
        {
          "name": "feeCollector",
          "docs": [
            "fee collector state account."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  99,
                  111,
                  108,
                  108,
                  101,
                  99,
                  116,
                  111,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "treasury",
          "writable": true
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "feeVault",
          "writable": true
        },
        {
          "name": "treasuryVault",
          "writable": true
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": []
    },
    {
      "name": "initializeDevLocker",
      "discriminator": [
        97,
        30,
        134,
        254,
        185,
        180,
        26,
        179
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "baseMint",
          "writable": true
        },
        {
          "name": "devLocker",
          "docs": [
            "Initialize dev locker."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  118,
                  95,
                  108,
                  111,
                  99,
                  107,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "lockDuration",
          "type": "i64"
        }
      ]
    },
    {
      "name": "initializeFeeCollector",
      "discriminator": [
        197,
        234,
        132,
        77,
        108,
        38,
        60,
        215
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Address to be set as protocol owner."
          ],
          "writable": true,
          "signer": true,
          "address": "dev6AMdRCezC37X2RgdVnBUhka1zeKnHinBvwhPW4bg"
        },
        {
          "name": "feeCollector",
          "docs": [
            "Initialize fee collector account."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  99,
                  111,
                  108,
                  108,
                  101,
                  99,
                  116,
                  111,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "initializeFeeCollectorParams"
            }
          }
        }
      ]
    },
    {
      "name": "initializeGlobal",
      "discriminator": [
        47,
        225,
        15,
        112,
        86,
        51,
        190,
        231
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Address to be set as protocol owner."
          ],
          "writable": true,
          "signer": true,
          "address": "dev6AMdRCezC37X2RgdVnBUhka1zeKnHinBvwhPW4bg"
        },
        {
          "name": "global",
          "docs": [
            "Initialize global account."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "initializeGlobalParams"
            }
          }
        }
      ]
    },
    {
      "name": "initializeQuoteConfig",
      "discriminator": [
        227,
        24,
        140,
        1,
        44,
        184,
        223,
        12
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Address to be set as protocol owner."
          ],
          "writable": true,
          "signer": true,
          "address": "dev6AMdRCezC37X2RgdVnBUhka1zeKnHinBvwhPW4bg"
        },
        {
          "name": "quoteMint",
          "docs": [
            "Quote mint for the quote config state."
          ]
        },
        {
          "name": "quoteConfig",
          "docs": [
            "Initialize quote config state account."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  113,
                  117,
                  111,
                  116,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeCollector",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  99,
                  111,
                  108,
                  108,
                  101,
                  99,
                  116,
                  111,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "feeVault",
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "initializeQuoteConfigParams"
            }
          }
        }
      ]
    },
    {
      "name": "initializeSpl22Pool",
      "discriminator": [
        116,
        45,
        224,
        80,
        242,
        181,
        161,
        70
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "pool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              }
            ]
          }
        },
        {
          "name": "baseMint",
          "writable": true,
          "signer": true
        },
        {
          "name": "quoteMint",
          "writable": true
        },
        {
          "name": "quoteConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  113,
                  117,
                  111,
                  116,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "devLocker",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  118,
                  95,
                  108,
                  111,
                  99,
                  107,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "payer"
              }
            ]
          }
        },
        {
          "name": "baseVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "pool"
              },
              {
                "kind": "account",
                "path": "baseMint"
              }
            ]
          }
        },
        {
          "name": "quoteVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "pool"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "legacyTokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenProgram",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "tokenParams",
          "type": {
            "defined": {
              "name": "taxTokenParams"
            }
          }
        },
        {
          "name": "poolParams",
          "type": {
            "defined": {
              "name": "taxPoolParams"
            }
          }
        }
      ]
    },
    {
      "name": "initializeSplPool",
      "discriminator": [
        220,
        77,
        162,
        14,
        209,
        171,
        12,
        200
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "pool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              }
            ]
          }
        },
        {
          "name": "baseMint",
          "writable": true,
          "signer": true
        },
        {
          "name": "quoteMint",
          "docs": [
            "TODO: Constraint quote mitn"
          ],
          "writable": true
        },
        {
          "name": "metadata",
          "writable": true
        },
        {
          "name": "quoteConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  113,
                  117,
                  111,
                  116,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "devLocker",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  118,
                  95,
                  108,
                  111,
                  99,
                  107,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "payer"
              }
            ]
          }
        },
        {
          "name": "baseVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "pool"
              },
              {
                "kind": "account",
                "path": "baseMint"
              }
            ]
          }
        },
        {
          "name": "quoteVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "pool"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "tokenMetadataProgram",
          "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "tokenParams",
          "type": {
            "defined": {
              "name": "tokenParams"
            }
          }
        },
        {
          "name": "poolParams",
          "type": {
            "defined": {
              "name": "poolParams"
            }
          }
        }
      ]
    },
    {
      "name": "initializeUserAta",
      "discriminator": [
        165,
        55,
        215,
        245,
        73,
        43,
        157,
        105
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "baseMint",
          "writable": true
        },
        {
          "name": "quoteMint",
          "writable": true
        },
        {
          "name": "userBaseAta",
          "writable": true
        },
        {
          "name": "userQuoteAta",
          "writable": true
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "legacyTokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": []
    },
    {
      "name": "swapQuoteInput",
      "discriminator": [
        172,
        104,
        84,
        51,
        64,
        145,
        171,
        216
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "antibotServer",
          "writable": true,
          "signer": true,
          "optional": true
        },
        {
          "name": "baseMint",
          "writable": true
        },
        {
          "name": "quoteMint",
          "writable": true
        },
        {
          "name": "userBaseAta",
          "writable": true
        },
        {
          "name": "userQuoteAta",
          "writable": true
        },
        {
          "name": "quoteConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  113,
                  117,
                  111,
                  116,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "pool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              }
            ]
          }
        },
        {
          "name": "baseVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "pool"
              },
              {
                "kind": "account",
                "path": "baseMint"
              }
            ]
          }
        },
        {
          "name": "quoteVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "pool"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeCollector",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  99,
                  111,
                  108,
                  108,
                  101,
                  99,
                  116,
                  111,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "feeVault",
          "writable": true
        },
        {
          "name": "devLocker",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  118,
                  95,
                  108,
                  111,
                  99,
                  107,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "devLockerVault",
          "writable": true,
          "optional": true
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "legacyTokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "minimumAmountOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "swapQuoteOutput",
      "discriminator": [
        255,
        93,
        1,
        197,
        35,
        140,
        94,
        193
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "global",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "baseMint",
          "writable": true
        },
        {
          "name": "quoteMint",
          "writable": true
        },
        {
          "name": "userBaseAta",
          "writable": true
        },
        {
          "name": "userQuoteAta",
          "writable": true
        },
        {
          "name": "quoteConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  113,
                  117,
                  111,
                  116,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "pool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              }
            ]
          }
        },
        {
          "name": "baseVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "pool"
              },
              {
                "kind": "account",
                "path": "baseMint"
              }
            ]
          }
        },
        {
          "name": "quoteVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "pool"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeCollector",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  99,
                  111,
                  108,
                  108,
                  101,
                  99,
                  116,
                  111,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "feeVault",
          "writable": true
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "legacyTokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "amountOut",
          "type": "u64"
        },
        {
          "name": "maximumAmountIn",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateFeeCollector",
      "discriminator": [
        132,
        54,
        153,
        82,
        79,
        118,
        79,
        212
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Address to be set as protocol owner."
          ],
          "writable": true,
          "signer": true,
          "address": "dev6AMdRCezC37X2RgdVnBUhka1zeKnHinBvwhPW4bg"
        },
        {
          "name": "feeCollector",
          "docs": [
            "fee collector state account."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  99,
                  111,
                  108,
                  108,
                  101,
                  99,
                  116,
                  111,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "updateFeeCollectorParams"
            }
          }
        }
      ]
    },
    {
      "name": "updateGlobal",
      "discriminator": [
        90,
        152,
        240,
        21,
        199,
        38,
        72,
        20
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Address to be set as protocol owner."
          ],
          "writable": true,
          "signer": true,
          "address": "dev6AMdRCezC37X2RgdVnBUhka1zeKnHinBvwhPW4bg"
        },
        {
          "name": "global",
          "docs": [
            "quote config state account."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "updateGlobalParams"
            }
          }
        }
      ]
    },
    {
      "name": "updatePool",
      "discriminator": [
        239,
        214,
        170,
        78,
        36,
        35,
        30,
        34
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "baseMint",
          "writable": true
        },
        {
          "name": "pool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              }
            ]
          }
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "updatePoolParams",
          "type": {
            "defined": {
              "name": "updatePoolStateParams"
            }
          }
        }
      ]
    },
    {
      "name": "updateQuoteConfig",
      "discriminator": [
        170,
        228,
        75,
        96,
        193,
        45,
        47,
        97
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Address to be set as protocol owner."
          ],
          "writable": true,
          "signer": true,
          "address": "dev6AMdRCezC37X2RgdVnBUhka1zeKnHinBvwhPW4bg"
        },
        {
          "name": "quoteMint",
          "docs": [
            "Quote mint for the quote_config state."
          ]
        },
        {
          "name": "quoteConfig",
          "docs": [
            "Update quote_config state account."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  113,
                  117,
                  111,
                  116,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "updateQuoteConfigParams"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "devLocker",
      "discriminator": [
        210,
        115,
        175,
        60,
        73,
        54,
        78,
        75
      ]
    },
    {
      "name": "feeCollector",
      "discriminator": [
        250,
        213,
        73,
        200,
        175,
        76,
        225,
        213
      ]
    },
    {
      "name": "global",
      "discriminator": [
        167,
        232,
        232,
        177,
        200,
        108,
        114,
        127
      ]
    },
    {
      "name": "pool",
      "discriminator": [
        241,
        154,
        109,
        4,
        17,
        177,
        109,
        188
      ]
    },
    {
      "name": "quoteConfig",
      "discriminator": [
        212,
        148,
        253,
        35,
        84,
        28,
        182,
        112
      ]
    }
  ],
  "events": [
    {
      "name": "devLockerClaimed",
      "discriminator": [
        198,
        90,
        203,
        214,
        241,
        121,
        239,
        197
      ]
    },
    {
      "name": "emergencyWithdrawEvent",
      "discriminator": [
        177,
        61,
        254,
        20,
        145,
        18,
        188,
        237
      ]
    },
    {
      "name": "poolCreated",
      "discriminator": [
        202,
        44,
        41,
        88,
        104,
        220,
        157,
        82
      ]
    },
    {
      "name": "poolFilled",
      "discriminator": [
        121,
        57,
        245,
        132,
        77,
        76,
        171,
        179
      ]
    },
    {
      "name": "poolStateUpdated",
      "discriminator": [
        231,
        22,
        226,
        177,
        26,
        215,
        227,
        97
      ]
    },
    {
      "name": "swapEvent",
      "discriminator": [
        64,
        198,
        205,
        232,
        38,
        8,
        113,
        226
      ]
    },
    {
      "name": "updateQuoteConfig",
      "discriminator": [
        161,
        17,
        117,
        81,
        143,
        84,
        4,
        53
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidTokenName",
      "msg": "Invalid token name"
    },
    {
      "code": 6001,
      "name": "invalidTokenSymbol",
      "msg": "Invalid token symbol"
    },
    {
      "code": 6002,
      "name": "invalidTokenUri",
      "msg": "Invalid token uri"
    },
    {
      "code": 6003,
      "name": "nameTooLong",
      "msg": "Name too long"
    },
    {
      "code": 6004,
      "name": "symbolTooLong",
      "msg": "Symbol too long"
    },
    {
      "code": 6005,
      "name": "uriTooLong",
      "msg": "Uri too long"
    },
    {
      "code": 6006,
      "name": "invalidQuoteDelta",
      "msg": "invalidQuoteDelta"
    },
    {
      "code": 6007,
      "name": "invalidTransferTax",
      "msg": "invalidTransferTax"
    },
    {
      "code": 6008,
      "name": "invalidDumpTax",
      "msg": "invalidDumpTax"
    },
    {
      "code": 6009,
      "name": "unAuthorised",
      "msg": "unauthorised"
    },
    {
      "code": 6010,
      "name": "inSufficientFund",
      "msg": "Insufficient fund"
    },
    {
      "code": 6011,
      "name": "unknownToken",
      "msg": "One token should be Sol"
    },
    {
      "code": 6012,
      "name": "tokenNotSellable",
      "msg": "Token not sellable"
    },
    {
      "code": 6013,
      "name": "tradingNotStarted",
      "msg": "Trading not started"
    },
    {
      "code": 6014,
      "name": "tradingEnded",
      "msg": "Trading ended"
    },
    {
      "code": 6015,
      "name": "tradingNotEnded",
      "msg": "Trading not ended"
    },
    {
      "code": 6016,
      "name": "maxBuyWalletExceeded",
      "msg": "Max buy wallet exceeded"
    },
    {
      "code": 6017,
      "name": "slippageError",
      "msg": "Slippage not met"
    },
    {
      "code": 6018,
      "name": "overflow",
      "msg": "overflow"
    },
    {
      "code": 6019,
      "name": "tradingPaused",
      "msg": "tradingPaused"
    },
    {
      "code": 6020,
      "name": "poolAlreadyInitialized",
      "msg": "poolAlreadyInitialized"
    },
    {
      "code": 6021,
      "name": "antibotError",
      "msg": "antibotError"
    },
    {
      "code": 6022,
      "name": "devLockerLocked",
      "msg": "Not yet unlocked"
    },
    {
      "code": 6023,
      "name": "alreadyClaimed",
      "msg": "Already claimed"
    }
  ],
  "types": [
    {
      "name": "devLocker",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "docs": [
              "Address of the mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "dev",
            "docs": [
              "Dev address"
            ],
            "type": "pubkey"
          },
          {
            "name": "unlockTimestamp",
            "docs": [
              "Unlock timestamp"
            ],
            "type": "i64"
          },
          {
            "name": "isClaimed",
            "docs": [
              "lock status"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "devLockerClaimed",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "user",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "emergencyWithdrawEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "feeCollector",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "treasury",
            "docs": [
              "Address of the treasury"
            ],
            "type": "pubkey"
          },
          {
            "name": "vault",
            "docs": [
              "Address of the vault"
            ],
            "type": "pubkey"
          },
          {
            "name": "revShareBps",
            "docs": [
              "Revenue share basis points"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "global",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "antibotServer",
            "docs": [
              "Address of the antibot server"
            ],
            "type": "pubkey"
          },
          {
            "name": "tradingPaused",
            "docs": [
              "Trade pause status"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "initializeFeeCollectorParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "treasury",
            "type": "pubkey"
          },
          {
            "name": "vault",
            "type": "pubkey"
          },
          {
            "name": "revShareBps",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "initializeGlobalParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "antibotServer",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "initializeQuoteConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seeder",
            "type": "pubkey"
          },
          {
            "name": "tradingFeeBps",
            "type": "u16"
          },
          {
            "name": "seedingFeeBps",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "pool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "docs": [
              "Creator of the pool"
            ],
            "type": "pubkey"
          },
          {
            "name": "baseMint",
            "docs": [
              "Base token"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "Quote token"
            ],
            "type": "pubkey"
          },
          {
            "name": "baseProgram",
            "docs": [
              "Base token program"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteProgram",
            "docs": [
              "Quote token program"
            ],
            "type": "pubkey"
          },
          {
            "name": "baseReserve",
            "docs": [
              "base and quote reserves"
            ],
            "type": "u64"
          },
          {
            "name": "quoteReserve",
            "type": "u64"
          },
          {
            "name": "baseDelta",
            "type": "u64"
          },
          {
            "name": "quoteDelta",
            "type": "u64"
          },
          {
            "name": "transferTax",
            "docs": [
              "transfer tax"
            ],
            "type": "u16"
          },
          {
            "name": "buyTaxBps",
            "docs": [
              "buy tax"
            ],
            "type": "u16"
          },
          {
            "name": "sellTaxBps",
            "docs": [
              "sell tax"
            ],
            "type": "u16"
          },
          {
            "name": "isUnsellable",
            "docs": [
              "If token is unsellable"
            ],
            "type": "bool"
          },
          {
            "name": "maxBuyWallet",
            "docs": [
              "max buy per wallet"
            ],
            "type": "u64"
          },
          {
            "name": "startTime",
            "docs": [
              "The timestamp allowed for swap in the pool."
            ],
            "type": "i64"
          },
          {
            "name": "isFilled",
            "docs": [
              "Filled status"
            ],
            "type": "bool"
          },
          {
            "name": "isPaused",
            "docs": [
              "Filled status"
            ],
            "type": "bool"
          },
          {
            "name": "isSeeded",
            "docs": [
              "Filled status"
            ],
            "type": "bool"
          },
          {
            "name": "isDevLocked",
            "docs": [
              "Dev locker"
            ],
            "type": "bool"
          },
          {
            "name": "antibotEnabled",
            "docs": [
              "Antibot"
            ],
            "type": "bool"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "padding",
            "docs": [
              "padding for future updates"
            ],
            "type": {
              "array": [
                "u64",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "poolCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "tokenName",
            "type": "string"
          },
          {
            "name": "tokenSymbol",
            "type": "string"
          },
          {
            "name": "tokenUri",
            "type": "string"
          },
          {
            "name": "transferTax",
            "type": "i16"
          },
          {
            "name": "quoteDelta",
            "type": "u64"
          },
          {
            "name": "maxBuyWallet",
            "type": "u64"
          },
          {
            "name": "startTime",
            "type": "i64"
          },
          {
            "name": "antibotEnabled",
            "type": "bool"
          },
          {
            "name": "isDevLocked",
            "type": "bool"
          },
          {
            "name": "unlockTimestamp",
            "type": "i64"
          },
          {
            "name": "buyTaxBps",
            "type": "u16"
          },
          {
            "name": "sellTaxBps",
            "type": "u16"
          },
          {
            "name": "isUnsellable",
            "type": "bool"
          },
          {
            "name": "createdAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "poolFilled",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "poolParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "quoteDelta",
            "type": "u64"
          },
          {
            "name": "maxBuyWallet",
            "type": "u64"
          },
          {
            "name": "startTime",
            "type": "i64"
          },
          {
            "name": "antibotEnabled",
            "type": "bool"
          },
          {
            "name": "sellTaxBps",
            "type": "u16"
          },
          {
            "name": "isUnsellable",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "poolStateUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "antibotEnabled",
            "type": "bool"
          },
          {
            "name": "maxBuyWallet",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "quoteConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "quoteMint",
            "docs": [
              "Global state for quote"
            ],
            "type": "pubkey"
          },
          {
            "name": "seeder",
            "docs": [
              "Address of the seeder"
            ],
            "type": "pubkey"
          },
          {
            "name": "tradingFeeBps",
            "docs": [
              "Trading fee in basis points"
            ],
            "type": "u16"
          },
          {
            "name": "seedingFeeBps",
            "docs": [
              "Seeding fee in basis points"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "swapEvent",
      "docs": [
        "Emitted when swap"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "pool",
            "type": "pubkey"
          },
          {
            "name": "amountIn",
            "type": "u64"
          },
          {
            "name": "amountOut",
            "type": "u64"
          },
          {
            "name": "newBaseReserve",
            "type": "u64"
          },
          {
            "name": "newQuoteReserve",
            "type": "u64"
          },
          {
            "name": "quoteInput",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "taxPoolParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "quoteDelta",
            "type": "u64"
          },
          {
            "name": "maxBuyWallet",
            "type": "u64"
          },
          {
            "name": "startTime",
            "type": "i64"
          },
          {
            "name": "antibotEnabled",
            "type": "bool"
          },
          {
            "name": "sellTaxBps",
            "type": "u16"
          },
          {
            "name": "isUnsellable",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "taxTokenParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "uri",
            "type": "string"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "transferTax",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "tokenParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "uri",
            "type": "string"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "updateFeeCollectorParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "treasury",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "vault",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "revShareBps",
            "type": {
              "option": "u16"
            }
          }
        ]
      }
    },
    {
      "name": "updateGlobalParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "antibotServer",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "tradingPaused",
            "type": {
              "option": "bool"
            }
          }
        ]
      }
    },
    {
      "name": "updatePoolStateParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "antibotEnabled",
            "type": {
              "option": "bool"
            }
          },
          {
            "name": "maxBuyWallet",
            "type": {
              "option": "u64"
            }
          }
        ]
      }
    },
    {
      "name": "updateQuoteConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seeder",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "tradingFeeBps",
            "type": {
              "option": "u16"
            }
          },
          {
            "name": "seedingFeeBps",
            "type": {
              "option": "u16"
            }
          }
        ]
      }
    },
    {
      "name": "updateQuoteConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seeder",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "tradingFeeBps",
            "type": {
              "option": "u16"
            }
          },
          {
            "name": "seedingFeeBps",
            "type": {
              "option": "u16"
            }
          }
        ]
      }
    }
  ]
};
