/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ClaimUtils } from "../ClaimUtils";

export class ClaimUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(api3TokenAddress: string, overrides?: Overrides): Promise<ClaimUtils> {
    return super.deploy(
      api3TokenAddress,
      overrides || {}
    ) as Promise<ClaimUtils>;
  }
  getDeployTransaction(
    api3TokenAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(api3TokenAddress, overrides || {});
  }
  attach(address: string): ClaimUtils {
    return super.attach(address) as ClaimUtils;
  }
  connect(signer: Signer): ClaimUtils__factory {
    return super.connect(signer) as ClaimUtils__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClaimUtils {
    return new Contract(address, _abi, signerOrProvider) as ClaimUtils;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "api3TokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "balanceOfAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claimPayoutReferenceBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claimPayouts",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claimReleaseReferenceBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claimReleases",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "locks",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "makeClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "payoutAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimReferenceBlock",
        type: "uint256",
      },
    ],
    name: "payOutClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimReferenceBlock",
        type: "uint256",
      },
    ],
    name: "releaseClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardAmounts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardEpochLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardPaidForEpoch",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardReleases",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardVestingPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "scheduleUnstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeTarget",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalShares",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
    ],
    name: "updateAndGetBalanceOfAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateCoeff",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "targetBlock",
        type: "uint256",
      },
    ],
    name: "updateUserState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "unstaked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "locked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastStateUpdateTargetBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeScheduledAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052622503f660809081525062093a8060a090815250622625a0600a5563047868c0600b556a084595161401484a000000600c55620f4240600d55600a5460115534801561004f57600080fd5b50604051612fa5380380612fa58339818101604052602081101561007257600080fd5b8101908080519060200190929190505050808080600260405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600360405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505060805160a051612de76101be60003980610ae15280611238528061127c52806112ec52806116b452806127b6525080611d5052806122975280612a235250612de76000f3fe608060405234801561001057600080fd5b50600436106101d95760003560e01c80634f322ae811610104578063ca093047116100a2578063eebb198011610071578063eebb1980146107aa578063f3fef3a3146107f3578063f45346dc14610841578063f4dadc61146108af576101d9565b8063ca093047146106a6578063de5ba6dc146106e8578063decac4f51461072a578063ee677b3614610748576101d9565b8063784b3c5d116100de578063784b3c5d146105c857806392093b36146105e6578063a694fc3a14610604578063a87430ba14610632576101d9565b80634f322ae814610526578063587809381461054457806362bc785514610586576101d9565b8063168a5a931161017c5780632eebce2c1161014b5780632eebce2c1461042857806339a288bd1461047657806341cb8c20146104bf5780634eb05c4714610508576101d9565b8063168a5a931461038457806320a0a0e9146103bc5780632dd5090c146103da5780632def66201461041e576101d9565b8063106d08df116101b8578063106d08df146102a75780631077f06c146102d557806313f2dad01461030357806314e288871461034c576101d9565b806201e862146101de57806305be8a8c146102405780631066441314610289575b600080fd5b61022a600480360360408110156101f457600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108f8565b6040518082815260200191505060405180910390f35b61026c6004803603602081101561025657600080fd5b810190808035906020019092919050505061099c565b604051808381526020018281526020019250505060405180910390f35b6102916109cd565b6040518082815260200191505060405180910390f35b6102d3600480360360208110156102bd57600080fd5b81019080803590602001909291905050506109d3565b005b610301600480360360208110156102eb57600080fd5b8101908080359060200190929190505050610ec0565b005b61032f6004803603602081101561031957600080fd5b8101908080359060200190929190505050610f19565b604051808381526020018281526020019250505060405180910390f35b6103826004803603604081101561036257600080fd5b810190808035906020019092919080359060200190929190505050610f4a565b005b6103ba6004803603604081101561039a57600080fd5b810190808035906020019092919080359060200190929190505050610fcd565b005b6103c4611236565b6040518082815260200191505060405180910390f35b610406600480360360208110156103f057600080fd5b810190808035906020019092919050505061125a565b60405180821515815260200191505060405180910390f35b61042661127a565b005b6104746004803603604081101561043e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506116ae565b005b6104a26004803603602081101561048c57600080fd5b8101908080359060200190929190505050611ec3565b604051808381526020018281526020019250505060405180910390f35b6104eb600480360360208110156104d557600080fd5b8101908080359060200190929190505050611ef4565b604051808381526020018281526020019250505060405180910390f35b610510611f25565b6040518082815260200191505060405180910390f35b61052e611f2b565b6040518082815260200191505060405180910390f35b6105706004803603602081101561055a57600080fd5b8101908080359060200190929190505050611f31565b6040518082815260200191505060405180910390f35b6105b26004803603602081101561059c57600080fd5b8101908080359060200190929190505050611f52565b6040518082815260200191505060405180910390f35b6105d0611f6a565b6040518082815260200191505060405180910390f35b6105ee611f70565b6040518082815260200191505060405180910390f35b6106306004803603602081101561061a57600080fd5b8101908080359060200190929190505050611f76565b005b6106746004803603602081101561064857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612226565b604051808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b6106d2600480360360208110156106bc57600080fd5b810190808035906020019092919050505061225c565b6040518082815260200191505060405180910390f35b610714600480360360208110156106fe57600080fd5b8101908080359060200190929190505050612274565b6040518082815260200191505060405180910390f35b610732612295565b6040518082815260200191505060405180910390f35b6107946004803603604081101561075e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506122b9565b6040518082815260200191505060405180910390f35b6107d6600480360360208110156107c057600080fd5b8101908080359060200190929190505050612318565b604051808381526020018281526020019250505060405180910390f35b61083f6004803603604081101561080957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050612349565b005b6108ad6004803603606081101561085757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612507565b005b6108db600480360360208110156108c557600080fd5b8101908080359060200190929190505050612650565b604051808381526020018281526020019250505060405180910390f35b600082600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030154101561094957600080fd5b610994600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010184612681565b905092915050565b600481815481106109a957fe5b90600052602060002090600202016000915090508060000154908060010154905082565b600d5481565b6109dd33436116ae565b60006003600160038054905003815481106109f457fe5b90600052602060002090600202016001015490506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805490500381548110610a9e57fe5b90600052602060002090600202016001015490506000600260016002805490500381548110610ac957fe5b906000526020600020906002020160010154905060007f00000000000000000000000000000000000000000000000000000000000000004281610b0857fe5b0490506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600601600083815260200190815260200160002060009054906101000a900460ff16158015610b8f57506000600f60008481526020019081526020016000205414155b15610e0a576000610bf4600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016010600086815260200190815260200160002054612681565b90506000610c1660026010600087815260200190815260200160002054612681565b90508082600f6000878152602001908152602001600020540281610c3657fe5b04925060008784870281610c4657fe5b04905086811115610c55578690505b80870396508086039550600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101604051806040016040528043815260200189815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600260405180604001604052804381526020018881525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505083600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002016000828254039250508190555060018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600601600087815260200190815260200160002060006101000a81548160ff0219169083151502179055505050505b60008386860281610e1757fe5b049050818101871115610e2957600080fd5b42600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004018190555086600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005018190555050505050505050565b600660405180604001604052804381526020018381525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505050565b60028181548110610f2657fe5b90600052602060002090600202016000915090508060000154908060010154905082565b600860405180604001604052804381526020018481525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060098190806001815401808255809150506001900390600052602060002001600090919091909150555050565b60046040518060400160405280438152602001848152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550506005819080600181540180825580915050600190039060005260206000200160009091909190915055600060036001600380549050038154811061106357fe5b9060005260206000209060020201600101549050600060026001600280549050038154811061108e57fe5b9060005260206000209060020201600101549050600082828602816110af57fe5b049050600360405180604001604052804381526020018786038152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550506002604051806040016040528043815260200183850381525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33876040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156111f357600080fd5b505af1158015611207573d6000803e3d6000fd5b505050506040513d602081101561121d57600080fd5b8101908080519060200190929190505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600e6020528060005260406000206000915054906101000a900460ff1681565b7f0000000000000000000000000000000000000000000000000000000000000000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401540142118015611353575060027f000000000000000000000000000000000000000000000000000000000000000002600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401540142105b61135c57600080fd5b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005015490506113ad33436116ae565b60006002600160028054905003815481106113c457fe5b906000526020600020906002020160010154905060006003600160038054905003815481106113ef57fe5b90600052602060002090600202016001015490506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010180549050038154811061149957fe5b9060005260206000209060020201600101549050600082858502816114ba57fe5b049050818111156114d75781905083838202816114d357fe5b0494505b84600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282540192505081905550600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016040518060400160405280438152602001838503815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600260405180604001604052804381526020018387038152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401819055506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600501819055505050505050565b600e60007f000000000000000000000000000000000000000000000000000000000000000042816116db57fe5b04815260200190815260200160002060009054906101000a900460ff16611705576117046127aa565b5b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160018060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010180549050038154811061179b57fe5b90600052602060002090600202016001015490506000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015490506000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301549050600081141561184b57600190505b6000600460008154811061185b57fe5b906000526020600020906002020160000154600183031061188c576001611886600460018503612b3b565b0161188f565b60005b90505b600480549050811080156118c3575084600482815481106118af57fe5b906000526020600020906002020160000154105b15611a71576000600482815481106118d757fe5b906000526020600020906002020160000154905060006118f8600383612681565b90506000611907600284612681565b9050600082826004878154811061191a57fe5b906000526020600020906002020160010154028161193457fe5b04905060006005868154811061194657fe5b906000526020600020015490506000611960600283612681565b905060006119af600160008f73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010184612681565b9050600082828602816119be57fe5b049050808c039b50600160008f73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160405180604001604052808a81526020018e81525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505050505050505050508080600101915050611892565b5060006006600081548110611a8257fe5b9060005260206000209060020201600001546001830310611ab3576001611aad600660018503612b3b565b01611ab6565b60005b90505b60068054905081108015611aea57508460068281548110611ad657fe5b906000526020600020906002020160000154105b15611b9857600060068281548110611afe57fe5b906000526020600020906002020190506000611b1f60028360000154612681565b90506000611b72600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018460000154612681565b9050818184600101540281611b8357fe5b04860195505050508080600101915050611ab9565b5060006008600081548110611ba957fe5b9060005260206000209060020201600001546001830310611bda576001611bd4600860018503612b3b565b01611bdd565b60005b90505b60088054905081108015611c1157508460088281548110611bfd57fe5b906000526020600020906002020160000154105b15611cce57600060098281548110611c2557fe5b906000526020600020015490506000611c3f600283612681565b90506000611c8e600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010184612681565b9050818160088681548110611c9f57fe5b9060005260206000209060020201600101540281611cb957fe5b04860395505050508080600101915050611be0565b5060006007600081548110611cdf57fe5b9060005260206000209060020201600001546001830310611d10576001611d0a600760018503612b3b565b01611d13565b60005b90505b60078054905081108015611d4757508460078281548110611d3357fe5b906000526020600020906002020160000154105b15611e2d5760007f000000000000000000000000000000000000000000000000000000000000000060078381548110611d7c57fe5b9060005260206000209060020201600001540390506000611d9e600283612681565b90506000611ded600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010184612681565b9050818160078681548110611dfe57fe5b9060005260206000209060020201600101540281611e1857fe5b04860395505050508080600101915050611d16565b5081600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555083600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301819055505050505050565b60078181548110611ed057fe5b90600052602060002090600202016000915090508060000154908060010154905082565b60038181548110611f0157fe5b90600052602060002090600202016000915090508060000154908060010154905082565b600c5481565b60115481565b60098181548110611f3e57fe5b906000526020600020016000915090505481565b60106020528060005260406000206000915090505481565b600a5481565b600b5481565b611f8033436116ae565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541015611fcf57600080fd5b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282540392505081905550600060026001600280549050038154811061203657fe5b9060005260206000209060020201600101549050600060036001600380549050038154811061206157fe5b90600052602060002090600202016001015490506000818484028161208257fe5b0490506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010180549050038154811061211b57fe5b9060005260206000209060020201600101549050600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016040518060400160405280438152602001848401815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600260405180604001604052804381526020018487018152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550505050505050565b60016020528060005260406000206000915090508060000154908060020154908060030154908060040154908060050154905085565b600f6020528060005260406000206000915090505481565b6005818154811061228157fe5b906000526020600020016000915090505481565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006122c583836116ae565b612310600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010183612681565b905092915050565b6008818154811061232557fe5b90600052602060002090600202016000915090508060000154908060010154905082565b61235333436116ae565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001540310156123e657600080fd5b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254039250508190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156124c757600080fd5b505af11580156124db573d6000803e3d6000fd5b505050506040513d60208110156124f157600080fd5b8101908080519060200190929190505050505050565b81600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254019250508190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8430856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561260657600080fd5b505af115801561261a573d6000803e3d6000fd5b505050506040513d602081101561263057600080fd5b81019080805190602001909291905050505061264b82612be6565b505050565b6006818154811061265d57fe5b90600052602060002090600202016000915090508060000154908060010154905082565b6000808380549050141561269857600090506127a4565b826001848054905003815481106126ab57fe5b90600052602060002090600202016000015482106126ef57826001848054905003815481106126d657fe5b90600052602060002090600202016001015490506127a4565b826000815481106126fc57fe5b90600052602060002090600202016000015482101561271e57600090506127a4565b600080600185805490500390505b8181111561278157600060026001848401018161274557fe5b0490508486828154811061275557fe5b906000526020600020906002020160000154116127745780925061277b565b6001810391505b5061272c565b84828154811061278d57fe5b906000526020600020906002020160010154925050505b92915050565b6127b2612c7f565b60007f000000000000000000000000000000000000000000000000000000000000000042816127dd57fe5b04905060006003600160038054905003815481106127f757fe5b906000526020600020906002020160010154905060006305f5e100603460115484028161282057fe5b048161282857fe5b0490506001600e600085815260200190815260200160002060006101000a81548160ff02191690831515021790555043601060008581526020019081526020016000208190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bbb30c5d306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156128f657600080fd5b505afa15801561290a573d6000803e3d6000fd5b505050506040513d602081101561292057600080fd5b810190808051906020019092919050505061293d57505050612b39565b600081141561294e57505050612b39565b80600f600085815260200190815260200160002081905550600360405180604001604052804381526020018385018152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550506006604051806040016040528043815260200183815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600760405180604001604052807f0000000000000000000000000000000000000000000000000000000000000000430181526020018381525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1930836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b158015612b1d57600080fd5b505af1158015612b31573d6000803e3d6000fd5b505050505050505b565b600082600184805490500381548110612b5057fe5b9060005260206000209060020201600001548210612b775760018380549050039050612be0565b600080600185805490500390505b81811115612bda576000600260018484010181612b9e57fe5b04905084868281548110612bae57fe5b90600052602060002090600202016000015411612bcd57809250612bd4565b6001810391505b50612b85565b81925050505b92915050565b612c7c81604051602401808281526020019150506040516020818303038152906040527ff5b1bba9000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612d88565b50565b6000600c541415612c9857600a54601181905550612d86565b6000600360016003805490500381548110612caf57fe5b90600052602060002090600202016001015490506000600c548210612cd857600c548203612cde565b81600c54035b90506000600c546305f5e100830281612cf357fe5b0490506000620f4240600d54830281612d0857fe5b049050600c548410612d31576305f5e100816305f5e100036011540281612d2b57fe5b04612d4a565b6305f5e100816305f5e100016011540281612d4857fe5b045b601181905550600a546011541015612d6a57600a54601181905550612d81565b600b546011541115612d8057600b546011819055505b5b505050505b565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa505050505056fea264697066735822122050a2c801af7109522c1759265885a916c8e98222cd0ab398c2851712e371c50764736f6c634300060c0033";