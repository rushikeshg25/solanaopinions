use anchor_lang::prelude::*;

#[account]
#[derive(InitSpace)]
pub struct Vote {
    pub candidate_id: u64,
    pub event_id: u64,
    pub has_voted: bool,
    pub is_yes: bool,
    pub staked_sol: u64,
}
