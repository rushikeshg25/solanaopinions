use crate::states::*;
use anchor_lang::prelude::*;

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,

    #[account(
        init,
        payer = signer,
        space = 8 + EventCounter::INIT_SPACE,
        seeds = [b"event_counter"],
        bump
    )]
    pub event_counter: Account<'info, EventCounter>,

    #[account(
        init,
        payer = signer,
        space = 8 + CandidateCounter::INIT_SPACE,
        seeds = [b"candidate_counter"],
        bump
    )]
    pub candidate_counter: Account<'info, CandidateCounter>,

    pub system_program: Program<'info, System>,
}
