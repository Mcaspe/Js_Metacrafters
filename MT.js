let nfts = [];

function mintNFT(name, eyeColor, shirtType) {
    let nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType
    };
    nfts.push(nft);
}

function listNFTs() {
    nfts.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log("Name: " + nft.name);
        console.log("Eye Color: " + nft.eyeColor);
        console.log("Shirt Type: " + nft.shirtType);
        console.log("--------------------");
    });
}

function getTotalSupply() {
    return nfts.length;
}

mintNFT("Epic NFT 1", "Blue", "T-shirt");
mintNFT("Awesome NFT 2", "Green", "Hoodie");

listNFTs();

console.log("Total number of NFTs: " + getTotalSupply());
