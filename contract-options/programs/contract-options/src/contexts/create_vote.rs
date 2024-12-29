use crate::states::*;
use anchor_lang::prelude::*;

#[derive(Accounts)]
#[instruction(event_id: u64, candidate_id: u64)]
pub struct CreateVote<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
    #[account(
        init,
        payer = signer,
        space = 8 + Vote::INIT_SPACE,
        seeds = [b"vote", event_id.to_le_bytes().as_ref(), signer.key().as_ref()], 
        bump,
    )]
    pub vote: Account<'info, Vote>,
    #[account(
        mut,
        seeds = [b"candidate", event_id.to_le_bytes().as_ref(), candidate_id.to_le_bytes().as_ref()],
        bump
    )]
    pub candidate: Account<'info, Candidate>,
    #[account(
        mut,
        seeds = [b"event", event_id.to_le_bytes().as_ref()],
        bump
    )]
    pub event: Account<'info, Event>,

    pub system_program: Program<'info, System>,
}
