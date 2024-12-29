use crate::states::*;
use anchor_lang::prelude::*;

#[derive(Accounts)]
pub struct CreateEvent<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
    #[account(
        init,
        payer = signer,
        space = 8 + Event::INIT_SPACE,
        seeds = [b"event", (event_counter.count + 1).to_le_bytes().as_ref()],
        bump
    )]
    pub event: Account<'info, Event>,

    #[account(
        mut,
        seeds = [b"event_counter"],
        bump
    )]
    pub event_counter: Account<'info, EventCounter>,
    pub system_program: Program<'info, System>,
}
