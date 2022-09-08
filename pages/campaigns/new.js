import { useState } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../components/layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

export default function CampaignNew() {
  const [minimumContribution, setMinimumContribution] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(minimumContribution).send({
        from: accounts[0],
      });
      Router.pushRoute("/");
    } catch (err) {
      setErrorMessage(err.message);
    }
    setLoading(false);
  }

  return (
    <Layout>
      <h1>Create a Campaign</h1>
      <Form error={!!errorMessage} onSubmit={onSubmit}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            label="wei"
            labelPosition="right"
            value={minimumContribution}
            onChange={(event) => setMinimumContribution(event.target.value)}
          />
        </Form.Field>
        <Message error header="Oops!" content={errorMessage} />
        <Button primary loading={loading}>
          Create!
        </Button>
      </Form>
    </Layout>
  );
}
