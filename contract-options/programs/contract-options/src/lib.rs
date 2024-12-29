use anchor_lang::prelude::*;

declare_id!("J85ChLMWGQpRVu9VChUwFrfXnThNQRWho9ot8c4MFbFu");

#[program]
pub mod contract_options {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
