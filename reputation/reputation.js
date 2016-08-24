﻿var proofofburnContract = web3.eth.contract([{ "constant": false, "inputs": [{ "name": "vendor", "type": "address" }], "name": "trade", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "username", "type": "string" }, { "name": "location", "type": "string" }], "name": "addUser", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [], "name": "burnCoins", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "vendor", "type": "address" }, { "name": "isPositive", "type": "bool" }, { "name": "message", "type": "string" }], "name": "giveReputation", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "user", "type": "address" }], "name": "showBurnedCoins", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "burner", "type": "address" }, { "name": "value", "type": "uint256" }], "name": "burnedBitcoin", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "user", "type": "address" }], "name": "viewReputation", "outputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": true, "name": "amountBurned", "type": "uint256" }], "name": "_coinsBurned", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": true, "name": "message", "type": "string" }], "name": "_positiveReputation", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": true, "name": "message", "type": "string" }], "name": "_negativeReputation", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "username", "type": "string" }, { "indexed": true, "name": "location", "type": "string" }, { "indexed": true, "name": "user", "type": "address" }], "name": "_addUser", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "vendor", "type": "address" }, { "indexed": true, "name": "buyer", "type": "address" }], "name": "_newTrade", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": true, "name": "positive", "type": "uint256" }, { "indexed": true, "name": "negative", "type": "uint256" }, { "indexed": false, "name": "total", "type": "uint256" }], "name": "_viewedReputation", "type": "event" }]);
var proofofburn = proofofburnContract.new(
   {
       from: web3.eth.accounts[0],
       data: '60606040526000600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b6112f38061006b6000396000f36060604052361561007f576000357c010000000000000000000000000000000000000000000000000000000090048063056ba0561461009d578063079eaf34146100b55780630ca8fe1e146101be578063a3e20625146101e1578063d0b91ca714610249578063f0666fba14610275578063fc70b462146102aa5761007f565b61009b5b66038d7ea4c680003414151561009857610002565b5b565b005b6100b360048080359060200190919050506102e4565b005b6101506004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091905050610571565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156101b05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101cb60048050506108aa565b6040518082815260200191505060405180910390f35b6102476004808035906020019091908035906020019091908035906020019082018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509090919050506109d8565b005b61025f600480803590602001909190505061107e565b6040518082815260200191505060405180910390f35b61029460048080359060200190919080359060200190919050506110c2565b6040518082815260200191505060405180910390f35b6102c0600480803590602001909190505061114a565b60405180848152602001838152602001828152602001935050505060405180910390f35b655af3107a4000341415156102fc5761000256610355565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166000605f3404604051809050600060405180830381858888f19350505050505b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561056d57600160005060008273ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600601600050805480600101828181548183558181151161040c5781836000526020600020918201910161040b91906103ed565b8082111561040757600081815060009055506001016103ed565b5090565b5b5050509190906000526020600020900160005b33909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555050600160005060008273ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060070160005080548060010182818154818355818115116104db57601f016020900481601f016020900483600052602060002091820191016104da91906104bc565b808211156104d657600081815060009055506001016104bc565b5090565b5b505050919090600052602060002090602091828204019190065b6000909190916101000a81548160ff02191690830217905550503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f1c014052f647112a1968122f1bfc7cc52374ca9916ac684e30d730c4abc51dc860405180905060405180910390a35b5b50565b60206040519081016040528060008152602001506000600160005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600001600050819055506000600160005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600101600050819055506000600160005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506002016000508190555082600160005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506003016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106106b557805160ff19168380011785556106e6565b828001600101855582156106e6579182015b828111156106e55782518260005055916020019190600101906106c7565b5b50905061071191906106f3565b8082111561070d57600081815060009055506001016106f3565b5090565b505081600160005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506004016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061079257805160ff19168380011785556107c3565b828001600101855582156107c3579182015b828111156107c25782518260005055916020019190600101906107a4565b5b5090506107ee91906107d0565b808211156107ea57600081815060009055506001016107d0565b5090565b50503373ffffffffffffffffffffffffffffffffffffffff1682604051808280519060200190808383829060006004602084601f0104600302600f01f150905001915050604051809103902084604051808280519060200190808383829060006004602084601f0104600302600f01f15090500191505060405180910390207f494d4c7084a5431e7e6f7987edbc6837bcb3d78c0fc1a1a03f0ea8b76b2a953660405180905060405180910390a48290506108a4565b92915050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600034604051809050600060405180830381858888f19350505050156109cf5734600160005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600801600082828250540192505081905550343373ffffffffffffffffffffffffffffffffffffffff167f7e9ca5b09d3ef30516d2520994e97739bd78cc00e068ab90a6c83204fef0cc8360405180905060405180910390a3600160005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506008016000505490506109d5566109d4565b610002565b5b90565b6000655af3107a4000341415156109f25761000256610a4b565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166000605f3404604051809050600060405180830381858888f19350505050505b600090505b600160005060008573ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060060160005080549050811015611077573373ffffffffffffffffffffffffffffffffffffffff16600160005060008673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060060160005082815481101561000257906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16148015610b99575060001515600160005060008673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506007016000508281548110156100025790600052602060002090602091828204019190065b9054906101000a900460ff161515145b15611069578215610e0857600160005060008573ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600001600081815054809291906001019190505550600160005060008573ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506005016000508054806001018281815481835581811511610cc957818360005260206000209182019101610cc89190610c4b565b80821115610cc4576000818150805460018160011615610100020316600290046000825580601f10610c7d5750610cba565b601f016020900490600052602060002090810190610cb99190610c9b565b80821115610cb55760008181506000905550600101610c9b565b5090565b5b5050600101610c4b565b5090565b5b5050509190906000526020600020900160005b8490919091509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610d2b57805160ff1916838001178555610d5c565b82800160010185558215610d5c579182015b82811115610d5b578251826000505591602001919060010190610d3d565b5b509050610d879190610d69565b80821115610d835760008181506000905550600101610d69565b5090565b50505081604051808280519060200190808383829060006004602084601f0104600302600f01f15090500191505060405180910390208473ffffffffffffffffffffffffffffffffffffffff167f8afab78cf4b7e0239a2fdb37a40d8f54241812d2fa706c80b72456bf7d03d38c60405180905060405180910390a3611068565b600160005060008573ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600101600081815054809291906001019190505550600160005060008573ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506005016000508054806001018281815481835581811511610f2d57818360005260206000209182019101610f2c9190610eaf565b80821115610f28576000818150805460018160011615610100020316600290046000825580601f10610ee15750610f1e565b601f016020900490600052602060002090810190610f1d9190610eff565b80821115610f195760008181506000905550600101610eff565b5090565b5b5050600101610eaf565b5090565b5b5050509190906000526020600020900160005b8490919091509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610f8f57805160ff1916838001178555610fc0565b82800160010185558215610fc0579182015b82811115610fbf578251826000505591602001919060010190610fa1565b5b509050610feb9190610fcd565b80821115610fe75760008181506000905550600101610fcd565b5090565b50505081604051808280519060200190808383829060006004602084601f0104600302600f01f15090500191505060405180910390208473ffffffffffffffffffffffffffffffffffffffff167f133c41bd52aad670c4f5cd9080b09c962b0911046d0a80cd5dcafb72bd07b41d60405180905060405180910390a35b5b5b8080600101915050610a50565b5b50505050565b6000600160005060008373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506008016000505490506110bd565b919050565b60007341f274c0023f83391de4e0733c609df5a124c3d43373ffffffffffffffffffffffffffffffffffffffff161415156110fc57610002565b81600160005060008573ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060090160008282825054019250508190559050611144565b92915050565b600060006000600160005060008573ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060010160005054600160005060008673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600001600050548573ffffffffffffffffffffffffffffffffffffffff167f0a732fe1d84c39d715796cdad3b0822606c7327996adaf82bd562ab95eeda59e600160005060008973ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600201600050546040518082815260200191505060405180910390a4600160005060008573ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160005054600160005060008673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060010160005054600160005060008773ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600201600050549250925092506112ec565b919390925056',
       gas: 4700000
   }, function (e, contract) {
       console.log(e, contract);
       if (typeof contract.address !== 'undefined') {
           console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
       }
   })

