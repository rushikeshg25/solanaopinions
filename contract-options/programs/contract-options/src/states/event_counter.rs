use anchor_lang::prelude::*;

#[account]
#[derive(InitSpace)]
pub struct EventCounter {
    pub count: u64,
}
