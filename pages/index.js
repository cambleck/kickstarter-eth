import { useEffect } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";
//uses server side rendering to call the campaign contracts (so good for slow devices)
CampaignIndex.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  return { campaigns };
};

export default function CampaignIndex({ campaigns }) {
  function renderCampaigns() {
    const items = campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link to={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  return (
    <Layout>
      <div>
        <h3>Open Campaigns</h3>

        <Link route="/campaigns/new">
          <a>
            <Button
              floated="right"
              content="Create Campaign"
              icon="add circle"
              primary
            />
          </a>
        </Link>
        {renderCampaigns()}
      </div>
    </Layout>
  );
}
