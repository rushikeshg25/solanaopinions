import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { ContractOptions } from "../target/types/contract_options";

describe("contract-options", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.ContractOptions as Program<ContractOptions>;

  it("Initializes the contract", async () => {
   
  });

  it("Create an Event", async () => {
   
  });

  it("Create an Candidate", async () => {
   
  });

  it("Vote", async () => {
   
  });
});
