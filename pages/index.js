import { useEffect } from "react";
import factory from "../ethereum/factory";

//uses server side rendering to call the campaign contracts (so good for slow devices)
CampaignIndex.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  return { campaigns };
};

export default function CampaignIndex({ campaigns }) {
  console.log("campaigns", campaigns);

  return <h1>{campaigns[0]}</h1>;
}
