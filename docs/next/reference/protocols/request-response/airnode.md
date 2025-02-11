---
title: Airnode
---

# {{$frontmatter.title}}

<TocHeader />
<TOC class="table-of-contents" :include-level="[2,3]" />

Use Airnode to serve one or more APIs to smart contracts (requesters). Each Airnode has only one private key, which they use across all chains.

## `airnodeId`

<Fix>The following paragraph needs review and should be expanded.</Fix>
Airnodes are identified by their `airnodeId`, which is the default BIP 44 wallet derived from the seed of the respective Airnode (with the path m/44'/60'/0'/0/0). An Airnode will have the same `airnodeId` across all chains.

- To derive `airnodeId` in Solidity:
    <FixInline>Check this code.</FixInline>
    ```solidity
    airnodeId = keccak256(abi.encode(masterWalletAddress));
    ```

- To derive `airnodeId ` in JS (using ethers.js):
    <FixInline>Check this code.</FixInline>
    ```js
    airnodeId = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(['address'], [masterWalletAddress]));
    ```

For both of the above examples the `masterWalletAddress` is the address of the wallet derived from the private key of the owner with the path `m`. (For deriving wallets from a private key using a path, see [HD wallets](https://github.com/ethereumbook/ethereumbook/blob/develop/05wallets.asciidoc#hd_wallets).) To derive the master wallet address from the mnemonic in JS (using ethers.js):

```js
masterHdNode = ethers.utils.HDNode.fromMnemonic(mnemonic);
masterWalletAddress = masterHdNode.address;
```

## Creating an Airnode record

<Fix><p><ul>
<li> This section needs a dev to review. Is setAirnodeParameters() to be replaced with this quote from JIRA AN-90?</li>

<li> With the removal of setAirnodeParameters(), we removed the pre-assignment/announcement of authorizers, and now require the Airnode to provide the authorizer addresses while making the checkAuthorizationStatuses() call.</li>

<li>Below airnodeAdmin is commented out. Does the entire paragraph get deleted?</li>
</ul></p></Fix>

Before being able to serve on a chain, an Airnode record must be created. To do this, the new Airnode owner's master wallet has to be used to call `setAirnodeParameters()` of `AirnodeParameterStore.sol`, where the contract assigns the corresponding `airnodeId` as follows:

```solidity
function setAirnodeParameters(
    address admin,
    string calldata xpub,
    address[] calldata authorizers
    )
    external
    payable
    override
    returns (bytes32 airnodeId)
    {
        airnodeId = keccak256(abi.encode(msg.sender));
        ...
```

Note that since `msg.sender` is used to derive the `airnodeId`, no one but the Airnode owner can claim their `airnodeId` on any chain.

The Airnode parameters record creation is done automatically by Airnode. The Airnode owner only needs to fund their master wallet for it to be able to afford this transaction, and the master wallet will send the remaining funds to ~`airnodeAdmin`~ along with this transaction. The Airnode deployment displays instructions for how to do this, and the `masterWalletAddress` is included in the receipt that the deployer outputs for future reference.

## `xpub`

The Airnode owner announces their extended public key (`xpub`) as stored in `AirnodeParameterStore.sol` for sponsors to be able to derive their sponsor wallets. The `xpub` that the owner has announced is not verified on-chain. However, the sponsor can verify it off-chain. For example, in JS (using ethers.js):

```js
hdNode = ethers.utils.HDNode.fromExtendedKey(xpub);
masterNode = hdNode.derivePath('m');
airnodeIdDerivedFromXpub = keccak256(abi.encode(masterNode.address));
assert(airnodeIdDerivedFromXpub === airnodeId);
```

See the [section about sponsor wallets](sponsor-wallet.md) to see how sponsors can use `xpub` to derive their sponsor wallets.

## Setting endpoint authorizers
<Fix>airnodeAdmin is no longer used. What (if anything) replaces it here?</Fix>
An important responsibility of the ~~`airnodeAdmin`~~ is to set endpoint authorizers. Authorizers are used to enforce rules about which requests will be responded to, and this can be used to enforce KYC, monthly subscription payments, etc. See the sections about [endpoints](endpoint.md) and [authorizers](authorizer.md) for more details.
