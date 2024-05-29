// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Create a variable to hold your NFTs
let nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(carname, carcolor, model , price) {
    const nft = {
        carname: carname,
        carcolor: carcolor,
        model : model,
        price: price
    };
    nfts.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log("CarName: " + nfts[i].carname);
        console.log("carcolor: " + nfts[i].carcolor);
        console.log("model: " + nfts[i].model);
        console.log("price: " + nfts[i].price);
        console.log("---------------------------");
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// Call your functions below this line
mintNFT("Lamborghini", "megna grey" , "Huracan", "4.61 Crore");
mintNFT("Porsche", "black", "Panamera", "1.68 Crore");
mintNFT("Range Rover", "white", "Sports", "1.12 Crore");
mintNFT("i20", "grey", "sportzdt", "8 lakhs");

listNFTs();
console.log("Total Supply: " + getTotalSupply());
