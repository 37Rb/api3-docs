---
title: Proposals
---

# {{$frontmatter.title}}

<TocHeader />
<TOC class="table-of-contents" :include-level="[2,3]" />

## Requirements
To create a proposal, you must hold at least 0.1% of the total pool shares. This required percentage is set in the Pool contract can be adjusted by the DAO.

## Proposal Creation
Proposals can be created from the "Governance" tab of the DAO portal. Connect an account with sufficient voting power and click "New Proposal." Then fill out the form. Note the tooltips and the formatting in this example:

<p align="center">
  <img src="../../figures/new-proposal.png" width="700" />
</p>

Proposals can be submitted to either the *Primary* or *Secondary* voting app. These two apps have access to separate treasuries, have different voting settings, and have different permissions to change contract settings. 

In general, the Primary voting app has a larger treasury and more permissions but has more stringent voting settings. For a technical breakdown of the different permissions granted to the DAO's two voting apps (and corresponding Agents) see this [README](https://github.com/api3dao/api3-dao/blob/develop/packages/dao/README.md#permissions).

### Proposal Types
The following parameters can be updated via DAO proposal, by proposing to call functions in the [pool contract](../README.md):

|Parameter Name |Initial Value (units) |Function Signature |Description |
|--- |--- |--- |--- |
|stakeTarget |50 * 10^16 (%*10^16) |`setStakeTarget(uint256 _stakeTarget)`|Percentage of all tokens targeted to be staked |
|aprUpdateStep |1 * 10^16 (%*10^16) |`setAprUpdateStep(uint256 _aprUpdateStep)` |Percentage reward APR will be increased or decreased by |
|maxApr |75 * 10^16 (%*10^16) |`setMaxApr(uint256 _maxApr)` |Maximum reward APR |
|minApr |2.5 * 10^16 (%*10^16) |`setMinApr(uint256 _minApr)` |Minimum reward APR |
|proposalVotingPowerThreshold |1 * 10^17 (%*10^16) |`setProposalVotingPowerThreshold(uint256 _proposalVotingPowerThreshold)` |Percentage of all shares that must be held to create a new proposal |
|unstakeWaitPeriod |604800 (seconds) |`setUnstakeWaitPeriod(uint256 _unstakeWaitPeriod)` |Length of time a member must wait after scheduling unstake before unstaking tokens from the pool |

## Proposal Execution
If a proposal is [ready for execution](../contract-architecture/voting.md#key-functions), the execute button will appear on its details page:

<p align="center">
  <img src="../../figures/executable-proposal.png" width="700" />
</p>

## Using ENS Names

You can use the [ENS app](https://app.ens.domains/) to register a name and associate it with an Ethereum account. Then, while entering your proposal parameters, you can use this ENS name instead of the account address. Before making the transaction that will create the proposal, the DAO dashboard will look up the address that the ENS name is pointing to, and use the raw address in the proposal. Therefore, changing the address that the ENS name is pointing to after this look up operation **WILL NOT** have an affect on the proposal.

If you also want the voters to see the ENS name instead of the raw address to make your proposal more readable, you will have to use the [ENS app](https://app.ens.domains/) to set a reverse record pointing to your ENS name (i.e., you need to have your raw address point to the ENS name). For example, if you are making a proposal to make a `transfer(address,amount)` call to an ERC20 token contract where `address` will be the address of a multisig wallet, you can [set a reverse record with the multisig](https://medium.com/the-ethereum-name-service/you-can-now-manage-ens-names-with-gnosis-safe-9ddcb7e6c4ac) to your ENS name for it to appear on the proposal details page. See Parameters in [this proposal](https://api3.eth.link/#/history/secondary-6) for an example.