//0xa6d8efbccbc94bdf232e3710e23e68ab4ccc3d2c
var reputation = web3.eth.contract([{ "constant": false, "inputs": [{ "name": "vendor", "type": "address" }], "name": "trade", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "username", "type": "string" }, { "name": "location", "type": "string" }], "name": "addUser", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [], "name": "burnCoins", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "vendor", "type": "address" }, { "name": "isPositive", "type": "bool" }, { "name": "message", "type": "string" }], "name": "giveReputation", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "user", "type": "address" }], "name": "showBurnedCoins", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "burner", "type": "address" }, { "name": "value", "type": "uint256" }], "name": "burnedBitcoin", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "user", "type": "address" }], "name": "viewReputation", "outputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": true, "name": "amountBurned", "type": "uint256" }], "name": "_coinsBurned", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": true, "name": "message", "type": "string" }], "name": "_positiveReputation", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": true, "name": "message", "type": "string" }], "name": "_negativeReputation", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "username", "type": "string" }, { "indexed": true, "name": "location", "type": "string" }, { "indexed": true, "name": "user", "type": "address" }], "name": "_addUser", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "vendor", "type": "address" }, { "indexed": true, "name": "buyer", "type": "address" }], "name": "_newTrade", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": true, "name": "positive", "type": "uint256" }, { "indexed": true, "name": "negative", "type": "uint256" }, { "indexed": false, "name": "total", "type": "uint256" }], "name": "_viewedReputation", "type": "event" }]).at("0xa6d8efbccbc94bdf232e3710e23e68ab4ccc3d2c");


reputation._positiveReputation().watch(function (error, result) {
    console.log(JSON.stringify(result.args));
});

reputation._negativeReputation().watch(function (error, result) {
    console.log(JSON.stringify(result.args));
});

reputation._addUser().watch(function (error, result) {
    console.log(JSON.stringify(result.args));
});

reputation._newTrade().watch(function (error, result) {
    console.log(JSON.stringify(result.args));
});

reputation._viewedReputation().watch(function (error, result) {
    console.log(JSON.stringify(result.args));
});

reputation.addUser.sendTransaction("James", "Sydney", { from: eth.accounts[0], gas: 100000 });

reputation.trade.sendTransaction(eth.accounts[1], { from: eth.accounts[0], gas: 100000 });

reputation.giveReputation.sendTransaction(eth.accounts[1], true, "good trader", { from: eth.accounts[0], gas:100000 });

reputation.viewReputation.sendTransaction(eth.accounts[0], { from: eth.accounts[0] });
