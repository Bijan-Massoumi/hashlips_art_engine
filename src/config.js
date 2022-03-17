const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically

// dependsOn
// skip-mapper
const layerConfigurations = [
  {
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: "1-Background" },
      { name: "2-Skin" },
      {
        name: "3-Hand_Claw",
      },
      {
        name: "3-Hand_Claw_Frozen",
        dependsOn: { idx: "2" },
      },
      {
        name: "4-Mouth",
        dependsOn: { idx: "1" },
      },
      {
        name: "5-Feet_Claw",
        dependsOn: {
          idx: "2",
          matchOnIdx: "2",
          specialOverride: { frozen: "1" },
        },
      },
      {
        name: "6-Eyewear_Special",
      },
      {
        name: "7-Eye",
      },
      { name: "8-Eyewear", skipMap: { 6: ["superheromask"] } },
      { name: "9-Headwear" },
      {
        name: "10-Outfit",
        altOverride: {
          idx: 3,
          name: ["alien", "cuckoo", "meat", "morecash", "poo", "shocked"],
          match: ["nwaJacket", "snowcamoflage", "wintersportsjacket"],
        },
      },
      { name: "11-Footwear", dependsOn: { idx: 10 } },
    ],
  },
];

//mapping from parent filename => child bucket
// if depends on, refer to mapping for which subfolder to search through

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
