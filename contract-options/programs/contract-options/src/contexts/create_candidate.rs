use crate::states::*;
use anchor_lang::prelude::*;

#[derive(Accounts)]
#[instruction(event_id: u64)]
pub struct CreateCandidate<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
    #[account(
        mut,
        seeds = [b"event", event_id.to_le_bytes().as_ref()],
        bump
    )]
    pub event: Account<'info, Event>,
    #[account(
        init,
        payer = signer,
        space = 8 + Candidate::INIT_SPACE,
        seeds = [b"candidate", event_id.to_le_bytes().as_ref(), (candidate_counter.count + 1).to_le_bytes().as_ref()],
        bump
    )]
    pub candidate: Account<'info, Candidate>,
    #[account(mut)]
    pub candidate_counter: Account<'info, CandidateCounter>,
    pub system_program: Program<'info, System>,
}
