use anchor_lang::prelude::*;

#[account]
#[derive(InitSpace)]
pub struct Candidate {
    pub id: u64,
    pub event_id: u64,
    pub votes: u64,
    pub has_registered: bool,
}
