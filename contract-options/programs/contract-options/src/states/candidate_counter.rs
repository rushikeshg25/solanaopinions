use anchor_lang::prelude::*;

#[account]
#[derive(InitSpace)]
pub struct CandidateCounter {
    pub count: u64,
}
