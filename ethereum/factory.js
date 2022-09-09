import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xdD27eD4c128CC502F18D9961F340e1D75bC11823"
);

export default instance;
