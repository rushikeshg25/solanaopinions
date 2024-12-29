use anchor_lang::prelude::*;

#[account]
#[derive(InitSpace)]
pub struct Event {
    pub id: u64,
    #[max_len(280)]
    pub title: String,
    pub start_date: u64,
    pub end_date: u64,
    pub candidates: u64,
}
