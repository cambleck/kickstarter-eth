import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x253C1Ff850FeE0fd6ED219ACB74281819dD32cD0"
);

export default instance;
