import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Image, Button, Card, Badge } from "react-bootstrap";
import "../styles/profile.scss";
import Blockies from "react-blockies";
import { makeShortAddress } from "../utils/utils";
import twitterImg from "../assets/images/twitter.svg";
import githubImg from "../assets/images/github.svg";
import ethereumImg from "../assets/images/Ethereum-ETH-icon.png";

type props = {
  address: string;
  action: string;
};

const ProfileCard = ({ address, action }: props) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [twitter, setTwitter] = useState("");
  const [github, setGithub] = useState("");
  const [description, setDescription] = useState("");
  const [shortAddress, setShortAddress] = useState("");
  const [actionText, setActionText] = useState("");

  const delegate = async () => {
    console.log("Delegate");
  };

  const edit = async () => {
    window.open(`https://app.ens.domains/address/${address}`, "_blank");
  };

  // @ts-ignore
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    async function getProvider() {
      const provider = ethers.getDefaultProvider();
      const ens = await provider.lookupAddress(address);
      setShortAddress(makeShortAddress(address));
      if (ens) {
        const resolver = await provider.getResolver(ens);
        let twitterEns = await resolver.getText("com.twitter");
        const avatarEns = await resolver.getText("avatar");
        let descriptionEns = await resolver.getText("keywords");
        let githubEns = await resolver.getText("com.github");

        if (!twitterEns) {
          twitterEns = await resolver.getText("vnd.twitter");
        }

        if (!githubEns) {
          githubEns = await resolver.getText("vnd.github");
        }

        if (!descriptionEns) {
          descriptionEns = await resolver.getText("description");
        }

        // if .com empty check for vnd
        // if empty all don't show
        // if tags empty show description
        setTwitter(twitterEns);
        setAvatar(avatarEns);
        setName(ens);
        setDescription(descriptionEns);
        setGithub(githubEns);
      } else {
        setName(makeShortAddress(address));
      }

      //  Set actions
      if (action === "delegate") {
        setActionText("Delegate");
      } else {
        setActionText("Edit in ENS");
      }
    }

    await getProvider();
  }, [address, action]);

  return (
    <Card>
      <div className="diamond" />
      <Card.Body>
        {avatar ? (
          <Image src={avatar} roundedCircle className="avatar" />
        ) : (
          <Blockies
            className="blockie"
            seed={address}
            size={10}
            scale={10}
            color="#ffffff"
            bgColor="#e440f2"
            spotColor="#7940f2"
          />
        )}
        <Card.Title className="pb-2">{name}</Card.Title>
        <div>
          {description && (
            <>
              <Card.Text>{description}</Card.Text>
              <h5>Accounts</h5>
            </>
          )}
          {shortAddress && (
            <Badge pill variant="highlight">
              <img src={ethereumImg} className="ethereum" alt="ethereum logo" />
              <a href={`https://etherscan.io/address/${address}`} target="_blank" rel="noreferrer">
                {shortAddress}
              </a>
            </Badge>
          )}
          {twitter && (
            <Badge pill variant="highlight">
              <img src={twitterImg} className="twitter" alt="twitter logo" />
              <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noreferrer">
                {twitter}
              </a>
            </Badge>
          )}
          {github && (
            <Badge pill variant="highlight">
              <img src={githubImg} className="github" alt="github logo" />
              <a href={`https://github.com/${github}`} target="_blank" rel="noreferrer">
                {github}
              </a>
            </Badge>
          )}
        </div>{" "}
        <div>
          <h5>Voting</h5>

          {shortAddress && (
            <Badge pill variant="highlight">
              <img src={ethereumImg} className="ethereum" alt="ethereum logo" />
              <a href={`https://etherscan.io/address/${address}`} target="_blank" rel="noreferrer">
                200 Power
              </a>
            </Badge>
          )}
          {twitter && (
            <Badge pill variant="highlight">
              <img src={twitterImg} className="twitter" alt="twitter logo" />
              <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noreferrer">
                {twitter}
              </a>
            </Badge>
          )}
          {github && (
            <Badge pill variant="highlight">
              <img src={githubImg} className="github" alt="github logo" />
              <a href={`https://github.com/${github}`} target="_blank" rel="noreferrer">
                {github}
              </a>
            </Badge>
          )}
        </div>
        <h5 className="mt-2">Delegator Contract</h5>
        <Badge variant="highlight">
          <img src={ethereumImg} className="ethereum" alt="ethereum logo" />
          <a href={`https://etherscan.io/address/${address}`} target="_blank" rel="noreferrer">
            {shortAddress}
          </a>
        </Badge>
        <br />
        <Button
          variant="pink"
          className="mt-3 mb-4 w-100"
          onClick={async () => {
            if (action === "delegate") {
              await delegate();
            } else {
              await edit();
            }
          }}
        >
          {actionText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
