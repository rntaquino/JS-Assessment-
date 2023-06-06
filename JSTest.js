/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_Axie, _Class, _Purity, _Back, _Horn, _Tail, _Mouth, _Ear, _Eye) {
    const NFT = {
        "Axie": _Axie,
        "Class": _Class,
        "Purity": _Purity,
        "Back": _Back,
        "Horn": _Horn,
        "Tail": _Tail,
        "Mouth": _Mouth,
        "Ear": _Ear,
        "Eye": _Eye

    }
    NFTs.push(NFT);
    console.log("Minted: " + _Axie);
}   

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
 for (let i = 0; i < NFTs.length; i++) {
    console.log("\nID: \t\t" + (i + 1))
    console.log("\Axie: \t\t" + NFTs[i].Axie);
    console.log("\Class: \t\t" + NFTs[i].Class);
    console.log("\Purity: \t" + NFTs[i].Purity);
    console.log("\Back: \t\t" + NFTs[i].Back);
    console.log("\Horn: \t\t" + NFTs[i].Horn);
    console.log("\Tail: \t\t" + NFTs[i].Tail);
    console.log("\Mouth: \t\t" + NFTs[i].Mouth);
    console.log("\Ear: \t\t" + NFTs[i].Ear);
    console.log("\Eye: \t\t" + NFTs[i].Eye);
 }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
 console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("Mystic", "Aquatic", "6", "Blue Moon", "Clamshell", "Nimo", "Gill", "Tiny Fan", "Telescope");
mintNFT("Legendary", "Plant", "3", "Anemone", "Babylonia", "Navaga", "Inkling", "Sea Slug", "Clear");
mintNFT("Rare", "Bug", "4", "Hermit", "Clamshell", "Oranda", "Bubblemaker", "Gill", "Gero");
mintNFT("Normal", "Dawn", "2", "Gold Fish", "Shoal Star", "Ranchu", "Risky Fish", "Inkling", "Gero");
mintNFT("Normal", "Dusk", "6", "Perch", "Teal Shell", "Shrimp", "Lam", "Nimo", "Clear");
listNFTs();
getTotalSupply();
